import React, { useState, useEffect } from "react";
import SavedCard from "../SavedCard/SavedCard";
import "./SavedPage.css";

export const SavedPage = () => {
  const [savedCards, setSavedCards] = useState([]);

  const getFromLocalStorage = () => {
    const keys = Object.keys(localStorage);
    let cards;
    if (keys.length) {
      cards = keys.map((key) => {
        return JSON.parse(localStorage.getItem(key));
      });
      setSavedCards([...cards]);
    }
  };

  const removeFromStorage = (id) => {
    localStorage.removeItem(id);
    const remainingSaved = savedCards.filter((card) => id !== card.id);
    setSavedCards([...remainingSaved]);
    window.location.reload(false);
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  const cards = savedCards.map((card) => (
    <SavedCard card={card} remove={removeFromStorage} />
  ));

  return (
    <>
      {!cards.length && <h2 className="no-saved">No readings saved yet.</h2>}
      <section className="card-container">{cards}</section>
    </>
  );
};

export default SavedPage;
