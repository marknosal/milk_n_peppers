import React, { useContext } from 'react';
import TopBanner from './Base/TopBanner';
import SideBanner from './Base/SideBanner';
import Main from './Base/Main';
import '../index.css'
import { UserContext } from './Context/UserContext';

export default function App () {
    const { user } = useContext(UserContext)

    let link_list = []
    if (user) {
        link_list = ['home', 'profile', 'clothes', 'blog', 'about']
    } else {
        link_list = ['home', 'login', 'clothes', 'about']
    }
    console.log(link_list)

    return (
        <div className='app-container'>
            <TopBanner title={'Milk n Peppers'} />
            <div className='sidebanner-and-main-container'>
                <SideBanner navLinks={link_list} />
                <Main routeLinks={link_list} />
            </div>
        </div>
    );
};