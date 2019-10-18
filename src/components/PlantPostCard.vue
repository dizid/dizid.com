<template>
<div class="buttons">
    <router-link :to="'/plant/'+nameLA" class="button">{{nameNO}}</router-link>
</div>
</template>

<script>
    export default {
        name: "PlantPostCard",
        props: {
            nameLA: String,
            nameNL: String,
            nameNO: String,
            localImageURL: String,
            sowInstruction: String
        }
    };
</script> 