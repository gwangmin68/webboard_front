import React, {Component} from 'react';
import './SignUp.scss';

class SIGNUP extends Component {
    render() {
        return (
            <div className='signup-container'>
                <div className='signup-header'>회원가입</div>
                <div className='input-container'>
                    <div className='input'>
                        <div className="label">이름</div>
                        <input type="text"/>
                    </div>
                    <div className='input'>
                        <div className="label">아이디</div>
                        <input type="text"/>
                    </div>
                    <div className='input'>
                        <div className="label">비밀번호</div>
                        <input type="text"/>
                    </div>
                    <div className='input'>
                        <div className="label">비밀번호 확인</div>
                        <input type="text"/>
                    </div>
                    <div className='input'>
                        <div className="label">성별</div>
                        <input type="text"/>
                    </div>
                    <div className='input'>
                        <div className="label">나이</div>
                        <input type="text"/>
                    </div>
                </div>
                <div className='btn-container'>
                    <input className='btn' type="button" value='가입하기'/>
                </div>
            </div>
        );
    }
}

export default SIGNUP;