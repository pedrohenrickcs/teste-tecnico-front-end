import { RepoProps } from '@/types/Repos'

export const Repositorios = ({ data }: RepoProps) => {
  return (
    <ul className="space-y-4">
      {data.map((repo) => (
        <li key={repo.id} className="border p-4 rounded">
          <a href={repo.html_url} className="text-blue-500">
            {repo.name}
          </a>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  )
}
