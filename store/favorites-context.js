import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (meetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFAvorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  // add method:
  function addFavoriteHandler(meetup) {
    setUserFavorites((prevFavMeetup) => {
      return prevFavMeetup.concat(meetup);
    });
  }

  // remove method:
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevFavMeetup) => {
      return prevFavMeetup.filter((meetup) => meetup.id !== meetupId);
    });
  }

  // Item is a favorite? method:
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFAvorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
