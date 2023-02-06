<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <div class="container-custom d-flex justify-content-between align-items-center">
      <h1><router-link :to="{name: 'home'}">Boolfolio</router-link></h1>
      <nav>
        <ul class="d-flex list-unstyled">
          <li><router-link :to="{name: 'home'}">Home Page</router-link></li>
          <li><router-link :to="{name: 'about-us'}">About Us</router-link></li>
          <li><router-link :to="{name: 'contact-us'}">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
  
  header{
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
    .container-custom{
      color: white;
      max-width: 100rem;
      margin: auto;
      height: 100px;
      background-color: #0D1117;
      box-shadow: .1875rem #0D1117;
      
      h1{
        a{
          color: white;
          text-decoration: none;
        }
        
      }
      ul{
        margin: 0;
        li{
          margin-right: .625rem;

          a{
            color: white;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1875rem;
          }
        }
      }
      
    }
  }
  
</style>