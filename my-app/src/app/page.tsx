import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div>
      <h1>Rachel</h1>
      <h1>Pastreich</h1>
      <p>Student at Boston University</p>
      <p>Bachelor's in Computer Science</p>
      <p>Kilachand Honors College</p>
      <Image
        src="/assets/home/profile.jpg"
        alt="Rachel Pastreich"
        width={200}
        height={200}
      />
    </div>
  );
}

export default Home;
