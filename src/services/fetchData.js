const axios = require('axios');

const API_URLS = {
    users: 'https://jsonplaceholder.typicode.com/users',
    posts: 'https://jsonplaceholder.typicode.com/posts',
    comments: 'https://jsonplaceholder.typicode.com/comments'
};

const fetchData = async () => {
    try {
        const responses = await Promise.all([
            axios.get(API_URLS.users),
            axios.get(API_URLS.posts),
            axios.get(API_URLS.comments)
        ]);
        
        return {
            users: responses[0].data,
            posts: responses[1].data,
            comments: responses[2].data
        };
    } catch (error) {
        throw new Error(`Error fetching API data: ${error.message}`);
    }
};

module.exports = fetchData;
