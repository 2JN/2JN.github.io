import React from "react";

import Animate from "../animate";

const Description = () => {
  return (
    <Animate>
      <section className="my-28">
        <div className="container">
          <h2>Hi, I'm Jose Navas</h2>

          <div className="space-y-8">
            <p>
              I’m a Web Developer from Guatemala. I work remotely as freelance
              and I can help you to reach your audience and make your business
              grow.
            </p>

            <p>
              I've built websites since 2018, I focus on responsive design,
              animations and accessibility, combined with digital marketing.
            </p>

            <div className="text-center mt-16">
              <a href="/" className="btn btn-round btn-primary">
                MORE ABOUT ME
              </a>
            </div>
          </div>
        </div>
      </section>
    </Animate>
  );
};

export default Description;
