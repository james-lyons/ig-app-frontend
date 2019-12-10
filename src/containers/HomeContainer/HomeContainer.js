import React from 'react';
import HomeComponent from '../../components/HomeComponent/HomeComponent';

class Home extends React.Component {
    state = {

    };
    
    render() {
        return (
            <>
                <div>This is the home container</div>
                <HomeComponent />
            </>
        );
    };
};

export default Home;