import {promises as fs} from 'fs';

export async function getData<T>(type: string, locale: string): Promise<T | undefined> {
    try {
        const file = await fs.readFile(`${process.cwd()}/messages/${type}/${locale}.json`, 'utf8');
        return JSON.parse(file);
    } catch (error) {
        return undefined;
    }
}