export type ContentRepo = {
  id: number
  name: string
  html_url: string
  description: string
}

export type RepoProps = {
  data: ContentRepo[]
}
