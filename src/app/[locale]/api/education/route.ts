import {getData, handleNotFoundError} from "@/service";

export async function GET(req: Request, {params}: { params: { locale: string } }): Promise<Response> {
    return handleNotFoundError(async () =>
        Response.json(await getData('education', params.locale)));
}