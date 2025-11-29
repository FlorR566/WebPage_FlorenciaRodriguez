// src/data/svgShapes.js

// --------------------------------------
// PATHS CENTRALIZADOS (rutas que se repiten)
// --------------------------------------
export const PATHS = {
  shape1: 'M137.771 13.1345L131.531 8.46632L138.694 5.3955L137.771 13.1345Z',
  shape2: 'M133.896 21.25H126.104L130 14.5L133.896 21.25Z',
  shape3: 'M164.47 5.19166L158.594 10.3102L157.099 2.66112L164.47 5.19166Z',
  shape4: 'M151.824 23.4234L146.757 17.5024L154.419 16.0742L151.824 23.4234Z',
  shape5: 'M183.65 8.36344L182.825 16.1127L176.525 11.5239L183.65 8.36344Z',
  shape6: 'M175.896 25.25H168.104L172 18.5L175.896 25.25Z',

  shape7: 'M194.896 25.25H187.104L191 18.5L194.896 25.25Z',
  shape8: 'M206.148 22.5743L199.264 18.9215L205.87 14.7853L206.148 22.5743Z',
  shape9: 'M213.957 33.0431L206.171 33.3837L209.769 26.4699L213.957 33.0431Z',
  shape10: 'M200.476 31.3512L194.39 36.2185L193.217 28.5134L200.476 31.3512Z',
  shape11: 'M204.915 62.0716L198.516 57.6231L205.569 54.3052L204.915 62.0716Z',
  shape12: 'M206.115 43.1795L201.52 49.4738L198.365 42.3467L206.115 43.1795Z',

  // ROSA/AMARILLO/VERDE Paths
  shapeR1: 'M20.18 77.4156L15.9046 70.9002L23.6858 70.4546L20.18 77.4156Z',
  shapeR2: 'M36.0435 64.0086L29.5066 59.7661L36.4498 56.2253L36.0435 64.0086Z',
  shapeR3: 'M21.6595 44.3707L20.8139 52.1176L14.5266 47.5117L21.6595 44.3707Z',
  shapeR4: 'M38.3004 36.6765L32.9966 42.3861L30.703 34.9373L38.3004 36.6765Z',
  shapeR5: 'M18.1556 33.9495L11.5018 29.8926L18.3426 26.1578L18.1556 33.9495Z',
  shapeR6: 'M38.8271 83.1949L31.4954 85.8361L32.8735 78.165L38.8271 83.1949Z',
  shapeR7: 'M47.4809 86.7022L47.8717 78.9191L54.4178 83.1491L47.4809 86.7022Z',
  shapeR8: 'M49.7501 74.3515L47.9537 66.7684L55.4201 69.004L49.7501 74.3515Z',
  shapeR9: 'M69.1248 82.4427L63.7529 76.7971L71.3289 74.9669L69.1248 82.4427Z',
  shapeR10: 'M65.2974 94.6149L57.6213 95.9597L60.2945 88.6386L65.2974 94.6149Z',
  shapeR11: 'M16.9488 93.9397L10.43 89.6693L17.3883 86.1581L16.9488 93.9397Z',
  shapeR12: 'M84.2288 93.3161L77.1565 90.043L83.5277 85.5538L84.2288 93.3161Z',
};

// --------------------------------------
// COLORES CENTRALIZADOS
// --------------------------------------
export const COLORS = {
  violetaA: '#7C4585',
  violetaB: '#6A2C70',

  rojoA: '#563A9C',
  rojoB: '#7C4585',

  naranjaA: '#3E3F5B',
  naranjaB: '#555879',

  rosa: '#748DAE',

  amarilloA: '#4DA1A9',
  amarilloB: '#6A9AB0',

  verdeA: '#84AE92',
  verdeB: '#4A9782',
};

// --------------------------------------
// FUNCIÓN PARA CREAR SHAPES
// --------------------------------------
const createShape = (id, className, fill, d) => ({
  id,
  className,
  fill,
  d,
});

