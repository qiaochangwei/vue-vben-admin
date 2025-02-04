import {
  getThemeColors,
  generateColors,
} from '../../../internal/vite-config/src/config/themeConfig';

import { replaceStyleVariables } from '@kirklin/vite-plugin-vben-theme/es/client';
import { mixLighten, mixDarken, tinycolor } from '@kirklin/vite-plugin-vben-theme/es/colorUtils';

export async function changeTheme(color: string) {
  const colors = generateColors({
    mixDarken,
    mixLighten,
    tinycolor,
    color,
  });

  return await replaceStyleVariables({
    colorVariables: [...getThemeColors(color), ...colors],
  });
}