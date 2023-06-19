import React, {useEffect} from "react";
import { StyledVenue } from "../../styles/Venue.styles";
import Back from "../../components/Back";

function AboutPage() {

  useEffect(() => {
    document.title = `Holidaze | About`;
  }, []);
  return (
    <StyledVenue>
      <Back />
      <div className="about">
        <h1>Welcome to Holidaze - Your Perfect Accommodation Gateway!</h1>
        <p>
          At Holidaze, we believe that every journey should be filled with
          delightful moments and unforgettable experiences. Whether you're
          planning a relaxing beach vacation, a thrilling city adventure, or a
          serene mountain retreat, we are here to help you find the ideal
          accommodation that suits your needs and preferences.
        </p>
        <p>
          Our website is designed to be your one-stop destination for all things
          accommodation-related. We have carefully curated a vast collection of
          properties, ranging from luxurious resorts to cozy cottages, trendy
          apartments to charming bed and breakfasts, and everything in between.
          With thousands of options available worldwide, you can easily discover
          your dream destination and book the perfect place to stay.
        </p>
      </div>
    </StyledVenue>
  );
}

export default AboutPage;
