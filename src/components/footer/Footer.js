import React from 'react';
import timer_img from '../../assets/timer-icon.png';
import dish_img from '../../assets/dish-icon.png';
import dumbell_img from '../../assets/dumbell-icon.png';

const Footer = () => {
  return (
    <footer className='footer my-5rem'>
      <div className='container flex'>
        <div className='gym-info p-2rem'>
          <article>
            <img src={dumbell_img} alt='Private session' />
            <h5>Private Session</h5>
            <p>
              my create personal <br />
              training program where all <br /> bodies can move.
            </p>
          </article>
          <article>
            <img src={timer_img} alt='Private session' />
            <h5>Group Class</h5>
            <p>
              we offer array of <br /> different group fitness <br /> class
              types.
            </p>
          </article>
          <article>
            <img src={dish_img} alt='Private session' />
            <h5>Program & Diet</h5>
            <p>
              You need to begin <br /> thinking of the amount <br /> of protein.
            </p>
          </article>
        </div>

        <div className='extra-info ml-5rem'>
          <h4 className='mb-1rem'>Training <br /> Programs <br /> we offer for you.</h4>
          <p>
            Starting a fitness routine can be intimidating, but it helps to have
            an <br /> idea of what to expect before joining <br /> any class.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
