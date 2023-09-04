import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

import { ImageSharpFluid } from "helpers/definitions";

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
    <Link className="flex items-center mr-auto" to="/">
      <figure className="logo-image">
        <Img
          className="border-1 rounded-full"
          fluid={logoImage}
          alt={logoTitle}
        />
      </figure>
      <h1 className="text-lg animated-link">Matt Miller</h1>
    </Link>
  );
};

export default Logo;
