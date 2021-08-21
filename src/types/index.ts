export interface Game {
    id:string
    title:string
    thumbnail:string
    short_description:string
    game_url:string
    genre:string
    platform:string
    publisher:string
    developer:string
    release_date:string
    freetogame_profile_url:string
}

interface Screenshot {
    id:string
    image:string
}

export interface GameDetail extends Game  {
    status:string
    description:string
    minimum_system_requirements : {
        os:string
        processor:string
        memory:string
        graphics:string
    }
    screenshots : Screenshot []
}
