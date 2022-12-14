import { MouseEventHandler } from "react";
export interface SingleSongProps {
  id?: number;
  title: string;
  artist: string;
  urlKey: string;
  genres: string[];
  searchTerms: string[];
}

interface MoodProp {
  id: number;
  title: string;
  img: string;
}

export interface SingleMoodProps {
  id: number;
  title: string;
  image: string;
  handleMood: React.Dispatch<React.SetStateAction<string>>;
}

export interface AppProps {
  songs: SingleSongProps[];
  moods: MoodProp[];
  currentMood?: string;
}

export interface MoodProps {
  moods: MoodProp[];
  handleMood: React.Dispatch<React.SetStateAction<any>>;
}

export interface SetMoodProps {
  mood: string;
}

export interface SongsContainerProps {
  filteredSongs: SingleSongProps[];
  currentMood: string | undefined;
  resetResultState: MouseEventHandler<HTMLButtonElement>;
  randomize: React.Dispatch<React.SetStateAction<object>>;
}

export interface ResultProps {
  currentMood: string;
  songs: SingleSongProps[];
  randomSong: {};
}

export interface RandomProps {
  song: any;
  randomize: React.Dispatch<React.SetStateAction<object>>;
}
