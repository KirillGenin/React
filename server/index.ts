import 'ignore-styles';
import register from '@babel/register';
import './server.js';
register({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});
