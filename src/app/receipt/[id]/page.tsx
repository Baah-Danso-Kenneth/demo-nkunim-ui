"use client";

import React, { useRef, useEffect } from "react";

function Page() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Function to generate the jagged clip path
  const generateJaggedClipPath = (width: number) => {
    const segments = Math.floor(width / 10); // Adjust for frequency
    let points: string[] = [];

    // Create alternating jagged edges (zigzag)
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * 100; // Calculate % for width
      const y = i % 2 === 0 ? 2 : 5; // Alternate between 2% and 5%
      points.push(`${x}% ${y}%`);
    }

    // Duplicate for the bottom edge, but inverted
    for (let i = segments; i >= 0; i--) {
      const x = (i / segments) * 100;
      const y = i % 2 === 0 ? 98 : 95;
      points.push(`${x}% ${y}%`);
    }

    return `polygon(${points.join(", ")})`;
  };

  // Function to apply the clip path
  const applyClipPath = () => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      const clipPath = generateJaggedClipPath(width);
      cardRef.current.style.clipPath = clipPath;
    }
  };

  // UseEffect to handle component mount and resize events
  useEffect(() => {
    applyClipPath(); // Apply clip path on load

    const handleResize = () => {
      applyClipPath(); // Reapply clip path on window resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-3xl text-zinc-800 h-screen grid">
      <div className="place-content-center">
        <div
          ref={cardRef}
          className="place-self-center max-w-3xl h-auto p-5 receipt-card font-dmMono bg-softBlend shadow-lg rounded-lg overflow-hidden"
        >
          <div className="receipt-title">
            <h1 className="font-bowlby">Receipt</h1>
          </div>

          <div className="receipt-header">
            <p>Store: XYZ store</p>
            <p>Date: 17/10/2024</p>
          </div>

          <div className="receipt-items">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>$10.00</td>
                  <td>Accepted</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>$15.00</td>
                  <td>Accepted</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td>$10.50</td>
                  <td>Accepted</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="receipt-total flex justify-between mt-4">
            <p>Total:</p>
            <p>$35.50</p>
          </div>

          <div className="receipt-footer mt-4 text-center">
            <p>Thank you for your transaction!!!</p>
            <p>Have a nice day!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
