import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgNavigation = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="M20 20a.94.94 0 0 1-.55-.17l-6.9-4.56a1 1 0 0 0-1.1 0l-6.9 4.56a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20z" data-name="navigation"/>
    </G>
  </Svg>);
export default memo(SvgNavigation);
