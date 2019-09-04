import React, {Component} from 'react';

class MYPAGE extends Component {
    state = {
        login : 0
    }
    render() {
        let {login} = this.state;
        return (
            <div>
                MYPAGE
            </div>
        );
    }
}

export default MYPAGE;