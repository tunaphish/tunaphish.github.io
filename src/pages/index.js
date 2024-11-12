import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BEFORE_FIRST_POST_COLOR = '#B0B0B0';
const FUTURE_DATE_COLOR = '#E0E0E0'
const TOTAL_WEEKS = 77 * 52;
const BIRTH_DATE = new Date('1992-12-09');

function getActivityColor(activityLevel) {
  if (activityLevel >= 5) {
    return '#004CFF';
  } else if (activityLevel >= 3) {
    return '#5A8FFF';
  } else if (activityLevel >= 1) {
    return '#A0C4FF';
  }
  return '#edf6ff'; 
}

const getWeeksBetween = (endDate, startDate) => {
  const differenceInMs = Math.abs(endDate - startDate);
  return Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 7));
}

const countDatesByWeek = (dates, startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate total weeks between start and end date
  const totalWeeks = Math.ceil((end - start) / (1000 * 60 * 60 * 24 * 7));
  
  // Initialize an array to hold the count of dates per week
  const weeksCount = new Array(totalWeeks).fill(0);

  // Count each date in the corresponding week
  dates.forEach(date => {
    const currentDate = new Date(date);
    
    // Check if date falls within the range
    if (currentDate >= start && currentDate <= end) {
      // Calculate the week index
      const weekIndex = Math.floor((currentDate - start) / (1000 * 60 * 60 * 24 * 7));
      // Increment the count for this week
      weeksCount[weekIndex]++;
    }
  });

  return weeksCount;
}

const Grid = ({dates}) => {
  let i=0;
  const grid = [];

  const firstPostDate = dates[dates.length-1];
  const weeksBeforePostingFirstTime = getWeeksBetween(firstPostDate, BIRTH_DATE);
  while (i < weeksBeforePostingFirstTime) {
    const backgroundColor = BEFORE_FIRST_POST_COLOR;

    grid.push(
      <div
        key={i}
        className="cell"
        style={{ backgroundColor }}
      />
    );

    i++;
  }

  const currentDate = new Date();
  const datesByWeek = countDatesByWeek(dates, firstPostDate, currentDate);
  for (let idx=0; idx<datesByWeek.length; idx++) {
    const dateAmt = datesByWeek[idx];
    const backgroundColor = getActivityColor(dateAmt);

    grid.push(
      <div
        key={idx+i}
        className="cell"
        style={{ backgroundColor }}
      />
    );
  }
  
  i += datesByWeek.length;
  while (i < TOTAL_WEEKS) {
    const backgroundColor = FUTURE_DATE_COLOR;

    grid.push(
      <div
        key={i}
        className="cell"
        style={{ backgroundColor }}
      />
    );

    i++;
  }

  return <div className="grid">{grid}</div>;
};

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const dates = posts.map(post => new Date(post.frontmatter.date));

  return (
    <Layout location={location} title={siteTitle}>
      <blockquote>... what you pay attention to will define, for you, what reality is. - Four Thousand Weeks</blockquote>
      <Link to={'blog/2024-11-12-four-thousand-weeks/'} itemProp="url"><Grid dates={dates}/></Link>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={`blog${post.fields.slug}`} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
