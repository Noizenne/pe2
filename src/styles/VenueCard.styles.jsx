import styled from "styled-components";

export const StyledVenueCard = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  width: 250px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  a {
    text-decoration: none;
  }
  img {
    width: 230px;
    height: 180px;
    border-radius: 15px;
    object-fit: cover;
  }

  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: black;
      
    }

    .icon {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  transition: transform 0.5s;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: opacity 2s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 8px 17px 0 rgba(70, 70, 70, 0.2),
      0 6px 20px 0 rgba(53, 53, 53, 0.15);
    content: "";
    opacity: 0;
    z-index: -1;
  }

  &:hover,
  &:focus {
    transform: scale3d(1.006, 1.006, 1);

    &::after {
      opacity: 1;
    }
  }
`;
