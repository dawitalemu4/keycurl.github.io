import { Component } from 'solid-js';
import './css/features.css';

const Features: Component = () => {

    return (
        <div id='features'>
            <h1>Features</h1>

            <h2>Make Request</h2>
            <video controls muted loop>
                <source src="https://github.com/dawitalemu4/postwoman.dev/assets/106638403/c0440823-fe29-41cd-a118-8cc1551f3920" />
            </video>
            <blockquote><p>JSON and HTML responses are automatically formatted.</p></blockquote>

            <h2>History List</h2>
            <video controls muted loop>
                <source src="https://github.com/dawitalemu4/postwoman.dev/assets/106638403/be526818-8dcc-44ce-9ca9-33ceb79fe010" />
            </video>

            <h2>Favorites List</h2>
            <video controls muted loop>
                <source src="https://github.com/dawitalemu4/postwoman.dev/assets/106638403/a18272aa-dda9-45c8-91e9-707344e1b133" />
            </video>

            <h2>Fill Form from List</h2>
            <video controls muted loop>
                <source src="https://github.com/dawitalemu4/postwoman.dev/assets/106638403/3daf7358-2c30-4b25-9475-dbd164987cff" />
            </video>

            <h2>Profile Signup</h2>
            <video controls muted loop>
                <source src="https://github.com/dawitalemu4/postwoman.dev/assets/106638403/5ee3b731-2541-401f-9497-c87c35977364" />
            </video>

            <h2>Profile Login</h2>
            <video controls muted loop>
                <source src="https://github.com/dawitalemu4/postwoman.dev/assets/106638403/35afbb80-2c31-4473-b15f-12128fce66eb" />
            </video>
        </div>
    );
};

export default Features;
