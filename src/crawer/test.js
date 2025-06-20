async function test() {
    fetch('http://localhost:3000/cf-clearance-scraper', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: 'https://www.com.tw/cross',
            mode: "source"
            // proxy:{
            //     host: '127.0.0.1',
            //     port: 3000,
            //     username: 'username',
            //     password: 'password'
            // }
        })
    })
        .then(res => res.json())
        .then(console.log)
        .catch(console.log);
}
test()