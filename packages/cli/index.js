async function main() {
  const { greet } = await import('@asuka109/binary');
  const result = await greet();
  console.log(result);
}

main();
