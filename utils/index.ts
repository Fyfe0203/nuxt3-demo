/*
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-28 16:29:36
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-17 15:14:22
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

export const OnePx =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAzNzg4NzNCNkU0MTFFQ0E0QUZDNjAyOEUzQkZEOEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzNzg4NzRCNkU0MTFFQ0E0QUZDNjAyOEUzQkZEOEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MDM3ODg3MUI2RTQxMUVDQTRBRkM2MDI4RTNCRkQ4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MDM3ODg3MkI2RTQxMUVDQTRBRkM2MDI4RTNCRkQ4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgvzxyYAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC';

function createAvatarImg(color1: string, color2: string, size = 100): string {
    if (process.client) {
        const canvas = document.createElement('canvas');
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        if (!ctx) {
            return OnePx;
        }
        canvas.width = size;
        canvas.height = size;
        // 创建线性渐变
        const grd = ctx.createLinearGradient(0, 0, size, size);
        grd.addColorStop(0, color1);
        grd.addColorStop(1, color2);
        // 填充渐变
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, size, size);
        return canvas.toDataURL();
    }
    return OnePx;
}

const colors = [
    ['#222D3A', '#222D3A'],
    ['#ebf2fb', '#ebf2fb'],
];

export function createRandomAvatar(): string {
    const [color1, color2] = colors[1];
    return createAvatarImg(color1, color2);
}

export function findMineType(type: string, accept: string | string[]) {
    if (typeof accept === 'string') {
        accept = accept.split(',');
    }

    accept = accept.map((i) => {
        if (i.includes('/') || i.includes('.')) return i.toUpperCase();
        return '.' + i.toUpperCase();
    });

    if (accept.includes('.MP3') && !accept.includes('.MPEG')) {
        accept = accept.join(',').replace('.MP3', '.MP3,.MPEG').split(',');
    }

    if (type.includes('/')) {
        const arr = type.split('/');
        const all = [arr[0], '*'].join('/').toUpperCase();
        if (accept.includes(all)) return true;
        const ex = ['.', arr[1]].join('').toUpperCase();
        if (accept.includes(ex)) return true;
    } else if (!type.includes('.')) {
        type = '.' + type;
    }

    return accept.includes(type.toUpperCase());
}
