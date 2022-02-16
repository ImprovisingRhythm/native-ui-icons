import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import { memo } from 'react';
const SvgPricetagsOutline = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="pricetags">
        <Path d="M12.87 22a1.84 1.84 0 0 1-1.29-.53l-6.41-6.42a1 1 0 0 1-.29-.61L4 5.09a1 1 0 0 1 .29-.8 1 1 0 0 1 .8-.29l9.35.88a1 1 0 0 1 .61.29l6.42 6.41a1.82 1.82 0 0 1 0 2.57l-7.32 7.32a1.82 1.82 0 0 1-1.28.53zm-6-8.11 6 6 7.05-7.05-6-6-7.81-.73z"/>
        <Circle cx={10.5} cy={10.5} r={1.5}/>
      </G>
    </G>
  </Svg>);
export default memo(SvgPricetagsOutline);
