import React  from 'react';
import { TokenBanners } from './sub/token_banners';
export function Footer() {
return (
<div className='footer'>
   <p className='bottom-space' />
   <p className="bottom-space-xsm" />
   <div className='row'>
      <ul>
         <li><a href="https://www.twitter.com/">Twitter</a></li>
         <li><a href="https://t.me/">Telegram</a></li>
         <li><a href="https://github.com/">Source Code</a></li>
         <li>
            <p style={{fontSize: '20px', margin: '-5px 0px 0px 0px', opacity:1}}>☄️</p>
         </li>
      </ul>
   </div>
   <div className='row' style={{'flexFlow':'column'}}>
      <div className='col'>
        <TokenBanners />
      </div>
   </div>
   <div className='row'>
      <div className='col'>
         <p style={{display: 'flex',fontSize: '14px', textAlign: 'center'}}> © X-COIN.NET All Rights Reserved.</p>
      </div>
   </div>
   <p className='bottom-space-md' />
   <div className="token__container">
      <div className='token__container-section'>
         <h2 style={{display: 'flex',fontSize: '10px', textAlign: 'center'}}>
         Any opinions, news, research, analyses, prices, or other information contained on this website 
         is provided as general market commentary, and does not constitute investment advice. 
         </h2>
      </div>
   </div>
</div>
);
}