import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgVideoOff = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="video-off">
        <Path d="M14.22 17.05 4.88 7.71 3.12 6 3 5.8A3 3 0 0 0 2 8v8a3 3 0 0 0 3 3h9a2.94 2.94 0 0 0 1.66-.51zM21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H7.83l1.29 1.29 6.59 6.59 2 2 2 2a1.73 1.73 0 0 0 .6.11 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63a1.6 1.6 0 0 0-1-1.48zM17 15.59l-2-2L8.41 7l-2-2-1.7-1.71a1 1 0 0 0-1.42 1.42l.54.53L5.59 7l9.34 9.34 1.46 1.46 2.9 2.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
      </G>
    </G>
  </Svg>
)

export default memo(SvgVideoOff)
