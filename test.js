const http = require("http");

const siteToTest = 'http://reallysimpledockerserver:8080/index.html';
// const siteToTest = 'http://localhost:8085/index.html';

(async () => {
    
    let res = await new Promise((resolve, reject) => {
        http.get(siteToTest, (response) => {
            resolve(response);
        });        
    });
    
    if(res.statusCode === 200){
        console.log('Success');
    }else {
        console.log('So much fail');
    }
})()