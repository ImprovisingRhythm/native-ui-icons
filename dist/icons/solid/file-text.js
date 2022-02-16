import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgFileText = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path d="m19.74 7.33-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4z" data-name="file-text"/>
    </G>
  </Svg>);
export default memo(SvgFileText);
