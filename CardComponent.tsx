
import { useState } from 'react';
import './Main.css';

interface CardProp  {
    type: string
    setup: string
    punchline: string
}

export const CardComponent = ({type,setup, punchline}: CardProp) => {
    return <h1 className = "card1">A {type} joke!
        <p> {setup}</p>
        <p>{punchline}</p>
        </h1>    
}


const myList = [{type: "pun", setup: "What did the violin say when it finally played the music correctly?.", punchline: "Viola." }, 
{type: "programming", setup: "A SQL query walks into a bar, walks up to two tables and asks...", punchline: "'Can I join you?'" },
{type: "knock-knock", setup: "Knock knock. Who's there? A broken pencil. A broken pencil who?", punchline: "Nevermind. It's pointless."}, 
{type: "pun", setup: "What do you call four bull-fighters standing in quicksand?", punchline:"Quatro sinko."},
{type: "pun", setup: "NASA had a supply of rib eye on the last flight to the international space station to see how meat cooked in space. They called it their most important mission.", punchline: "Because the steaks were never higher"}, {type: "pun", setup: "Which one is more brave, a stone or a match?", punchline: "A stone, because it's a little boulder."}]

export const CardList = () => {
    const [cards] = useState(myList)
    return<>
    {
      cards.map(({type, setup, punchline}) => {
        return <CardComponent type={type} setup= {setup} punchline={punchline}/>
      })
    }
    </>
    
}



 

  
  
