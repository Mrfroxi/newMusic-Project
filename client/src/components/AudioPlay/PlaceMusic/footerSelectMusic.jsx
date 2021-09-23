import React from 'react'
import './FooterSelectMusic.scss'
import { Link } from 'react-router-dom'

function FooterSelectMusic() {
    return (
        <div className={'Footer_Select_Music'}>
            <Link to={'/main'}>Select a music to continue</Link>
        </div>
    )
}

export default FooterSelectMusic
