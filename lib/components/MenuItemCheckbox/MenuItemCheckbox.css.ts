import { style } from '@mattsjones/css-core';
import { multiply } from '@mattsjones/css-utils';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

export const checkboxPadding = style({ padding: 2 });

const standardText = themeVars.typography.text.standard;

const calculateSize = (capHeight: string) => multiply(capHeight, 1.8);

const mobileSize = calculateSize(standardText.mobile.capHeight);
const tabletSize = calculateSize(standardText.tablet.capHeight);

export const checkboxBorder = style(
  responsiveStyle({
    mobile: {
      width: mobileSize,
      height: mobileSize,
    },
    tablet: {
      width: tabletSize,
      height: tabletSize,
    },
  }),
);