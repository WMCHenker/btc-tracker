import React, { useRef, useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


export default function ExplanationPanel({children}) {
    const toanim = useRef(null);

    const [i, setI] = useState(null)
    const [classes, setClasses] = useState('explain')

    const onEnter = () => {
        if(i === 0){
            setI(i++)
        } else {
            setClasses('slideIn')
        }
    }

    useEffect(() =>{
    }, [classes])

    return(
        <>
            <ScrollTrigger className={classes} ref={node => toanim.current = node}
                onEnter={(onEnter)}
            >
                {children}
            </ScrollTrigger>
        </>
    )
}