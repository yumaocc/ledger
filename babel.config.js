module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': ['./src'],
          '@/module': ['./src/module'],
          '@/screen': ['./src/screen'],
          '@/asset': ['./src/asset'],
        },
      },
    ],
  ],
};
