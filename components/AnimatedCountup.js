import React, { useEffect, useState } from 'react'
import AnimatedNumber from 'react-animated-number'

function AnimatedCountup({ value }) {
  const [numValue, setNumValue] = useState(0);

  useEffect(() => {
    const updateValue = async () => {
      setNumValue(value)
    };
    updateValue();
  })


  return (
    <AnimatedNumber
      value={numValue}
      duration={2000}
      formatValue={n => n.toFixed(0)}
      frameStyle={percentage => percentage > 20 && percentage < 80 ? {opacity: 0.8} : {opacity: 1}}
    />
  )
}
export default AnimatedCountup