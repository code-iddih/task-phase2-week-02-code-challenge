import React from 'react';
import BotCard from './BotCard';

// Function to display the collection of bots
const BotCollection = ({ bots, onAddToArmy, onRemoveFromCollection }) => {
  return (
    <div className="bot-collection-grid">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onAddToArmy={onAddToArmy} 
          onRemoveFromCollection={onRemoveFromCollection} 
          isInArmy={false} // Indicate that this bot is in the collection
        />
      ))}
    </div>
  );
};

export default BotCollection;
