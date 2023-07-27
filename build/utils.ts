/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-27 11:14:00
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-07-27 11:15:15
 * @Description:
 * @FilePath: /nuxt3-demo/build/utils.ts
 */
// Read all environment variable configuration files to process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
    const ret: any = {};

    for (const envName of Object.keys(envConf)) {
        let realName = envConf[envName].replace(/\\n/g, '\n');
        realName = realName === 'true' ? true : realName === 'false' ? false : realName;

        if (envName === 'VITE_APP_PORT') realName = Number(realName);

        if (envName === 'VITE_APP_PROXY' && realName) {
            try {
                realName = JSON.parse(realName.replace(/'/g, '"'));
            } catch (error) {
                realName = '';
            }
        }
        ret[envName] = realName;
        if (typeof realName === 'string') process.env[envName] = realName;
        else if (typeof realName === 'object') process.env[envName] = JSON.stringify(realName);
    }
    return ret;
}
