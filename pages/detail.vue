<template>
    <div>
        <h3>detals page</h3>
        <Hellow />

        <button @click="counter++">+</button>
        {{ counter }}
        <button @click="counter--">-</button>
        <div>
            {{ $hello() }}
        </div>
    </div>
</template>

<script setup>
    const counter = useCounter();
    // 会自动加上$前缀
    const { $hello } = useNuxtApp();
</script>
