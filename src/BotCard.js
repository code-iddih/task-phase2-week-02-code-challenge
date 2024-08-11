import React from 'react';
import './BotCard.css';

// Displaying individual Bot Deatils
const BotCard = ({ bot, onAddToArmy, onRemoveFromCollection }) => {
  return (
    // Dettails of the Card
    <div className="bot-card">
      <button className="remove-button" onClick={() => onRemoveFromCollection(bot)}>X</button>
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <div className="bot-stats">
        <div>
          <strong>Health:</strong>
          <div className="bar" style={{ width: `${bot.health}%`, backgroundColor: getColorForStat(bot.health) }}></div>
          <span>{bot.health}</span>
        </div>
        <div>
          <strong>Damage:</strong>
          <div className="bar" style={{ width: `${bot.damage}%`, backgroundColor: getColorForStat(bot.damage) }}></div>
          <span>{bot.damage}</span>
        </div>
        <div>
          <strong>Armor:</strong>
          <div className="bar" style={{ width: `${bot.armor}%`, backgroundColor: getColorForStat(bot.armor) }}></div>
          <span>{bot.armor}</span>
        </div>
      </div>
      <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
    </div>
  );
};

// Dtermining Colour of the Bar Based on its valeu
const getColorForStat = (value) => {
  if (value <= 25) return "red";
  if (value <= 50) return "orange";
  if (value <= 75) return "blue";
  return "green";
};

export default BotCard;
