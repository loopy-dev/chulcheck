type FontSize = 'b3' | 'b2' | 'b1' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';

type FontSizes = {
  [key in FontSize]: number;
};

const DEFAULT_FONT_SIZES: FontSizes = {
  b3: 12,
  b2: 14,
  b1: 16,
  h6: 18,
  h5: 20,
  h4: 24,
  h3: 28,
  h2: 32,
  h1: 40,
};

export default DEFAULT_FONT_SIZES;
export type Size = 'sm' | 'md' | 'lg' | 'xl';
