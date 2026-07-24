export function sanitizeString(value: string) {

    return value
        .trim()
        .replace(
            /<script\b[^>]*>([\s\S]*?)<\/script>/gi,
            ""
        )
        .replace(
            /<[^>]*>/g,
            ""
        )
        .replace(
            /javascript:/gi,
            ""
        );

}





export function sanitizeObject(
    obj: Record<string, any>
) {


    const cleanObject: Record<string, any> = {};



    Object.keys(obj).forEach((key)=>{


        const value = obj[key];



        if(typeof value === "string"){

            cleanObject[key] =
                sanitizeString(value);

        }

        else{

            cleanObject[key] = value;

        }


    });



    return cleanObject;


}