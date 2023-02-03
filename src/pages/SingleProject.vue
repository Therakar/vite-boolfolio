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
                if(response.data.success){
                    this.project=response.data;
                } else{
                    this.$router.push({name: 'page-404'})
                }
            });
        }
    };
</script>

<template>
    <div>{{ project }}</div>
</template>

<style lang="scss" scoped>
    
</style>