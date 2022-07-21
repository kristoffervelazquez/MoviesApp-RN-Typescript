// Generated by https://quicktype.io

export interface TvSimilarShowsResponse {
    page:          number;
    results:       TvSimilarShows[];
    total_pages:   number;
    total_results: number;
}

export interface TvSimilarShows {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    origin_country:    OriginCountry[];
    original_language: OriginalLanguage;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    first_air_date:    string;
    name:              string;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginCountry {
    GB = "GB",
    Jp = "JP",
    MX = "MX",
    Us = "US",
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
}
