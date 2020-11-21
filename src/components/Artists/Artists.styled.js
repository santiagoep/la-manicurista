import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  > .artists__artist:after {
    content: " &";
  }
  > .artists__artist:last-of-type:after {
    content: "";
  }
`;
