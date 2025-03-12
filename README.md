
# Platform-specific Binary API Implementation

This monorepo demonstrates how to implement a unified API to load binary modules that can work across different platforms (Node.js and browsers) while maintaining the same interface.

## Implementation

We use the `imports` field in `package.json` to define platform-specific entry points:

```json
{
  "imports": {
    "#binary": {
      "node": "./dist/binary.node.js",
      "browser": "./dist/binary.bundle.js",
      "types": "./dist/binary.bundle.d.ts"
    }
  }
}
```

This configuration allows us to:

- Use different implementations for Node.js and browser environments
- Maintain a single import path (`#binary`) in our code
- Share TypeScript types across platforms

In this example, we use a JSON file as a simple demonstration, but this pattern is particularly useful for:

- Loading WebAssembly modules
- Implementing platform-specific features
- Managing native Node.js addons

## Getting Started

```shell
$ bash bootstrap.sh
```
