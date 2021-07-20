import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from './InputOption';
import "./Post.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';

const Post = ({name, description, time, message, photoUrl}) => {
    return (
        <div className="post">
           <div className="post__header">
            <Avatar src={photoUrl}/>
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
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="like" color="gray" />
            <InputOption Icon={ChatOutlinedIcon} title="comment" color="gray" />
            <InputOption Icon={ShareOutlinedIcon} title="share" color="gray" />
            <InputOption Icon={SendOutlinedIcon} title="send" color="gray" />
        </div>
        </div>
    )
}

export default Post;
