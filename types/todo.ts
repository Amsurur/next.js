    export interface IResponse {
        data:IData[] | boolean,
        errors:[] | string[],
        statusCode:number
    }
    export interface IData{
        id: number,
        isCompleted: boolean,
        images: IImages[],
        name: string,
        description: string
    }
    export interface IImages{
id:number,
imageName:string
    }