import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";

function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}

          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete onClick={() => deletePost(post.id)} />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary py-2 hashtag">
            {tag}
          </span>
        ))}
      </div>

      <div className="alert alert-primary m-2" role="alert">
        This Post has been reacted by <strong>{post.reaction}</strong> People
      </div>
    </div>
  );
}

export default Post;
