import styled from 'styled-components'

export const HeaderWrap = styled.div`
height: 60px;
width: calc(100vw - 180px);
margin-left: 20px;
margin-top: 20px;
align-items: center;
padding: 10px;
display: flex;
justify-content: space-between;
background-color: #E5B4B4 ;

`;

export const ContentWrap = styled.div`
    
.fav-list{
    height: 86vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 20px;
    overflow-y: scroll;

    .no-fav{
        text-align: center;
        font-size: 17px;
        
    }

    .fav-items{
        height: 18vh;
        width: 240px;
        display: grid;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 5px;
        background-color: #F5F0F0  ;
        border: 1px solid black;
        overflow-y: scroll;

        .fav-list-header{
            display: flex;
            justify-content: space-between;

            h4{
                margin: 10px 5px;
                font-size: 17px;
                color: black;
                text-decoration: underline;
            }

            .star {
                visibility:hidden;
                font-size:27px;
                cursor:pointer;
                margin-right: 10px;
                height: 30px;
                position: relative;
               
            }
            
        }

        .fav-item-cont{
            margin-left: 5px;
            font-size: 15px;
            color: blue;
        }
        
        .fav-item-des{
            margin-left: 5px;
            font-size: 15px;
            span{
                font-weight: bold;
            }
        }
          
    }
    
    .fav-items::-webkit-scrollbar{
        display: none;
    }
}

.fav-list::-webkit-scrollbar{
    display: none;
}





`;