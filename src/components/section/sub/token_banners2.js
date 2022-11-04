import React from 'react';

export function TokenBanners2() {
  return (
      <div className='container'>
          <div className='row'>
                <div to='' className='banner__wrapper'>
                  <div to='' className='banner__container'>
                        <a href='https://pancakeswap.finance/8'  className="btn effect04">
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          BUY
                          </h2>
                        </a>

                        <a href='https://bscscan.com/token/'  className="btn effect04">
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          CONTRACT
                          </h2>
                        </a>


                        <a href='https://www.dextools.io/app/bsc/pair-explorer/'  className="btn effect04">
                        <h2 style={{fontSize: '12px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          CHART
                          </h2>
                        </a>
                    </div>
                  </div>
                </div>
      </div>
  );
}