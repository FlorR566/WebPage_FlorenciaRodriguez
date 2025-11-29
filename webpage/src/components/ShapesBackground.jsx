import { svgShapes } from '../data/svgShapes';
import './shapesBackground.css';
import Hero from './Hero';

export default function ShapesBackground() {
  return (
    <div className="shapes-wrapper">
      {/* SVG al fondo */}
      <svg
        className="shapes-bg"
        viewBox="0 0 220 100"
        preserveAspectRatio="xMidYMid slice"
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

      {/* Contenido por encima */}
      <div className="shapes-content">
        <Hero />
      </div>
    </div>
  );
}
