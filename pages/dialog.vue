<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-31 17:19:19
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-08 10:18:49
 * @Description:
 * @FilePath: /nuxt3-demo/pages/dialog.vue
-->
<template>
    <div class="px-5">
        <n-carousel>
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
            <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
        </n-carousel>
        <n-tooltip trigger="hover">
            <template #trigger>
                <n-button>鸭子</n-button>
            </template>
            如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子。
        </n-tooltip>
        <n-button type="primary" @click="openDialog">click to open the Dialog</n-button>
    </div>
</template>

<script lang="ts" setup>
    const dialog = useDialog();
    const message = useMessage();

    const beforeClose = () => {
        return promisify((res: () => void, rej: () => void) => {
            const d = dialog.info({
                title: 'Are you sure to close this dialog?',
                content: '你确定？',
                positiveText: '确定',
                negativeText: '取消',
                onPositiveClick() {
                    d.loading = true;
                    return promisify((resolve: (arg0: number) => void, reject: (arg0: Error) => void) => {
                        setTimeout(() => {
                            if (Math.random() > 0.5) {
                                resolve(0);
                                setTimeout(res);
                                d.loading = false;
                            } else {
                                reject(new Error('any'));
                                rej();
                            }
                        }, 1000);
                    }).catch(() => message.error('Oops errors!'));
                },
            });
        });
    };
    const openDialog = function () {
        console.log('open dialog');
        usePop.add({
            title: '测试弹窗',
            component: 'DialogTest',
            props: {
                id: 123456,
            },
            beforeClose,
            callback: () => {
                console.log('close callback');
            },
        });
    };
</script>
<style scoped>
    .carousel-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
    }
</style>
