import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./Gallery.module.less";
import Img from "gatsby-image";
import { Section } from "../../utils/Section.js";
//import styled from 'styled-components'

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default function GalleryImproved() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges;
        return (
          <Section>
            <div className={styles.GalleryWrapper}>
              {images.map(({ node }, index) => {
                return (
                  <div
                    key={index}
                    className={[`styles.item, styles.item${index + 1}`].join(
                      " "
                    )}
                  >
                    <Img
                      fluid={node.childImageSharp.fluid}
                      style={{ height: "100%" }}
                    />
                    <p className={styles.info}>awesome pizza </p>
                  </div>
                );
              })}
            </div>
          </Section>
        );
      }}
    />
  );
}
