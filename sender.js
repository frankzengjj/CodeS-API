const fs            = require('fs')
const argv          = require('minimist')(process.argv.slice(2));
const express       = require('express')
const _             = require('lodash')
const path          = require('path')

// arugment
const INPUT = argv.input

// const
const app = express()
app.use(express.static("."));
const PORT = 8080
//app.use(express.static(__dirname + '/public'))

const main = () => {
    const file_output = fs.readFileSync(INPUT, "utf-8")
    console.log(file_output)
    // app.get('/', (req, res) => {
    //     res.set('Content-Type', 'text/html')
    //     res.send(`
    //         <pre>
    //             <code>
    //                 ${file_output.trim()}
    //             </code>
    //         </pre>
    //     `)
    // })
    app.engine('html', require('ejs').renderFile);
    app.get('/main', (req, res) => {
        
        res.render(__dirname + "/main.html", {name:file_output});
    })
    app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))
}

if (require.main === module) {
    main()
}