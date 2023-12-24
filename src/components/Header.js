import React from 'react'

const Header = () => {
    return (
        <header>
            <div>
                <div className='header-wrapper'>
                    <div className='logo-left'>
                        <img src='https://assessment.churchtechtoday.com/static/media/logo-left.29d686a3ec1469294cf2.png'
                            alt='Logo' />
                    </div>
                    <div className='assessment-title desktop'>
                        <p class="logo-text">AI Pulse Check</p>
                    </div>
                    <div className='logo-right'>
                        <img height="67.5" width="auto" src='https://i.ibb.co/CzXjrBg/studio137icn.png' alt='Bleat' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header