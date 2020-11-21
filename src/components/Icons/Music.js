import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.bg.secondary};
  height: 100px;
  width: 100px;
`;

const Music = () => (
  <StyledSvg viewBox="0 0 512 512" fill="black">
    <g>
      <g>
        <path
          d="M491.243,235.243h-6.919v-102.63c0-11.463-9.294-20.757-20.757-20.757s-20.757,9.294-20.757,20.757v102.63h-41.514V96.865
			c0-11.463-9.294-20.757-20.757-20.757s-20.757,9.294-20.757,20.757v138.378H318.27v-76.108c0-11.463-9.293-20.757-20.757-20.757
			c-11.463,0-20.757,9.294-20.757,20.757v76.108h-41.514V48.432c0-11.463-9.293-20.757-20.757-20.757s-20.757,9.294-20.757,20.757
			v186.811h-41.513V131.459c0-11.463-9.294-20.757-20.757-20.757s-20.757,9.294-20.757,20.757v103.784H69.189v-62.27
			c0-11.463-9.294-20.757-20.757-20.757s-20.757,9.293-20.757,20.757v62.27h-6.919C9.294,235.243,0,244.537,0,256
			s9.294,20.757,20.757,20.757h6.919v62.27c0,11.463,9.294,20.757,20.757,20.757s20.757-9.294,20.757-20.757v-62.27h41.513v103.784
			c0,11.463,9.294,20.757,20.757,20.757s20.757-9.294,20.757-20.757V276.757h41.513v186.811c0,11.463,9.294,20.757,20.757,20.757
			s20.757-9.294,20.757-20.757V276.757h41.514v76.108c0,11.463,9.293,20.757,20.757,20.757c11.463,0,20.757-9.294,20.757-20.757
			v-76.108h41.514v138.378c0,11.463,9.293,20.757,20.757,20.757s20.757-9.294,20.757-20.757V276.757h41.514v104.938
			c0,11.463,9.293,20.757,20.757,20.757s20.757-9.294,20.757-20.757V276.757h6.919c11.463,0,20.757-9.294,20.757-20.757
			S502.707,235.243,491.243,235.243z"
        />
      </g>
    </g>
  </StyledSvg>
);

export default Music;