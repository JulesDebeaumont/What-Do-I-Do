export interface Task {
    id: number,
    name: string,
    isActivated: boolean,
    repeatInterval: number,
    start: Date,
    message: string
}