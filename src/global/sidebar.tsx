import { Component, createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { FiMenu } from 'solid-icons/fi';
import { IoClose } from 'solid-icons/io';
import './css/sidebar.css';

const Sidebar: Component = () => {

    const navigate = useNavigate();
    const [open, setOpen] = createSignal(false);

    return (
        <>
            <div id='sidebar-open-container' onClick={() => setOpen(true)}>
                <FiMenu id='sidebar-open' />
            </div>
            <div id='sidebar' style={{ "left": open() ? "0" : "-300px" }}>
                <div id='sidebar-routes'>
                    <IoClose id='sidebar-close' onClick={() => setOpen(false)} />
                    <ul>
                        <li onClick={() => { navigate('/', { replace: true }); setOpen(false); }}>Home</li>
                        <li onClick={() => { navigate('/features', { replace: true }); setOpen(false); }}>Features</li>
                        <li onClick={() => { navigate('/install', { replace: true }); setOpen(false); }}>Install</li>
                        <li onClick={() => { navigate('/shortcuts', { replace: true }); setOpen(false); }}>Shortcuts</li>
                        <li onClick={() => { navigate('/contributing', { replace: true }); setOpen(false); }}>Contributing</li>
                        <li onClick={() => { navigate('/FAQ', { replace: true }); setOpen(false); }}>FAQ</li>
                    </ul>
                </div>
            </div>
            <div 
                id='sidebar-blur' style={{ 'left': open() ? '300px' : 'calc(-100vw + -300px)' }}
                onClick={() => setOpen(false)}
            />
        </>
    );
};

export default Sidebar;
