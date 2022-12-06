import styled from "styled-components";


export const SiderWrapper= styled.div`

    background-color: #03ECBB  ;
    width: 150px;
    height: 100vh;
    color: black;

    a{
        color: black;
        text-decoration: none;
    }

    .sider-content{
        font-size: 23px;
        text-align: center;
        padding: 10px;

        &:hover{
            cursor: pointer;
            transition-duration: 0.5s;
        }
    }
`;