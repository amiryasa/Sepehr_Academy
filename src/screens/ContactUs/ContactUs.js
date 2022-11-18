import React from 'react';


import './ContactUs.css';

import pic01 from './../../assets/images/AboutUs/bhr.jpg';
import pic02 from './../../assets/images/AboutUs/hnz.jpg';
import pic03 from './../../assets/images/AboutUs/arn.jpg';
import pic04 from './../../assets/images/AboutUs/04.jpg';
import pic05 from './../../assets/images/AboutUs/05.jpg';
import pic06 from './../../assets/images/AboutUs/06.jpg';

import photo01 from './../../assets/images/AboutUs/pro01.png';
import photo02 from './../../assets/images/AboutUs/pro02.png';
import photo03 from './../../assets/images/AboutUs/pro03.png';
import photo04 from './../../assets/images/AboutUs/pro04.png';

import { ContactUsIntro } from '../../components/ContactUsIntro/ContactUsIntro';

const teacherData=[
  {
    name:'دکتر محمد بحرالعلوم',
    description:"مدیریت آموزشگاه و مدرس دوره جامع فرانت",
    picture:pic01,
  },
  {
    name:'مهندس نظری',
    description:"طراح باسابقه و مدرس دوره‌های طراحی سایت",
    picture:pic02,
  },
  {
    name:'مهندس نائیجیان',
    description:"توسعه‌دهنده ارشد فرانت و مدرس آموزشگاه",
    picture:pic03,
  },
  {
    name:'مهندس صفری',
    description:" مدرس باتجربه آموزشگاه و تدریس دوره‌های فرانت",
    picture:pic04,
  },
  {
    name:' مهدی اصغری',
    description:"  توسعه‌دهندی فرانت و مدرس دوره ری اکت",
    picture:pic05,
  },
  {
    name:' محسن اسفندیاری',
    description:"توسعه‌دهنده ری اکت و مدرس آموزشگاه",
    picture:pic06,
  },
]

const PropertyData=[
  {
    name:'تدریس جامع',
    description:"  تدریس همه جانبه یکی از ویژگی‌های مهم اکادمی است که باعث تمایز ما می‌شود.",    picture:photo01,
  },
  {
    name:'همگام با تکنولوژی',
    description:"توجه به تکنولوژی یکی از ویژگی‌های مهم اکادمی است که باعث تمایز ما می‌شود.",
    picture:photo02,
  },
  {
    name:'اساتید مجرب',
    description:"  بهره‌بردن از اساتید حرفه‌ای یکی از ویژگی‌های مهم اکادمی است که باعث تمایز ما می‌شود.",    picture:photo03,
  },
  {
    name:'معرفی به بازار',
    description:" معرفی نیرو به بازارکار یکی از ویژگی‌های مهم اکادمی است که باعث تمایز ما می‌شود.",    picture:photo04,
  },
]

const ContactUs = () => {
  return (
    <div className="ContactUsContainer">
        <ContactUsIntro />
        {/* <ContactUsContainer data={teacherData} properties={PropertyData}/> */}
    </div>
  )
}

export {ContactUs};