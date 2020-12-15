import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Post.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/CachedOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import {  } from '@material-ui/icons/ThumbUp';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Post({profilesrc, image, username, timestamp, message}) {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="Post">
            <div className="post__top">
                <Avatar src={profilesrc}
                className="post__avatar"/>

                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                 <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>

                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>

                
            </div>

            
        </div>
    );
}

export default Post;
