const books = [{
    ttle:('Sweet Potato'),
    description:('How to fry Potato'),
    numberOfPages: 43,
    author: ('Sarah'),
    reading: true,
    
},

{

    title:('Family'),
    description:('How to have a successful family'),
    numberOfPages: 40,
    author:('Doris'),
    reading: false,
},




    {
    
        title:('JavaScript'),
        description:('How to learn JavaScript'),
        numberOfPages: 35,
        author:('Maxwell'),
        reading: true,
    },
    



    {
    
        title:('Python'),
        description:('How to learn Python'),
        numberOfPages: 38,
        author:('Dale'),
        reading: false,
    },
    
]

for (let i=0; i<books.length; i++){
    let book = books[i] //to assign each entering of the array into a variable
    if (book.reading===true){       
        console.log(book)
    }
    


}