// // src/components/Certifications.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({
    awsDev: false,
    awsCloud: false,
    github: false,
  });

  const handleFlip = (key) => {
    setIsFlipped((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
          <p className="mt-2 text-muted-foreground">Recognized achievements in the field of technology.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {/* AWS Developer Certification */}
          {/* Item 1 */}
          <ReactCardFlip isFlipped={isFlipped.awsDev} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm"
            //  onClick={() => handleFlip('awsDev')}
            >
              {/* <FaAws size={40} className="mx-auto mb-3 text-[#FF9900]" /> */}
              <div className='mx-auto w-full flex justify-center items-center mb-2'><img src="https://web.programming-hero.com/assets/ph_logo-C24KMH6S.svg" alt="" /></div>
              <h3 className="text-lg font-semibold">Complete Web Development Bootcamp</h3>
              <p className="text-sm text-muted-foreground">Issued By: Programming Hero</p>
              <p className="text-sm text-muted-foreground">January 2025 - March 2025</p>
              <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-[#FF9900] p-4 text-white" onClick={() => handleFlip('awsDev')}>
              <img src={certifications[0].image} alt="AWS Certified Developer Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>

          {/* AWS Cloud Practitioner Certification */}
          {/* Item 2 */}
          <ReactCardFlip isFlipped={isFlipped.awsCloud} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm"
            //  onClick={() => handleFlip('awsCloud')}
            >
              {/* <FaAws size={40} className="mx-auto mb-3 text-[#FF9900]" /> */}
              <div className='mx-auto w-full flex justify-center items-center mb-2'><img src="https://web.programming-hero.com/assets/ph_logo-C24KMH6S.svg" alt="" /></div>
              <h3 className="text-lg font-semibold">Black_Belt</h3>
              <p className="text-sm text-muted-foreground">Issued By: Programming Hero</p>
              <p className="text-sm text-muted-foreground">Issued in: October 2025</p>
              <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-[#FF9900] p-4 text-white cursor-pointer" onClick={() => handleFlip('awsCloud')}>
              <img src={certifications[1].image} alt="AWS Certified Cloud Practitioner Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>

          {/* GitHub Foundations Certification */}
          {/* Item 3 */}
          <ReactCardFlip isFlipped={isFlipped.github} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm"
            // onClick={() => handleFlip('github')}
            >
              <div className='mx-auto py-3 invert-[20%] w-full flex justify-center items-center mb-2'><img className='w-40' src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" alt="" /></div>
              <h3 className="text-lg font-semibold">CV Writing & Email Writing</h3>
              <p className="text-sm text-muted-foreground">Issued By: 10 Minutes School</p>
              <p className="text-sm text-muted-foreground">May 2025 - March 2028</p>
              <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-foreground p-4 text-white" onClick={() => handleFlip('github')}>
              <img src={certifications[2].image} alt="GitHub Foundations Certificate" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
