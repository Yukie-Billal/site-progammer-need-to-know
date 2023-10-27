<script setup lang="ts">
import {useCounterStore} from "../stores/counter.ts";
import {useUserStore} from "../stores/user.ts";

defineProps<{ msg: string }>()

const counter = useCounterStore()
const user = useUserStore()
</script>

<template>
  <h1>{{ msg }}, {{user.name}}</h1>

  <div class="card" v-if="user.active">
    <button type="button" @click="counter.increment">count is {{ counter.count }}</button>
  </div>
</template>
