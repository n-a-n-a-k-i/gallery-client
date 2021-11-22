export const format = (number: number, size: number, char: string = '0'): string => {

    let result = number.toString()

    while (result.length < size) result = char + result

    return result

}
