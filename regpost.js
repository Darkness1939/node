let registration = {
    name: '',
    email: '',
    password: '',
    avatar: ''
};

let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});