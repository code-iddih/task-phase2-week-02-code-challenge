import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import MyBotArmy from './MyBotArmy';
import './App.css';

function App() {
  // Fetching data from db.json then storing
  const [bots, setBots] = useState([]);
  // State to store the bots added to MyBotArmy
  const [myBotArmy, setMyBotArmy] = useState([]);
  // State to manage the filter input
  const [filterInput, setFilterInput] = useState('');
  // State to manage sorting
  const [sortOption, setSortOption] = useState('');

  // Fetchin data from db.json using the useEffect hook
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  // Adding a bot to myArmyCollection
  const addToArmy = (bot) => {
    if (!myBotArmy.find(b => b.id === bot.id)) {
      setMyBotArmy([...myBotArmy, bot]);
    }
  };

  // Removing the bot from MyArmyCollection
  const removeFromArmy = (bot) => {
    setMyBotArmy(myBotArmy.filter(b => b.id !== bot.id));
  };

  // Removes a bot from both collections
  const removeFromCollection = (bot) => {
    setBots(bots.filter(b => b.id !== bot.id));
    setMyBotArmy(myBotArmy.filter(b => b.id !== bot.id));
  };

  // Filter bots by name
  const filteredBots = bots.filter((bot) =>
    bot.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  // Sort bots by selected class
  const sortedBots = sortOption
    ? filteredBots.filter(bot => bot.bot_class === sortOption)
    : filteredBots;

  // Return Structure
  return (
    <div className="app">
      <header className="header">
        <h1>Bot Battlr</h1>
      </header>

      <div className="filter-sort-section">
        <input
          type="text"
          placeholder="Search Bots by Name"
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
          className="filter-input"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-select"
        >
          <option value="">Sort by Class</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </div>

      <div className="main-content">
        <div className="bot-collection">
          <h2>Bot Collection</h2>
          <BotCollection
            bots={sortedBots} // pasess the bots to BottCollection
            onAddToArmy={addToArmy} // adding bot to my army
            onRemoveFromCollection={removeFromCollection} // It will help remove the bot from MyArmy
          />
        </div>
        <div className="my-bot-army">
          <h2>My Bot Army</h2>
          <MyBotArmy
            bots={myBotArmy} // the prop will Help to pass bots to MyyBotsArmy 
            onRemoveFromArmy={removeFromArmy} // It will remove a bot from myArmy
          />
        </div>
      </div>
    </div>
  );
}

export default App;
