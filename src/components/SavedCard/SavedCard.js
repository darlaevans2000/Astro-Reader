export const SavedCard = ({ card, remove }) => {
  return (
    <section className="saved-card">
        Date: {card.current_date} <br />
        Description: {card.description} <br />
        Compatibility: {card.compatibility} <br />
        Lucky Number: {card.lucky_number} <br />
        Lucky Time: {card.lucky_time} <br />
        Color: {card.color} <br />
        Date Range: {card.date_range} <br />
        Mood: {card.mood} <br />
      <button
        className="delete"
        onClick={() => remove(card.lucky_number + card.lucky_time)}
      >
        Delete
      </button>
    </section>
  );
};

export default SavedCard;
