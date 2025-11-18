interface StudioDiniLogoProps {
  className?: string;
}

const StudioDiniLogo = ({ className = "h-10" }: StudioDiniLogoProps) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <text x="10" y="35" fontFamily="Stack Sans Headline, Inter, sans-serif" fontSize="28" fontWeight="700" fill="#262626">
          Studio Dini
        </text>
      </svg>
    </div>
  );
};

export default StudioDiniLogo;
