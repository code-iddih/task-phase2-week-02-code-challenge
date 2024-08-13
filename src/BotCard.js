import React, { useState } from 'react';
import './BotCard.css';

// Function to display each bot card
const BotCard = ({ bot, onAddToArmy, onRemoveFromCollection, isInArmy }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Toggling the visibility of bot details
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      {/* Button to toggle details view */}
      <button onClick={handleToggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div className="bot-details">
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <p>Created At: {bot.created_at}</p>
          <p>Updated At: {bot.updated_at}</p>
        </div>
      )}
      {isInArmy ? (
        <button onClick={() => onRemoveFromCollection(bot)}>Remove from Army</button>
      ) : (
        <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
      )}
    </div>
  );
};

export default BotCard;
