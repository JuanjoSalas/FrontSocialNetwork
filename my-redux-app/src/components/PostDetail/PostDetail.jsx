import React, { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../features/posts/postsSlice";
import "./PostDetail.scss";

const PostDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPostById(id));
    }, [id]);

    return ( 
        <div className='container-postDetail'>
            <div className='border-postDetail'>
                <div className="postDetail">
                    <p className="detail-post">{post.title}</p>
                    <img className="postImage" src="https://images.stockcake.com/public/2/6/a/26a3fd95-08ee-4b93-b506-d6dfc85c0414_large/mountain-biking-adventure-stockcake.jpg" alt="" />
                    <p className="postBody">{post.body}</p>
                    <Link className="add-comment" to="/comments"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASdJREFUSEvtltERgjAMhpNJxE1kE51EmUSdREbBSaI/13IVWtrSQn2gdzxQIF+T/AlhKrS4EJcmYBGpiOic+UAdMz9Mmz9gEXkR0SkzVJsD/KhvBrCIwMv7SlBttmHmG25MMDau/w7uiOiiDonDhqYn2eOWmWuAI3Wxg/uQxYhrk1CbQjJrEvs4sE1YLsFF5XjwLrTUZgQXB/7WezOGMnOrPEaLxWUuNKLxHp5HgW2ObpLjHYwIlAu1ITiXkGwpShZXaGWN37OC0QgwCKy5al2G5ScQ7aaaRMziP3hmMMxSb0+Y5mcu28eqF9tS0PdwHbrY/HjHWwd4EEkscDLsuQyMwPASAun/TCkr1GPU6lNPiCnAGI+rHB5O/m45Tr/EhjfUS4yGfPMBdTzDHy5taC4AAAAASUVORK5CYII="/></Link>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;