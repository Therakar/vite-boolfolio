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
    <div class="card text-white bg-dark h-100 w-100" style="width: 18rem;">
        <img v-if="data.image_url" :src="data.image_url" class="card-img-top" :alt="data.title">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-3">{{data.title}}</h5>
            <p class="card-text">Description: {{ truncateText(data.description) }}</p>
            <p class="card-text">Version: v{{ data.version }}</p>
            <p class="card-text">Customer: {{ data.customer }}</p>
            <p class="card-text">Slug: {{ data.slug}}</p>
            <div class="card-text">
                <p v-if="data.type">Type: {{data.type.name}} </p>
                <p v-else>Type: No Type</p>
            </div>
            <div class="card-text">
                <div v-if="data.technologies.length > 0">
                    Technology:
                    <span class="badge text-bg-success me-1 mb-5" v-for="technology in data.technologies">{{technology.name}}</span>
                </div>
                <div v-else>
                    Technology:
                    <span class="badge text-bg-danger mb-5">No Technology</span>
                </div>
            </div>
            <router-link :to="{name: 'single-project', params: {slug: data.slug}}" class="btn btn-primary mt-auto"><strong>More Info</strong></router-link>
        </div>
        
    </div>

</template>

<style lang="scss" scoped>
    
</style>