import { greet } from '@asuka109/binary';

document.write(await greet());

async function main() {
  const result = await greet();
  document.body.innerText = result;
  console.log(result);
}

main();
