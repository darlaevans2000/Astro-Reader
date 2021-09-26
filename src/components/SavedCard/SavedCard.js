export const SavedCard = ({ card }) => {
  return (
      <section className='saved-card'>
          <p>{card.description}</p>
          <p>{card.current_date}</p>
      </section>
    );
  }

  export default SavedCard