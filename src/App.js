import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import MyBotArmy from './MyBotArmy';
import './App.css';

function App() {
  // State to store fetched data from db.json
  const [bots, setBots] = useState([]);
  // State to store the bots added to MyBotArmy
  const [myBotArmy, setMyBotArmy] = useState([]);
  // State to manage the filter input
  const [filterInput, setFilterInput] = useState('');
  // State to manage sorting
  const [sortOption, setSortOption] = useState('');

  // Fetching data from db.json using the useEffect hook
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

  // Removing a bot from both collections
  const removeFromCollection = (bot) => {
    setBots(bots.filter(b => b.id !== bot.id));
    setMyBotArmy(myBotArmy.filter(b => b.id !== bot.id));
  };

  // Filter bots by name
  const filteredBots = bots.filter((bot) =>
    bot.name.toLowerCase().includes(filterInput.toLowerCase())
  );

  // Sort bots by class
  const sortedBots = [...filteredBots].sort((a, b) => {
    if (sortOption === 'asc') {
      return a.bot_class.localeCompare(b.bot_class);
    } else if (sortOption === 'desc') {
      return b.bot_class.localeCompare(a.bot_class);
    }
    return 0;
  });

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
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="main-content">
        <div className="bot-collection">
          <h2>Bot Collection</h2>
          <BotCollection
            bots={sortedBots}
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
