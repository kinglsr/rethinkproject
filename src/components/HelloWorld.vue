<template>
	<div class="hello">
    	<h1>{{ msg }}</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    One of three columns
                </div>
                <div class="col-sm">
                    One of three columns
                </div>
                <div class="col-sm">
                    One of three columns
                </div>
            </div>

            <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
            </button>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>

            <!-- <android-svg class="android svg" />
            <atom-svg /> -->
            <v-svg-atom />
        </div>
	</div>
</template>

<script>
// import androidSvg from '@/svg/android.svg';
// import atomSvg from '@/svg/atom.svg';

export default {
    name: 'HelloWorld',
    // components: {
    //     androidSvg,
    //     atomSvg
    // },
    props: {
        msg: String
    }
};
</script>
<style lang="scss">
h1 {
	color: #2F4053;
	background-color: #28a7452e;
	padding: 5px 20px;
}
</style>
