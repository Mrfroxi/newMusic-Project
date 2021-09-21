import React, {useContext} from 'react';
import '../pages/style/FooterSelectMusic.scss';
import {ThemeContext} from "../pages/style/Theme";
import {Link} from "react-router-dom";

function FooterSelectMusic() {

    return (
        <div  className={"Footer_Select_Music"}>
            <Link to={"/main"}>
                Select a music to continue
            </Link>
        </div>
    );
}

export default FooterSelectMusic;