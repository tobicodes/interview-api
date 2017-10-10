const express = require('express');
const router = express.Router({ mergeParams: true });

router.post('/', async(req, res) => {
  if(req.query['startTime'] === undefined || req.query['endTime'] === undefined){
    res.status(400).send({Error: 'Invalid query. Please resend with startTime and endTime params'})
  }
  //console.log(req.query)
 
  res.send("Hey there")
})

module.exports = router;
