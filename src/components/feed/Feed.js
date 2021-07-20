import React, { useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { posts } from "../../helpers/Posts";

const Feed = () => {
  const [input, setInput] = useState("");
  const post = posts;
  const sendPost = (e) => {
    e.preventDefault();
    posts.push({
      id: post.length - 1,
      name: "Prince",
      description: "Trainee at Etelligens Technology",
      message: input,
      time: new Date().toLocaleTimeString(),
      comment: [],
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__post">
          <Avatar className="feed__avatar" src="https://bit.ly/3nQtot4" />
          <div className="feed__input">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Start a post"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7fc15e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#e7a33e" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#f5987e"
          />
        </div>
      </div>
      {posts.length > 0 &&
        posts.map((post) => (
          <Post
            key={post.id}
            index={post.id}
            name={post.name}
            description={post.description}
            message={post.message}
            photoUrl={post.photoUrl}
            time={post.time}
          />
        ))}
    </div>
  );
};

export default Feed;
