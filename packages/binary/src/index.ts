import { loadBinary } from '#binary';

export async function greet() {
  const loaded = await loadBinary();
  return loaded();
}
