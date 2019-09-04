import React from 'react';
import {Link} from 'react-router-dom';

const BoardListItem = (props) => {
    let {post} = props;
    let created = new Date(post.created);
    let viewPost = `/post/view/${post.id}`;
    return (
        <div className='board-list-item' onClick={()=>5}>
            <div>
                <Link to={viewPost}>
                    {post.title}
                </Link>
            </div>
            <div>작성자:{post.author}</div>
            <div>추천:{post.cntRecommend}</div>
            <div>조회수:{post.cntInquiry}</div>
            <div>
                {created.getMonth() + 1}-{created.getDate()}
                &nbsp;
                {created.getHours()}:{created.getMinutes()}
            </div>
        </div>
    );

};

export default BoardListItem;