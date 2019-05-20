import styled from "styled-components";

export const ShadowMask = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;
export const MaskCard = styled.div`
  background-color: #eee;
  overflow-y: hidden;

  min-width: 300px;
  max-width: 1000px;
  width: ${props => props.width || "85%"};

  min-height: 300px;
  height: ${props => props.height || "90vh"};

  margin: auto;
  border-radius: 10px;

  position: fixed;
  top: calc((100vh - ${props => props.height || "90vh"}) / 2);
  left: 0;
  right: 0;
  z-index: 1;
`;
