const { default: axios } = require("axios");

axios({
    method: 'post',
    url: '/login',
    data: {
        firstName: 'Finn',
        lastName: 'Williams'
    }
});

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
.then(function (response) {
    console.log(response);
})
.catch(function (error){
    console.log(error);
});
