<script>
import axios from 'axios';
    export default {
        name: 'SingleProject',
        data() {
            return {
                project:null,
            }
        },
        created() {
            
            axios.get(`http://localhost:8000/api/projects/${this.$route.params.slug}`).then((response) =>{

            this.project=response.data;
            }).catch(() => {
                this.$router.push({name: 'page-404'});
            });
        }
    };
</script>

<template>
    <div class="container-custom">
        <div v-if="project" class="card text-white bg-dark w-50 h-25 m-auto" style="width: 18rem;">
            <img :src="project.image_url" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">Description: {{ project.description}}</p>
                <p class="card-text"><strong>Version:</strong> v{{ project.version }}</p>
                <p class="card-text"><strong>Customer:</strong> {{ project.customer }}</p>
                <p class="card-text"><strong>Slug: </strong>{{ project.slug}}</p>
                <div class="card-text">
                    <p v-if="project.type"><strong>Type:</strong> {{project.type.name}} </p>
                    <p v-else><strong>Type:</strong> No Type</p>
                </div>
                <div class="card-text">
                    <div v-if="project.technologies.length > 0">
                        <strong class="me-2">Technology:</strong> 
                        <span class="badge text-bg-success me-1" v-for="technology in project.technologies">{{technology.name}}</span>
                    </div>
                    <div v-else>
                        <strong class="me-2">Technology:</strong>
                        <span class="badge text-bg-danger" >No Technology</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .container-custom{
        margin-top: 9.375rem;;
    }
</style>