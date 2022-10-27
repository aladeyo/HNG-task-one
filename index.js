const express = require("express")
const port = process.env.PORT || 3000

const app = express()

app.get("/", (req, res) => 
  {
    res.status(200).json({
      slackUsername : "Aladey",
      backend: true,
      age: 20,
      bio: "I am a software developer that is skilled in the development and testing of software using NodeJs. I am an inquisitive learner and I love solving problems."
    })
  })


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
