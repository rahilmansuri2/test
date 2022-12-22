const express = require('express')
let request = require("request")
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.listen(port, () => console.log(`Listening on port ${port}!`))


app.post('/', myExternalAdapter = (req, res) => {
    const url = "https://daca9c8a-98fc-4122-8a03-cd343db70c0b.mock.pstmn.io"
    
    let options = {
      url: url,
      method: "get",
    //   headers: headerObj,
    //   qs: requestObj,
      json: true,
    }
  
    request(options, (error, response, body) => {
      if (error || response.statusCode >= 400) {
        let errorData = {
         // jobRunID: req.body.id,
          status: "errored",
          error: body,
        }
        res.status(response.statusCode).send(errorData)
      } else {
        let returnData = {
          //jobRunID: req.body.id,
          data: body,
        }
        res.status(response.statusCode).send(returnData)
      }
    })
  })
myExternalAdapter = (req, res) => {
  const url = "https://daca9c8a-98fc-4122-8a03-cd343db70c0b.mock.pstmn.io"
  
  let options = {
    url: url,
    headers: headerObj,
    qs: requestObj,
    json: true,
  }

  request(options, (error, response, body) => {
    if (error || response.statusCode >= 400) {
      let errorData = {
       // jobRunID: req.body.id,
        status: "errored",
        error: body,
      }
      res.status(response.statusCode).send(errorData)
    } else {
      let returnData = {
        //jobRunID: req.body.id,
        data: body,
      }
      res.status(response.statusCode).send(returnData)
    }
  })
}