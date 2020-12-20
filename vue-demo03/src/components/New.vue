<template>
    <div>

        <v-header></v-header>
        <h1>新闻类的</h1>
    </div>
</template>

<script>
    import Header from "./Header";
    export default {
        components:{
            "v-header":Header
        }
    }
</script>
<style >
    h1{
        background-color: blue;
    }
</style>