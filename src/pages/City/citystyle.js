import styled from "styled-components";

export const CityPage = styled.div`

    display: flex;

    .city-content{
        border: 2px solid gray;
        height: 94vh;
        width: 30%;
        margin: 20px;
        

        .city-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;

            button{
                height: 30px;
                width: 30px;
                border: 1px solid gray;
                background: lightgray;
                border-radius: 50px;
            }
        }

        .city-init{
            padding: 10px;
            height: 90%;
            overflow-y: scroll;

            .city-selected{
                li{
                    list-style: none;
                    margin-top: 10px;
                    border: 2px solid gray;
                    width: 100%;
                    height: 50px;
                    border-radius: 5px;
                    padding-left: 10px;
                    background-color: #E9ECEB ;
                    color:rgb(78, 75, 75);

                    &:hover{

                        cursor: pointer;
                        transition-duration: 0.3s;
                    }
                
                }
            }
        }
        
        .city-init::-webkit-scrollbar{
            display: none;
        }

        
    } 

    .city-desc{
        border: 2px solid rgb(237, 235, 235);
        height: 91vh;
        width: 60%;
        margin: 20px;
        box-shadow: 0px 0px 4px rgb(0 0 0 / 75%);

        .city-desc-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
        }

        input{
            margin-bottom: 30px;
        }

        .star {
            visibility:hidden;
            font-size:30px;
            cursor:pointer;
            
        }

        .city-desc-content{
            height: 90%;
            width: 100%;
            align-items: center;
            justify-content: center;
            display: flex;

            .city-desc-content-inner{
                height: 35%;
                width: 100%;
                
                border-radius: 7px;
                text-align: center;

                #description{
                    margin-top: 20px;
                    font-size: 18px;
                    color:blue;
             
                }

                .inner-det{
                    margin-top: 5px;
                }

                .inner-det span{
                    font-weight: bold;
                    
                
                }
            }
        }

        @media screen and (max-height: 450px){
            .city-desc-content{
                display: block;
            }
            .city-desc-content-inner{
                margin: 0px auto;
            }
        
        }
        

        
    }

    @media screen and (max-width: 1550px){
        .city-desc{
            min-height: 94vh;
        }
    }

    @media screen and (max-width:730px){
        .city-desc-content-inner{
            min-height: 50%;
        }
        .city-desc{
            min-height: 94vh;
        }
    
    }

        
`;