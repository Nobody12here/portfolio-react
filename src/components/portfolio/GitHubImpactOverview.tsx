import { useEffect, useMemo, useState } from "react";
import { BarChart3, Github, Star, Users } from "lucide-react";

type GitHubImpactOverviewProps = {
  username: string;
};

type GitHubUserResponse = {
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepoResponse = {
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

type GitHubStats = {
  repos: number;
  followers: number;
  following: number;
  stars: number;
  topLanguages: Array<{ name: string; count: number; percentage: number }>;
};

function formatCompact(value: number) {
  return Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

export function GitHubImpactOverview({ username }: GitHubImpactOverviewProps) {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHubStats() {
      setIsLoading(true);
      setError(null);

      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("Unable to fetch GitHub stats right now.");
        }

        const user = (await userRes.json()) as GitHubUserResponse;
        const repos = (await reposRes.json()) as GitHubRepoResponse[];

        const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        const languageCounts = new Map<string, number>();
        for (const repo of repos) {
          if (repo.fork || !repo.language) {
            continue;
          }
          languageCounts.set(repo.language, (languageCounts.get(repo.language) ?? 0) + 1);
        }

        const languageEntries = Array.from(languageCounts.entries())
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        const totalLanguages = languageEntries.reduce((acc, item) => acc + item.count, 0) || 1;

        setStats({
          repos: user.public_repos,
          followers: user.followers,
          following: user.following,
          stars,
          topLanguages: languageEntries.map((entry) => ({
            ...entry,
            percentage: Math.round((entry.count / totalLanguages) * 100),
          })),
        });
      } catch {
        if (!controller.signal.aborted) {
          setError("GitHub stats unavailable");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadGitHubStats();

    return () => controller.abort();
  }, [username]);

  const statCards = useMemo(() => {
    if (!stats) {
      return [
        { label: "Public Repos", value: "--" },
        { label: "Followers", value: "--" },
        { label: "Following", value: "--" },
        { label: "Total Stars", value: "--" },
      ];
    }

    return [
      { label: "Public Repos", value: formatCompact(stats.repos) },
      { label: "Followers", value: formatCompact(stats.followers) },
      { label: "Following", value: formatCompact(stats.following) },
      { label: "Total Stars", value: formatCompact(stats.stars) },
    ];
  }, [stats]);

  return (
    <div className="hover-lift relative overflow-hidden border border-border/70 bg-[#0e1627]/80 p-4">
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-(--success)/20 blur-2xl" />
      <div className="relative space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">Impact Overview</p>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-(--success) text-[0.62rem] uppercase tracking-[0.12em] hover:text-foreground"
          >
            <Github className="size-3.5" />
            @{username}
          </a>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((card, index) => (
            <div
              key={card.label}
              className="hover-lift animate-reveal border border-border/60 bg-secondary/40 p-2.5"
              style={{ animationDelay: `${80 + index * 70}ms` }}
            >
              <p className="text-[0.62rem] uppercase tracking-widest text-muted-foreground">{card.label}</p>
              <p className="mt-1 font-heading text-lg text-foreground">{isLoading ? "..." : card.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <div className="border border-border/60 bg-secondary/35 p-3">
            <div className="mb-2 flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
              <BarChart3 className="size-3.5 text-primary" />
              Top Languages
            </div>
            <div className="space-y-2">
              {(stats?.topLanguages.length ? stats.topLanguages : [{ name: "No Data", count: 0, percentage: 0 }]).map((lang) => (
                <div key={lang.name}>
                  <div className="mb-1 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.08em] text-muted-foreground">
                    <span>{lang.name}</span>
                    <span className="text-foreground/90">{lang.percentage}%</span>
                  </div>
                  <div className="h-1.5 bg-background/70">
                    <div
                      className="h-full bg-linear-to-r from-primary to-(--success)"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-1 md:gap-1">
            <div className="inline-flex items-center gap-1 text-[0.62rem] uppercase tracking-widest text-muted-foreground">
              <Github className="size-3.5 text-primary" />
              Live
            </div>
            <div className="inline-flex items-center gap-1 text-[0.62rem] uppercase tracking-widest text-muted-foreground">
              <Users className="size-3.5 text-(--success)" />
              Public Data
            </div>
            <div className="inline-flex items-center gap-1 text-[0.62rem] uppercase tracking-widest text-muted-foreground">
              <Star className="size-3.5 text-(--highlight)" />
              Auto Refresh
            </div>
          </div>
        </div>

        {error ? <p className="text-(--highlight) text-xs">{error}</p> : null}
      </div>
    </div>
  );
}
