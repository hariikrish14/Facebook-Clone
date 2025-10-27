import React, { useState } from "react";

function Post({ profileImg, username, time, text, postImg, initialLikes, comments }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post">
      {/* Header */}
      <div className="post-header">
        <img src={profileImg} alt="Profile" className="post-profile" />
        <div>
          <p className="post-user">{username}</p>
          <span className="post-time">{time} · 🌍</span>
        </div>
      </div>

      {/* Content */}
      <div className="post-content">
        <p>{text}</p>
        {postImg && <img src={postImg} alt="Post content" className="post-image" />}
      </div>

      {/* Footer */}
      <div className="post-footer">
        <div className="post-reactions">
          
          <span>{likes} Likes</span>
          <span> · {comments} Comments</span>
        </div>
        <div className="post-actions">
          <button
            className={`like-btn ${liked ? "liked" : ""}`}
            onClick={handleLike}
          >
            <img
              src={liked ? "/Images/icons8-facebook-like-100 (2).png" : "/Images/icons8-facebook-like-100.png"}
              alt="like"
            />{" "}
            Like
          </button>
          <button>
            <img src="/Images/facebookcommment.png" alt="comment" /> Comment
          </button>
          <button>
            <img src="/Images/fbshare.png" alt="share" /> Share
          </button>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div className="posts">
      <Post
        profileImg="/Images/sunnylokah.webp"
        username="Sunny"
        time="2h ago"
        text="Evening with Chandra 🌇🌕"
        postImg="/Images/chandraandsunny.webp"
        initialLikes={120}
        comments={45}
      />
      <Post
        profileImg="/Images/chathanprofile.png"
        username="Micheal"
        time="4h ago"
        text="New Look"
        postImg="/Images/tovino-chathan-lokah.jpg"
        initialLikes={1609}
        comments={69}
      />
    </div>
  );
}

export default Posts;
