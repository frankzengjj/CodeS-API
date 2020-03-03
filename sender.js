const fs            = require('fs')
const argv          = require('minimist')(process.argv.slice(2));
const express       = require('express')
const _             = require('lodash')
const path          = require('path')
const fileUpload    = require('express-fileupload')

// const
const app = express()
app.use(express.static("."));
const PORT = 8080

const main = () => {
    app.engine('html', require('ejs').renderFile);
    app.use(fileUpload())
    // upload file
    app.get('/', (req, res) => {
        res.sendFile(__dirname+'/upload.html')
    })

    app.post('/main', (req, res) => {
        if (req.files) {
            console.log(req.files.filename.data.toString('utf-8'))
            const file_output = req.files.filename.data.toString('utf-8')
            res.render(__dirname + "/main.html", {name:file_output});
        }
    })
    app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))
}

if (require.main === module) {
    main()
}