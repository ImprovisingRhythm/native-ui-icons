import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgCornerDownLeft = (props: SvgProps) => (
  <Svg viewBox="0 0 24.1 24.1" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M20 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37 1 1 0 0 0 .62-.22 1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3z"
        data-name="corner-down-left"
      />
    </G>
  </Svg>
)

export default memo(SvgCornerDownLeft)
