import React from "react";
import Bounded from "../../shared/Bounded";
import { exploreSection } from "@/app/data";
import Image from "next/image";
import { Heading } from "../../shared/Heading";

function Explore() {
  return (
    <>
      <section className="article bg-softBlend">
      <Heading className="font-bowlby text-brand-gray flex  justify-center bitems-center ">what we offer</Heading>
        {exploreSection.map(({image,description},index)=>(
          <div className="font-dmMono" key={index}>
              <Image  src={image} alt={image} width={500} height={150} />
              <p>{description}</p>
          </div>
        ))}
      </section>
      </>

  );
}

export default Explore;


