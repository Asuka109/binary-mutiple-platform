import fs from 'node:fs/promises';

export const binaryUrl = new URL('../binary.json', import.meta.url);

export async function loadBinary() {
  const content = await fs.readFile(binaryUrl, 'utf-8');
  const data = JSON.parse(content);
  return () => `${data} from Node.js`;
}
