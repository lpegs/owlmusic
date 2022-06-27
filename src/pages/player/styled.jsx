import styled from 'styled-components';

export const PageArea = styled.div`
    width: 350px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    

    img {
        width: 300px;
        height: 300px;
        border-radius: 15px;
        border: 5px solid rgb(100, 100, 100);
    }

    h2 {
        margin-bottom: 5px;
    }

    .descricao {
        width: 300px;
        color: rgba(255, 255, 255, 0.7);
    }

    .duracao {
        width: 300px;
        margin-top: 25px;
        color: rgba(255, 255, 255, 0.7);
    }

    .barra {
        width: 100%;
        height: 6px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        input{
            width: 100%;
            height: 6px;
        }
    }
    
    progress {
        height: 6px;
        width: 0%;
        background-color: rgb(27, 145, 255);
    }
        
    .tempo {
        display: flex;
        width: 300px;
        justify-content: space-between;
    }

    .player {
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .play-pause {
        color: rgba(255, 255, 255, 0.7);
        font-size: 40px;
        cursor: pointer;
        margin: 0 30px;

        &:hover {
            color: rgba(255, 255, 255, 0.8);
        }
    }

    .setas {
        color: rgba(255, 255, 255, 0.7);
        font-size: 29px;
        cursor: pointer;

        &:hover {
            color: rgba(255, 255, 255, 0.8);
        }
    }
    
    .slider-cont{
        margin-top: 40px;
        width: 300px;
        display: flex;
        align-items: center;    
        justify-content: center;
    
        input {
            width: 200px;
            height: 4px; 
            background: rgba(255, 255, 255, 0.2); 
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            background: rgb(27, 145, 255);
            cursor: pointer;
            box-shadow: 0 0 2px 0 #555;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
            background: rgb(27, 110, 200);
        }

        .volume {
            margin-right: 10px;
            font-size: 22px;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;

            &:hover {
                color: rgba(255, 255, 255, 0.8);
            }
        }
    }

    button {
        border: none;
    }
    
`;