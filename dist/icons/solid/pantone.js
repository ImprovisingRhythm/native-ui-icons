import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgPantone = (props) => (<Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="pantone">
        <Path d="M20 13.18h-2.7l-1.86 2L11.88 19l-1.41 1.52L10 21h10a1 1 0 0 0 1-1v-5.82a1 1 0 0 0-1-1zM18.19 9.3l-4.14-3.86a.89.89 0 0 0-.71-.26 1 1 0 0 0-.7.31l-.82.89v10.71a5.23 5.23 0 0 1-.06.57l6.48-6.95a1 1 0 0 0-.05-1.41zM10.82 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13.09a3.91 3.91 0 0 0 7.82 0zm-2 13.09a1.91 1.91 0 0 1-3.82 0V15h3.82zm0-4.09H5v-3h3.82zm0-5H5V5h3.82z"/>
      </G>
    </G>
  </Svg>);
export default memo(SvgPantone);
