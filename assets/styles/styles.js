import styled from "styled-components/native";
import { StatusBar } from "react-native";

// Set top padding of container to status bar's height
const paddingTop = StatusBar.currentHeight + 'px';

export const Container = styled.View`
    font-family: 'SofiaPro-Regular';
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    background-color: linear-gradient(332deg, rgba(2,2,8,1) 0%, rgba(6,6,10,1) 45%, rgba(17,20,20,1) 96%);
    color: #fff;
    height: 100%;
    padding-top: ${paddingTop};
    /* padding: 0 25px; */
`