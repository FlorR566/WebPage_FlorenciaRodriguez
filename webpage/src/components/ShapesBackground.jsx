import { svgShapes } from '../data/svgShapes';
import './ShapesBackground.css';

export default function ShapesBackground() {
  return (
    <svg
      className="animate-background"
      viewBox="0 0 220 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgShapes.map(shape => (
        <path
          key={shape.id}
          d={shape.d}
          fill={shape.fill}
          className={shape.className}
        />
      ))}
    </svg>
  );
}
