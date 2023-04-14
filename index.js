const express = require('express')
// import express from express
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('SALVE MEU FI!')
})

app.listen(port, () => {
  console.log(`Aberto na porta do seu cu kkkkkkkkk ${port}`)
})