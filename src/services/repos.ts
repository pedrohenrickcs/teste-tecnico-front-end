import axios from 'axios'

export const getRepos = async (username: string) => {
  const apiUrl = `https://api.github.com/users/${username}/repos`

  try {
    const response = await axios.get(apiUrl, {
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
