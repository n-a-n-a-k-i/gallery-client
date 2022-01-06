import {AxiosResponse} from "axios";

/**
 * Сообщения об ошибках
 */
export enum ErrorMessage {
    SOMETHING_WENT_WRONG = 'Что-то пошло не так',
    FILE_NOTE_FOUND = 'Файл не найден'
}

/**
 * axios ответ с ошибкой
 */
interface Data {
    statusCode: number
    message: string | string[]
    error: string
}

/**
 * Получение сообщения об ошибке из axios ответа
 * @param error
 */
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
