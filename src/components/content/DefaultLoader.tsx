"use client";
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

const DefaultLoader: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);  // Ensure null is part of the type
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (lineRef.current) {
      // Start the width animation
      let width = 5; // Starting width
      const targetWidth = 100; // Ending width (100%)
      const interval = setInterval(() => {
        if (lineRef.current && width <= targetWidth) {
          lineRef.current.style.width = `${width}%`; // Update the width
          width += 1; // Increase the width by 1% each interval
        } else {
          clearInterval(interval); // Stop the animation once the target width is reached
        }
      }, 10); // Update every 10ms for a smooth effect
    }
    // Number animation logic
    if (logoRef.current) {
      let count = 1; // Starting value
      const target = 100; // Ending value
      const interval = setInterval(() => {
        if (count <= target) {
          // Safely update the innerText if logoRef.current is not null
          logoRef.current!.innerText = `${count}%`; 
          count++;
        } else {
          clearInterval(interval); // Stop the animation once it reaches 100
        }
      }, 10); // Update every 50ms
    }

    // Text transformation logic remains the same
    if (textRef.current) {
      const textElement = textRef.current.querySelector('p');
      if (textElement) {
        const transformedText = textElement.innerText.split("").map((char, i) => {
          return `<span  style="transform:rotate(${i * 12}deg)">${char}</span>`;
        }).join("");
        textElement.innerHTML = transformedText;
      }
    }
  }, []);

  return (
    <div className="h-dvh  overflow-hidden">
      <div className="mx-10 py-20">
        <div className="flex justify-between relative">
          <div>
            <div className="max-w-[auto] border border-zinc-800 text-8xl mb-10">
              <div className="relative">
                <div className="border border-b border-l-0 border-r-0 font-bowlby border-zinc-800 border-t-0">
                  <h1 className="p-2">just pay</h1>
                </div>
                <div className="font-dmMono border-zinc-800 uppercase font-light border border-b border-l-0 border-r-0 border-t-0">
                  <h1 className="p-2">anything</h1>
                </div>
                <div className="font-bowlby">
                  <h1 className="p-2">globally</h1>
                </div>
              </div>
            </div>

            <div className="text-5xl border border-zinc-800 flex font-playWright uppercase">
              <div className="border border-l-0 border-t-0 border-b-0 border-zinc-800">
                <h1 className="p-2">site is</h1>
              </div>

              <div>
                <h1 className="p-2 font-dmMono">loading</h1>
              </div>
            </div>

            <div className='absolute -top-5 left-80 rotate-45 h-5'>
              <Image src="/images/justpay.png" className='h-[50vh] w-[50vw] object-contain' alt="sticker" width={300} height={200}/>
            </div>

          </div>

          <div className="circle ">
            <div 
              ref={logoRef} 
              className="logo text-5xl grid place-content-center font-dmMono"
            >
              1%
            </div>
            <div className="text font-dmMono" ref={textRef}>
              <p>just pay - everything globally</p>
            </div>
          </div>

        </div>
      </div>

      <div className="mx-10">
      <div ref={lineRef} className='w-full h-4 bg-black '/>
      </div>

    </div>
  );
};

export default DefaultLoader;
