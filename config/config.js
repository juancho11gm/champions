const URLS = {
    'development': 'http://localhost:3000/api/people',
    'production': 'https://star-wars-j1t99l606-juancho-11gm.vercel.app/api/people'
}

const currentEnv = URLS[process.env.NODE_ENV || 'development'];
export { currentEnv };