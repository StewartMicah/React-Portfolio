import React from "react";

const Portfolio = () => {
  return (
    <div className="container">
      <h2>Here's Some Info About Me</h2>
      <h3>Summary</h3>
      <h4>
        Quick learner that thrives in a high paced environment. Excels at
        working with a diverse group of individuals with varied skill sets.
        Project-oriented developer that shines at meeting and understanding
        requirements and producing high quality code. Very flexible, but enjoys
        iterative development cycles to build and refine solutions.
      </h4>
      <h3>Skills</h3>
      <h4>
        React, JavaScript, GraphQL, Apollo, NodeJS, Express, MongoDB, Angular,
        jQuery, HTML, CSS
      </h4>
      <h3>Projects</h3>          
      <h4>
        <h4>Portfolio (React, TypeScript, NodeJS, Express, Heroku)</h4>
        <h4>➔ Leveraged react router for navigation among views and
      url handling.</h4>
        <h4>➔ Used react forms to handle and submit multiple inputs to
      an express backend and store the information in a NoSQL database.</h4>
        <h4>➔ Built,
      deployed, and configured the project with a continuous deployment cycle to
      a cloud hosted solution.</h4>
      </h4>
      <h4>
        <h4 className="margin-top">Clicker Game (React, Redux)</h4>
        <h4>➔ Made use of Redux
      to store and update State.</h4>
        <h4>➔ Implemented a custom hook to update state on
      a set timer.</h4>
        <h4>➔ Utilized useEffect to update a component after it has been
      rendered.</h4>
      </h4>
      <h4>
        <h4 className="margin-top">Card Memory Matching (React, NodeJS)</h4>
        <h4>➔ Used react to dynamically
      render a random set of cards on each render.</h4>
        <h4>➔ Incorporated a utility
      library to assist in assigning a unique ID to each card .</h4>
        <h4>➔ When 2 cards
      are clicked the program will check each props value to determine if they
      match.</h4>
      </h4>
      <h3>Education</h3>
      <h4>
        UCF Alternative Learning Course - Orlando, FL Certification (July 2022)
        <h4>
          ❖ Sustained learning over a 24 week period while dedicating 40+ hours
          a week studying documentation and writing code.
        </h4>
        <h4>
          ❖ These skills were developed by collaborating with instructors and
          fellow students to build multiple projects.
        </h4>
        <h4>❖ Projects were tracked in Git and GitHub for Source Control.</h4>
      </h4>
      <h3>Professional Experience</h3>
      <h4>
        <h4>Together Church - Lakeland, FL</h4>
        <h4>Freelance Full Stack Developer - August 2022</h4>
        <h4>
          ❖ Designed and implemented a react front end for an ecommerce web page
        </h4>
        <h4>
          ❖ Implemented an airtable database to fill the data of each item
        </h4>
        <h4>❖ Understood and applied features requested by the business</h4>
      </h4>
      <h4>
        <h4 className="margin-top">GoWp - Remote</h4>
        <h4>React.Js Contractor - November 2022 - Current</h4>
        <h4>
          ❖ Worked with a team to implement new features per client request
          using React.Js
        </h4>
        <h4>
          ❖ React contractor brought on to expand technical footprint for a
          primarily WordPress shop
        </h4>
      </h4>
    </div>
  );
};

export default Portfolio;
