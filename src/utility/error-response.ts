import {AxiosResponse} from "axios";

interface Data {
    statusCode: number
    message: string | string[]
    error: string
}

export enum ErrorMessage {
    SOMETHING_WENT_WRONG = 'Что-то пошло не так',
    FILE_NOTE_FOUND = 'Файл не найден'
}

export const getErrors = (error: any): string[] => {

    const response: AxiosResponse<Data | null> | null = error.response

    if (!response || !response.data) {
        return [ErrorMessage.SOMETHING_WENT_WRONG]
    }

    if (!response.data.message) {
        return [response.statusText]
    }

    if (typeof response.data.message === 'string') {
        return [response.data.message]
    }

    return response.data.message

}
