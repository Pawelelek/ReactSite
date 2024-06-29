import React, { useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Button, Input, CircularProgress, Grid, Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { makeStyles } from '@mui/styles';

interface Song {
  id: number;
  name: string;
  songUrl: string;
}

const useStyles = makeStyles((theme: any) => ({
  songContainer: {
    display: 'grid',
    gridTemplateColumns: '8fr 75px 75px',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3),
    borderStyle: "solid",
    borderRadius: theme.shape.borderRadius,
    borderImage: `linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    ) 1;`,
    // backgroundColor: theme.palette.background.paper,
    // '&:hover': {
    //   // backgroundColor: theme.palette.action.hover,
    //   backgroundColor: "lightyellow",
    // },
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    '&:hover': {
      // backgroundColor: theme.palette.action.hover,
      background: `linear-gradient(90deg, ${theme.palette.primary.main} 25%, ${theme.palette.secondary.main} 75%)`,
    }
  },
  songName: {
    marginRight: theme.spacing(2),
  },
  loadingSpinner: {
    //marginLeft: 'auto',
    marginBottom: theme.spacing(3)
  },
  playlistHeading: {
    background: 'linear-gradient(to right, #00bfff, #ff69b4);',
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    textAlign: "center"
  },
  button: {
    marginTop: theme.spacing(2), 
    marginBottom: theme.spacing(4)
  },
  input: {
    marginBottom: theme.spacing(4), 
    marginRight: theme.spacing(0.5),
    width: 350
  },
})) as () => Record<string, string>;


const PlaylistComponent = () => {
  const { ConvertAndFetchVideo, GetSongsAsync, DeleteSongAsync } = useActions();
  const { allUsers, user } = useTypedSelector((state) => state.UserReducer);
  const [inputValue, setInputValue] = useState('');
  const [activeSong, setActiveSong] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    await GetSongsAsync(user.Id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleConvertButtonClick = async () => {
    if (inputValue.trim() !== "") {
      setInputValue('');
      setIsLoading(true); 
      await ConvertAndFetchVideo(inputValue, user.Id);
      await fetchData();
      setIsLoading(false);
    }
  };

  const handlePlayButtonClick = (index: number) => {
    setActiveSong(index);
    console.log(index);
  };

  const handleDeleteButtonClick = async (id: number) => {
    console.log(`Deleting song with id: ${id}`);
    await DeleteSongAsync(id);
    //await fetchData();

    // if (playingSongIndex !== null && allUsers[playingSongIndex]) {
    //   const newPlayingSongIndex = allUsers.findIndex((song: Song) => song.songUrl === (allUsers[playingSongIndex] as Song).songUrl);
    //   setPlayingSongIndex(newPlayingSongIndex !== -1 ? newPlayingSongIndex : null);
    // }

    // if (activeSong !== null && allUsers[activeSong]) {
    //   const newActiveSongIndex = allUsers.findIndex((song: Song) => song.songUrl === (allUsers[activeSong] as Song).songUrl);
    //   setActiveSong(newActiveSongIndex !== -1 ? newActiveSongIndex : null);
    // }

    //await GetSongsAsync(user.Id);
    //allUsers = allUsers.filter((song: Song) => song.id !== id);
    //await fetchData();
    // if (activeSong !== null && allUsers[activeSong]) {
    //   //const newActiveSongIndex = allUsers.findIndex(song => song.songUrl === (allUsers[activeSong] as Song).songUrl);
    //   const newActiveSongIndex = allUsers.findIndex((song) => (song as any).songUrl === (allUsers[activeSong] as Song).songUrl);
    //   //const newActiveSongIndex = allUsers.findIndex((song: Song) => song.songUrl === (allUsers[activeSong] as Song).songUrl);
    //   setActiveSong(newActiveSongIndex !== -1 ? newActiveSongIndex : null);
    // }
    
  };

  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.playlistHeading}>Playlist</h2>
      <div>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Youtube link here :)"
          className={classes.input}
        />
        <Button
          variant="contained"
          color="warning"
          onClick={handleConvertButtonClick}
          className={classes.button}
        >
          Convert
        </Button>
      </div>
      {isLoading && <CircularProgress className={classes.loadingSpinner} color="secondary"/>}
      <Grid container spacing={2}>
        {allUsers.map((song: Song, index: number) => (
          <Grid item xs={12} key={song.id} className={classes.songContainer}>
            <Typography variant="body1" className={classes.songName}>{song.name}</Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => handlePlayButtonClick(song.id)}
            >
              <PlayCircleOutlineIcon />
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDeleteButtonClick(song.id)}
            >
              <DeleteOutlineIcon />
            </Button>
            {activeSong === song.id && (
              <AudioPlayer
                autoPlay={true}
                src={`${song.songUrl}`}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PlaylistComponent;
