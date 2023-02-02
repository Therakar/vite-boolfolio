<!-- contatterà l'API -->

<script>
    import CardProject from "./CardProject.vue";
    import axios from "axios"; //importo axios 

    export default {
        name:'ListProjects',
        components: {
            CardProject
        },
        data() {
            return {
                projects : [],
            };
        },
        created(){ //mi aggancio al momento di creazione del componente ListProjects
            axios.get('http://localhost:8000/api/projects').then((response) => {
                // console.log(response);
                this.projects = response.data;
            })
        }
    }
</script>

<template>
    <section>
        <div class="container">
            <h2>Project List</h2> 
            <div class="row gy-4">
                <div class="col-md-4" v-for="project in projects">
                   <CardProject :data="project"/> 
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>