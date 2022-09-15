// import React from "react";

export interface SongProp {
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

export interface SingleSongProps {
  id?: number;
  title: string;
  artist: string;
  urlKey: string;
  genres: string[];
  searchTerms?: string[];
}

export interface SingleMoodProps {
  id: number;
  title: string;
  image: string;
  handleMood: React.Dispatch<React.SetStateAction<any>>;
}

export interface AppProps {
  songs: SongProp[];
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
  filteredSongs: SongProp[];
  currentMood: string | undefined;
  resetResultState: React.Dispatch<React.SetStateAction<any>>;
}
export interface ResultProps {
  currentMood: string;
  songs: SongProp[]
}
