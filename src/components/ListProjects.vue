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
                totProjects: 3,
            };
        },
        computed: {
            getProjects(){
                return this.projects.filter((elm, index) => index < this.totProjects);
            }
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
            <h2 class="mb-5">Project List</h2> 
            <div class="row gy-4">
                <div class="col-md-4" v-for="project in getProjects">
                   <CardProject :data="project"/> 
                </div>
            </div>
            <button class="btn btn-primary show-btn" @click="totProjects += 3" v-if="projects.length > totProjects">
                Show More 
                <i class="fa-solid fa-arrow-down"></i>
            </button>
            <button class="btn btn-secondary show-btn" @click="totProjects = 3" v-else-if="projects.length <= totProjects">
                Show Less
                <i class="fa-solid fa-arrow-up"></i>
            </button>
            
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .container{
        margin-top: 9.375rem;
        text-align: center;

        h2{
            color: lightgray;
        }

        .show-btn{
            margin-top: 1.25rem;
        }
    }
</style>