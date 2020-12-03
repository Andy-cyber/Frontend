import React from 'react';
import Post from './Post';

function PostList(props) {
  return (
    <div >  
      {props.postList.map(post =>
        <Post
          key={post.id}
          text={post.text}
          title={post.title}
          date={post.date} 
          onRemoveClick={() => props.onRemovePost(post)} />
      )}
    </div>
  );
}
export default PostList;
