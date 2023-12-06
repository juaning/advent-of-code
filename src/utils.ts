import { open } from "fs/promises";
export async function fileReader(filePath: string): Promise<Array<string>> {
  const file = await open(filePath, "r");
  const buffer = await file.readFile();
  const fileContent = buffer.toString();
  return fileContent.split("\n");
}
