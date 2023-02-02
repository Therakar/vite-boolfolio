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
    <div class="card h-100" style="width: 18rem;">
        <img v-if="data.image_url" :src="data.image_url" class="card-img-top" :alt="data.title">
        <div class="card-body">
            <h5 class="card-title">{{data.title}}</h5>
            <p class="card-text">Description: {{ truncateText(data.description) }}</p>
            <p class="card-text">Version: v{{ data.version }}</p>
            <p class="card-text">Customer: {{ data.customer }}</p>
            <p class="card-text">Slug: {{ data.slug}}</p>
            <div class="card-text">
                <p v-if="data.type">Type: {{data.type.name}} </p>
                <p v-else>Type: No Type</p>
            </div>
            <div class="card-text">
                Technology:
                <div v-if="data.technologies.length > 0">
                    <span class="badge text-bg-dark me-1" v-for="technology in data.technologies">{{technology.name}}</span>
                </div>
                <div v-else>
                    <span class="badge text-bg-dark" >No Technology</span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    
</style>