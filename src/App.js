import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Provider} from "mobx-react";

import LOGIN from "./LOGIN";
import MYPAGE from "./MYPAGE";
import SIGNUP from "./SIGNUP";
import BOARD from "./BOARD"

import Stores from './Stores/index';
import './App.scss';

const App = () => (
    <Provider stores = {Stores}>
        <BrowserRouter>
                <header className='app-header'>
                        <ul className='menu-bar'>
                                <li><Link to='/mypage'>MYPAGE</Link></li>
                                <li style={{cursor: 'default'}}>|</li>
                                <li><Link to='/signup'>SIGNUP</Link></li>
                                <li style={{cursor: 'default'}}>|</li>
                                <li><Link to='/login'>LOGIN</Link></li>
                        </ul>
                        <br/>
                        <strong className='menu-logo'><Link to='/board'>게시판</Link></strong>
                </header>

                <section className='app-left'>
                    <ul className='board-list'>
                        <li><Link to='/board/free'>자유게시판</Link></li>
                        <li><Link to='/board/dorm'>기숙사게시판</Link></li>
                        <li><Link to='/board/class'>3-2게시판</Link></li>
                    </ul>
                </section>

                <section className='app-body'>
                        <Route path='/login' component={LOGIN}/>
                        <Route path='/mypage' component={MYPAGE}/>
                        <Route path='/signup' component={SIGNUP}/>
                        <Route path='/board/:kind?' exact component={BOARD}/>
                </section>
        </BrowserRouter>
    </Provider>
);

export default App;
