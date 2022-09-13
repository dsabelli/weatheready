interface HeroProps {
  children: JSX.Element;
  text: JSX.Element;
  className: string;
}

const Hero: React.FC<HeroProps> = ({ children, text, className }) => {
  return (
    <div className="md:hero min-h-screen">
      <div
        className={`hero-content bg-base-100 flex-col-reverse md:flex-row-reverse items-center flex-1 w-full ${className}`}
      >
        {children}
        <div className="">{text}</div>
      </div>
    </div>
  );
};

export default Hero;
