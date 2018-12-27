const express = require('express')
const stripe = require('stripe')('sk_test_41yXmETy0l1MKY6IfdZm73bZ')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.render('index')
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server")
})