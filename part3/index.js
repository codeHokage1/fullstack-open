// ########## WITHOUT EXPRESS ##############
// #########################################

// const http = require('http');

// let notes = [
//     {
//       id: 1,
//       content: "HTML is easy",
//       date: "2022-05-30T17:30:31.098Z",
//       important: true
//     },
//     {
//       id: 2,
//       content: "Browser can execute only Javascript",
//       date: "2022-05-30T18:39:34.091Z",
//       important: false
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       date: "2022-05-30T19:20:14.298Z",
//       important: true
//     }
// ]


// const app = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(notes));
// })

// const PORT = 3000;
// app.listen(PORT);
// console.log('Server running on port ', PORT);



// #########################################
// #########################################
// #########################################




// ########## WITH EXPRESS ##############
// #########################################
const express = require('express');
const app = express();

app.use(express.json())

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
]

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Notes Server</h1>")
})
app.get("/notes", (req, res) => {
    res.json(notes);
})

app.get("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);
    if(note){
        res.json(note);
    } else {
        res.status(404).end();
    }
})

app.post("/notes", (req, res) => {
    const maxId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) : 0;
    const note = req.body;

    if(!note.content){
        return res.status(400).json({
            error: "content is missing in request body"
        })
    }

    const newNote = {
        id: maxId + 1,
        content: note.content,
        date: new Date(),
        important: note.important || false,
    }

    notes = notes.concat(newNote);
    res.json({
        message: "Note created",
        note: newNote
    })
})

app.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);
    res.status(204).end();
})

const PORT = 3070;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})