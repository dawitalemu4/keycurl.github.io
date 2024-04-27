import { Component } from 'solid-js';
import { TbBrandGithub } from 'solid-icons/tb';
import { AiOutlineMail } from 'solid-icons/ai';
import './css/header.css';

const Header: Component = () => {

    return (
        <div id='header'>
            <div id='header-title'>
                <p>postwoman:~</p>
            </div>
            <div id='header-links'>
                <a href='https://github.com/dawitalemu4/postwoman' target='_blank'><TbBrandGithub /></a>
                <a href='https://mail.google.com/mail?view=cm&fs=1&to=postwoman.dev@gmail.com&su=Draft' target='_blank'><AiOutlineMail /></a>
            </div>
        </div>
    );
};

export default Header;
