const ejs = require('ejs')
const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')

app.use('/static', express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, '../public'))
app.use(express.static('public'))

const port = 3000

app.get('/', (req, res) => {
	res.render('index')
})

app.listen(port, () => {
	console.log(`Server is running at port ${port}`)
})