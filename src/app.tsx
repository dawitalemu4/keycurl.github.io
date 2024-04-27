import { Component } from 'solid-js';
import { RouteSectionProps, Router, Route } from '@solidjs/router';
import Sidebar from './global/sidebar';
import Header from './global/header';
import Home from './pages/home';
import Features from './pages/features';
import Install from './pages/install';
import Shortcuts from './pages/shortcuts';
import Contributing from './pages/contributing';
import FAQ from './pages/FAQ';
import Footer from './global/footer';
import './globals.css';

const Layout: Component<RouteSectionProps> = (props) => (
    <>
        <Sidebar />
        <Header />
        <div id="doc-page">
            {props.children}
            <Footer />
        </div>
    </>
);

const App = () => {

    return (
        <Router root={Layout}>
            <Route path="/" component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/install" component={Install} />
            <Route path="/shortcuts" component={Shortcuts} />
            <Route path="/contributing" component={Contributing} />
            <Route path="/FAQ" component={FAQ} />
        </Router>
    );
};

export default App;
