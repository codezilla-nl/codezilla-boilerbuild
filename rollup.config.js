import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import tplResolve from 'rollup-plugin-string';

export default {
	entry: 'src/app.js',
	format: 'cjs',
	plugins: [
        tplResolve({
            include: '**/*.html'
        }),
        babel(),
        uglify()
        ],
	dest: 'dist/app.js'
}