import React from "react";

export interface SingleSongProps{
    id?: number;
    title: string;
    artist: string;
    urlKey: string;
    genres: string[];
    searchTerms?: string[];
}

export interface SingleMoodProps{
    id?: number;
    title: string;
    image: string;
}



export interface SongsProps{
    song: SingleSongProps;
    setSong: (value: React.SetStateAction<SingleSongProps | undefined>) => void;
}

export interface MoodsProps{
    mood: SingleMoodProps;
    setMood: (value: React.SetStateAction<SingleMoodProps | undefined>) => void;
}



export interface AppProps{
    songs: SongsProps[];
    setSongs: (value: React.SetStateAction<SongsProps[]>) => void;
    moods: MoodsProps[];
    setMoods: (value: React.SetStateAction<MoodsProps[]>) => void;
}

export interface FeaturedMoodsProps{
    moods: MoodsProps[];
    setMoods: (value: React.SetStateAction<MoodsProps[]>) => void;
    setAppState: (value: React.SetStateAction<AppProps | undefined>) => void;
};