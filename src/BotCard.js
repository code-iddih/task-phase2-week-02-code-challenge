import React, { useState } from 'react';
import './BotCard.css';

// Function to display each bot card
const BotCard = ({ bot, onAddToArmy, onRemoveFromCollection, onRemoveFromArmy, isInArmy }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Toggling the visibility of bot details
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Handle removal from collection or army
  const handleRemove = () => {
    if (isInArmy) {
      onRemoveFromArmy(bot); // Remove from army if present in army
    } else {
      onRemoveFromCollection(bot); // Remove from collection if present in collection
    }
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h3>{bot.name}</h3>
      <p>Class: <strong>{bot.bot_class}</strong></p>

      {/* Button to toggle details view */}
      <button onClick={handleToggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {/* Bot details section */}
      {showDetails && (
        <div className="bot-details">
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <p>Created At: {bot.created_at}</p>
          <p>Updated At: {bot.updated_at}</p>
        </div>
      )}

      {/* Conditional rendering for add or remove buttons */}
      {isInArmy ? (
        <button className="remove-from-army-button" onClick={() => onRemoveFromArmy(bot)}>Release</button>
      ) : (
        <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
      )}

      {/* Red "X" button to remove bot */}
      {!isInArmy && (
        <button className="remove-button" onClick={handleRemove}>
          X
        </button>
      )}
    </div>
  );
};

export default BotCard;
