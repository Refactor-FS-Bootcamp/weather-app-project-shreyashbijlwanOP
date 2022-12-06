import styled from "styled-components";


export const SiderWrapper= styled.div`

    background-color: #633ea5  ;
    width: 120px;
    height: 100vh;

    a{
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