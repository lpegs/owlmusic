import { React } from "react";
import { PageArea } from "./styled";
import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { BiVolumeFull, BiVolumeLow, BiVolumeMute, BiVolume } from "react-icons/bi"
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../../atoms/songAtom";
import { isFavouriteState } from "../../atoms/isFavourite"

const Player = () => {

    const [ currentTrackId, setCurrentTrackId ] = useRecoilState(currentTrackIdState)
    const [ isFavourite, setIsFavourite ] = useRecoilState(isFavouriteState)

    const songs = [
        { "id": 0, "titulo": "2step", "artista": "Ed Sheeran", "source": require('../../images/2step/2step.mp3'), "img": require('../../images/2step/2step.png'), "favourite": false },
        { "id": 1, "titulo": "Bad Habits", "artista": "Ed Sheeran", "source": require('../../images/badhabits/badhabits.m4a'), "img": require('../../images/badhabits/badhabits.jpg'), "favourite": false },
        { "id": 2, "titulo": "Cross Me", "artista": "Ed Sheeran, Chance the Rapper", "source": require('../../images/crossme/crossme.mp3'), "img": require('../../images/crossme/crossme.jpg'), "favourite": false },
        { "id": 3, "titulo": "Shivers", "artista": "Ed Sheeran", "source": require('../../images/shivers/shivers.mp3'), "img": require('../../images/shivers/shivers.jpg'), "favourite": false },
        { "id": 4, "titulo": "Sigue", "artista": "J Balvin, Ed Sheeran", "source": require('../../images/sigue/sigue.mp3'), "img": require('../../images/sigue/sigue.jpg'), "favourite": false },
        { "id": 5, "titulo": "River", "artista": "Eminem, Ed Sheeran", "source": require('../../images/river/river.mp3'), "img": require('../../images/river/river.jpg'), "favourite": false },
        { "id": 6, "titulo": "Bam Bam", "artista": "Camila Cabello, Ed Sheeran", "source": require('../../images/bambam/bambam.mp3'), "img": require('../../images/bambam/bambam.png'), "favourite": false },
        { "id": 7, "titulo": "Shape of You", "artista": "Ed Sheeran", "source": require('../../images/shapeofyou/shapeofyou.mp3'), "img": require('../../images/shapeofyou/shapeofyou.jpg'), "favourite": false }
    ]

    const [ musica, setMusica ] = useState(0);

    const [ volume, setVolume ] = useState(50);
    const [ isPlaying, setIsPlaying ] = useState(false);
    const [ duration, setDuration ] = useState(0);
    const [ currentTime, setCurrentTime ] = useState(0);
    const [ newVolume, setNewVolume ] = useState(0);

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    useEffect(() => {
        setMusica(currentTrackId)
    }, [currentTrackId])

    useEffect(() => {
        if (isPlaying) {
        audioPlayer.current.volume = volume / 100;
        }
    }, [volume])

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    useEffect(() => {
        
        if (isPlaying) {
            audioPlayer.current.play()
        }

    }, [songs[musica]])

    useEffect(() => {
        setMusica(Math.floor(Math.random() * 8))
    }, [currentTime == duration])

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue)
        if (!prevValue){
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current)
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const volumeHandler = () => {

        const prevVolume = volume;

        if (prevVolume !== 0) {
            setNewVolume(prevVolume);
        } 

        if (volume === 0 && newVolume === 0) {
            setVolume(30)
        }

        if (volume !== 0) {
            setVolume(0)
        }

        if (volume === 0 && prevVolume === 0) {
            setVolume(newVolume)
        }

    }

    return (
        <PageArea>
            <audio ref={audioPlayer} src={songs[musica].source} preload="metadata" ></audio>
            <img src={songs[musica].img} alt="imagem" />
            <div className="descricao">
                <h2>{songs[musica].titulo}</h2>
                <i>{songs[musica].artista}</i>
            </div>
            <div className="duracao">
                <div className="barra">
                    <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} ></input>
                </div>
                <div className="tempo">
                    <p className="inicio">{calculateTime(currentTime)}</p>
                    <p className="fim">{(duration && !isNaN(duration)) && calculateTime(duration)}</p>
                </div>
            </div>
            <div className="player">
                <FaBackward className="setas" onClick={() => {

                    if (musica === 0){
                        setMusica(7)
                    } else {
                        setMusica(musica - 1)
                    }
                    
                }} />
                <button onClick={togglePlayPause}>
                    { isPlaying ? <FaPause className="play-pause" /> : <FaPlay className="play-pause" id="play" /> }
                </button>
                
                <FaForward className="setas" onClick={() => {

                    if (musica === 7) {
                        setMusica(0)
                    } else{
                        setMusica(musica + 1)
                    }
                    audioPlayer.current.play();
                }} />

                <i className="fas fa-step-forward setas proximo"></i>
            </div>

            <div className="slider-cont">

                { volume === 0 ? <BiVolumeMute onClick={volumeHandler} className="volume" /> : volume <= 21 ? <BiVolume onClick={volumeHandler} className="volume" /> : volume <= 66 ? <BiVolumeLow onClick={volumeHandler} className="volume" /> : <BiVolumeFull onClick={volumeHandler} className="volume" /> }

                <input type="range" min="0" max="100" defaultValue="50" onChange={(value) => {
                    setVolume(parseInt(value.target.value))
                }} />                
            </div>
        </PageArea>
        
    );
}

export default Player;