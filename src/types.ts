import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type TEpisode = {
    id:number,
    name:string,
    air_date:string,
    episode:string,
    characters:string[],
    url:string,
    created:string
}

export type TCharacter ={
    id:number
    name:string
    status:string
    species:string
    type:string
    gender:'Female' | 'Male' | 'Genderless' | 'unknown'
    origin:object
    location:object
    image:string
    episode:string[]
    url:string
    created:string
}

export type MainStackParamList = {
    Episodes:undefined,
    EpisodeDetail:{
        episodeId:number
    },
    Character:{
        characterId:number
    },
    Favorites:undefined
}
export type MainStackNavigationProp = NativeStackScreenProps<MainStackParamList>
