import React from "react";

import "./Compair.css";

import cour03 from "./../../assets/images/Courses/react.png";
import cour02 from './../../assets/images/Courses/html.png';

import { CompairItem } from "../CompairItem/CompairItem";

const compairData = [
  {
    title: " دوره آموزش جامع React native",
    image: cour03,
    teacher: "محمد بحرالعلوم",
    capacity: 40,
    studentCount: 10,
    rate: 4.5,
    cost: "000 350 ت",
    start: '1401/08/12',
    section: '6:30 (17 ویدئو)'
  },

  {
    title: "دوره آموزش جامع Html & Css",
    image: cour02,
    teacher: "محمد بحرالعلوم",
    capacity: 40,
    studentCount: 15,
    rate: 4.7,
    cost: "000 150 ت",
    start: '1401/05/23',
    section: '5:30 (25 ویدئو)'
  },
];

const Compair = () => {

    const listCompairer = {};

    if(compairData[0].rate > compairData[1].rate){
        listCompairer['rate'] = 1;
    }
    else if(compairData[0].rate < compairData[1].rate){
        listCompairer['rate'] = 2;
    }
    else{
        listCompairer['rate'] = 0;
    }

    if(compairData[0].cost < compairData[1].cost){
        listCompairer['cost'] = 1;
    }
    else if(compairData[0].cost > compairData[1].cost){
        listCompairer['cost'] = 2;
    }
    else{
        listCompairer['cost'] = 0;
    }

    if(compairData[0].studentCount > compairData[1].studentCount){
        listCompairer['studentCount'] = 1;
    }
    else if(compairData[0].studentCount < compairData[1].studentCount){
        listCompairer['studentCount'] = 2;
    }
    else{
        listCompairer['studentCount'] = 0;
    }

    if(compairData[0].capacity > compairData[1].capacity){
        listCompairer['capacity'] = 1;
    }
    else if(compairData[0].capacity < compairData[1].capacity){
        listCompairer['capacity'] = 2;
    }
    else{
        listCompairer['capacity'] = 0;
    }

    if(compairData[0].start < compairData[1].start){
        listCompairer['start'] = 1;
    }
    else if(compairData[0].start > compairData[1].start){
        listCompairer['start'] = 2;
    }
    else{
        listCompairer['start'] = 0;
    }

    if(compairData[0].section > compairData[1].section){
        listCompairer['section'] = 1;
    }
    else if(compairData[0].section < compairData[1].section){
        listCompairer['section'] = 2;
    }
    else{
        listCompairer['section'] = 0;
    }

    console.log(listCompairer);






  return (
    <div>
        {compairData.length === 2 ? <div className="CompairItemContainer">
        <CompairItem couurseInfo={compairData[0]} comperList={listCompairer} itemId={1}/>
        <CompairItem couurseInfo={compairData[1]} comperList={listCompairer} itemId={2}/>
      </div> : <div> دوره ای برای مقایسه انتخاب نشده است </div>}
      
    </div>
  );
};

export { Compair };
