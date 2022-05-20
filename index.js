const axios = require('axios')

const searchRepo = async ({ 
  username,
  page,
  per_page
} = {}) => {
  try {
    const repo = await axios.get(
      `https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`
    )
    
    return repo?.data?.map((value) => {
      return {
        name: value.name,
        link: value.html_url, 
        description: value.description,
        stars: value.stargazers_count, 
        watch: value.watchers_count,
        language: value.language
      }
    })
    .sort((first, second) => first.start - second.start)

  } catch(error) {
    return []
  }
};

module.exports = { searchRepo }