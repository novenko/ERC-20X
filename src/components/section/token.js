import React from 'react';
import Tweet from '../../assets/textures/tweet.png'
import { TokenBanners } from './sub/token_banners';
export const data = {
labels: ['PancakeSwap', 'Dev', 'Marketing', 'Advisors'],
datasets: [
{
label: '# of Votes',
data: [12, 19, 3, 5],
backgroundColor: [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)',
],
borderColor: [
'rgba(255, 99, 132, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
],
borderWidth: 1,
},
],
};
export function Token() {
return (
<div className='container'>
<p className="bottom-space-sm" />
<div className='token__section'>
   <div className='token__wrapper'>
      <div className="token__container-card">
         <div className="token__container">
            <div className='token__container-section'>
               <div className='row' style={{flexFlow:'column'}}>
                  <h2 style={{fontSize: '35px', fontWeight: '300', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'15px', lineHeight:'35px'}}>
                  WHAT IS <i>X</i>-<b>COIN</b></h2>
               </div>
               <div className='row' style={{flexFlow:'column'}}>
                  <h3 style={{ textAlign: 'center', fontFamily:'Montserrat', fontSize: '19px'}}>
                  The best of Elon - Meme Token.
                  <br />(🐦TWITTER + 🐶DOGE + 🚀SPACEX + 🔥MEMES)  
                  <br />A decentralised community with instant holder rewards.
                  <br />
                  </h3>
               </div>
            </div>
         </div>
         <p className='bottom-space-sm' />
         <div className='row' style={{flexFlow:'column'}}>
                  <h2 style={{fontSize: '35px', fontWeight: '300', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'15px', lineHeight:'35px'}}>
                  HOW DID <i>X</i>-<b>COIN</b></h2>
               </div>
              <a href={'https://twitter.com/elonmusk/status/1577428272056389633'}>
              <img src='images/web/tweet.png'  width="350px" alt=''  />
              </a>
            <TokenBanners />
         <p className='bottom-space-sm' />
         <div className='row' style={{flexFlow:'column'}}>
                  <h2 style={{fontSize: '35px', fontWeight: '300', textAlign: 'center', fontFamily:'Montserrat', letterSpacing:'15px', lineHeight:'35px'}}>
                  <i>ROAD</i><b>MAP</b></h2>
               </div>
         <div style={{maxWidth: '1000px', minWidth:'300px', fontFamily:'Montserrat'}}>
         <div className='roadmap'>
            <p style={{ fontSize: '15px', textAlign:'end', fontFamily:'Montserrat'}}>Perpetual marketing and community growth</p>
            <p style={{textAlign:'end',fontFamily:'Montserrat', fontFamily:'Montserrat'}}>
               Social media presence expansion. Community discussions and social calls plans. Community giveaways. Social channels launch.
            </p>
         </div>
         <div className='roadmap'><p style={{ fontSize: '15px', textAlign:'start', fontFamily:'Montserrat'}}>Test - Deploy - Launch & Lock</p>
            <p style={{textAlign:'start', paddingLeft:'25px', fontFamily:'Montserrat'}}>The $X-COIN token will be used as an internal currency within our platform. 
            Each token holder will receive voting rights correspondingly to their token share and will be able to 
            directly participate in operational management and strategic development of the entire project.
            </p>
         </div>
         <div className='roadmap'><p style={{fontSize: '15px', textAlign:'end', fontFamily:'Montserrat'}}>Investor HUB</p>
            <p style={{textAlign:'end', paddingRight:'25px', fontFamily:'Montserrat'}}>Launch of our Investor's HUB platform and private VR space estates.
            </p>
         </div>
         <div className='roadmap'><p style={{fontSize: '15px', textAlign:'start',fontFamily:'Montserrat'}}>Opensource Charity Voting</p>
            <p style={{textAlign:'start', paddingLeft:'25px',fontFamily:'Montserrat'}}>Not leaving others behind is the fundation of our civilization.
            Opensource donations to charities and fundations of community choosing.
            </p>
         </div>

      </div>
      <div style={{maxWidth: '1000px', minWidth:'300px', fontFamily:'Montserrat'}}>
      <p style={{ fontSize:'14px', textAlign:'start' , textAlign:'center', paddingRight:'25px',fontFamily:'Montserrat'}}>
            We value our community above all else and want all of you to be a big part of moving the project forward in the future.
            We are more than just a Investment Token project, we are delivering purpose and value to our community long term.
            More importantly we want to be make significant contributions toward moving humanity forward. 
            Holders will be considered part of the HUB and have access to exclusive 
            airdrops, prizes and future collections. </p>
      </div>
      
         <div className='row' style={{flexFlow:'column'}}>
            <h2 style={{fontSize: '25px', fontWeight: '900', textAlign: 'center'}}>
            Want To Know more about us?
            </h2>
         </div>
         <div className='row' style={{flexFlow:'row'}}>
         <a href='https://t.me'  className="btn effect04">
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          JOIN US NOW
                          </h2>
                        </a>
         </div>
         </div>
      </div>
   </div>
</div>
);
}