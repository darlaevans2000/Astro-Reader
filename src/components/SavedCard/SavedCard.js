export const SavedCard = ({ card, remove }) => {
  return (
    <section className="saved-card">
      <p>{card.description}</p>
      <p>{card.current_date}</p>
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
