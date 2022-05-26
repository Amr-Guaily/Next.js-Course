import Link from 'next/link';
import { useRouter } from 'next/router';

import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import classes from './MeetupItem.module.css';

const MeetupItem = ({ meetup }) => {
  const router = useRouter();

  const FavoritesCtx = useContext(FavoritesContext);

  const itemIsFav = FavoritesCtx.itemIsFAvorite(meetup.id);

  const toggleFavHandler = () => {
    if (itemIsFav) {
      FavoritesCtx.removeFavorite(meetup.id);
    } else {
      FavoritesCtx.addFavorites(meetup);
    }
  };

  // Navigate Programtically
  function navigateHandler() {
    router.push(`/${meetup.id}`);
  }

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={meetup.image} alt={meetup.title} />
      </div>

      <div className={classes.content}>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
      </div>

      <button className={classes.btn} onClick={toggleFavHandler}>
        {itemIsFav ? 'Remove from Favorites' : 'To Favorites'}
      </button>

      <button className={classes.btn} onClick={navigateHandler}>
        Show Details
      </button>
    </div>
  );
};

export default MeetupItem;
