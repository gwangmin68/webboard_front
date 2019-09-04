import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";

@inject('stores')
@observer
class PostAdd extends Component {
    state={
        title: '',
        userid: '',
        content: '',
        kind: '',
        goToList: false,
        goToPost:false,
        goToLogin:false
    };

    constructor(props){
        super(props);
        if(this.props.postid && this.props.stores.PostStore.viewItem)
            this.state = {
                ...this.state,
                title:this.props.stores.PostStore.viewItem.title,
                content:this.props.stores.PostStore.viewItem.content,
                id:this.props.stores.PostStore.viewItem.id,
            }
        else if(this.props.postkind && this.props.stores.UserStore.viewItem)
            this.state = {
                ...this.state,
                userid:this.props.stores.UserStore.viewItem.id,
                kind:this.props.postkind,
            }
        else
            this.state = {
                ...this.state,
                goToLogin:true
            }
    }

    render() {
        if(this.state.goToLogin)
            return <Redirect to='/login'/>

        if(this.state.goToList)
            return <Redirect to='/board'/>

        if(this.state.goToPost)
            return <Redirect to={`/board/view/${this.props.postid}`}/>

        return (
            <div>
                <div>
                    제목 <input value={this.state.title} onChange={this.updateTitle}/>
                </div>
                <div>
                    내용
                    <div>
                        <textarea value={this.state.content}
                                  onChange={this.updateContent}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.addNewPost}>확인</button>
                </div>
            </div>
        );
    }

    addNewPost = async () => {
        if(this.props.postid && await this.props.stores.PostStore.editPost(this.state)){
            await this.props.stores.PostStore.fetchItems();
            this.setState({
                ...this.state,
                goToPost: true
            });
        }else if(await this.props.stores.PostStore.addNewPost(this.state)){
            await this.props.stores.PostStore.fetchItems();
            this.setState({
                ...this.state,
                goToList: true
            });
        }
    };

    updateTitle = event => {
        this.setState({
            ...this.state,
            title: event.target.value
        });
    }
    updateContent = (event) => {
        this.setState({
            ...this.state,
            content: event.target.value
        });
    }
}

export default PostAdd;