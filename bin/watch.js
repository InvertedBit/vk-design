#!/usr/bin/node
const chokidar = require('chokidar');
const sass = require('node-sass');
const write = require('write');

const watchFolder = './src/scss';
const mainFiles = [
    [
        'src/scss/main.scss',
        'static/css/main.css'
    ],
    [
        'src/scss/main-pink.scss',
        'static/css/main-pink.css'
    ]
];
const outFolder = 'static/css';

var ready = false;

console.log(`Watching for file changes on ${watchFolder}`);

function handleChange(event, filename) {
    if (!ready) {
        return;
    }
    if (filename) {
        //console.log(event);
        console.log(`${filename} file Changed`);
        mainFiles.forEach(file => {
            console.log(`\x1b[34mbuilding ${file[1]} (from ${file[0]})...\x1b[0m`);
            sass.render({
                file: file[0],
                outFile: file[1]
            }, function(err, result) {
                if(err) {
                    console.log(err);
                } else {
                    //console.log(file[1]);
                    //console.log(result);
                    write(file[1], result.css.toString());
                }
            });
            //spawn('node-sass', [`${file} -o ${outFolder}`]);
            console.log('\x1b[32mdone!\x1b[0m');
        });
    }
}


chokidar.watch(watchFolder)
    .on('ready', () => {ready = true; console.log('\x1b[32mScan finished, watching now!\x1b[0m');}, ready)
    .on('change', (filename, event) => handleChange(event, filename))
    .on('add', (filename, event) => handleChange(event, filename))
    .on('unlink', (filename, event) => handleChange(event, filename));