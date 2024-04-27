import { Component, createSignal } from 'solid-js';
import { SolidMarkdown } from 'solid-markdown';
import './css/markdown.css';

const RenderMarkdown: Component<{ file: string }> = ({ file }) => {

    const [md, setMD] = createSignal('');
    fetch(`/docs/${file}`).then((res) => res.text()).then((text) => setMD(text));

    return <SolidMarkdown skipHtml={false} linkTarget='_blank'>{md()}</SolidMarkdown>;
};

export default RenderMarkdown;
