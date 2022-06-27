import styled from 'styled-components';

export const PageArea = styled.div`
    width: 450px;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .container-musicas{
        margin-top: 20px;
        position: relative;
        width: 350px;
        height: 600px;
        background-color: rgb(110, 110, 110);
        padding: 0 2%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }
    
    .container-musicas .pages{
        -webkit-box-shadow: 1px 1px 50px 16px #585858; 
        box-shadow: 1px 1px 50px 16px #575757;
    }
    
    .container-musicas .pages{
        position: absolute;
        z-index: 10;
        width: 300px;
        height: 500px;
        // border: 1px solid rebeccapurple;
    }
    
    .container-musicas::before{
        content: "";
        position: absolute;
        width: 200px;
        height: 802px;
        background: rgb(27, 145, 255);
        animation: animate 10s linear infinite;
    }
    
    
    @keyframes animate{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    
    }
    
    .container-musicas::after{
        content:"";
        position: absolute;
        inset: 4px;
        background: #333;
    }
    
    .container-musicas h2{
        z-index: 10;
        color: white;
        /* float: left; */
        margin-top: 70px;
        margin-left: 15px;
    }
    
    .container-musicas img{
        cursor: pointer;
        z-index: 10;
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
        /* float: left; */
    }

    .menu-container {
        width:80px;
        height:600px;
        display: flex;
        flex-direction: column;
        align-items: end;

        .button {
            width:50px;
            height:50px;
            margin-top: 5px;
            margin-bottom: 5px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.1s;
            border-radius: 10px;

            .btn-icon {
                color: rgba(255, 255, 255, 0.8);
                font-size: 25px;
                background-color: rgba(0, 0, 0, 0.02);
            }

        }

        .button:first-child {margin-top: 15px;}
        .button:hover {
            background-color: rgba(0, 0, 0, 0.2);

            .btn-icon {
                color: rgba(16, 145, 255);
            }

        }
    }
    
`;