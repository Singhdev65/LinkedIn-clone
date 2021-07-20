import React, { useEffect, useState } from 'react';
import "./Feed.css"
import InputOption from './InputOption';
import { Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import firebase from "firebase";
import {db} from "../../firebase";

const Feed = () => {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    // -----Realtime Listener ------

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot( (snapshot) => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])

    const sendPost = (e) => {
        e.preventDefault()

        // Sending datas to the post section

        db.collection("posts").add({
            name: "Prince Kumar",
            description: "React developer at Etelligens Technologies",
            message: input,
            photoUrl: "https://bit.ly/3nQtot4",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            time:'1s'
        })

        // Clearing Input-field after post
        setInput("")
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
            <div className="feed__post">
                <Avatar className="feed__avatar"  src="https://bit.ly/3nQtot4" />
                <div className="feed__input">
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a post"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
        </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#7fc15e"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#e7a33e"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#f5987e"/>
                </div>
                <p>Start a conversation:<a href="#">#Covid19Help</a></p>
            </div>

             {/* Mapping data for the post */}

            {posts.map(({id, data: {name, description,message, photoUrl, time } }) => (
                <Post 
                    key= {id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    time={time}
                />
            ))}
        </div>
    )
}

export default Feed;
