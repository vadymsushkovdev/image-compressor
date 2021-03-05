const compress_images = require('compress-images');
const AppService = require('./service');

async function compress(INPUT_path_to_images, OUTPUT_path, req, res) {
    await compress_images(INPUT_path_to_images, OUTPUT_path, {
        compress_force: false,
        statistic: true,
        autoupdate: true,
    }, false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } },
    (error, completed, statistic) => {
        console.log('-------------');
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log('-------------');
        AppService.download(res, `${statistic.path_out_new}`);
    });
}

module.exports = {
    compress,
};
