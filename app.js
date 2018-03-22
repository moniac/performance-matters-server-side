const ejs = require('ejs')
const express = require('express')
const fetch = require('node-fetch')
const path = require('path')
const app = express()
let data

function getData() {

	fetch('http://verdwenengebouwen.nl/api/search?place=amsterdam')
		.then( res => res.json() )
		.then( res => {
			data = res.results.sort((a, b) => a.name.localeCompare(b.name))
		} )
		.catch( err => console.log( err ) )

}

getData()

app.set('view engine', 'ejs')

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))

const port = 3000

app.get('/', (req, res) => {
	console.log(data)
	res.render('index', {
		data
	})
})

app.listen(port, () => {
	console.log(`Server is running at port ${port}`)
})

// const apiCall = async () => {
// 	const response = await fetch('http://verdwenengebouwen.nl/gebouw/json/3569')
// 	const data = await response.json()
// 	if (data) {console.log('woo')}
// 	return data
// }