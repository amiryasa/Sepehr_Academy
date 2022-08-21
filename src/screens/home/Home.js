import * as React from 'react';

import { HomeServices } from '../../components/HomeServices/HomeServices';
import { HomeCategory } from '../../components/HomeCategory/HomeCategory';
import { HomeCources } from '../../components/HomeCources/HomeCources';
import { HomeNews } from '../../components/HomeNews/HomeNews';
import { HomeTeacher } from '../../components/HomeTeacher/HomeTeacher';
import { HomeIdeas } from '../../components/HomeIdeas/HomeIdeas';
import { HomeIntro } from '../../components/HomeIntro/HomeIntro';

import "./index.scss";
import './../..//assets/fonts/fonts.css';


const Home = () => {
    
  return (
    <div className="home">
      <HomeIntro />
      <HomeServices />
      <HomeCategory />
      <HomeCources />
      <HomeNews />
      <HomeTeacher />
      <HomeIdeas />
    </div>
  );
};
export { Home };
