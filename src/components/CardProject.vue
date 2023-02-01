<script>
    export default {
        name: 'CardProjects',
        props: {
            data: Object,
        },
        methods: {
            truncateText(text) {
                return text.substring(0, 100) + "...";
            },
        },
    };
</script>

<template>
    <div class="card" style="width: 18rem;">
  <img v-if="data.image_url" :src="data.image_url" class="card-img-top" :alt="data_title">
  <div class="card-body">
    <h5 class="card-title">{{data.title}}</h5>
    <p class="card-text">Description: {{ truncateText(data.description) }}</p>
    <p class="card-text">Version: v{{ data.version }}</p>
    <p class="card-text">Customer: {{ data.customer }}</p>
    <p class="card-text">Slug: {{ data.slug}}</p>
    <p class="card-text">Type: {{ data.type.name }}</p>
    <p class="card-text">Technologies: {{ data.technologies.name }} </p>
  </div>
</div>

</template>

<style lang="scss" scoped>

</style>