corepack enable
pnpm install

pnpm --filter @asuka109/binary build

pnpm --filter @asuka109/cli start

pnpm --filter @asuka109/website dev --clearScreen false
