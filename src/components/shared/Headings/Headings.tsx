import type { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import DEFAULT_COLORS from '../../../themes/colors';
import DEFAULT_HEADING_STYLES from '../../../themes/headings';
import { get500Color } from '../../../utils/colorSelector';
import type { Variant } from '../../../themes/colors';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  variant?: Variant;
}

const variantStyle = css<Props>`
  color: ${({ variant }) =>
    variant ? get500Color(variant) : DEFAULT_COLORS.BLACK};
`;

const defaultStyle = css`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

export const H1 = styled.h1<Props>`
  font-size: ${DEFAULT_HEADING_STYLES.h1.fontSize}px;
  line-height: ${DEFAULT_HEADING_STYLES.h1.lineHeight};

  /** default style */
  ${defaultStyle}

  /** variant style */
  ${variantStyle}
`;

export const H2 = styled.h2<Props>`
  font-size: ${DEFAULT_HEADING_STYLES.h2.fontSize}px;
  line-height: ${DEFAULT_HEADING_STYLES.h2.lineHeight};

  /** default style */
  ${defaultStyle}

  /** variant style */
  ${variantStyle}
`;

export const H3 = styled.h3<Props>`
  font-size: ${DEFAULT_HEADING_STYLES.h3.fontSize}px;
  line-height: ${DEFAULT_HEADING_STYLES.h3.lineHeight};

  /** default style */
  ${defaultStyle}

  /** variant style */
  ${variantStyle}
`;

export const H4 = styled.h4<Props>`
  font-size: ${DEFAULT_HEADING_STYLES.h4.fontSize}px;
  line-height: ${DEFAULT_HEADING_STYLES.h4.lineHeight};

  /** default style */
  ${defaultStyle}

  /** variant style */
  ${variantStyle}
`;

export const H5 = styled.h5<Props>`
  font-size: ${DEFAULT_HEADING_STYLES.h5.fontSize}px;
  line-height: ${DEFAULT_HEADING_STYLES.h5.lineHeight};

  /** default style */
  ${defaultStyle}

  /** variant style */
  ${variantStyle}
`;

export const H6 = styled.h6<Props>`
  font-size: ${DEFAULT_HEADING_STYLES.h6.fontSize}px;
  line-height: ${DEFAULT_HEADING_STYLES.h6.lineHeight};

  /** default style */
  ${defaultStyle}

  /** variant style */
  ${variantStyle}
`;
