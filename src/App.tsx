import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  // const test = () => {alert("success!");}
  //-------------------DICE ROLLER---------------
  const [dieNum1, setDieNum1] = useState(5);
  const [dieNum2, setDieNum2] = useState(3);
  

  const roll = () =>{
      let getNum1 = ( ) => { 
        let randomNum = Math.floor((Math.random()*6)+1);
        return randomNum;
      };
      let getNum2 = () => {
        let randomNum = Math.floor((Math.random()*6) + 1);
        return randomNum;
      }  
        dieNum1;
        dieNum2;
        setDieNum1(getNum1());  
        setDieNum2(getNum2());
      };



//________________QUOTE GENERATOR_________________________


const [quotes, setQuotes] = useState([
    {
        "quote":"The best way to break the ice, is to break the wind.",
        "author":"Rico",
        "liked":"false"
    },
    {
        "quote":"Whether you think you can, or you think you can't – you're right.",
        "author":"Henry Ford",
        "liked":"false"
    },
    {
        "quote":"Everything you've ever wanted is on the other side of fear.",
        "author":"George Addair",
        "liked":"false"
    },
    {
        "quote":"The only person you are destined to become is the person you decide to be.",
        "author":"Ralph Waldo Emerson",
        "liked":"false"
    },
    {
        "quote":"It always seems impossible until it's done.",
        "author":"Nelson Mandela,",
        "liked":"false"
    },
    {
        "quote":"Do what you can with all you have, wherever you are.",
        "author":"Theodore Roosevelt",
        "liked":"false"
    },
    {
        "quote":"Success consists of going from failure to failure without loss of enthusiasm.",
        "author": "Winston Churchill",
        "liked":"false"
    },
    {
        "quote":"The only limits you have are the limits you believe.",
        "author":"Wayne Dyer",
        "liked":"false"
    },
    {
        "quote":"Too many of us are not living our dreams because we are living our fears.",
        "author":"Les Brown",
        "liked":"false"
    },
    {
        "quote":"Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        "author":"Maya Angelou",
        "liked":"false"
    },
    {
        "quote":"Happiness is not something readymade. It comes from your own actions.",
        "author":"Dalai Lama",
        "liked":"false"
    }
  ]);
const [quoteIndex, setQuoteIndex] = useState(Math.floor((Math.random() * 10) + 1 ));
const [quote, setQuote] = useState(quotes[quoteIndex].quote);
const [author, setAuthor] = useState(quotes[quoteIndex].author);

const [like, setLike] = useState(false);
const [isLiked, setIsLiked] = useState("Like");

const quoteBtn = () => {
  let max = quotes.length - 1;
  setQuoteIndex(Math.floor((Math.random() * max) + 1 ));
  setQuote(quotes[quoteIndex].quote);
  setAuthor(quotes[quoteIndex].author);
  console.log(quoteIndex);
  console.log(quote);
  console.log(author);
};


// console.log(quoteIndex);
//   console.log(quote);
//   console.log(author);





//   const likeBtn = () => {
    
//     like;
//     isLiked;
//     if(like == true){
//       setLike(false);
//       setIsLiked("I like it!");
//     } else if(like == false){
//       setLike(true);
//       setIsLiked("Like");
//     }
//   };




  
  return (
    <>
      <section>
        <h2>Dice Roller</h2>
        <div id="tray">
          <div className="die">
              <p className="dieNum">{dieNum1}</p>
          </div>
            
          <div className="die">
            <p className="dieNum">{dieNum2}</p>
          </div>
        </div>
        
        <button id="rollButton" onClick={roll}> Roll </button> 
      </section>
    
      <section>
        <h2>Quote Generator</h2>
        <div id="caption">
          <h3 id="quote">{quote}</h3>
          <p id="author">{author}</p>
          <button id="likeBtn">{isLiked}</button>
          
        </div>
        
        <button id="quoteBtn" onClick={quoteBtn}>More wisdom please</button>
      </section>
      
      
      
      
      
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section> */}

      {/* <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
}

export default App
