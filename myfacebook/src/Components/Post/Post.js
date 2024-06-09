import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img src="./images/2.jpg" alt="" className="postImage" />
                <span className="postUserName">Amith N Nishantha</span>
                <span className="postTime">5 min ago</span>
            </div>
            <div className="postCenter">
                <div className="postCaption">Hello I'm Amith... Who Are you....?</div>
                <img src="./images/2.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="./images/like.jpg" alt="" className="reactionPic" />
                    <img src="./images/love.jpg" alt="" className="reactionPic" />
                    <img src="./images/haha.jpg" alt="" className="reactionPic" />
                    <img src="./images/angry.jpg" alt="" className="reactionPic" />
                    <span className="likeCount">You and 225 other</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">15 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
