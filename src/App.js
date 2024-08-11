import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import MyBotArmy from './MyBotArmy';
import './App.css';

function App() {
  // the state which will store fetched data from db.json
  const [bots, setBots] = useState([]);
  //The state which will store the bots added to MyBotArmy
  const [myBotArmy, setMyBotArmy] = useState([]);

  //fetching data from db.json using the useEffect hook
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  //Adding a bot to myArmyCollection
  const addToArmy = (bot) => {
    if (!myBotArmy.find(b => b.id === bot.id)) {
      setMyBotArmy([...myBotArmy, bot]);
    }
  };

  //Rmoving the array from MyArmyCollecton to BotCollection
  const removeFromArmy = (bot) => {
    setMyBotArmy(myBotArmy.filter(b => b.id !== bot.id));
    setBots([...bots, bot]);
  };
  
  //Removing a bot from BotCollection
  const removeFromCollection = (bot) => {
    setBots(bots.filter(b => b.id !== bot.id));
    setMyBotArmy(myBotArmy.filter(b => b.id !== bot.id));
  };
  
  // Structure
  return (
    <div className="app">
      <header className="header">
        <h1>Bot Battlr</h1>
      </header>
      <div className="main-content">
        <div className="bot-collection">
          <h2>Bot Collection</h2>
          <BotCollection 
            bots={bots} 
            onAddToArmy={addToArmy} 
            onRemoveFromCollection={removeFromCollection} 
          />
        </div>
        <div className="my-bot-army">
          <h2>My Bot Army</h2>
          <MyBotArmy 
            bots={myBotArmy} 
            onRemoveFromArmy={removeFromArmy} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
