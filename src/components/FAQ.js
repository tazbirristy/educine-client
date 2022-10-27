import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-primary">Frequently Asked Questions</h1>
        <h4 className="text-dark">
          Many of the frequently asked questions about the Online Learning
          programs are answered below. If you would like more information about
          a specific topic, direct your questions to the Online Learning office.
        </h4>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What are the technology requirements to take an online course?
          </Accordion.Header>
          <Accordion.Body>
            You will need a computer,a high speed Internet connection, a newer
            version of a web browser,and access to common tools and software
            like word processors, email, etc. Some courses may have other
            software or technology requirements as well.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Will I get credit for this course?
          </Accordion.Header>
          <Accordion.Body>
            Online Learning credit courses are comparable to on-campus
            courses.You will receive University credit for these courses.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How do I contact my course instructor?
          </Accordion.Header>
          <Accordion.Body>
            Instructors stay in touch with their Online Learning students in a
            variety of ways, depending on the course design. Your instructor
            will explain the best way to reach him or her within the course home
            pages. You may communicate with your instructor through discussion
            groups, bulletin boards, chat rooms, assignment submissions, through
            email, or by telephone.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Can I take more than one course at a time?
          </Accordion.Header>
          <Accordion.Body>
            If you are new to online learning, we recommend that you begin with
            one course. As our courses are offered frequently throughout the
            year, you can always come back and continue your studies with one or
            more topics.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            What should I do if I need to start the course late?
          </Accordion.Header>
          <Accordion.Body>
            It is recommended that you begin your course promptly. If you do
            need to start the course a few days late, contact your instructor as
            soon as possible after the course has opened to discuss your
            options.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
