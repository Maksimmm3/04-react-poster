import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Maksym" body="REact.js is awesome!" />
      <Post author="Anna" body="Check out the full course!" />
    </ul>
  );
}

export default PostsList;
