import React from 'react';
import PieChart from './sub/dounuts';
import { TokenBanners } from './sub/token_banners';
import { TokenBanners2 } from './sub/token_banners2';

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
                <div className="token__container-cardInfo" style={{height:'200px'}}>
                    <div className='row' style={{display:'flex', flexFlow:'column'}}>
                        <div className="flux" style={{textAlign:'center'}}>THE </div>
                        <div className="neon" style={{textAlign:'center'}}>TOKEN </div>
                    </div>
                    <p className='bottom-space-sm' />
                    <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
                      
                    <img src='images/web/bsc1.png'  width="125px" alt=''  />
                    <a href={'https://bscscan.com/token/'}>
                      <h3 style={{fontSize: '10px', margin: '5px 0px 0px 0px', opacity:1}}>0x9999999999999999999999999999999999999999999</h3>
                    </a>
                    <h3 style={{fontSize: '10px', margin: '5px 0px 0px 0px', opacity:1}}>ERC20 standard</h3>
                    </div>
                  </div>
                  <p className='bottom-space-md' />
                <div className="token__container" style={{flexFlow: 'row', width: '300px', marginTop:'0px'}}>
                    <h2 style={{display: 'flex',fontSize: '20px', fontWeight: '900', textAlign: 'end'}}>
                        $BNB&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '35px',fontWeight: '100',textAlign: 'start'}}>
                            &emsp;REWARDS
                    </h2>
                  </div>
                  <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                        $X is on a trajectory to bring DeFi to the masses.  
                        Decentralized finance, which utilizes technologies to remove
                        intermediaries, middlemen, and banks from financial markets, 
                        are complicated systems to enter into.

                        $X primary goal is to make it simple to 
                        start earning passive income without having to understand the backend of the DeFi world.

                        The first step towards achieving that goal was 
                        to create the X token.
                        <br />
                        </h2>
                    </div>
                  </div>
                  <p className='bottom-space-sm' />
                    <TokenBanners />
                  <p className='bottom-space-sm' />

                    <div className='row' style={{flexFlow:'column'}}>
                      <h2 style={{fontSize: '25px', fontWeight: '900', textAlign: 'center'}}>
                            THINGS YOU NEED TO KNOW
                        </h2>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'-10px'}}>
                            LIGHTPAPER
                        </h2>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'5px'}}>
                        ↡
                        </h2>
                    </div>
                    <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                      It is an innovative Reflection Token: 
                        one that pays dividends in an already established token instead of our own. 
                        Our dividends are paid out in $BNB, the premier BSC Swap on the market and 
                        a company whose tokens are getting more valuable all the time.
                        <br />
                        </h2>
                    </div>
                  </div>
                  <p className='bottom-space-sm' />
                  <div className='row'>
                  <div className="tree">
                    <ul>
                      <li>
                        <a href="#">
                          <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                          X
                          <br /> Tokenomic
                          <br /> Tax
                          </h3>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              1% 
                              <br />Reflection
                              </h3>
                            </a>  
                            <ul>

                              <li>
                              <a href="#">
                                <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                auto redistributed to 
                                <br /> $x-coin holders.
                                </h3>
                              </a>  
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              1% 
                              <br />Pool
                              </h3>
                            </a>  
                            <ul>
                              <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  Pancakeswap
                                  <br /> Liquidity
                                  </h3>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              1% 
                              <br />Marketing
                              </h3>
                            </a>  
                            <ul>
                              <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  Service of further 
                                  <br />rewarding our community.
                                  </h3>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                              1% 
                              <br />Burn
                              </h3>
                            </a>  
                            <ul>
                              <li>
                                <a href="#">
                                  <h3 style={{fontSize: '15px',fontWeight: '100',textAlign: 'center'}}>
                                  Supply 
                                  <br />Deflation
                                  </h3>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                
                    <p className='bottom-space-sm' />
                    <div className='token__container'>
                      <div className='info__banner-card'>
                        <div className='info__banner-cardInfo'>
                        <h2>Sell Fee</h2>
                          <p style={{textAlign:'center', margin:'-10px 0 10px 0', padding:'15px'}} >An extra 4% fee is applied to all sells. This will allow us to reduce swing-trading and break whales’ control.</p>
                        </div>
                      </div>
                    </div>
                  <div className='bottom-space-md' />
                <div className="token__container" style={{flexFlow: 'column', width: '80vw', marginTop:'-10px'}}>
    
                  </div>
                  <div className='bottom-space-md' />
                  <img src='images/web/x.png' alt='' width="100px"  />

                  <div className='row'>
                      <h3 style={{fontSize: '17px', margin: '0px 0px -35px 0px', opacity:1}}>TOTAL SUPPLY</h3>
                  </div>
                  
                  <div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
                    <h2 style={{display: 'flex',fontSize: '40px', fontWeight: '800', textAlign: 'center'}}>
                    1&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '45px',fontWeight: '500',textAlign: 'center'}}>
                            &emsp;BILLION
                    </h2>
                  </div>
                  <PieChart
                          data={[{ key: "Burned: 51%", value: 51 }, 
                          { key: "PancakeSwap: 48%", value: 48 },
                          { key: "Investment Wallet: 2%", value: 2 }]}
                          label="✩ TOKEN ALLOCATION ✩"
                        />
                  <div className='bottom-space-md' />

                  <div className='row'>
                      <h3 style={{fontSize: '17px', margin: '0px 0px 0px 0px', opacity:1}}>slippage ≥ 15%</h3>
                  </div>
                  <div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
                    <h2 style={{display: 'flex',fontSize: '23px', fontWeight: '400', textAlign: 'center'}}>
                    20M max hodl&emsp;
                    </h2>
                    <hr width="3" size="50"/>
                    <h2 style={{fontSize: '20px',fontWeight: '400',textAlign: 'center'}}>
                            &emsp;500K max sell
                    </h2>
                  </div>
                  <div className='bottom-space-sm' />
                

                    <div className='row' style={{flexFlow:'column'}}>
                      <h2 style={{fontSize: '25px', fontWeight: '500', textAlign: 'center', letterSpacing:'8px'}}>
                      WHY CHOOSE X
                        </h2>
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', marginTop:'-10px'}}>
                        ✰HERE'S HOW WE SHINE A BRIGHTER FUTURE✰
                        </h2>
                    </div>
                    <div className="token__container">
                    <div className='token__container-section'>
                      <h2 style={{display: 'flex',fontSize: '14px', textAlign: 'justify'}}>
                      Dividends: 5% of every buy/sell is taken and redistributed to our holders. Hold $X tokens and earn BNB forever. 
                      A Minimum of 200,000 tokens is required in order to receive rewards.
                      <br /><br />
                      Auto Pay: You don’t need to claim your earned BNB. 
                      It’s automatically sent to your wallet. 
                      Note: in periods of lower volume this may take longer, but you always receive your BNB.
                      <br /><br />
                      Secured: The automatic liquidity system helps create a price floor (stability).
                      Initial Liquidity Provided is locked with DXLock.
                      The smart contract and it's forks being audited by TechRate, and currently onboarding for Certik Audit with 12 months of SkyNet. 
                      Our expereinced crypto team and code cosmonauts will ensure the continuos growth of this project
                        <br />
                        </h2>
                    </div>
                  </div>
                  <div className='bottom-space-sm' />
                  <TokenBanners2 />

              </div>
            </div>
          </div>
        </div>
    );
}