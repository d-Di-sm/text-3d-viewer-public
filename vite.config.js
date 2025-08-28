import { defineConfig } from 'vite'
import restart from 'vite-plugin-restart'


export default {
    root: 'src/', // Sources files (typically where index.html is)
    publicDir: '../static/', // Path from "root" to static assets (files that are served as they are)
    server:
    {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
    },
    plugins:
    [
        restart({ restart: [ '../static/**', ] }) // Restart server on static file change
    ],

    base: process.env.VITE_BASE_PATH || "/text-3d-viewer-public",
}



//Git INIT
//git init
//git add .
// PASTE THE TEXT IN THE GITHIB REPOSITORY




//Git UPDATE

//git remote remove origin
//git add .
//git commit -m "Fix"
//git push




