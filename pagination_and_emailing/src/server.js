const app = require('./index');

const connect = require('./configs/db');


app.listen(1254, async () => {
    await connect();
    console.log('Listening on port 1254');
})
