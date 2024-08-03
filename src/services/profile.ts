import { api } from './api'

export const getProfile = async (username: string) => {
  try {
    const response = await api.get(`/${username}`, {
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
