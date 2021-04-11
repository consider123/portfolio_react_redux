import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export default function About () {
    return (
        <div className="section-wrapper about" id="aboutSection">
            <Container>
                <Row>
                    <Col xs="12" className="textCenter">
                        <h1 className="heading noMargin"><span role="img" aria-label="Hello!">👋🏽</span> Hi! I'm Awais,</h1>
                        <p className="desc marTop sizeMedium">I'm a <b>Digital Experience Designer</b> / <b>Creative UI Developer</b>. <br/>I help gather business and user requirements and translate them into prototypes, design visually aesthetic user interfaces and convert them into responsive and interactive web apps using modern Javascript frameworks and libraries.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
