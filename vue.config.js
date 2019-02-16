module.exports = {
    baseUrl: './',
    pages: {
        index: {
             entry: 'src/pages/index/index.js',
             template: 'src/pages/index/index.html',
             filename: 'index.html',
        },
        view1: {
             entry: 'src/pages/view1/view1.js',
             template: 'src/pages/view1/view1.html',
             filename: 'view1.html',
        },
        view2: {
             entry: 'src/pages/view2/view2.js',
             template: 'src/pages/view2/view2.html',
             filename: 'view2.html',
        },
    }
}