// --------------------------------------
// ARRAY PRINCIPAL
// --------------------------------------
export const svgShapes = [
  // ----- VIOLETA -----
  createShape('violeta-1', 'violeta', COLORS.violetaA, PATHS.shape1),
  createShape('violeta-2', 'violeta', COLORS.violetaA, PATHS.shape2),
  createShape('violeta-3', 'violeta', COLORS.violetaA, PATHS.shape3),
  createShape('violeta-4', 'violeta', COLORS.violetaA, PATHS.shape4),
  createShape('violeta-5', 'violeta', COLORS.violetaA, PATHS.shape5),
  createShape('violeta-6', 'violeta', COLORS.violetaB, PATHS.shape6),

  // ----- ROJO -----
  createShape('rojo-1', 'rojo', COLORS.rojoA, PATHS.shape1),
  createShape('rojo-2', 'rojo', COLORS.rojoA, PATHS.shape2),
  createShape('rojo-3', 'rojo', COLORS.rojoA, PATHS.shape3),
  createShape('rojo-4', 'rojo', COLORS.rojoB, PATHS.shape4),
  createShape('rojo-5', 'rojo', COLORS.rojoB, PATHS.shape5),
  createShape('rojo-6', 'rojo', COLORS.rojoB, PATHS.shape6),

  // ----- NARANJA -----
  createShape('naranja-1', 'naranja', COLORS.naranjaA, PATHS.shape1),
  createShape('naranja-2', 'naranja', COLORS.naranjaA, PATHS.shape2),
  createShape('naranja-3', 'naranja', COLORS.naranjaA, PATHS.shape3),
  createShape('naranja-4', 'naranja', COLORS.naranjaA, PATHS.shape4),
  createShape('naranja-5', 'naranja', COLORS.naranjaA, PATHS.shape5),
  createShape('naranja-6', 'naranja', COLORS.naranjaA, PATHS.shape6),

  // ----- ROSA -----
  createShape('rosa-1', 'rosa', COLORS.rosa, PATHS.shapeR1),
  createShape('rosa-2', 'rosa', COLORS.rosa, PATHS.shapeR2),
  createShape('rosa-3', 'rosa', COLORS.rosa, PATHS.shapeR3),
  createShape('rosa-4', 'rosa', COLORS.rosa, PATHS.shapeR4),
  createShape('rosa-5', 'rosa', COLORS.rosa, PATHS.shapeR5),
  createShape('rosa-6', 'rosa', COLORS.rosa, PATHS.shapeR6),
  createShape('rosa-7', 'rosa', COLORS.rosa, PATHS.shapeR7),
  createShape('rosa-8', 'rosa', COLORS.rosa, PATHS.shapeR8),
  createShape('rosa-9', 'rosa', COLORS.rosa, PATHS.shapeR9),
  createShape('rosa-10', 'rosa', COLORS.rosa, PATHS.shapeR10),
  createShape('rosa-11', 'rosa', COLORS.rosa, PATHS.shapeR11),
  createShape('rosa-12', 'rosa', COLORS.rosa, PATHS.shapeR12),

  // ----- AMARILLO -----
  createShape('amarillo-1', 'amarillo', COLORS.amarilloA, PATHS.shapeR1),
  createShape('amarillo-2', 'amarillo', COLORS.amarilloA, PATHS.shapeR2),
  createShape('amarillo-3', 'amarillo', COLORS.amarilloA, PATHS.shapeR3),
  createShape('amarillo-4', 'amarillo', COLORS.amarilloA, PATHS.shapeR4),
  createShape('amarillo-5', 'amarillo', COLORS.amarilloA, PATHS.shapeR5),
  createShape('amarillo-6', 'amarillo', COLORS.amarilloB, PATHS.shapeR6),
  createShape('amarillo-7', 'amarillo', COLORS.amarilloB, PATHS.shapeR7),
  createShape('amarillo-8', 'amarillo', COLORS.amarilloB, PATHS.shapeR8),
  createShape('amarillo-9', 'amarillo', COLORS.amarilloB, PATHS.shapeR9),
  createShape('amarillo-10', 'amarillo', COLORS.amarilloB, PATHS.shapeR10),
  createShape('amarillo-11', 'amarillo', COLORS.amarilloB, PATHS.shapeR11),
  createShape('amarillo-12', 'amarillo', COLORS.amarilloB, PATHS.shapeR12),

  // ----- VERDE -----
  createShape('verde-1', 'verde', COLORS.verdeA, PATHS.shapeR1),
  createShape('verde-2', 'verde', COLORS.verdeA, PATHS.shapeR1),
  createShape('verde-3', 'verde', COLORS.verdeA, PATHS.shapeR2),
  createShape('verde-4', 'verde', COLORS.verdeA, PATHS.shapeR3),
  createShape('verde-5', 'verde', COLORS.verdeA, PATHS.shapeR4),
  createShape('verde-6', 'verde', COLORS.verdeA, PATHS.shapeR5),
  createShape('verde-7', 'verde', COLORS.verdeB, PATHS.shapeR6),
  createShape('verde-8', 'verde', COLORS.verdeB, PATHS.shapeR7),
  createShape('verde-9', 'verde', COLORS.verdeB, PATHS.shapeR8),
  createShape('verde-10', 'verde', COLORS.verdeB, PATHS.shapeR9),
  createShape('verde-11', 'verde', COLORS.verdeB, PATHS.shapeR10),
  createShape('verde-12', 'verde', COLORS.verdeB, PATHS.shapeR11),
  createShape('verde-13', 'verde', COLORS.verdeB, PATHS.shapeR12),
];
