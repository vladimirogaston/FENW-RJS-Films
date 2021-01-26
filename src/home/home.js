import React from 'react';
import Banner from './home-banner';
import Nav from './home-nav';

function Home(){
    return (
        <div>
            <div>
                <Banner title="Welcome to my personal film's CRUD website"
                        subTitle="Thanks for trust"></Banner>
            </div>
            <div>
                <Nav></Nav>
            </div>
        </div>
    );
}

export default Home;