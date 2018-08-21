import React, { Fragment } from 'react';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton, ControlBar, VolumeMenuButton } from 'video-react';

export default ({ id, name, description, image, movie }) =>

<Fragment>
    <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={image} alt={name} width="500px" height="300"/> 
{/*        <Player autoPlay> 
            <source src={movie} />
            <BigPlayButton position="center" />
            <ControlBar autoHide={false}>
            <VolumeMenuButton vertical />
            </ControlBar>
        </Player> */}  
    </div>
</Fragment>
