import React, {useContext, useEffect, useRef, useState} from "react";
import '../pages/style/FooterPlayer.scss';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import Slider from "@material-ui/core/Slider";
import {Avatar} from "@material-ui/core";
import ControlsToggleButton from "./controlsToggleButton";
import Name from "./name";
import {ThemeContext} from "../pages/style/Theme";
import {useDispatch, useSelector} from "react-redux";
import { setCurrentPlaying} from "../actions/actions";
import Button from "@material-ui/core/Button";
function FooterPlayListMusicPlayer({idPlayList}) {

    const [{id, name, img,nameTrack}, setCurrTrack] = useState({});

    const [isRepeatClicked, setRepeatClick] = useState(false);
    const [isPrevClicked, setPrevClicked] = useState(false);
    const [isNextClicked, setNextClicked] = useState(false);
    const [isPlaying, setPlayPauseClicked] = useState(false);
    const [isVolumeClicked, setVolumeClicked] = useState(false);
    const [PlayTrack, setPlayTrack] = useState(0);
    const [volume, setVolume] = useState(50);
    const [seekTime, setSeekTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currTime, setCurrTime] = useState(0);
    const [bannerToggle,setBannerToggle] = useState(false);

    const audioElement = useRef();
    const dispatch = useDispatch();
    const {selectPlayList} = useSelector(state => state.playListReducer);
    const useStyle = useContext(ThemeContext);
    const pointer = { cursor: "pointer",  color: useStyle.theme };


    const handleToggle = (type, val) => {
        switch (type) {
            case "repeat":
                setRepeatClick(val);
                break;
            case "prev":
                setPrevClicked(val);
                break;
            case "play-pause":
                setPlayPauseClicked(val);
                break;
            case "next":
                setNextClicked(val);
                break;
            case "volume":
                setVolumeClicked(val);
                break;
            default:
                break;
        }
    };
    
    const handleSeekChange = (event, newValue) => {
        audioElement.current.currentTime =(newValue*duration)/100;
        setSeekTime(newValue)
    };
    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
    };
    const handleBannerToggle = ()=> {
        setBannerToggle(!bannerToggle);
    };

    useEffect(() => {
      // eslint-disable-next-line no-unused-expressions
      if(audioElement.current){

        isPlaying
            ? audioElement.current.play().then(()=>{}).catch((e)=>{audioElement.current.pause(); audioElement.current.currentTime=0;})
            : audioElement.current.pause()
        audioElement.current.loop = isRepeatClicked;
        audioElement.current.volume = volume / 100;
        audioElement.current.muted = isVolumeClicked;
        audioElement.current.onloadeddata = () => {
            if (audioElement.current != null)
                setDuration(audioElement.current.duration)
        };
        setInterval(() => {
            if (audioElement.current !== null)
                setCurrTime(audioElement.current.currentTime);
        })
      }
    });
    

    useEffect(() => {
        setCurrTrack(selectPlayList[0]);
    }, [idPlayList]);


    useEffect(() => {
        setSeekTime((currTime) / (duration / 100))
    }, [currTime, duration]);



    useEffect(()=>{
      if(audioElement.current){
        audioElement.current.onended = ()=> {
            setNextClicked(true);
        };
      }
    })

    useEffect(()=>{
        if (isNextClicked){
            let currTrackId = (PlayTrack+1) % selectPlayList.length;
            dispatch(setCurrentPlaying(selectPlayList[currTrackId]));

            setPlayTrack(currTrackId)
            setCurrTrack(selectPlayList[currTrackId])
            setNextClicked(false);
        }
        if (isPrevClicked){
            let currTrackId = (PlayTrack-1) % selectPlayList.length;
            if ((PlayTrack-1)<0){
                currTrackId = selectPlayList.length - 1;
            }
            dispatch(setCurrentPlaying(selectPlayList[currTrackId]));
            setPlayTrack(currTrackId)
            setCurrTrack(selectPlayList[currTrackId])
            setPrevClicked(false);
        }
    },[dispatch, PlayTrack, isNextClicked, isPrevClicked, selectPlayList]);


    function formatTime(secs) {
        const t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        let s = t.toTimeString().substr(0, 8);
        if (secs > 86399)
            s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
        return s.substring(3);
    }
    return (
        <div style={useStyle.component} className={"footer-player"}>
            <div className="playback">
                {
                    !isNaN(seekTime) &&
                    <Slider style={{color: useStyle.theme}}
                            className={"playback-completed"}
                            value={seekTime} onChange={handleSeekChange}/>
                }
            </div>
            <Button 
                    startIcon={<Avatar variant="square" src={img} alt={name}/>}
                    onClick={handleBannerToggle}
                    className="curr-music-container">
                <div className="curr-music-details">
                    <div> 111111111111</div>
                    {
                        name?
                        
                        <Name name={name} className={"song-name"} length={name.length}/>
                        :
                        <Name name={nameTrack} className={"song-name"} length={nameTrack?.length}/>
                    }
                </div>
            </Button>
            <div className="playback-controls">

                <ControlsToggleButton style={pointer} type={"repeat"}
                                      defaultIcon={<RepeatIcon fontSize={"large"}/>}
                                      changeIcon={<RepeatOneIcon fontSize={"large"}/>}
                                      onClicked={handleToggle}/>

                <ControlsToggleButton style={pointer} type={"prev"}
                                      defaultIcon={<SkipPreviousIcon fontSize={"large"}/>}
                                      changeIcon={<SkipPreviousIcon fontSize={"large"}/>}
                                      onClicked={handleToggle}/>
     {
                        name?
                        <audio ref={audioElement} src={require(`../../../server/song/${name}` ).default} preload={"metadata"}/>
                        :
                        nameTrack?
                      
                        <audio ref={audioElement} src={require(`../../../server/song/${nameTrack}` ).default} preload={"metadata"}/>
                        :
                        null
                    }

                <ControlsToggleButton style={pointer} type={"play-pause"}
                                      defaultIcon={<PlayArrowIcon fontSize={"large"}/>}
                                      changeIcon={<PauseIcon fontSize={"large"}/>}
                                      onClicked={handleToggle}/>


                <ControlsToggleButton style={pointer} type={"next"}
                                      defaultIcon={<SkipNextIcon fontSize={"large"}/>}
                                      changeIcon={<SkipNextIcon fontSize={"large"}/>}
                                      onClicked={handleToggle}/>
            </div>
            <div className="playback-widgets">
                <div className="timer">
                    <p>
                        <span>{formatTime(currTime)}</span>
                        /
                        <span>{formatTime(duration)}</span>
                    </p>
                </div>
                <div className={"slider"}>
                    <Slider style={{color: useStyle.theme}} value={volume} onChange={handleVolumeChange}/>
                </div>
                <ControlsToggleButton style={pointer} type={"volume"}
                                      defaultIcon={<VolumeUpIcon/>}
                                      changeIcon={<VolumeOffIcon/>}
                                      onClicked={handleToggle}/>
            </div>
        </div>

    );
}

export default FooterPlayListMusicPlayer;