import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope(
  'lib/components/MenuItemCheckbox/MenuItemCheckbox.css.ts',
  'braid-design-system',
);

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { vars } from '../../themes/vars.css';
export var checkboxPadding = style(
  {
    padding: 2,
  },
  'checkboxPadding',
);
const standardText = vars.textSize.standard;

const calculateSize = function calculateSize(capHeight) {
  return calc.multiply(capHeight, 1.8);
};

const mobileSize = calculateSize(standardText.mobile.capHeight);
const tabletSize = calculateSize(standardText.tablet.capHeight);
export var checkboxBorder = style(
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
  'checkboxBorder',
);

__vanilla_filescope__.endFileScope();