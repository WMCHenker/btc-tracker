import React, { useRef, useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';


export default function ExplanationPanel({children}) {
        return(
        <>
            <div className='explain'>
                {children}
            </div>
            
        </>
        
    )
}