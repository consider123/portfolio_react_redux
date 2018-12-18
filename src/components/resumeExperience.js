import React from 'react';
import affinionLogo from '../images/logos/affinion.png';
import superdrugLogo from '../images/logos/superdrug.png';
import coralLogo from '../images/logos/coral.png';
import kaplanLogo from '../images/logos/kaplan.png';

export default function ResumeExperience(props) {
    return (
        <React.Fragment>
            <h1>Experience</h1>
            {/* <p>Below are some of the places where I've rendered my services as a contrator as well as a permanent employee.</p> */}
            <ul className="experience-list">
                <li>
                    <a href="https://www.affinioninternational.com" target="_blank" rel="noopener noreferrer"><img height="50" alt="Affinion International Ltd" src={affinionLogo}/></a>
                    <h3 className="title">Affinion International</h3>
                    <p className="bolder sizeSmall">Jul 2014 - Nov 2018 • Contract Position • Lead Front-End Developer/ UI-UX Designer</p>
                    <p className="desc">Affinion International is an affilate marketing company mainly running loyalty and customer engagement programs with some industry leading clients. At Affinion international I was leading on most of the front end dev projects, coding the front end part using the modern web building technologies and frameworks, working with Rest APIs and state management tools, building high end interactive clickthrough prototypes and also giving support on the UX strategies and visual creatives. Mainly worked on building Loyalty programs platform customised for Banking sector, using technologies like React JS and Angular etc.</p>
                </li>
                <li>
                    <a href="https://www.superdrug.com" target="_blank" rel="noopener noreferrer"><img height="30" alt="Superdrug" src={superdrugLogo}/></a>
                    <h3 className="title">Superdrug</h3>
                    <p className="bolder sizeSmall">Jul 2012 - Jul 2014 • Contract Position • Senior Front-end Developer / UI Designer</p>
                    <p className="desc">One of the largest health and beauty retailer, at Superdrug I worked on Superdrug's new website built from scratch both for desktop and mobile devices. I've been responsible to lead the Front-end dev which included translation of the wireframes and UI designs into functional front end interface coded in HTML, CSS, XML, jQuery and JSON.</p>
                </li>
                <li>
                    <a href="http://www.coral.co.uk" target="_blank" rel="noopener noreferrer"><img height="20" alt="Coral" src={coralLogo}/></a>
                    <h3 className="title">Coral</h3>
                    <p className="bolder sizeSmall">May 2012 - Jun 2012 • Contract Position • Visual Designer</p>
                    <p className="desc">Coral is a leading European betting and gaming company with strong market positions, high growth and well-established brands. Here I had an opportunity to work as a Creative designer and helped them with High End graphics for various divisions of the business. Most of the creatives included gaming Banners. It was a combination of static and animated flash banners that I produced while working here for a couple of months.</p>
                </li>
                <li>
                    <a href="http://www.kaplaninternational.com" target="_blank" rel="noopener noreferrer"><img height="30" alt="Kaplan International" src={kaplanLogo}/></a>
                    <h3 className="title">Kaplan International</h3>
                    <p className="bolder sizeSmall">Aug 2010 - Apr 2012 • Permanent Position • UI Designer/Developer</p>
                    <p className="desc">Kaplan is a premier provider of educational services for individuals, schools, and businesses worldwide. At Kaplan my resposibilites included designing concepts and then converting the designs into coded pages using HTML, CSS, JS and non flash elements using jQuery framework, responsive websites coded in HTML5 CSS3 and Jquery. Strict cross browser optimization, testing of pages on Litmus. Design and development of email campaigns via dotmailer and cheetahmail. </p>
                </li>
            </ul>
            <h2 className="highlightColor">Others</h2>
            <ul className="experience-list">
                <li>
                    <h3 className="title"><a href="https://www.mullenloweprofero.com/" target="_blank" rel="noopener noreferrer">Profero</a></h3>
                    <p className="bolder sizeSmall">Aug 2010 • Contract Position • Flash Designer</p>
                </li>
                <li>
                    <h3 className="title"><a href="https://https://www.totallymoney.com/" target="_blank" rel="noopener noreferrer">Totallymoney</a></h3>
                    <p className="bolder sizeSmall">May 2010 - Jul 2010 • Contract Position • UI Deigner/Developer</p>
                </li>
                {/* <li>
                    <h3 className="title"><a href="http://www.exposure.net" target="_blank" rel="noopener noreferrer">Exposure</a></h3>
                    <p className="bolder sizeSmall">May 2010 • Contract Position • Flash Designer/Developer</p>
                </li> */}
                <li>
                    <h3 className="title"><a href="https://www.harvestdigital.com/" target="_blank" rel="noopener noreferrer">Harvest Digital</a></h3>
                    <p className="bolder sizeSmall">Feb 2010 - Apr 2010 • Contract Position • UI Deigner/Flash Designer</p>
                </li>
                <li>
                    <h3 className="title"><a href="https://dodec.co.uk/" target="_blank" rel="noopener noreferrer">Dodec</a></h3>
                    <p className="bolder sizeSmall">Jul 2009 - Feb 2010 • Contract Position • UI Deigner/Flash Designer</p>
                </li>
                <li>
                    <h3 className="title"><a href="https://www.mytherapy.tv/" target="_blank" rel="noopener noreferrer">Mytherapy</a></h3>
                    <p className="bolder sizeSmall">Apr 2007 - Oct 2008 • Permanent Position • Flash Designer/Developer/Web Designer</p>
                </li>
            </ul>
        </React.Fragment>
        
    );
}