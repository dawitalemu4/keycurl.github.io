import { Component, createSignal } from 'solid-js';
import { RiArrowsArrowDropLeftLine, RiArrowsArrowDropRightLine } from 'solid-icons/ri';
import { TbBrandDocker, TbDownload } from 'solid-icons/tb';
import RenderMarkdown from '../global/markdown';
import './css/home.css';

const Home: Component = () => {

    const [currentVideo, setCurrentVideo] = createSignal(0);

    const videos = [
        'https://github.com/dawitalemu4/postwoman/assets/106638403/b09125dd-565e-479f-be58-194261c2667f',
        'https://github.com/dawitalemu4/postwoman/assets/106638403/27d2a4b0-9890-43bd-9bfd-8f928445e011',
        'https://github.com/dawitalemu4/postwoman/assets/106638403/9dd3a5b9-e647-48ec-932f-6b0bd84885bd',
        'https://github.com/dawitalemu4/postwoman/assets/106638403/2b725e99-f3b3-4b6c-ba3c-33f6369b3e1d',
        'https://github.com/dawitalemu4/postwoman/assets/106638403/c7dcc2f0-e7ae-4bda-9b6a-634e92b17b5c',
        'https://github.com/dawitalemu4/postwoman/assets/106638403/f28005a2-2d6a-43d8-975e-ecbab8cfd5d5'
    ];

    const prevVideo = () => {
        if (currentVideo() !== 0) {
            setCurrentVideo(currentVideo() - 1);
        };
    };

    const nextVideo = () => {
        if (currentVideo() !== videos.length - 1) {
            setCurrentVideo(currentVideo() + 1);
        };
    };

    return (
        <>
            <div id='home'>
                <div id='home-videos'>
                    <RiArrowsArrowDropLeftLine class='arrow' onClick={prevVideo} />
                    {videos.map((video: string, index: number) => (
                        <video controls autoplay muted loop style={{ "display": currentVideo() === index ? "flex" : "none" }}>
                            <source src={video} />
                        </video>
                    ))}
                    <RiArrowsArrowDropRightLine class='arrow' onClick={nextVideo} />
                </div>
                <div id='home-download'>
                    <a href='/postwoman.zip' target='_blank'><TbDownload class='icon' /> ZIP</a>
                    <a href='https://github.com/dawitalemu4/postwoman/tree/main/.docker-setup' target='_blank'><TbBrandDocker class='icon' /> Docker</a>
                </div>
            </div>
            <RenderMarkdown file='home.md' />
        </>
    );
};

export default Home;
