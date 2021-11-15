export interface Task {
    id: number,
    isActivated: boolean,
    repeatInterval: number,
    start: Date,
    message: string
}