export interface Interdata {
    loading: boolean,
    error: string,
    stored_data: any,
    data: any,
}

export interface Interreducer {
    type: string,
    payload: any,
}