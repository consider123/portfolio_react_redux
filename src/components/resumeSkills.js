import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import ToolsTable from './toolsTable';
import {
    ai,
    // angular,
    axure,
    balsmiq,
    // bootstrap,
    // bulma,
    // css,
    // es,
    figma,
    // flinto,
    git,
    // gulp,
    // html,
    htmlcss,
    invision,
    jquery,
    js,
    // less,
    // materialize,
    // mobx,
    // node,
    // npm,
    penpaper,
    photoshop,
    // principle,
    react,
    redux,
    sass,
    sketch,
    storybook,
    ts,
    uxpin,
    // webpack,
    whiteboard,
    xd,
    // yarn,
    zeplin
} from '../config';

const toolsList = {
    dev: [
        { caption: "HTML/CSS", image: htmlcss, expert: true },
        { caption: "Sass", image: sass, expert: true },
        { caption: "React", image: react, expert: true },
        { caption: "Redux", image: redux, expert: true },
        { caption: "Typescript", image: ts, expert: false },
        // {caption:"Mobx", image: mobx, expert: true},
        // {caption:"ES6/7", image: es, expert: true},
        { caption: "Storybook", image: storybook, expert: true },
        { caption: "Javascript", image: js, expert: true },
        { caption: "jQuery", image: jquery, expert: true },
        // {caption:"Angular", image: angular, expert: false},
        // {caption:"HTML", image: html, expert: true},
        // {caption:"CSS", image: css, expert: true},
        // {caption:"Less", image: less, expert: true},
        // {caption:"Materialize", image: materialize, expert: true},
        // {caption:"Bulma", image: bulma, expert: false},
        // {caption:"Node", image: node, expert: false},
        // {caption:"NPM", image: npm, expert: true},
        // {caption:"Yarn", image: yarn, expert: true},
        // {caption:"Gulp", image: gulp, expert: true},
        // {caption:"Webpack", image: webpack, expert: false},
        { caption: "Git", image: git, expert: true }
    ],
    ui: [
        { caption: "Figma", image: figma, expert: false },
        { caption: "Sketch", image: sketch, expert: true },
        { caption: "XD", image: xd, expert: true },
        { caption: "Illustrator", image: ai, expert: true },
        { caption: "Photoshop", image: photoshop, expert: true },
        { caption: "Zeplin", image: zeplin, expert: true },
        { caption: "Invision", image: invision, expert: true }
    ],
    ux: [
        { caption: "Figma", image: figma, expert: false },
        { caption: "Axure RP", image: axure, expert: true },
        { caption: "UX Pin", image: uxpin, expert: true },
        { caption: "XD", image: xd, expert: true },
        { caption: "Balsmiq", image: balsmiq, expert: false },
        // {caption:"Flinto", image: flinto, expert: false},
        // {caption:"Principle", image: principle, expert: false},
        { caption: "Whiteboard", image: whiteboard, expert: true },
        { caption: "Pen/Paper", image: penpaper, expert: true }
    ]
}

export default function ResumeSkills(props) {
    return (
        <React.Fragment>
            <h1>Skills</h1>

            <Row>
                <Col sm="6" lg="3">
                    <h3 className="highlightColor clr">Prototyping</h3>
                    <ul className="custom">
                        <li>Rapid modeling</li>
                        <li>User flows</li>
                        <li>Journey Mapping</li>
                        <li>Wireframing</li>
                        <li>Accessibility design</li>
                    </ul>
                </Col>
                <Col sm="6" lg="3">
                    <h3 className="highlightColor clr">Visual Design</h3>
                    <ul className="custom">
                        <li>User Interface design</li>
                        <li>Layout and composition</li>
                        <li>Design systems</li>
                        <li>Illustrations</li>
                        <li>Branding</li>
                    </ul>
                </Col>
                <Col sm="6" lg="3">
                    <h3 className="highlightColor clr">Development</h3>
                    <ul className="custom">
                        <li>Front-End (HTML / CSS / Javascript)</li>
                        <li>Unit Testing</li>
                        <li>Performance optimization</li>
                        <li>WCAG compliance</li>
                        <li>Analytics</li>
                        <li>Version control</li>
                    </ul>
                </Col>
                <Col sm="6" lg="3">
                    <h3 className="highlightColor clr">General</h3>
                    <ul className="custom">
                        <li>Creative Research</li>
                        <li>Technical analysis</li>
                        <li>Usability Testing</li>
                        <li>Project planning</li>
                        <li>Project management</li>
                    </ul>
                </Col>
            </Row>

            <hr />

            <p>I use the following tools/libraries/frameworks/softwares to aid the processes for <b>User Experience(UX)</b>, <b>User Interface Design(UI)</b> and <b>Front-end Development(FED)</b> to build beautiful and useful visual interfaces.</p>
            <div className="cols-wrapper">
                <ToolsTable toolsList={toolsList} />
            </div>

        </React.Fragment>
    );
}