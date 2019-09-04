import React from 'react';

import BoardListItem from './BoardListItem';
import {Link} from "react-router-dom";

const BoardList = (props) => {
  return (
      <div>
          {props.items.map(item => <BoardListItem key={item.id} post={item}/>)}
          <div>
              <Link to='/board/add'>새 글 쓰기</Link>
          </div>
      </div>
  );
};

export default BoardList;