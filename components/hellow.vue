<template>
    <div>
        <NuxtLayout name="custom">
            <template #header>
                <h1>hello page</h1>
            </template>
            some content...
        </NuxtLayout>

        <NuxtLayout name="default">some content...</NuxtLayout>
    </div>
</template>
<script>
    export default {
        layout: false,
    };
</script>
