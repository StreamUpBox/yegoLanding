const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/pw/runtime.js',
        './dist/pw/polyfills.js',
        './dist/pw/main.js'
    ]
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/yegobox_welcome_page.js')
    await fs.copyFile('./dist/pw/styles.css', 'elements/styles.css')

    await fs.copy('./dist/pw/assets/', 'elements/assets/' )
    console.info('Elements created successfully!')

})()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

