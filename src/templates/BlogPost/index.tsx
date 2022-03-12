import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/Container';
import BlogTitle from 'components/BlogTitle';
import FormatHtml from 'components/utils/FormatHtml';
import { ImageSharpFluid } from 'helpers/definitions';

interface Post {
  html: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    cover: {
      childImageSharp: {
        fluid: ImageSharpFluid;
      };
    };
    coverAlt: string;
    tags: string[];
  };
}

interface Props {
  data: {
    markdownRemark: Post;
  };
  pageContext: {
    slug: string;
    next: Post;
    previous: Post;
  };
}

const BlogPost = ({ data, pageContext }: Props) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  console.log(post);

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        <BlogTitle title={post.frontmatter.title} />
        {/* <Img
          fluid={post.frontmatter.cover.childImageSharp.fluid}
          alt={post.frontmatter.coverAlt}
        /> */}
        <FormatHtml content={post.html} />
        {/* Extract following */}
        <div className="w-full flex justify-between mt-10">
          <span>
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="previous"
                className="animated-link"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next" className="animated-link">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </div>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        description
        tags
        cover {
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coverAlt
      }
    }
  }
`;
