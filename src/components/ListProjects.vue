<!-- contatterà l'API -->

<script>
    import axios from "axios"; //importo axios 
    export default {
        name:'ListProjects',
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
        <h2>Project List</h2> 
        <ul>
            <li v-for="project in projects">
                {{ project.title }}
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>

</style>