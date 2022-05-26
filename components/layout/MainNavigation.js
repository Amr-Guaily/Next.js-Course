import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css';
import Link from 'next/link';

const MainNavigation = () => {
  const FavoritesCtx = useContext(FavoritesContext);

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>React Meetup</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
            <span className={classes.badge}>{FavoritesCtx.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
