import { RepoProps } from '@/types/Repos'

export const Repos = ({ data }: RepoProps) => {
  return (
    <div className="w-1/2">
      <h2 className="text-primary-color text-xl font-semibold mb-4">
        Repositórios
      </h2>
      <ul className="space-y-4">
        {data.map((repo) => (
          <li
            key={repo.id}
            className="border border-border-and-line text-gray-neutral p-4 rounded"
          >
            <a href={repo.html_url} className=" text-lg font-semibold">
              {repo.name}
            </a>
            <p className="text-sm font-normal">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
