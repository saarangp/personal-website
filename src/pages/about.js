import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          src={`../../icons/luke-${toString()}.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          {/* <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p> */}
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <b>{occupation}</b> in the <a href = "https://mii.ucla.edu/">Medical Informatics</a> program. I'm mainly interested in deep learning methods as applied to various problems in medicine. I'm also particularly interested in computational neuroscience and clinical informatics. I'd also like to start doing more scientific outreach (hence this website)!
          </p>
          <p>
            I just graduated from UC Berkeley, where I studied Bioengineering and Electrical Engineering & Computer Science (EECS). At Berkeley I was involved in the Maharbiz Lab, working on accelerated aging experiments for micro neural interfaces. I was also involved with founding and running the <a href = "https://neurotech.berkeley.edu/">Neurotech@Berkeley club</a>, where we worked on various projects to educate and be educated about neurotech. 
          </p>
          <p className="i-5">
            In my spare time, I enjoy playing piano, hiking, watching sports, playing/watching soccer and reading random Wikipedia pages. I am a huge fan of Arsenal (come on you gunners!) and FC Barcelona. My favorite artists are Odesza, Daft Punk, Coldplay, and Jacob Collier. I recently fell into the chess craze, and love playing on <a href = "https://lichess.org/">lichess</a>.
          </p>
          <p className="i-5">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been doing! Or check out my <Link to="/blog">blog</Link> to see
            some of my shower thoughts. 
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:red.five@rebellion.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          {/* <h5 className="watch-list-title pt-4">
            Here are a couple of books from my reading list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of shows from my watch list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of movies from my watch list:
          </h5>
          <p>
            <i>...waaaay too many to list.</i>
          </p> */}
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
