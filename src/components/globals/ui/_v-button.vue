<template>
    <button type="button" :class="'btn ' + customClass" @click="handleClick">{{customLabel}}</button>
</template>

<script>
export default {
    name: 'v-button',
    props: {
        customClass: {
            type: String,
            default: 'btn-primary'
        },
        customLabel: {
            type: String,
            default: 'Button',
        }
    },
    methods: {
        handleClick (e) {
            this.$emit('click', e);
        }
    }
};
</script>

