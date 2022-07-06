import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
             <h2 >Job Portal</h2>
             <h4>Develop job portal using react js, firebase and material ui</h4>
          </div>
          <div>
             <h2 >Real Estate Broker system</h2>
             <h4>Develop web based Real Estate Broker system using c# </h4>
          </div>
          <div>
             <h2 >Smart Shopping</h2>
             <h4>Develop Smart Shopping</h4>
          </div>
          <div>
             <h2 >Ecommerce website</h2>
             <h4>Develop front-end Ecommerce website using angulare framework </h4>
          </div>
          <div>
             <h2 >Web Based Primary School System</h2>
             <h4>Develop Web Based Primary School System using php and mysql</h4>
          </div>
          {/* <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS' */}

          {/* /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
