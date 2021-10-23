<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>
</template>
<script>
import {API} from "@/API/API";

export default {
  mixins: [API]
}
</script>
<style>
</style>
