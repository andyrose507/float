import styled from "styled-components"
import AudioPlayer from "react-h5-audio-player"
import { usePlayer } from "../../context/PlayerProvider";

import 'react-h5-audio-player/lib/styles.css';

const SongPlayerContainerTheSequel = styled.div`
    .transition {
        bottom: 0;
        opacity: 1;
        visibility: visible;
    }

    margin-top: auto;
`

const SongPlayerContainer = styled.div`
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    display: flex;
    flex-shrink: 0;
    transition: all 1s;
    justify-content: center;
    width: 100%;
    position: fixed;
    bottom: -5vh;


    .rhap_container {
        border-radius: 5px 5px 0 0;
        width: 1180px;
        height: 7vh;
        background-color: rgb(104,75,181);
        * {
            color: white;
        }
    }
    `

const SongPlayer = ({ src }) => {
    const player = usePlayer()

    const audio = document.querySelector("audio")

    if (audio) {
        audio.id = "audio"
    }

    return(
    <SongPlayerContainerTheSequel>
        <SongPlayerContainer id="player-container" className={player.visible ? "transition" : ""}>
            <AudioPlayer
            id="player"
            volume={0.1}
            layout={"horizontal-reverse"}
            showSkipControls={false}
            showJumpControls={false}
            showFilledProgress={true}
            showFilledVolume={true}
            src={src}
            />
        </SongPlayerContainer>
    </SongPlayerContainerTheSequel>
    )
}

export default SongPlayer
