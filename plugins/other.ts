// https://v3.nuxtjs.org/docs/directory-structure/plugins // Modal

export default defineNuxtPlugin(() => {
    return {
        provide: {
            hello: () => 'hello',
            // notification,

            // info: Modal.info,
            // success: Modal.success,
            // error: Modal.error,
            // warning: Modal.warning,
            // confirm: Modal.confirm,
        },
    };
});
