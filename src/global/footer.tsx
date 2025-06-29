import { Component, createSignal, createEffect } from 'solid-js';
import { useLocation } from '@solidjs/router';
import { TbPencil } from 'solid-icons/tb';
import './css/footer.css';

const Footer: Component = () => {

    const [page, setPage] = createSignal();

    const getPage = () => { 
        return useLocation().pathname === '/' ? '/home' : useLocation().pathname;
    };

    createEffect(() => {
        setPage(getPage());
    });

    return (
        <div id='footer'>
            <a href={`https://github.com/dawitalemu4/keycurl.github.io/blob/main/public/docs${page()}.md`} target='_blank'>Contribute to this page <TbPencil /></a>
        </div>
    );
};

export default Footer;
