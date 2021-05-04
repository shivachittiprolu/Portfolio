import React, { Component } from 'react';
import ReactDOM from 'react';
import SOCIAL_PROFILES from '../src/data/SocialProfiles';

class SocialProfiles extends Component{
    render(){
        return (
            <div>
                <h2>
                    Connect with me!
                </h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return <SOCIAL_PROFILE key ={SOCIAL_PROFILE.id} SocialProfile={SOCIAL_PROFILE}></SOCIAL_PROFILE>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;