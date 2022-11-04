
import React, { useState, useEffect } from 'react';
import { TokenBanners2 } from './sub/token_banners2';



export function Header() {

  return (
      <nav className='nav'>
        <p className="bottom-space-sm" />
        <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
          <div className='mobile-shrink'>
            <div className="title">
              <div className='cool-text'>X-COIN</div>
            </div>
          </div>
          <TokenBanners2 />
        </div>
          <p className="bottom-space-xsm" />
          <div className='row'>
            <ul>
                <li><a href="https://www.twitter.com/">Twitter</a></li>
                <li><a href="https://discord.gg/">Discord</a></li>
                <li><a href="https://t.me/">Telegram</a></li>
                <li><a href="https://github.com/">Source Code</a></li>
                <li>
                    <p style={{fontSize: '20px', margin: '-5px 0px 0px 0px', opacity:1}}>☄️</p>
                </li>
            </ul>
          </div>
        <p className="bottom-space-sm" />
      </nav>
  );
}