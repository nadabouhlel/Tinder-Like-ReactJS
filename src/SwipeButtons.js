import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import "./SwipeButtons.css";
import { IconButton } from '@mui/material';
function SwipeButtons() {
    return (
        <div className="SwipeButtons">

 { /*i rapped the buttons in iconbutton to make it clickable  */}
<IconButton className="swipeButtons__repeat">
    <ReplayIcon fontSize="large"/>
</IconButton>
<IconButton className="swipeButtons__leave">
   <CloseIcon fontSize="large"/>
</IconButton>
<IconButton className="swipeButtons__star">
   <StarRateIcon fontSize="large"/>
</IconButton>
<IconButton className="swipeButtons__heart">
   <FavoriteIcon fontSize="large"/>
</IconButton>
<IconButton className="swipeButtons__lightning">
   <FlashOnIcon fontSize="large"/>
</IconButton>

        </div>
    );
};

export default SwipeButtons
 