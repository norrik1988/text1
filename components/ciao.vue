<template>
    <h3 class="ciao">ciao {{ name }}</h3>
</template>

<script>
    export default {
        name: "ciao",
        props: ['name']
    }

</script>

<style>
    .ciao {
        color:white
    }

</style>