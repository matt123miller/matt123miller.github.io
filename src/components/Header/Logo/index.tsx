import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { ImageSharpFluid } from 'helpers/definitions';
import * as Styled from './styles';

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(
        relativePath: { eq: "Matt_miller_portrait_mask_optimised.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;

  return (
    <Styled.Logo to="/">
      <figure className="logo-image">
        <Img
          className="border-1 rounded-full"
          fluid={logoImage}
          alt={logoTitle}
        />
      </figure>
      <h1 className="text-lg animated-link text-xl">Matt Miller</h1>
    </Styled.Logo>
  );
};

export default Logo;
