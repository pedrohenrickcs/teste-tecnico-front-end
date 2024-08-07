import { api } from './api'

export const getRepos = async (username: string) => {
  try {
    const response = await api.get(`/${username}/repos`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error)
    throw error
  }
}
