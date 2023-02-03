<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center pt-3 mb-5">
      <h1>Logo</h1>
      <nav>
        <ul class="d-flex list-unstyled">
          <li><router-link :to="{name: 'home'}">Home Page</router-link></li>
          <li><router-link :to="{name: 'about-us'}">About Us</router-link></li>
          <li><router-link :to="{name: 'list-projects'}">Project List</router-link></li>
        </ul>
      </nav>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
  li{
    margin-right: 10px;
  }
</style>