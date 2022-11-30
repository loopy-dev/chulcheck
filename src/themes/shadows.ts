type ShadowKeys = 'dp1' | 'dp2' | 'dp4' | 'dp8' | 'dp16' | 'dp24';

type Shadows = Record<ShadowKeys, string>;

const DEFAULT_SHADOWS: Shadows = {
  dp1: '0px 1px 2px rgba(8, 35, 48, 0.24)',
  dp2: '0px 2px 4px rgba(8, 35, 48, 0.24)',
  dp4: '0px 4px 8px rgba(8, 35, 48, 0.24)',
  dp8: '0px 8px 16px rgba(8, 35, 48, 0.2)',
  dp16: '0px 16px 24px rgba(8, 35, 48, 0.16)',
  dp24: '0px 24px 32px rgba(8, 35, 48, 0.12)',
};

export default DEFAULT_SHADOWS;
