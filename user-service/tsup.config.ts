import { defineConfig } from 'tsup';

export default defineConfig({
    // 1. Entry point of the application
    entry: ['src/index.ts'],

    // 2. Output format - pure Modern ESM
    format: ['esm'],

    // 3. Target modern Node.js runtime (Node 22/24 compatible)
    target: 'node22',

    // 4. Clean the dist directory before every build
    clean: true,

    // 5. Production Optimizations
    minify: true,         // Code compress aur obfuscate karega taaki file size chota ho
    splitting: false,     // Backend microservices ke liye single file bundle access dynamic imports se behtar hai

    // 6. Debugging in Production
    sourcemap: true,      // Production error logs (stack traces) ko exact TS files se map karne ke liye

    // 7. ESM Environment Shims
    shims: true,
    // ESM me __dirname aur __filename ko trace karne ke liye compatibility inject karega
});