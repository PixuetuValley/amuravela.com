const themeDir = __dirname + '/assets/css';

module.exports = {
    plugins: {
        'postcss-import': {
            path: [themeDir]
        },
        'postcss-nested': {},
        'postcss-combine-media-query': {},
        'postcss-combine-duplicated-selectors': {},
        'autoprefixer': {
            browsers: ['>1%']
        },
    }
}