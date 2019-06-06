import React, { ComponentType } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { Box } from '../../Box/Box';
import { useTextColor, UseTextProps } from '../../../hooks/typography';
import * as styleRefs from './Icon.treat';

type IconSize = NonNullable<UseTextProps['size']> | 'fill';

export interface IconProps {
  size?: IconSize;
  inline?: boolean;
  fill?: UseTextProps['color'];
  svgComponent: ComponentType;
}

const resolveSizeClasses = (size: IconSize, inline: boolean) => {
  const styles = useStyles(styleRefs);

  if (size === 'fill') {
    return styles.fullHeight;
  }

  return inline
    ? [styles.inline, styles.inlineSizes[size]]
    : styles.blockSizes[size];
};

export const Icon = ({
  size = 'standard',
  svgComponent,
  inline = false,
  fill,
}: IconProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component={svgComponent}
      width={size === 'fill' ? 'full' : undefined}
      display={inline ? 'inlineBlock' : 'block'}
      className={classnames(
        resolveSizeClasses(size, inline),
        styles.currentColor,
        fill ? useTextColor(fill) : null,
      )}
    />
  );
};