const processData = (users, posts, comments) => {
    const dataMap = new Map();

    users.forEach(user => {
        dataMap.set(user.id, { name: user.name, title: '', body: '' });
    });

    posts.forEach(post => {
        if (!dataMap.has(post.id)) {
            dataMap.set(post.id, { name: '', title: post.title, body: '' });
        } else {
            dataMap.get(post.id).title = post.title;
        }
    });

    comments.forEach(comment => {
        if (!dataMap.has(comment.id)) {
            dataMap.set(comment.id, { name: '', title: '', body: comment.body });
        } else {
            dataMap.get(comment.id).body = comment.body;
        }
    });

    return Array.from(dataMap.values());
};

module.exports = processData;
