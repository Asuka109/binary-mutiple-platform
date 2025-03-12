export const binaryUrl = new URL('../binary.json', import.meta.url);

export async function loadBinary() {
  const resp = await fetch(binaryUrl);
  const data = await resp.json();
  return () => `${data} from Web`;
}
