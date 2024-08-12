import React from 'react';

// Function to display individual bot cards
const BotCard = ({ bot, onAddToArmy, onRemoveFromCollection, isInArmy = false }) => {
  return (
    <div className="bot-card">
      {!isInArmy && (
        <button className="remove-button" onClick={() => onRemoveFromCollection(bot)}>
          X
        </button>
      )}
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: <strong>{bot.bot_class}</strong></p>
      <div className="bot-stats">
        <div className="stat">
          <label>Health:</label>
          <div className={`stat-bar ${getBarColor(bot.health)}`} style={{ width: `${bot.health}%` }}></div>
        </div>
        <div className="stat">
          <label>Damage:</label>
          <div className={`stat-bar ${getBarColor(bot.damage)}`} style={{ width: `${bot.damage}%` }}></div>
        </div>
        <div className="stat">
          <label>Armor:</label>
          <div className={`stat-bar ${getBarColor(bot.armor)}`} style={{ width: `${bot.armor}%` }}></div>
        </div>
      </div>
      <button 
        className="action-button" 
        onClick={() => isInArmy ? onRemoveFromCollection(bot) : onAddToArmy(bot)}
      >
        {isInArmy ? 'Release' : 'Add to Army'}
      </button>
    </div>
  );
};

// Helper function to determine the bar color based on the value
const getBarColor = (value) => {
  if (value >= 76) return 'green';
  if (value >= 51) return 'blue';
  if (value >= 26) return 'orange';
  return 'red';
};

export default BotCard;
