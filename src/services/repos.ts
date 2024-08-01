import axios from 'axios'

export const getRepos = async (username: string) => {
  const apiUrl = `https://api.github.com/users/${username}/repos`

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `token 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`,
      },
      params: { username },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error)
    throw error
  }
}
