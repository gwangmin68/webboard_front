import {observable, action} from "mobx";
import axios from 'axios';

class PostStore{
    static instance = null;
    static getInstance(){
        if(PostStore.instance == null)
            PostStore.instance = new PostStore();
        return PostStore.instance;
    }
    @observable items = null;
    @action fetchItemall = async () => {
        try{
            let response = await axios({
                url: 'http://localhost:8080/post/list',
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.status === 200)
                this.items = response.data;
        }catch (ex) {
            alert(ex.toLocaleString());
        }
    };

    @action fetchItems = async (kind) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/post/list/${kind}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            if(response.status === 200)
                this.items = response.data;
        }catch (ex) {
            alert(ex.toLocaleString());
        }
    };

    @observable viewItem = null;
    @action fetchItem = async (postid) => {
        try{
            this.viewItem = null;
            let response = await axios({
                url: `http://localhost:8080/post/view/${postid}`,
                method: 'get',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            console.log(response);
            if(response.status === 200)
                setTimeout(
                    ()=>this.viewItem = response.data,
                    2000
                );
        }catch (ex) {
            alert(ex.toLocaleString());
        }
    };

    @action addNewPost = async (post) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/post/add`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(post)
            });
            return (response.status === 200);
        }catch (ex) {
            alert(ex.toLocaleString());
            return false;
        }
    };

    @action deletePost = async (postid) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/post/delete/${postid}`,
                method: 'delete',
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8'
                },
                timeout: 3000
            });
            return (response.status === 200);
        }catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    }
    @action editPost = async (post) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/post/update/${post.id}`,
                method: 'put',
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(post)
            });
            return (response.status === 200);
        }catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    }
}

export default PostStore.getInstance();