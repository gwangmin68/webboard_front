import React, {Component} from 'react';
import './Login.scss';
import {inject} from "mobx-react";
import $ from 'jquery';

@inject('stores')
class LOGIN extends Component {
    state = {
        Login:false
    }
    render() {
        return (
            <div className='login-container'>
                <div className="login-title">
                    <h1>로그인</h1>
                </div>
                <div className='input'>
                    <div className="input-id">
                        <div className='label'>아이디</div>
                        <input id='id-text' type="text"/>
                    </div>
                    <div className="input">
                        <div className='label'>비밀번호</div>
                        <input id='ps-text' type="text"/>
                    </div>
                </div>
                <div className="login-btngroup"><input type="button" id='btn_login' value='로그인' onClick={this.Login}/></div>
            </div>
        );
    }

    Login = async () => {
        let u = this.props.stores.UserStore;
        if(await u.fetchItemAc($(`#id-text`).val())){
            if($(`#id-text`).val() == u.account && $(`#ps-text`).val() == u.password){
                this.setState({
                    Login: true
                });
            }else{
                alert('잘못 입력하셨습니다.');
            }
        }
    }
}

export default LOGIN;