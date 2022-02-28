<template>
    <div>
        <a-button type="primary" @click="$router.back()">返回</a-button>
        <div class="h-3" />
        <a-button type="primary" @click="$message.success('success')">message</a-button>

        <div class="h-3" />
        <a-button type="primary" @click="$notification.success({ message: 'success' })">
            notification
        </a-button>
        <div class="h-3" />
        <a-button type="primary" @click="$info({ title: 'success' })">info</a-button>
        <div class="h-3" />
        <a-button type="primary" @click="ok">fetch</a-button>
        <!-- 
        <div class="h-3" />
        <a-button type="primary" @click="$success({ title: 'success' })">success</a-button>
        <div class="h-3" />
        <a-button type="primary" @click="$error({ title: 'success' })">error</a-button>
        <div class="h-3" />
        <a-button type="primary" @click="$warning({ title: 'success' })">warning</a-button>
        <div class="h-3" />
        <a-button type="primary" @click="$confirm({ title: 'success' })">confirm</a-button>
        <div class="h-3" /> -->
        <h3>detals page - langue {{ $t('message.hello') }}</h3>
        <Hellow />

        <a-button @click="counter++">+</a-button>
        {{ counter }}
        <a-button @click="counter--">-</a-button>

        <a-select ref="select" style="width: 120px">
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
    </div>
</template>

<script setup>
    const counter = useCounter();
    const { $axios } = useNuxtApp();
    async function ok() {
        console.log('axios', $axios);
        const { data } = await useFetch('https://test.elfinkingdom.com/contract/coin/contract');
        const data2 = await $axios.$get('/contract/coin/contract');
        console.log(data, data2);
    }
</script>

<script>
    // export default {
    //     methods: {
    //         async ok() {
    //             const { data } = await useFetch(
    //                 'https://test.elfinkingdom.com/contract/coin/contract'
    //             );
    //             console.log(data);
    //         },
    //     },
    // };
</script>
