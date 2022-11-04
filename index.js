const express = require("express")
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "Aladey",
    backend: true,
    age: 20,
    bio: "I am a software developer that is skilled in the development and testing of software using NodeJs. I am an inquisitive learner and I love solving problems."
  })
})

app.post("/", (req, res) => {
  let { operation_type, x, y } = req.body

  let OPERATION = Object.freeze({
	addition: "addition",
	subtraction: "subtraction",
	multiplication: "multiplication"
  })

  let result;
  try {
    if (operation_type == OPERATION.addition) {
      result = parseInt(x) + parseInt(y)
	  operation_type = OPERATION.addition
    }
    else if (operation_type == OPERATION.subtraction) {
      result = parseInt(x) - parseInt(y)
	  operation_type = OPERATION.subtraction
    }
    else if (operation_type == OPERATION.multiplication) {
      result = parseInt(x) * parseInt(y)
	  operation_type = OPERATION.multiplication
    }
    else {
      throw new Error("Please, use any of these operation types: addition, subtraction or multiplication.")
    }

    res.json({
      slackUsername: "Aladey",
      result,
	  operation_type,
    })
  } catch (e) {
    res.status(405).json({ error: e.message })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
