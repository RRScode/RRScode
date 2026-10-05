
//--------------------DICE ROLLER--------------------------------
const roll = () => {
    let min = 1;
    let max = 6;
    let num = Math.floor(Math.random() * max) + min;
    return num
};

const dice = document.getElementsByClassName('dieNum');

const btn = document.getElementById('rollButton');
btn.addEventListener('click', ()=>{
    const diceArray = Array.from(dice);
    diceArray.forEach((item)=>{
        item.textContent = roll();
    }); 
});
                
//-------------------------------------------------------------------------  

//-----------------QUOTES--------------------------

let quotes = [
        {
            "quote":"test",
            "author":"test"
        },
        {
            "quote":"Whether you think you can, or you think you can't – you're right.",
            "author":"Henry Ford"
        },
        {
            "quote":"Everything you've ever wanted is on the other side of fear.",
            "author":"George Addair"
        },
        {
            "quote":"The only person you are destined to become is the person you decide to be.",
            "author":"Ralph Waldo Emerson"
        },
        {
            "quote":"It always seems impossible until it's done.",
            "author":"Nelson Mandela,"
        },
        {
            "quote":"Do what you can with all you have, wherever you are.",
            "author":"Theodore Roosevelt"
        },
        {
            "quote":"Success consists of going from failure to failure without loss of enthusiasm.",
            "author": "Winston Churchill"
        },
        {
            "quote":"The only limits you have are the limits you believe.",
            "author":"Wayne Dyer"
        },
        {
            "quote":"Too many of us are not living our dreams because we are living our fears.",
            "author":"Les Brown"
        },
        {
            "quote":"Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
            "author":"Maya Angelou"
        },{
            "quote":"Happiness is not something readymade. It comes from your own actions.",
            "author":"Dalai Lama"
        }

    ]

console.log(quotes);



let quote = document.getElementById("quote");
let author = document.getElementById('author');



let quoteBtn = document.getElementById("quoteBtn");
quoteBtn.addEventListener("click",()=>{
    let quoteIndex = (min, max) => {
        min = 1
        max = quotes.length - 1;
        let num = Math.floor(Math.random() * max) + min;
        return num;
    };
    
    let quoteSelect = () => {
        let x = quoteIndex();
        let newQuote = quotes[x].quote;
        let newAuthor = quotes[x].author;
        console.log(x);
        console.log(newQuote);
        console.log(newAuthor);
        quote.textContent = newQuote;
        author.textContent = `- ${newAuthor}`;
    };
    quoteSelect();
}); 




