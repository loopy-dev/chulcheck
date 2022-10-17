import DEFAULT_COLORS from '../themes/colors';
import type { Variant } from '../themes/colors';

export const get200Color = (variant?: Variant) => {
  switch (variant) {
    case 'default':
      return DEFAULT_COLORS.GREY_200;
    case 'primary':
      return DEFAULT_COLORS.PRIMARY_200;
    case 'success':
      return DEFAULT_COLORS.SUCCESS_200;
    case 'warning':
      return DEFAULT_COLORS.WARNING_200;
    case 'error':
      return DEFAULT_COLORS.ERROR_200;
    default:
      return DEFAULT_COLORS.GREY_200;
  }
};

export const get300Color = (variant?: Variant) => {
  switch (variant) {
    case 'default':
      return DEFAULT_COLORS.GREY_300;
    case 'primary':
      return DEFAULT_COLORS.PRIMARY_300;
    case 'success':
      return DEFAULT_COLORS.SUCCESS_300;
    case 'warning':
      return DEFAULT_COLORS.WARNING_300;
    case 'error':
      return DEFAULT_COLORS.ERROR_300;
    default:
      return DEFAULT_COLORS.GREY_300;
  }
};

export const get400Color = (variant?: Variant) => {
  switch (variant) {
    case 'default':
      return DEFAULT_COLORS.GREY_400;
    case 'primary':
      return DEFAULT_COLORS.PRIMARY_400;
    case 'success':
      return DEFAULT_COLORS.SUCCESS_400;
    case 'warning':
      return DEFAULT_COLORS.WARNING_400;
    case 'error':
      return DEFAULT_COLORS.ERROR_400;
    default:
      return DEFAULT_COLORS.GREY_400;
  }
};

export const get500Color = (variant?: Variant) => {
  switch (variant) {
    case 'default':
      return DEFAULT_COLORS.GREY_500;
    case 'primary':
      return DEFAULT_COLORS.PRIMARY_500;
    case 'success':
      return DEFAULT_COLORS.SUCCESS_500;
    case 'warning':
      return DEFAULT_COLORS.WARNING_500;
    case 'error':
      return DEFAULT_COLORS.ERROR_500;
    default:
      return DEFAULT_COLORS.GREY_500;
  }
};

export const get600Color = (variant?: Variant) => {
  switch (variant) {
    case 'default':
      return DEFAULT_COLORS.GREY_600;
    case 'primary':
      return DEFAULT_COLORS.PRIMARY_600;
    case 'success':
      return DEFAULT_COLORS.SUCCESS_600;
    case 'warning':
      return DEFAULT_COLORS.WARNING_600;
    case 'error':
      return DEFAULT_COLORS.ERROR_600;
    default:
      return DEFAULT_COLORS.GREY_600;
  }
};

export const get700Color = (variant?: Variant) => {
  switch (variant) {
    case 'default':
      return DEFAULT_COLORS.GREY_700;
    case 'primary':
      return DEFAULT_COLORS.PRIMARY_700;
    case 'success':
      return DEFAULT_COLORS.SUCCESS_700;
    case 'warning':
      return DEFAULT_COLORS.WARNING_700;
    case 'error':
      return DEFAULT_COLORS.ERROR_700;
    default:
      return DEFAULT_COLORS.GREY_700;
  }
};
