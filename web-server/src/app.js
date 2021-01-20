const path = require('path')
const express = require('express')

//Loading partials
const hbs = require('hbs')

//Prints path of directory and file running code
// console.log(__dirname)
// console.log(__filename)

//Manipulates path of directory and file to public to serve html page
// We can move forward or backward by passing it to second arg
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

//generates express application
const app = express()

//Define paths for express config
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const publicDirectoryPath = path.join(__dirname, '../public')

//Set handlebars and views location
app.set('view engine', 'hbs')

//Tells express where to find views with custom path
app.set('views', viewsPath)

//customize server to serve static page
app.use(express.static(publicDirectoryPath))

// req is request
// res is response

//default route for localhost
//We wouldn't need these route handlers as they serve up static pages
// app.get('', (req, res) => {

//     // res.send('Hello Express')
//     //Render HTML by putting string directly or the file
//     res.send('<h1>Hello Express</h1>')
// })

// // app.com
// // app.com/help route
// app.get('/help', (req, res) => {

//     // res.send('Help page')
//     //Pass an Object as response
//     res.send([{
//         name: "Sachin",
//         Age: 22
//     },{
//         name: "Justin",
//         Age: 22
//     }])
// })
// // app.com/about
// app.get('/about', (req, res) => {

//     res.send('About page')

// })

//This route is dynamic and needs to give a response
//index
app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sachin'
    })
})

//about
app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About me',
        name: 'Sachin'
    })
})

//help
app.get('/help', (req,res) => {
    res.render('help', {
        
        helptext: 'This is some helpful text'
    })
})
// app.com/weather

app.get('/weather', (req, res) => {

    res.send({
        forecast: "It is snowing",
        location: "Philadelphia"
    })

})
//Starts server
//callback function after server runs
app.listen(3000, () => {

    //only visible to us
    console.log('Server is up on port 3000')
    //Keeps running as it's a server
})