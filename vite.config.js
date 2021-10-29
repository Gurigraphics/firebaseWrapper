const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'source/main.js'),
      name: 'FirebaseWrapper',
      fileName: (format) => `firebaseWrapper.js`,
      formats: ['es']
    } 
  }
})
