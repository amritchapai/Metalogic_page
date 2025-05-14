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
      <style {...{ jsx: true, global: true }}>{`
        @keyframes wave {
          0%,
          100% {
            transform: translateY(0) scale(1.1, 1);
            border-radius: 40% 50% 40% 50%;
          }
          50% {
            transform: translateY(-20px) scale(1, 1.1);
            border-radius: 50% 40% 50% 40%;
          }
        }
      `}</style>
    </div>
  );
};
export default Wave;
