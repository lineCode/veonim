import * as defaultConfigs from '../config/default-configs'
import { objDeepGet } from '../support/utils'
import { g } from '../core/neovim'

export default (configName: string, cb: (val: any) => void) => {
  const vimKey = `vn_${configName.split('.').join('_')}`
  Reflect.get(g, vimKey).then((val: any) => val && cb(val))
  return objDeepGet(defaultConfigs)(configName)
}
