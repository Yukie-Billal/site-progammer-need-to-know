<script setup lang="ts">
import { ref } from 'vue'

interface User {
   name: string,
   age: number,
   active: boolean
}

const user: User = {
   name: "Yukie",
   age: 17,
   active: true
}

defineProps<{ msg: string }>()

const count = ref<number>(0)

const setCount = () => {
   count.value++
   return false
}
</script>

<template>
  <h1>{{ msg }}, {{user.name}}</h1>

  <div class="card" v-if="user.active">
    <button type="button" @click="setCount">count is {{ count }}</button>
  </div>
</template>
