import type { CSSProperties } from 'react';
import DEFAULT_FONT_SIZES from './fontSizes';

interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
}

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Headings = {
  [key in HeadingTypes]: HeadingStyle;
};

const DEFAULT_HEADING_STYLES: Headings = {
  h6: { fontSize: DEFAULT_FONT_SIZES.h6, lineHeight: 1.2 },
  h5: { fontSize: DEFAULT_FONT_SIZES.h5, lineHeight: 1.3 },
  h4: { fontSize: DEFAULT_FONT_SIZES.h4, lineHeight: 1.35 },
  h3: { fontSize: DEFAULT_FONT_SIZES.h3, lineHeight: 1.4 },
  h2: { fontSize: DEFAULT_FONT_SIZES.h2, lineHeight: 1.5 },
  h1: { fontSize: DEFAULT_FONT_SIZES.h1, lineHeight: 1.5 },
};

export default DEFAULT_HEADING_STYLES;
