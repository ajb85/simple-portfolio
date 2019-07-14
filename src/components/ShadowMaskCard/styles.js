import styled from "styled-components";
const font = `"Istok Web", sans-serif`;
const cardBreak = "(min-width: 700px)";

export const ShadowMask = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.shadowColor || "rgb(0, 0, 0)"};
  opacity: ${props => props.opacity || "0.7"};
  cursor: default;

  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.index || "1"};

  p {
    position: absolute;
    display: inline-block;
    top: 4.5px;
    left: -3.5px;
    right: 0;
    margin: 0 auto;
    color: #eee;
    width: fit-content;
    font-family: ${font};

    @media ${cardBreak} {
      right: 40px;
    }

    &:hover {
      color: #aaa;
      cursor: pointer;
    }
  }
`;

export const MaskCard = styled.div`
  background-color: ${props => props.cardColor || "#fff"};
  overflow-y: hidden;

  min-width: 300px;
  max-width: 1500px;
  width: ${props => props.width || "85%"};

  min-height: 300px;
  height: ${props => props.height || "90vh"};

  margin: auto;
  border-radius: ${props => props.borderRadius || "10px"};

  position: fixed;
  top: calc(50vh - ${props => halfHeight(props.height) || "45vh"});
  left: 0;
  right: 0;
  z-index: ${props => props.index || "1"};
`;

// function setTopMargin(margin, height) {
//   if (!margin) return;
//   const marginValue =
//     indexOfNonNumeric(margin) > -1
//       ? margin.substring(0, indexOfNonNumeric(margin))
//       : margin;
//   const index = indexOfNonNumeric(height);
//   const heightValue = height.substring(0, index);
//   const heightUnit = height.substring(index);
//   return `${Number(marginValue) * 2 + Number(heightValue)}${heightUnit}`;
// }

function halfHeight(height) {
  if (!height) return;
  const index = indexOfNonNumeric(height);
  const halfHeight = Number(height.substring(0, index)) / 2;
  return `${halfHeight}${height.substring(index)}`;
}

function indexOfNonNumeric(str) {
  return str.substring(0).search(/[^0-9]/);
}
