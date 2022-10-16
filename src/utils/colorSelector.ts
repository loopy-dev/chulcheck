import DEFAULT_COLORS from '../themes/colors';

export type Variant = 'default' | 'primary' | 'success' | 'warning' | 'error';

export const get400Color = (variant?: Variant) => {
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

export const get500Color = (variant?: Variant) => {
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

export const get600Color = (variant?: Variant) => {
  switch (variant) {
    case 'default':
      return DEFAULT_COLORS.gray_600;
    case 'primary':
      return DEFAULT_COLORS.primary_600;
    case 'success':
      return DEFAULT_COLORS.success_600;
    case 'warning':
      return DEFAULT_COLORS.warning_600;
    case 'error':
      return DEFAULT_COLORS.error_600;
    default:
      return DEFAULT_COLORS.gray_600;
  }
};
