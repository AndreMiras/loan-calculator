// "extends": "airbnb"
// "env": {
//   "browser": true,
//   "jest": true,
// }
// "rules": {
//     "allowShortCircuit": 0,
//     "allowTernary": 0,
//     "no-unused-expressions": "off",
//     "no-mixed-operators": "off"
// }
module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
 }
};
