import { useState } from 'react';
import './randomquote.css';
import rewind from './reloading.png';
import twitter from './twitter.png';
export default function Randomquote()
{
    let quotes=[];
    async function loadquotes()
    {
        const getdata= await fetch("https://type.fit/api/quotes");
        quotes=await getdata.json();
    }
    const[quote,setquote]=useState({
        text:"Your birth may be a instance but your death should be a History",
        author:"Abdul Kalam",
    });
  
    function getquote()
    {
        const getdata= quotes[Math.floor(Math.random()*quotes.length)];
        setquote(getdata);
    }
    function settwittermessage()
    {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text}-${quote.author}`);
    }
    loadquotes();
    return(
        <div className="quotecontainer">
            <div className="heading">
                <h1>QUOTE GENERATOR</h1>
            </div>
               <div className="quote">
                {quote.text}
                </div>     
                <hr />
                <div className="quoteauthor">
                    {quote.author.split(",")[0]}
                </div>
                <div className="symbols">
                    <img onClick={()=>getquote()} src={rewind} alt="" />
                    <img onClick={()=>settwittermessage()} src={twitter} alt="" />
                </div>
        </div>
    )
}