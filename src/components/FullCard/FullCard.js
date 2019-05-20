import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { ShadowMask, MaskCard } from "styles/";

function FullCard(props) {
  const height = "95vh";
  return (
    <React.Fragment>
      <Link to="/">
        <ShadowMask />
      </Link>
      <MaskCard width="85%" height={height}>
        {props.children}
      </MaskCard>
    </React.Fragment>
  );
}

export default FullCard;
