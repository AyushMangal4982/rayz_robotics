import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel0 = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Carousel {...settings}>
        <Wrap>
          <a href="#">
            <img src="/images/gallery3.jpeg" alt="" />
          </a>
        </Wrap>        
        <Wrap>
          <a href="#">
            <img src="/images/gallery2.jpeg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#">
            <img src="/images/gallery1.png" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#">
            <img src="/images/gallery4.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#">
            <img src="/images/gallery5.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#">
            <img src="/images/gallery6.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#">
            <img src="/images/gallery7.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#">
            <img src="/images/gallery8.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#">
            <img src="/images/gallery9.jpg" alt="" />
          </a>
        </Wrap>
      </Carousel>
    </Container>
  );
};

const Container = styled.div``;

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    transition: opacity 0.2s ease 0s;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;
const Wrap = styled.div`
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: flex;
    position: relative;
    padding: 4px;
    margin:0 20px;
    img {
      width: 100%;
      height: 50vh;
      @media (max-width:768px) {
        height: 25vh;
      }
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default Carousel0;

      
