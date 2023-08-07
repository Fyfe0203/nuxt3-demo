<!--
 * @Author: fyfe0203 freeser@live.cn
 * @Date: 2023-07-31 17:19:19
 * @LastEditors: fyfe0203 freeser@live.cn
 * @LastEditTime: 2023-08-07 13:53:48
 * @Description:
 * @FilePath: /nuxt3-demo/pages/dialog.vue
-->
<template>
    <div class="px-5">
        <a-carousel height="150px">
            <a v-for="item in 4" :key="item" class="a-carousel__item">
                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </a>
        </a-carousel>
        <client-only>
            <a-tooltip placement="left" title="Prompt Text">
                <a-button>Adjust automatically / 自动调整</a-button>
            </a-tooltip>
        </client-only>
        <a-button type="primary" @click="openDialog">click to open the Dialog</a-button>
    </div>
</template>

<script lang="ts" setup>
    const beforeClose = () => {
        message.info('This is a normal message');
        return promisify((res: () => void, rej: () => void) => {
            Modal.confirm({
                title: 'Are you sure to close this dialog?',
                onOk() {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            if (Math.random() > 0.5) {
                                resolve(0);
                                res();
                            } else {
                                reject(new Error('any'));
                                rej();
                            }
                        }, 1000);
                    }).catch(() => console.log('Oops errors!'));
                },
            });
        });
    };
    const openDialog = function () {
        console.log('open dialog');
        useDialog.add({
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
    .dialog-footer button:first-child {
        margin-right: 10px;
    }

    .a-carousel__item h3 {
        margin: 0;
        line-height: 150px;
        text-align: center;
        color: #475669;
        opacity: 0.75;
    }

    .a-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .a-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
</style>
