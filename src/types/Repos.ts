import { ContentProfile } from './Profile'

export type ContentRepo = {
  id: number
  name: string
  html_url: string
  description: string
  language: string
  pushed_at: string
}

export type RepoProps = {
  repos: ContentRepo[]
  profile: ContentProfile[]
}
