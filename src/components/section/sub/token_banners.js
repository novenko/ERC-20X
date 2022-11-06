import React from 'react';

export function TokenBanners() {
  return (
      <div className='container'>
          <div className='row'>
                <div to='' className='banner__wrapper'>
                  <div to='' className='banner__container'>
                        <a href='https://pancakeswap.finance/swap?outputCurrency=' className="banner__container-card effect04">
                        <img src='images/web/pancakeswap.png'  width="125px" alt=''  />
                        </a>
                        <a href='https://bscscan.com/token/' className="banner__container-card effect04">
                          <img src='images/web/bsc.png'  width="125px" alt=''  />
                        </a>
                        <a href='https://www.dextools.io/app/bsc/pair-explorer/' className="banner__container-card effect04">
                        <img src='images/web/dext.png'  width="125px" alt=''  />
                        </a>
                    </div>
                  </div>
                </div>
      </div>
  );
}