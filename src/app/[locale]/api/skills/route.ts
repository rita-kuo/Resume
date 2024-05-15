import {getData, handleNotFoundError} from "@/service";

export async function GET(_: Request, {params}: { params: { locale: string } }): Promise<Response> {
    return handleNotFoundError(async () =>
        Response.json(await getData('skills', params.locale)));
}