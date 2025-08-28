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
//      git commit -m "first commit"
//      git branch -M main
//      git remote add origin https://github.com/d-Di-sm/prueba.git
//      git push -u origin main



//Git REMOVE ORIGIN

//git remote remove origin




//Git UPDATE

//git add .
//git commit -m "Fix"
//git push



//Git RECONECT
//git init
//git commit -m "fix N_X"
//git remote add origin https://github.com/d-Di-sm/text-3d-viewer-public.git
//git branch -M main
//git push -u origin main



