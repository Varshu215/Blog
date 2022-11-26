import './post.css';

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Cover-for-best-places-to-visit-in-July-in-the-world.jpg" alt="img"/>
            <div className="postInfo">
                <div className="postCats">
                    <span classname="postcat">Music</span>
                    <span classname="postcat">Life</span>
                </div>
                <span className="postTitle">
                Greece: Head To Beach Bars
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p>
            If you wish to learn about Greek mythology and soak in the most scenic beaches at the same time, this is the place of your dreams. Planning a vacation here is not going to burn a hole in your pocket and surely provide
             with an experience of a lifetime with so many beach bars to choose from.
            </p>
    </div>
    
  )
}
