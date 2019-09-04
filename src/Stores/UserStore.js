import {observable, action} from "mobx";
import axios from "axios";

class UserStore{
    static instance = null;
    static getInstance(){
        if(UserStore.instance == null)
            UserStore.instance = new UserStore();
        return UserStore.instance;
    }

    @observable current_time = null;
    @action getTime = async () => this.current_time = await new Date();

    @observable viewItem = null;
    @action fetchItem = async (userid) => {
        try{
            this.viewItem = null;
            let response = await axios({
                url: `http://localhost:8080/user/view/${userid}`,
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

    @action fetchItemAc = async (account) => {
        try{
            this.viewItem = null;
            let response = await axios({
                url: `http://localhost:8080/user/view/ac/${account}`,
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

    @action addNewPost = async (user) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/user/add`,
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(user)
            });
            return (response.status === 200);
        }catch (ex) {
            alert(ex.toLocaleString());
            return false;
        }
    };

    @action deletePost = async (userid) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/post/delete/${userid}`,
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
    @action editPost = async (user) => {
        try{
            let response = await axios({
                url: `http://localhost:8080/post/update/${user.id}`,
                method: 'put',
                headers: {
                    'Content-type' : 'application/json; charset=UTF-8'
                },
                timeout: 3000,
                data: JSON.stringify(user)
            });
            return (response.status === 200);
        }catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    }
}

export default UserStore.getInstance();