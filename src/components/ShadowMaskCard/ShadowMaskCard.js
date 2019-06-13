import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={home}>
        <ShadowMask shadowColor={shadowColor} opacity={opacity} index={index}>
          <p>X</p>
        </ShadowMask>
      </Link>
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
