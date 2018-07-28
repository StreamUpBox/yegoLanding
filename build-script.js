const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/pw/runtime.js',
        './dist/pw/polyfills.js',
        './dist/pw/main.js'
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/pages.js')
    console.info('Elements created successfully!')

})()

