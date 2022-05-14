import {PlayBtn , AppleBtn ,Dumbell , Play_circle} from '../../Icons';
import Img from '../../assets/hero-section-bc.png';


const HeroSection = () => {
  return (
    <section className='hero-section px-1rem'>
      <div className='container flex'>
        <div className='left-section'>
          <h3 className='heading'>
            Hey!
            <br />
            I'M EMMA
          </h3>
          <p className='mt-1rem text'>"If it doesn't challenge you, it won't change you."</p>
          <p className='text'>
            It's my Slogan and I will help you be the best you can be <br /> I'm Emma
            Jones. I've been a Fitness Trainer since 2010, <br /> Fitness,Health and
            Lifestyle Influencer.
          </p>
          <div className="mt-2rem buttons">
              <div className='mr-2rem playStore-btn'> 
              <PlayBtn />
                 <span className='ml-1rem'>
                  Get it on 
                  <br />
                   Google Play
                 </span>
              </div>
              <div className='ml-2rem appleStore-btn'> 
              <AppleBtn />
                 <span className='ml-1rem'>
                  Get it on 
                  <br />
                   Apple Store
                 </span>
              </div>
             
          </div>
        </div>
        <div className='right-section'>
            <img src={Img} alt="img"/>
             <div className="buttons">
            <div className='session-btn my-2rem'> 
              <Dumbell />
                 <span className='ml-1rem'>
                  <span>+20</span>
                  <br />
                   Private Session
                 </span>
              </div>

            <div className='tutorial-btn'> 
              <Play_circle />
                 <span className='ml-1rem'>
                  <span>+130</span>
                  <br />
                   Video Tutorials
                 </span>
              </div>
             </div>
           
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
