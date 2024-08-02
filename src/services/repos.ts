import axios from 'axios'

export const getRepos = async (username: string) => {
  const apiUrl = `https://api.github.com/users/${username}/repos`

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `token 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`,
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error)
    throw error
  }
}
