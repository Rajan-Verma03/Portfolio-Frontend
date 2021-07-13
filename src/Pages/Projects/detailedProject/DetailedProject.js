import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../../../client";
import BlockContent from "@sanity/block-content-to-react";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    );
  }

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};
const CodeRenderer = (props) => {
  return (
    <pre className="code_block" data-language={props.node.language}>
      <div>{props.node.language}</div>
      <code>{props.node.code}</code>
    </pre>
  );
};
const DetailedProject = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']
        {_createdAt, 
        _id 
        ,slug
        ,about
        ,content
        ,name
        ,tags
        ,link
        ,codeLink
        ,'imgUrl': titleImg.asset->url
      }`
      )
      .then((res) => {
        setProject(res[0]);
      })
      .catch(console.error);
  });

  if (!project || project === null) {
    return <h3 className="loading">Loading....</h3>;
  }
  return (
    <>
      <section className=" oneProject-section">
        <Link to="/projects" className="btn">
          back
        </Link>
        <h2 className="section-title">
          {project.name}
          <div className="underline" style={{ margin: "6px auto" }} />
        </h2>
        <div className="oneProject">
          <img src={project.imgUrl} alt={project.name}></img>
          <div className="oneProject-info">
            <p>
              <span className="oneProject-data">About :</span> {project.about}
            </p>
            <p>
              <span className="oneProject-data">category :</span> {project.name}
            </p>
            <p>
              <span className="oneProject-data">Live Link :</span>
              <a href={project.link}> Live Demo URL</a>
            </p>
            <p>
              <span className="oneProject-data">Source Code :</span>{" "}
              <a href={project.codeLink}>GitHub Source Code</a>
            </p>
            <p>
              <span className="oneProject-data">Tags :</span>
              {project.tags.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null;
              })}
            </p>
          </div>
        </div>
        <div className="block-content">
          <BlockContent
            blocks={project.content}
            projectId="l7n74bj0"
            dataset="production"
            serializers={{
              types: {
                block: BlockRenderer,
                code: CodeRenderer,
              },
            }}
          />
        </div>
      </section>
    </>
  );
};

export default DetailedProject;
