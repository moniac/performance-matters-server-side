const ejs = require('ejs')
const express = require('express')
const fetch = require('node-fetch')
const path = require('path')
const app = express()
const port = 3000
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

app.use(express.static(path.join(__dirname, '/public/')))

app.get('/', (req, res) => {
	res.render('index', {
		data
	})
})

app.get('/building/:id', (req, res) => {
	let building = data.filter(x => x.id === req.params.id)
	res.render('detail', {
		building: building[0]
	})
})

app.listen(port, () => {
	console.log(`Server is running at port ${port}`)
})