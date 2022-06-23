import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/Prajwal_Rao.jpeg";
import ProjectImg2 from "../../assets/img/projects/VINAY_M.jpg";
import ProjectImg3 from "../../assets/img/projects/Shravan.jpeg";
import ProjectImg4 from "../../assets/img/projects/Neha.jpg";
import ProjectImg5 from "../../assets/img/projects/Rakshith_J.jpg";
import ProjectImg6 from "../../assets/img/projects/Dhanush_M.jpg";
import ProjectImg7 from "../../assets/img/projects/vishal_s_naik.jpg";
import ProjectImg8 from "../../assets/img/projects/Shrusti_Hulekal.jpg";
import ProjectImg9 from "../../assets/img/projects/Amogh_Sharma.jpg";
import ProjectImg11 from "../../assets/img/projects/Anagha_Bharadwaj.jpg";
import ProjectImg12 from "../../assets/img/projects/Krishna_Koustub.jpeg";
import ProjectImg13 from "../../assets/img/projects/Bharath_Kumar_R.png";
import ProjectImg10 from "../../assets/img/projects/Vedamurthy_S_P.jpeg";



import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Team</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
            
                img={ProjectImg1}
                title="Prajwal A R"
                text="Student working Towards Computer Science Engineering focused in Cyber Security and also an Aspiring Entrepreneur"
<<<<<<< Updated upstream
=======
                url="www.google.com"
                action={() => alert("clicked")}
>>>>>>> Stashed changes
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
            
                img={ProjectImg2}
                title="Vinay M"
                text="Student working Towards Computer Science Engineering focused in Cyber Security and also an Aspiring Entrepreneur"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Shravan K G"
                text="A student aspiring to become AI/ML Engineer with a dream to start a company."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Neha Nayak"
                text="A Computer Science Engineering student, I am interested in Artificial Intelligence,
                 Machine Learning and Data Science."
              />
            </div>
         
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Rakshith J"
                text="An AI/ML enthusiast aspiring to build projects which helps society, Currently working towards enhancing my Skills in the field of AI/ML and Full-Stack development.
                "
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Dhanush M"
                text="A third year computer science student at jyothy Institute of technology with a penchant for web building
                "
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg7}
                title="Vishal S Naik"
                text="Travel whenever you can, life is short to think twice
                "
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg8}
                title="Shrusti P Hulekal"
                text="To infinity and beyond! 
                "
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg9}
                title="Amogha Sharma"
                text="A third year student at JIT with interest for data science.
                "
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg10}
                title="VEDA MURTHY S P"
                text="I am a quick learner.I love facing challenges.I have experience in python,java and c++ languages.I want to become a full stack developer. "
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg11}
                title="Anagha Bharadwaj"
                text="Passionate to learn and explore.Someday, I would like to look as cool as those engineers portrayed in the movies."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg12}
                title="Krishna Koustub"
                text="I am a Computer Science and Engineering  student. Open-source, web development, software engineering, and UX/UI design are some of my passions."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg13}
                title="Bharath Kumar R"
                text="I am a passionate Computer Science Engineering student having Keen Interest In Ai/Ml(Predictive analysis) and robotics field."
              />
            </div>
            
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg10}
                title="Bharath Kumar R"
                text="I am a passionate Computer Science Engineering student having Keen Interest In Ai/Ml(Predictive analysis) and robotics field."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg10}
                title="Bharath Kumar R"
                text="I am a passionate Computer Science Engineering student having Keen Interest In Ai/Ml(Predictive analysis) and robotics field."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg10}
                title="Bharath Kumar R"
                text="I am a passionate Computer Science Engineering student having Keen Interest In Ai/Ml(Predictive analysis) and robotics field."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg10}
                title="Bharath Kumar R"
                text="I am a passionate Computer Science Engineering student having Keen Interest In Ai/Ml(Predictive analysis) and robotics field."
                action={() => alert("clicked")}
              />
            </div> */}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about company</h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
