const express = require('express')
const app = express()
var port_number = server.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port_number, () => {
    console.log('Hello World app successfully launched on port %s', port)
})