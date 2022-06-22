import styled from "styled-components/native";

export const Spinner = styled.View`
   border: 3px solid ${({ background }) => background ? background : '#e3e3e3' };
   border-top-width: 3px;
   border-top-color: ${({ spindot }) => spindot ? spindot : '#121212' };
   border-radius: 30px;
   width: ${({ width }) => width ? width : '20px' } ;
   height: ${({ height }) => height ? height : '20px' };
`