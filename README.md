# Space Invaders (Clean Architecture)

> ⚡️ This project is developed in collaboration with an AI assistant.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Quick Start

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Build the project:
   ```sh
   npx tsc
   ```
3. Start a local server (e.g., live-server):
   ```sh
   npx live-server public --port=8082
   ```
4. Open in your browser: [http://127.0.0.1:8082](http://127.0.0.1:8082)

## Structure

- Source code: `src/`
- Build output: `public/dist/`
- Entry point: `src/index.ts`
- UI: `src/ui/game.ts`

## Tests

To run tests:

```
pnpm test
```

## Linting

```
pnpm lint
```

## Notes

- After making changes in TypeScript, rebuild the project (`npx tsc`).
- If the port is busy, use another one via the `--port` parameter.

## Minimal Version

- Basic game mechanics: player, enemies, shooting
- Controls: arrow keys and spacebar

---

Further improvements will be added as the project evolves.
