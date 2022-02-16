import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgNavigationOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M20 20a.94.94 0 0 1-.55-.17L12 14.9l-7.45 4.93a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20zm-8-7.3a1 1 0 0 1 .55.17l4.88 3.23L12 5.24 6.57 16.1l4.88-3.23a1 1 0 0 1 .55-.17z" data-name="navigation"/>
    </G>
  </Svg>);
export default memo(SvgNavigationOutline);
