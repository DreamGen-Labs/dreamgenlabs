import React from 'react'

const SectionHeading = ({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl gradient-text mb-6">
        {title}
      </h2>
      <p className="text-slate-500 text-sm sm:text-base md:text-lg text-center">
        {subtitle}
      </p>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #1145be, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}

export default SectionHeading