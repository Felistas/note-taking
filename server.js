const express = require('express');

const app = express();

app.get('/',(request, response, nextHandler) => {
    response.status(200).send("Hi there")
})

app.get('/one', (request, response, nextHandler) => {
    response.type('text/plain')
    response.write('Hello ')
    nextHandler()
})
app.get('/one', (request, response, nextHandler) => {
   response.status(200).end('World!')
})

app.get('/two',
(request, response, nextHandler) => {
   response.type('text/plain')
   response.write('Hello ')
   nextHandler()
},
(request, response, nextHandler) => {
   response.status(200).end('Moon!')
}
)

app.listen(1337, ()=>console.log("Server running"));