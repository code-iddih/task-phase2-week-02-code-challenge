import React from 'react';
import BotCard from './BotCard';

// Function to display MyBotArmy
const MyBotArmy = ({ bots, onRemoveFromArmy }) => {
  return (
    <div className="my-bot-army-grid">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onAddToArmy={() => {}} // Empty function as we do not need to add the bot again
          onRemoveFromCollection={onRemoveFromArmy} 
          isInArmy={true} // Checks if the bot is already included
        />
      ))}
    </div>
  );
};

export default MyBotArmy;
