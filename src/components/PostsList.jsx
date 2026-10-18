import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maksym" body="REact.js is awesome!" />
        <Post author="Anna" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
