import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import { posts } from "../../helpers/Posts";

const Post = ({ index, name, description, time, message, photoUrl }) => {
  const [isOpen, setOpen] = useState(false);
  const [isLiked, setLike] = useState(false);
  const [comment, setComment] = useState("");

  const sendComment = (e) => {
    e.preventDefault();
    posts[index].comment.push({
      person: "Ram",
      position: "Developer at Zomato",
      comment: comment,
    });
    setComment("");
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
          <div className="post__time">
            <p>{time}.</p>
            <PublicOutlinedIcon className="post__timeIcon" />
          </div>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpAltOutlinedIcon}
          title="like"
          color={isLiked ? "blue" : "gray"}
          method={() => setLike(!isLiked)}
        />
        <InputOption
          Icon={ChatOutlinedIcon}
          title="comment"
          color="gray"
          method={() => setOpen(!isOpen)}
        />
        <InputOption Icon={ShareOutlinedIcon} title="share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="send" color="gray" />
      </div>

      {isOpen && (
        <>
          <div className="post__comment">
            <Avatar className="post__avatar" src="https://bit.ly/3nQtot4" />
            <div className="post__input">
              <form>
                <input
                  value={comment}
                  type="text"
                  placeholder="Add a post..."
                  onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit" onClick={sendComment}>
                  Send
                </button>
              </form>
            </div>
          </div>

          {posts[index].comment.length > 0 &&
            posts[index].comment.map((comment) => (
              <div className="comments">
                <Avatar />
                <div className="comment__info">
                  <h4 className="comment__name">{comment.person}</h4>
                  <h6 className="comment__description">{comment.position}</h6>
                  <p className="comment__body">{comment.comment}</p>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Post;
