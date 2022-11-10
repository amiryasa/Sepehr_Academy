import "./destroy.css"
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from "react";
import { usePromiseTracker } from "react-promise-tracker";


export default function Loading() {
    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {
        anime({
            targets: '.myBlock',
            scale: [
                { value: .2, easing: 'easeOutSine', duration: 400 },
                { value: 1, easing: 'easeInOutQuad', duration: 1000 }
            ],
            delay: anime.stagger(200, { grid: [3, 3], from: 'center' }),
            loop: true
        });
    },)



    return (
        <>
            {promiseInProgress &&

                <div id="allLoading">
                    <div id="container">

                        <div className="myBlock c1"></div>
                        <div className="myBlock c2"></div>
                        <div className="myBlock c3"></div>
                        <div className="myBlock c4"></div>
                        <div className="myBlock c5"></div>
                        <div className="myBlock c6"></div>
                        <div className="myBlock c7"></div>
                        <div className="myBlock c8"></div>
                        <div className="myBlock c9"></div>

                    </div>
                </div>
            }

        </>
    )
}
