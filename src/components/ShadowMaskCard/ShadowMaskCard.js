import React from "react";

import { ShadowMask, MaskCard } from "./styles.js";

function ShadowMaskCard({
  home,
  shadowColor,
  cardColor,
  width,
  height,
  opacity,
  blur,
  index,
  topMargin,
  borderRadius,
  children
}) {
  return (
    <React.Fragment>
      <ShadowMask
        onClick={() => home(null)}
        shadowColor={shadowColor}
        opacity={opacity}
        index={index}
      >
        <p>x</p>
      </ShadowMask>
      <MaskCard
        cardColor={cardColor}
        width={width}
        height={height}
        index={index}
        topMargin={topMargin}
        borderRadius={borderRadius}
      >
        {children}
      </MaskCard>
    </React.Fragment>
  );
}

export default ShadowMaskCard;
