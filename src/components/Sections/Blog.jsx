import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Welcome to
Hub of Coding</h1>
           
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="About JIT"
                text="Jyothy Institute of Technology is affiliated to Visvesvaraya Technological University and is approved by AICTE, New Delhi. JIT was established in the year 2011 under the leadership of Karnataka Rajyothsava Awardee, Dharmika Pravara, Late Dr. B.N.V Subrahmanya, visionary par excellence."
                tag="Institute"
                
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="About Tech Club"
                text="Our aim is to educate Spradling students with the latest technology trends and skills. Through our club, students will gain knowledge about technology that will facilitate future opportunities. Weekly meetings promote student collaboration and encourage the extraordinary."
                tag="Tech Club"
                
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="JIT Hack"
                text="JITHack is a design and development event which took place on June 26, 2021 which was held online, the participating team had 24 hours to build something incredible... A competition like this aims at developing something amazing within a limited timeframe and also infuses work pressure among the participants, thus testing them beyond their limits."
                tag="Hackathon"
             
              />
            </div>
          </div>
          
        
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;