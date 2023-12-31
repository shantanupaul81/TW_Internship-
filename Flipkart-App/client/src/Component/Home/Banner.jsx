//  *Data
import { bannerData } from "../../Constant/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {styled} from "@mui/material";


// !Carousel Data

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// !Styled
const Image = styled('img')(({ theme}) => ({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 180
    }
}));




const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      showDots={false}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {bannerData && bannerData.map((image) => (
        <Image src={image.url} alt="banner" />
      ))}
    </Carousel>
  );
};

export default Banner;
