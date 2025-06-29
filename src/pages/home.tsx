import { Component } from 'solid-js';
import { SliderProvider, Slider, SliderButton } from 'solid-slider';
import { RiArrowsArrowDropLeftLine, RiArrowsArrowDropRightLine } from 'solid-icons/ri';
import { TbBrandDocker, TbDownload } from 'solid-icons/tb';
import RenderMarkdown from '../global/markdown';
import 'solid-slider/slider.css';
import './css/home.css';

const videos = [
    'https://github.com/dawitalemu4/postwoman.dev/assets/106638403/c0440823-fe29-41cd-a118-8cc1551f3920',
    'https://github.com/dawitalemu4/postwoman.dev/assets/106638403/be526818-8dcc-44ce-9ca9-33ceb79fe010',
    'https://github.com/dawitalemu4/postwoman.dev/assets/106638403/a18272aa-dda9-45c8-91e9-707344e1b133',
    'https://github.com/dawitalemu4/postwoman.dev/assets/106638403/3daf7358-2c30-4b25-9475-dbd164987cff',
    'https://github.com/dawitalemu4/postwoman.dev/assets/106638403/5ee3b731-2541-401f-9497-c87c35977364',
    'https://github.com/dawitalemu4/postwoman.dev/assets/106638403/35afbb80-2c31-4473-b15f-12128fce66eb'
];

const Home: Component = () => {

    return (
        <>
            <div id='home'>
                <div id='home-videos'>
                    <SliderProvider>
                        <SliderButton prev><RiArrowsArrowDropLeftLine /></SliderButton>
                        <Slider options={{ loop: true }}>
                            {videos.map((video: string) => (
                                <video controls autoplay muted loop>
                                    <source src={video} />
                                </video>
                            ))}
                        </Slider>
                        <SliderButton next><RiArrowsArrowDropRightLine /></SliderButton>
                    </SliderProvider>
                </div>
                <div id='home-download'>
                    <a href='/keycurl.zip' target='_blank'><TbDownload class='icon' /> ZIP</a>
                    <a href='https://github.com/dawitalemu4/keycurl/tree/main/.docker-setup' target='_blank'><TbBrandDocker class='icon' /> Docker</a>
                </div>
            </div>
            <RenderMarkdown file='home.md' />
        </>
    );
};

export default Home;
