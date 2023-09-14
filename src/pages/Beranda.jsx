import { useState, useEffect } from "react";

const images = [
  "pic-784515.webp",
  "pic-458564.webp",
  "pic-432342.webp",
  "pic-154695.webp",
  "pic-154256.webp"
];


const Beranda = () => {

  const [bgImage, setBgImage] = useState(getRandomImg()); // Use state to manage the background image

  useEffect(() => {
    // Use useEffect to set up the interval for updating the background image
    const intervalId = setInterval(() => {
      let newBgImage = getRandomImg();
      while (newBgImage.replace(/[^a-z0-9]+/gi, "") === bgImage.replace(/[^a-z0-9]+/gi, "")) {
        newBgImage = getRandomImg();
      }
      setBgImage(newBgImage); // Update the background image using state
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
    
  }, [bgImage, setBgImage]);

  function getRandomImg() {
    const index = Math.floor(Math.random() * images.length);
    return `url('/img/${images[index]}')`;
  }


  return (
    <div>
      <section className="max-w-6xl mx-auto">

        <div className="animate-logo" style={{ "--data-bg": bgImage }}></div>

        <header >
          <h1 className="text-2xl font-bold">Welcome To Nongkrong IT</h1>
        </header>

        <article>
          <p>

          </p>
        </article>

      </section>
    </div>
  );
};

export default Beranda;