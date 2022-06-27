import React from "react";
import { PageArea } from "./styled";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../../../atoms/songAtom";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Home = () => {

    const [ currentTrackId, setCurrentTrackId ] = useRecoilState(currentTrackIdState)

    return (
        <PageArea>
            <div className="music" >
                    <div className="music-items" onClick={() => {
                        setCurrentTrackId(0)
                        }
                    }>
                        <img src={require("../../../images/2step/2step.png")} alt="albumpic"></img>
                        <div className="music-text">
                            <text>2step</text>
                            <text>Ed Sheeran</text>
                        </div>
                    </div>
                    <BsHeart className="favourite" onClick={() => {

                    }} />
                   
            </div>
            <div className="music">
                <div className="music-items" onClick={() => {
                            setCurrentTrackId(1)
                        }
                    }>
                    <img src={require("../../../images/badhabits/badhabits.jpg")} alt="albumpic"></img>
                    <div className="music-text">
                        <text>Bad Habits</text>
                        <text>Ed Sheeran</text>
                    </div>
                </div>

                <BsHeart className="favourite" onClick={() => {

                }} />
            </div>
            <div className="music">
                <div className="music-items" onClick={() => {
                        setCurrentTrackId(2)
                        }
                    }>
                    <img src={require("../../../images/crossme/crossme.jpg")} alt="albumpic"></img>
                    <div className="music-text">
                        <text>Cross Me</text>
                        <text>Ed Sheeran, Chance the Rapper</text>
                    </div>
                </div>
                <BsHeart className="favourite" onClick={() => {

                }} />
            </div>
            <div className="music">
                <div className="music-items" onClick={() => {
                        setCurrentTrackId(3)
                        }
                    }>
                    <img src={require("../../../images/shivers/shivers.jpg")} alt="albumpic"></img>
                    <div className="music-text">
                        <text>Shivers</text>
                        <text>Ed Sheeran</text>
                    </div>
                </div>
                <BsHeart className="favourite" onClick={() => {

                }} />
            </div>
            <div className="music">
                <div className="music-items" onClick={() => {
                        setCurrentTrackId(4)
                        }
                    }>
                    <img src={require("../../../images/sigue/sigue.jpg")} alt="albumpic"></img>
                    <div className="music-text">
                        <text>Sigue</text>
                        <text>J Balvin, Ed Sheeran</text>
                    </div>
                </div>
                <BsHeart className="favourite" onClick={() => {

                }} />
            </div>
            <div className="music">
                <div className="music-items" onClick={() => {
                        setCurrentTrackId(5)
                        }
                    }>
                    <img src={require("../../../images/river/river.jpg")} alt="albumpic"></img>
                    <div className="music-text">
                        <text>River</text>
                        <text>Eminem, Ed Sheeran</text>
                    </div>
                </div>
                <BsHeart className="favourite" onClick={() => {

                }} />
            </div>
            <div className="music">
                <div className="music-items" onClick={() => {
                        setCurrentTrackId(6)
                        }
                    }>
                    <img src={require("../../../images/bambam/bambam.png")} alt="albumpic"></img>
                    <div className="music-text">
                        <text>Bam Bam</text>
                        <text>Camila Cabello, Ed Sheeran</text>
                    </div>
                </div>
                <BsHeart className="favourite" onClick={() => {

                }} />
            </div>
            <div className="music">
                <div className="music-items" onClick={() => {
                        setCurrentTrackId(7)
                        }
                    }>
                    <img src={require("../../../images/shapeofyou/shapeofyou.jpg")} alt="albumpic"></img>
                    <div className="music-text">
                        <text>Shape of You</text>
                        <text>Ed Sheeran</text>
                    </div>
                </div>
                <BsHeart className="favourite" onClick={() => {

                }} />           
            </div>

        </PageArea>  
    );
}

export default Home;