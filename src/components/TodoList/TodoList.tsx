import { IconButton, Skeleton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import TodoItem from "../container/Home/TodoItems";
import useStyles from "../container/Home/style";


export default function TodoList({
  posts,
  checked,
  handleDelete,
  handleUpdatePost,
}: any) {
  const classes = useStyles();

  return (
    <ul>
      <div className={classes.li}>
        {posts?.map((post, index) =>
          checked ? (
            <Skeleton variant="text" />
          ) : (
            <li className={classes.liItem} key={index}>
              <div className={classes.item}>
                <IconButton
                  className={classes.iconDelete}
                  aria-label="delete"
                  size="large"
                >
                  <DeleteIcon
                    fontSize={"large"}
                    onClick={() => handleDelete(post._id)}
                  />
                </IconButton>

                <TodoItem
                  title={post.description}
                  id={post._id}
                  status={post.completed}
                  onUpdatePost={handleUpdatePost}
                  posts={posts}
                />
              </div>

              <div className={classes.status}>
                <p>Status: {post.completed ? "Done" : "Pending"} </p>
              </div>
            </li>
          )
        )}
      </div>
    </ul>
  );
}
