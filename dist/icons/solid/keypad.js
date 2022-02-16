import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgKeypad = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="keypad">
        <Path d="M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgKeypad);
