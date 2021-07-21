import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./PostSection.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import firebase from "firebase";
import db from "./Firebase";

function PostSection() {

    const [input, setInput] = useState("");
    const [imageurl, setImageurl] = useState("");
    const [ {user}, dispatch] = useStateValue();
    

const handleSubmit = (e) =>{
    e.preventDefault();

    db.collection('posts').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilesrc: user.photoURL,
        username: user.displayName,
        image: imageurl,
    });

    setInput("")
    setImageurl("")
};
 
    return (
        <div className="PostSection">
            <div className="PostSection__Top">
                <Avatar src={user.photoURL}/> 
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="PostSection__input"
                    placeholder={`Whats on your mind ${user.displayName} ?`}/>

                    <input 
                    value={imageurl}
                    onChange={(e) => setImageurl(e.target.value)}
                    placeholder={`Image URL (Optional)`}/>

                    <button 
                    className="submit__button" 
                    onClick={handleSubmit} 
                    type="submit">
                        Submit

                    </button>
                </form>

            </div>

            <div className="PostSection__Bottom">

                <div className="PostSection__option">
                    <VideocamIcon style={{ color: "red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="PostSection__option">
                    <PhotoLibraryIcon style={{ color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="PostSection__option">
                    <InsertEmoticonIcon style={{ color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
            
        </div>
    )
}

export default PostSection
