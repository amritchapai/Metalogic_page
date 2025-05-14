type WaveProps = {
  color: string;
  heightClass: string;
  opacity: number;
  animationDuration: string;
  animationDelay: string;
};
import "../App.css";
const Wave: React.FC<WaveProps> = ({
  color,
  heightClass,
  opacity,
  animationDuration,
  animationDelay,
}) => {
  return (
    <div className={`absolute bottom-0 w-full overflow-hidden ${heightClass}`}>
      <div
        className="w-full h-full"
        style={{
          backgroundColor: color,
          opacity: opacity,
          animation: `wave ${animationDuration} ease-in-out infinite`,
          animationDelay: animationDelay,
        }}
      />
      
    </div>
  );
};
export default Wave;
