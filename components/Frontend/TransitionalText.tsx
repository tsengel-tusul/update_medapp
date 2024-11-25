 "use client"
 
 import React from 'react'
 import TextTransition, { presets } from 'react-text-transition';

 export default function TransitionalText() {
    const TEXTS = ['хурдан', 'хялбар', 'найдвартай'];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
      <h1>
        <TextTransition  className="text-blue-500" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </h1>
    );
   
    
 }
 