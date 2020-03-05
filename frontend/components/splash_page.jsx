import React from 'react';

const SplashPage = () => {
    return(
        <div>
            <img src={window.logoURL}/>
            <h2>Make more time for the work that matters most</h2>
            
            <p>OSUNA is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow your business.</p>
            <input type="text" placeholder="yourname@yourcompany.com"/>
        </div>
    )
}

export default SplashPage;