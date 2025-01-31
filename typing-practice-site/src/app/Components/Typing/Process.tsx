import GetData from "./GetData";

export default function Process(language: string) {
    const languageFiles = GetData(language);

    return languageFiles;
}