//importações
const express = require('express')  //função retorna objeto
const server = express()
const { saveClasses, pageStudy, pageGiveClasses, pageSuccessInsert, pageLanding } = require('./page')

//configurações
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//servidor
server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)