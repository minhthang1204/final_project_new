export const queriesKeys = {
    'logged': 'logged/get',
    'getRepos': 'repos/all/get',
    'getRepoParticipation': 'repos/one/participation/get',
    'getUser': 'users/one/get',
    'getFollowers': 'followers/all/get',
    'getFollows': 'follows/all/get',
    'getFirstCommit': 'users/commits/get/first',
    'getLastCommit': 'users/commits/get/last',
    'getMonthCommits': 'users/commits/get/month',
    'getLatestRepos': 'users/repos/get/latest',
    'getStarredRepos': `users/repos/get/starred`,
    'getFamousUsers': `users/get/famous`,
    'getFamousRepos': `repos/get/famous`,
    'getAllUsers': `users/get/all`,
    'getLanguageRepos': `language/repos/get/all`,
    'getOneRepo': `repos/one/get`,
    'getRepoDailyCommits': `repos/one/commits/daily/get`,

    'getTopMovies': `movies/top/get`,
    'getLatestMovies': `movies/latest/get`,
    'getRecommendedMovies': `movies/recommended/get`,

    'getTopGenres': `genres/top/get`,
    'getSummary': 'summary/get',

    'getTopPeople': `people/top/get`,
    'getTopKeywords': `keywords/top/get`,

    'getGenreTopMovies': `genres/movies/top/get`,

    getTopEntities: (entityName: string) => `${entityName}/top/get`,
    getLatestConnectedMovies: (name: string) => `${name}/movies/latest/get`,

    getTopConnectedMovies: (name: string) => `${name}/movies/top/get`,
    getConnectedMoviesForVisualization: (name: string) => `${name}/movies/get/visualization`,
    getConnectedMovies: (name: string) => `${name}/movies/get`,

    getEntities: (name: string) => `${name}/all/get`,
    getOneEntity: (entityName: string) => `${entityName}/one/get`,

    'getSearch': `entities/search`, 
    'getUserExistingRatingsBrief': `user/ratings/existing/brief/get`,
    'getUserPredictedRatingsBrief': `user/ratings/predicted/brief/get`,

}