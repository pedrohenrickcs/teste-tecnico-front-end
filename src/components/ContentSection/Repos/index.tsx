import { RepoProps } from '@/types/Repos'

export const Repos = ({ data }: RepoProps) => {
  console.log('data', data)

  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-primary-color text-xl font-semibold mb-4">
        Repositórios
      </h2>
      <ul className="space-y-4">
        {data.map((repo) => (
          <a
            href={repo.html_url}
            key={repo.id}
            className="flex w-full text-lg font-semibold"
            target="_blank"
          >
            <li className="w-full border border-border-and-line text-gray-neutral p-4 rounded">
              {repo.name}
              <p className="text-sm font-normal text-placeholder">
                {repo.description}
              </p>
              <p className="pt-4 text-xs font-normal">
                <span>{repo.language}</span>
                <span className="pl-6">{repo.pushed_at}</span>
              </p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}
