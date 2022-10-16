import DEFAULT_COLORS from '../../../themes/colors';

export type Variant = 'default' | 'primary' | 'success' | 'warning' | 'error';

export const getLighterColor = (variant?: Variant) => {
  switch (variant) {
    case 'default':
      return DEFAULT_COLORS.gray_400;
    case 'primary':
      return DEFAULT_COLORS.primary_400;
    case 'success':
      return DEFAULT_COLORS.success_400;
    case 'warning':
      return DEFAULT_COLORS.warning_400;
    case 'error':
      return DEFAULT_COLORS.error_400;
    default:
      return DEFAULT_COLORS.gray_400;
  }
};

export const getDarkerColor = (variant?: Variant) => {
  switch (variant) {
    case 'default':
      return DEFAULT_COLORS.gray_500;
    case 'primary':
      return DEFAULT_COLORS.primary_500;
    case 'success':
      return DEFAULT_COLORS.success_500;
    case 'warning':
      return DEFAULT_COLORS.warning_500;
    case 'error':
      return DEFAULT_COLORS.error_500;
    default:
      return DEFAULT_COLORS.gray_500;
  }
};
