import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgMove = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="m21.71 11.31-3-3a1 1 0 0 0-1.42 1.42L18.58 11H13V5.41l1.29 1.3A1 1 0 0 0 15 7a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-3-3A1 1 0 0 0 12 2a1 1 0 0 0-.7.29l-3 3a1 1 0 0 0 1.41 1.42L11 5.42V11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3A1 1 0 0 0 2 12a1 1 0 0 0 .29.71l3 3A1 1 0 0 0 6 16a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L5.42 13H11v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 22a1 1 0 0 0 .7-.29l3-3a1 1 0 0 0-1.42-1.42L13 18.58V13h5.59l-1.3 1.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 16a1 1 0 0 0 .71-.29l3-3A1 1 0 0 0 22 12a1 1 0 0 0-.29-.69z"
        data-name="move"
      />
    </G>
  </Svg>
)

export default memo(SvgMove)
