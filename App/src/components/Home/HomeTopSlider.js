import { useContext, useState, useRef, useCallback, useEffect } from 'react'
import React, { Component } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import promonfts from "../../utils/demo/promonft"


const InfiniteLooper = function InfiniteLooper({
    speed,
    direction,
    children,
}) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef(null);

    function resetAnimation() {
        if (innerRef?.current) {
            innerRef.current.setAttribute("data-animate", "false");

            setTimeout(() => {
                if (innerRef?.current) {
                    innerRef.current.setAttribute("data-animate", "true");
                }
            }, 10);
        }
    }

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const widthDeficit = parentWidth - width;

        const instanceWidth = width / innerRef.current.children.length;

        if (widthDeficit) {
            setLooperInstances(
                looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
            );
        }

        resetAnimation();
    }, [looperInstances]);


    /*
      6 instances, 200 each = 1200
      parent = 1700
    */

    useEffect(() => setupInstances(), [setupInstances]);

    useEffect(() => {
        window.addEventListener("resize", setupInstances);

        return () => {
            window.removeEventListener("resize", setupInstances);
        };
    }, [looperInstances, setupInstances]);

    useEffect(() => {
    }, [])

    return (
        <div className="looper" ref={outerRef}>
            <div className="looper__innerList" ref={innerRef} data-animate="true">
                {[...Array(looperInstances)].map((_, ind) => (
                    <div
                        key={ind}
                        className="looper__listInstance"
                        style={{
                            animationDuration: `${speed}s`,
                            animationDirection: direction === "right" ? "reverse" : "normal",
                        }}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
}

const HomeTopSlider = () => {
    const [sliderRef, setSliderRef] = useState(null)
    return (
        <>
            <InfiniteLooper speed="10" direction="right">
                {promonfts.map((nft, index) => (
                    <div className="contentBlock contentBlock--one" style={{ width: "200px", height: "200px" }} key={index}>
                        <div>
                            <img className="w-100 h-100" src={nft.imgSrc} width="200" height="200" alt="img" />
                        </div>
                    </div>
                ))}
            </InfiniteLooper>
        </>
    )
}

export default HomeTopSlider;