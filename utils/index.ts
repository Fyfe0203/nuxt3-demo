/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-28 16:29:36
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-07 13:34:08
 * @Description:
 * @FilePath: /nuxt3-demo/utils/index.ts
 */
export function sleep(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

export function isMobile() {
    // const flag = navigator.userAgent.match(
    //     /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    // );
    return false;
}

export function promisify(inner: Function) {
    return new Promise((resolve, reject) => inner(resolve, reject));
}
