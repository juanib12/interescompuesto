import styled from "styled-components";

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #f78ca0 0%,
    #f9748f 19%,
    #fd868c 60%,
    #fe9a8b 100%
  );
  color: white;
  font-size: 1em;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 3px rgb(0,0,0,0.3);
    transition: all 0.5s ease;
  }
`;

export default Button;
