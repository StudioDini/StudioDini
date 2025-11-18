import logoImage from 'figma:asset/523d8427119ff6a9bcc1e2f1ab43414f8ac8e99a.png';

interface StudioDiniLogoProps {
  className?: string;
}

const StudioDiniLogo = ({ className = "h-10" }: StudioDiniLogoProps) => {
  return (
    <img 
      src={logoImage} 
      alt="Studio Dini" 
      className={className}
    />
  );
};

export default StudioDiniLogo;
