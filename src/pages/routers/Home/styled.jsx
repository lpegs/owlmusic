import styled from 'styled-components';

export const PageArea = styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow-y: scroll;
    color: white;
    cursor: pointer;
    ::-webkit-scrollbar {
        width: 10px;
      }

    .music {
        width: 280px;
        height: 100px;
        display: flex;

        .favourite {
            font-size: 25px;
            margin: auto;
            background: transparent;
            opacity: 0;

            &:hover {
                color: rgb(16, 145, 255)
            }

        }

        .music-items {
            width: 230px;
            display: flex;

            img {
                height: 90px;
                width: 90px;
                margin: auto 5px;
            }
    
            .music-text{
                width: 100%;
                align-items: left;
                display: flex;
                flex-direction: column;
                margin: auto 5px;
                background-color: rgba(0,0,0,0.2);
    
                text {
                    text-align: left;
                    width: 100%;
                }
    
                text:first-child {
                    font-size: 25px;
                }
    
            }

        }

        


    }

    .music:hover {
        background: rgb(48, 48, 48);

        .music-items {
            background: rgb(48, 48, 48);
            text {
                background: rgb(48, 48, 48);

            }
        }

        .favourite {
            opacity: 1;
            transition: 1s;
            background: rgb(48, 48, 48);
        }
    }


`;