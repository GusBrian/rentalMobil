// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

//Rani
import Image from 'next/image';
import React from 'react';

// Komponen Navbar
const Navbar = () => (
  <nav className="navbar">
    <h1>Car Rental</h1>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#cars">Our Cars</a></li>
      <li><a href="#team">Our Team</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

// Komponen Tagline
const Tagline = () => (
  <section className="tagline">
    <h2>Temukan Rute Anda, Kami Sediakan Mobilnya!</h2>
    <p>Dari perjalanan bisnis hingga liburan keluarga, kami menawarkan armada mobil yang beragam dan berkualitas, siap mengantar Anda ke tujuan dengan nyaman dan aman</p>
  </section>
);

// Komponen Hero Image
const HeroImage = () => (
  <div className="hero-image">
    <Image src="/hero-image.jpg" alt="Hero Image" layout="responsive" width={500} height={300} />
  </div>
);

// Komponen CarCard
const CarCard = ({ imageSrc, name, description }) => (
  <div className="car-card">
    <Image src={imageSrc} alt={`${name} Image`} layout="responsive" width={500} height={300} />
    <h3>{name}</h3>
    <p>{description}</p>
    <button>Rent Now</button>
  </div>
);

// Komponen Rating
const Rating = ({ score, review }) => (
  <div className="rating-card">
    <h4>Rating: {score}</h4>
    <p>{review}</p>
  </div>
);

// Komponen Our Team
const TeamCard = ({ imageSrc, name, position }) => (
  <div className="team-card">
    <Image src={imageSrc} alt={`${name} Image`} layout="responsive" width={500} height={300} />
    <h4>{name}</h4>
    <p>{position}</p>
  </div>
);

// Komponen About Section
const AboutSection = () => (
  <section className="about-section">
    <div className="about-content">
      <h2>Mobil Terbaik, Kenyamanan Terjamin</h2>
      <p>Kami menyediakan mobil-mobil berkualitas untuk setiap kebutuhan perjalanan Anda. Dengan perawatan optimal dan pilihan armada yang luas, kami pastikan kenyamanan dan keamanan di setiap perjalanan, baik untuk urusan bisnis maupun liburan bersama keluarga</p>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?..." width="400" height="300" loading="lazy"></iframe>
    </div>
  </section>
);

// Komponen Footer
const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <h4>Misi Perusahaan</h4>
      <p>Kami menyediakan mobil-mobil berkualitas untuk setiap kebutuhan perjalanan Anda. Dengan perawatan optimal dan pilihan armada yang luas, kami pastikan kenyamanan dan keamanan di setiap perjalanan, baik untuk urusan bisnis maupun liburan bersama keluarga</p>
    </div>
    <div className="footer-right">
      <h4>Contact Us</h4>
      <p>Email: info@carrental.com</p>
      <p>Phone: +62 812-3456-7890</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div>
      <Navbar />
      <Tagline />
      <HeroImage />

      {/* Bagian Best Cars */}
      <section id="cars" className="best-cars">
        <h2>Best Cars for Rent</h2>
        <div className="car-grid">
          <CarCard imageSrc="/toyota-avansa.png" name="Toyota Avanza" description="Rp700.000/Hari" />
          <CarCard imageSrc="/honda-jaz.png" name="Honda Jazz" description="Rp600.000/Hari" />
          <CarCard imageSrc="/suzuki-ertiga.png" name="Suzuki Ertiga" description="Rp700.000/Hari" />
          <CarCard imageSrc="/daihatsu-terios.png" name="Daihatsu Xenia" description="Rp550.000/Hari" />
          <CarCard imageSrc="/mitsubishi-outlander.png" name="Toyota Fortuner" description="Rp550.000/Hari" />
          <CarCard imageSrc="/honda-brio.png" name="Mitsubishi Pajero" description="Rp500.000/Hari" />
        </div>
      </section>

      {/* Bagian Rating */}
      <section className="ratings">
        <h2>Customer Ratings</h2>
        <div className="rating-grid">
          <Rating score="4.8/5" review="Great service and comfortable cars!" />
          <Rating score="4.6/5" review="Affordable prices and excellent experience!" />
        </div>
      </section>

      {/* Bagian Our Team */}
      <section id="team" className="our-team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <TeamCard imageSrc="/brian.jpg"name="Brian" position="FOUNDE + GRAPHIC DESIGN" />
          <TeamCard imageSrc="/reby.jpg" name="Reby" position="CO FOUNDER + GRAPHIC DESIGN" />
          <TeamCard imageSrc="/rani.jpg" name="Rani" position="GRAPHIC DESIGN" />
        </div>
      </section>

      {/* Bagian About dengan Google Maps */}
      <section id="about" className="about-section">
        <AboutSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );


}
