const book = {
    ttle:('Sweet Potato'),
    description:('How to fry Potato'),
    numberOfPages: 43,
    author: ('Sarah'),
    reading:('true'),
    toggleReadingStatus:function(){
        if(book.reading===false){
            book.reading=true
        }else{
            book.reading=false
        }
    }
}

book.toggleReadingStatus()

console.log(book.reading)