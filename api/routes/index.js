var express = require('express');
var router = express.Router();
const storage = require('node-persist');

router.post('/persistData', async function (req, res, next){
  await storage.init( {dir: '/'} )
  await storage.setItem("rootStore", req.body )
  console.log(await storage.getItem('rootStore'))
  res.send('Updated Succesful')
})

router.get('/rootStoreData', async function (req, res, next){
  await storage.init( {dir: '/'} )
  const data = await storage.getItem('rootStore') 
  res.send(data)
})

router.get('/', function (req, res, next) {
  res.send('ok!');
});

module.exports = router;
