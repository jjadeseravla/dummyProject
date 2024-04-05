import {
  MdPostAdd,
  MdMessage
} from 'react-icons/md';
import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Users and their Age
      </h1>
      <p>
        <Link to="/create-user" className={classes.button}>
          <MdPostAdd size={18} />
          New User
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;