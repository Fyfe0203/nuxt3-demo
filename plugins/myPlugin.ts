// https://v3.nuxtjs.org/docs/directory-structure/plugins

export default defineNuxtPlugin(() => {
    return {
        provide: {
            hello: () => 'world',
        },
    };
});
