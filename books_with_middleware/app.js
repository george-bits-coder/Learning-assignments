const express = require("express");

const app = express();



const books = require("./sampledata.json");

app.use(express.json());

app.get("/",(req,res)=>{
    res.send(books);
});

app.post("/",(req,res)=>{
    books.push(req.body)
    res.send(books);
});

app.get("/:author",(req,res)=>{
    let new_Book = books.filter((book)=>{
        if(req.params.author === book.author)
        {
            return book;
        }
    })
    res.send(new_Book);
});

app.patch("/:book_name",(req,res)=>{
    const newBooks = books.map((book)=>{
        if(req.params.book_name === book.book_name)
        {
            if(req?.body?.author) book.author = req.body.author;
            if(req?.body?.book_name) book.book_name = req.body.book_name;
            if(req?.body?.pages) book.pages = req.body.pages;
            if(req?.body?.published_year) book.published_year = req.body.published_year;
        }
        return book;
    });
    res.send(newBooks);
});

app.delete("/:book_name",(req,res)=>{
    const newbooks = books.filter((book)=>{
        if(req.params.book_name !== book.book_name)
        {
            return book;
        }
    })
    res.send(newbooks);
})

app.listen("3000",()=>{
    console.log("Listening on 3000");
})
