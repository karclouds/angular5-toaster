export default {
    entry: './dist/angular5-toaster.js',
    dest: './dist/bundles/angular5-toaster.umd.js',
    format: 'umd',
    moduleName: 'angular5toaster',
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs/Observable',
        'rxjs/Observer',
        'rxjs/add/operator/share',
        'rxjs/Subject',       
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs/Observable': 'Rx',
        'rxjs/Observer': 'Rx',
        'rxjs/add/operator/share': 'Rx',
        'rxjs/Subject': 'Rx'
    },
    onwarn: (e) => { return }
}
