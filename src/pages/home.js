/* Import statements */
import React from 'react';
import EcosystemBox from '../components/ecosystemBox';
import Subscribe from '../components/subscribe';
import PersonBox from '../components/personBox';
import TypistCycle from '../components/typist-cycle';

import {default as Images} from '../middleware/images';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='hero section'>
          <div className='container'>

            <div className='content-side'>
              <h1>Pay for your</h1>
              <TypistCycle
                content={[
                  'subscriptions',
                  'Netflix',
                  'Spotify',
                  'Rent',
                ]}
                numberOfCycles={-1} // loop indefinitely
                segmentDelay={1.2} // stop for 0.8s at end line
              />
              <h1>with crypto.</h1>

              <h5 className='description'>
                8x is a layer 2 Ethereum protocol that enables decentralised recurring payments.
              </h5>

              {/*<Subscribe/>*/}
            </div>

            <div className='image-side'>
              <img src={Images.subscriptionsiPhone}/>
            </div>

          </div>
        </div>

        <div className='hero-separator'>
          <img src={Images.waves}/>
        </div>

        <div className='payment section'>
          <div className='container'>
            <div className='pay-with-side'>
              <p className='label'>Pay with:</p>
              <div className='items-container'>
                <img src={Images.visa}/>
                <img src={Images.mastercard}/>
                <img src={Images.paypal}/>
                <img src={Images.protocolCard}/>
              </div>
            </div>
            <div className='description'>
              <h1>The future of payments for millenials.</h1>
              <h6>More than 50% of crypto users are between the ages of 18-33 years old.</h6>
            </div>
          </div>
        </div>

        <div className='partnership section'>
          <div className='container'>
            <h2 className='text'>We’re partnered with</h2>
            <img src={Images.makerWhite}/>
            <img src={Images.bitfwdWhite}/>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
