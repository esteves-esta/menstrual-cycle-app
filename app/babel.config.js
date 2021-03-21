module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          pages: ['./src/pages'],
          components: ['./src/components'],
          styles: ['./src/styles'],
          store: ['./src/store'],
          services: ['./src/services'],
          schemas: ['./src/schemas'],
          constants: ['./src/constants'],
          models: ['./src/models'],
          helpers: ['./src/helpers'],
          context: ['./src/context'],
        },
      },
    ],
  ],
};
