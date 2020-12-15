import React,{useState, useEffect} from 'react';
import "./Feed.css";
import StoryReal from "./StoryReal";
import PostSection from "./PostSection";
import Post from "./Post";
import db from "./Firebase";

function Feed() {
    const [posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data:doc.data() })))
        );
    }, []);

    return (
        <div className="feed">
            <StoryReal/>
            <PostSection/>

            {posts.map((post) =>(
                <Post
                key={post.id}
                profilesrc={post.data.profileSrc}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))}

            
            
        </div>
    );
}

export default Feed;
