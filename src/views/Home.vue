<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
        <v-button :customClass="'btn-secondary'" :customLabel="'Button Click'" @click="buttonClick()" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
    mounted () {
        // console.log('test');
        // console.log($('.home'));
    },
    methods: {
        buttonClick () {
            console.log('test');

        }
    }
};
</script>
<style lang="scss">
.home {
    img {
		position: absolute;
		right: 9px;
		top: 9px;
		width: 40px;
		height: 40px;
	}
}
</style>
