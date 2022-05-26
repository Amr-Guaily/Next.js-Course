import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.container}>{props.children}</main>
    </div>
  );
};

export default layout;
