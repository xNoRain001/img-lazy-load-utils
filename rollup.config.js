import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/index.js',

  output: {
    file: './dist/img-lazy-load-utils.js',
    format: 'umd',
    name: 'LazyLoad'
  },
  
  plugins: [
    babel({
      exclude: './node_modules/**'
    }),
    resolve({})
  ]
}