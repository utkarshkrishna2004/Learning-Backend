import express from "express";

const app = express();

// app.get("/", (req, res) => {
//    res.send("Server is ready.");
// });

// getting a list of 5 jokes

app.get("/api/jokes", (req, res) => {
   const jokes = [
      {
         id: 1,
         title: "Programming Elevator",
         content:
            "Why do programmers prefer taking the stairs? Because elevators have too many bugs!",
      },
      {
         id: 2,
         title: "Code and Coffee",
         content:
            "I like my coffee like I like my code: dark and full of errors.",
      },
      {
         id: 3,
         title: "Software in Restaurant",
         content:
            "A SQL query walks into a restaurant, walks up to two tables and asks, 'Can I join you?'",
      },
      {
         id: 4,
         title: "Version Control",
         content:
            "Why do Git and Bitbucket never get along? Because they both want to be in control!",
      },
      {
         id: 5,
         title: "Code Poetry",
         content:
            "I wrote a haiku in code, but it's not compiling. Guess my code is not poetry in motion.",
      },
   ];

   res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});
