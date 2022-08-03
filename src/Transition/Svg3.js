import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import './CSS/Transitions.css'
const Svg3 = props => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const boxVariant = {
    hidden: { opacity: 0.2, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 3, ease: 'easeInOut' }
    },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="Transition-item">

      <motion.svg ref={ref} className={props.className} height={`${props.height}vh`} width={`${props.width}vw`} version="1.1" id="Capa_1" viewBox="0 0 382.402 382.402" >
        <g>
          <motion.path animate={control} variants={boxVariant}
            initial="hidden" d="M381.918,147.437c-1.323-4.074-5.122-6.831-9.401-6.831h-131.33l-40.582-124.9c-1.322-4.072-5.12-6.831-9.402-6.831
		s-8.08,2.759-9.403,6.831l-40.581,124.9H9.888c-4.282,0-8.081,2.756-9.404,6.831c-1.322,4.074,0.126,8.535,3.591,11.053
		l106.245,77.193l-40.582,124.9c-1.323,4.074,0.125,8.535,3.592,11.054c3.466,2.521,8.157,2.521,11.623,0l106.249-77.192
		l106.249,77.192c1.731,1.262,3.773,1.888,5.811,1.888c2.038,0,4.079-0.626,5.812-1.888c3.466-2.519,4.913-6.979,3.591-11.054
		l-40.58-124.9l106.242-77.193C381.791,155.972,383.241,151.511,381.918,147.437z M254.647,223.913
		c-3.465,2.519-4.913,6.979-3.591,11.054l33.402,102.791l-87.446-63.527c-1.732-1.26-3.774-1.887-5.812-1.887
		s-4.079,0.627-5.812,1.887l-87.447,63.527l33.403-102.791c1.323-4.074-0.126-8.535-3.592-11.054l-87.441-63.536H148.4
		c4.28,0,8.079-2.756,9.402-6.831L191.201,50.75l33.397,102.796c1.322,4.074,5.121,6.831,9.403,6.831h108.087L254.647,223.913z"/>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
      </motion.svg>



    </div >
  )
}

export default Svg3