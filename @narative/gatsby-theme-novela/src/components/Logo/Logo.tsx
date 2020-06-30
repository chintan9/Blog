import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "theme-ui";


import mediaqueries from "@styles/media";

import { Icon } from "@types";


const Logo: Icon = ({ fill }) => {
    return (
        <LogoContainer>
            <div style={{ color: `${fill}` }} className="logo">Logo</div>
        </LogoContainer>
    );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
