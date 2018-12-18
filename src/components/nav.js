
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Nav() {
    
    return (
        <ul className="site-nav animated flipInX">
            <li><AnchorLink offset='200' href='#showcaseSection'>SHOWCASE</AnchorLink></li>
            <li><AnchorLink offset='200' href='#resumeSection'>PROFILE</AnchorLink></li>
        </ul>
    );
    
}
