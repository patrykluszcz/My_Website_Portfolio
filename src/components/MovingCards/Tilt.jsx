import React, {useEffect, useRef} from "react";
import Tilt from 'vanilla-tilt'

const VanillaTilt = ({options, ...rest}) => {
const tilt = useRef(null);

useEffect(() => {
    Tilt.init(tilt.current, options)
}, [options])

return <div ref={tilt} {...rest}></div>
}

export default VanillaTilt;