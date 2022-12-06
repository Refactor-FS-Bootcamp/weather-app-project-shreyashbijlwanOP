import styled from "styled-components";

export const CityAdder = styled.div`

    height: 400px;
    width: 400px; 
    background-color: white;
    border-radius: 5px;
    overflow:hidden;

    .add-city-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background:#ffce5f ;
        height: 50px;
    }  

    .addcity-input{
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;

        input{
            height: 35px;
            width: 80%;
            font-size: 15px;
            text-indent:5px;
            &:hover{
                border: 2px solid rgb(54, 162, 224);
                transition-duration: 0.3s;
            }
        }

    }

    .cities-list{
        height: 275px;
        padding: 10px;
        justify-content: center;
        overflow-y: scroll;

        ul li{
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
            border: 1px solid rgb(183, 178, 178);
            height: 45px;
            width: 95%;
            margin: 5px auto;
            border-radius: 5px;
        }

        ul li button{
            font-size: 20px;
            height: 25px;
            width: 25px;
            background: none;
            border-radius: 60px;
        }
    }
    
    .cities-list::-webkit-scrollbar {
        display: none;
    }


`;