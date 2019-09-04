import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import BoardList from './BoardList';
import './Board.scss';

import PostView from './PostView';
import PostAdd from './PostAdd';

@inject('stores')
@observer
class Board extends Component {

    componentDidMount() {
        this.props.stores.PostStore.fetchItemall();
    }

    render() {
        let p = this.props.stores.PostStore;

        if(this.props.match && this.props.match.params.kind === 'view' && this.props.match.params.postid)
            return <PostView postid={this.props.match.params.postid}/>;

        if(this.props.match && this.props.match.params.kind === 'add') {
            return <PostAdd postkind={this.props.match.params.kind}/>
        }

        if(this.props.match && this.props.match.params.kind === 'edit'){
            return <PostAdd postid={this.props.match.params.postid}/>
        }

        if(this.props.match && this.props.match.params.kind === 'free'){
            this.props.stores.PostStore.fetchItems('kind');
            return (
                <div>
                    <div className='BoardAll-header'>
                        <div>자유 게시판</div>
                        <div>
                            <select name="kind" id="boardkind-value">
                                <option value="all">전체</option>
                                <option value="free">자유</option>
                                <option value="dorm">기숙사</option>
                                <option value="class">3-2</option>
                            </select>
                        </div>
                    </div>
                    <div className='BoardAll-body'>
                        {p.items && <BoardList items={p.items}/>}
                    </div>
                </div>);
        }
        if(this.props.match && this.props.match.params.kind === 'dorm'){
            this.props.stores.PostStore.fetchItems('dorm');
            return (
                <div>
                    <div className='BoardAll-header'>
                        <div>기숙사 게시판</div>
                        <div>
                            <select name="kind" id="boardkind-value">
                                <option value="all">전체</option>
                                <option value="free">자유</option>
                                <option value="dorm">기숙사</option>
                                <option value="class">3-2</option>
                            </select>
                        </div>
                    </div>
                    <div className='BoardAll-body'>
                        {p.items && <BoardList items={p.items}/>}
                    </div>
                </div>);
        }
        if(this.props.match && this.props.match.params.kind === 'class'){
            this.props.stores.PostStore.fetchItems('class');
            return (
                <div>
                    <div className='BoardAll-header'>
                        <div>3-2 게시판</div>
                        <div>
                            <select name="kind" id="boardkind-value">
                                <option value="all">전체</option>
                                <option value="free">자유</option>
                                <option value="dorm">기숙사</option>
                                <option value="class">3-2</option>
                            </select>
                        </div>
                    </div>
                    <div className='BoardAll-body'>
                        {p.items && <BoardList items={p.items}/>}
                    </div>
                </div>);
        }

        return (
          <div>
              <div className='BoardAll-header'>
                  <div>전체 게시판</div>
                  <div>
                      <select name="kind" id="boardkind-value">
                          <option value="all">전체</option>
                          <option value="free">자유</option>
                          <option value="dorm">기숙사</option>
                          <option value="class">3-2</option>
                      </select>
                  </div>
              </div>
              <div className='BoardAll-body'>
                  {p.items && <BoardList items={p.items}/>}
              </div>
          </div>
        );
    }
}

export default Board;