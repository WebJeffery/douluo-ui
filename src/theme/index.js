import cssVars from 'css-vars-ponyfill';
import variableTheme from './variable';

export function useThemes(colorTheme = {}) {
  const variables = Object.assign({}, variableTheme, colorTheme);

  cssVars({
    variables,
    watch: true,
    silent: true,
    onlyLegacy: true,
  });
}
