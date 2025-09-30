import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Higher School Certificate (HSC)</h3>
            <h4 className="text-sm text-muted-foreground">East Bengal Institution, Dhaka</h4>
            <p className="text-xs text-muted-foreground mt-1">February 2022 - November 2024</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Secondary School Certificate (SSC)</h3>
            <h4 className="text-sm text-muted-foreground">East Bengal Institution, Dhaka</h4>
            <p className="text-xs text-muted-foreground mt-1">January 2020 - December 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;