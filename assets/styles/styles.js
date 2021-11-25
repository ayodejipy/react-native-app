import styled from 'styled-components/native'
import { StatusBar } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// Set top padding of container to status bar's height
const paddingTop = StatusBar.currentHeight + 'px';


export const Container = styled.View`
    /* font-family: 'SofiaPro-Regular'; */
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #040f28;
    color: #fff;
    height: 100%;
    padding-top: ${paddingTop};
    margin-bottom: ${({ tabHeight }) => tabHeight ? tabHeight + 'px' : '0'};
    /* padding: 0 25px; */
`

export const PortfolioSummary = styled.View`
    background-color: #c3841c;
    border-radius: 8px;
    flex: 1;
    height: 130px;
    margin-right: 10px;
    margin-left: 10px;
    /* flex-direction: column;
    align-items: center;
    justify-content: center; */
    
    
    /* :first-child {
        margin-left: 0;
        background-color: #000;
    }
    :last-child {
        margin-right: 0;
    }
    :nth-child() {
    } */
`