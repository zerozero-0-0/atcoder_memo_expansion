export default async function GetData(language: string) {
  const filepath = `/languages/${language}/text.txt`;
  const response = await fetch(filepath);
  
  const text = await response.text();
  if(text.length === 0) {
    return null;
  }
  const languageFiles = text.split('\n');

  console.log(languageFiles);
  return languageFiles;
}
