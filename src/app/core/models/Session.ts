export interface Session {
    circuit_key: number,
    circuit_short_name: string,
    country_code: string,
    country_key: number,
    country_name: string,
    date_end: Date,
    date_start: Date,
    gmt_offset: null,//?????????????????????????????????
    location: string,
    meeting_key: number,
    session_key: number,
    session_name: string,
    session_type: string,
    year: number
}