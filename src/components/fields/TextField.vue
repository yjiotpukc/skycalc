<template>
  <div class="pure-control-group">
    <label :for="id">{{ name }}</label>
    <input
      :id="id"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span
      v-if="description"
      class="pure-form-message-inline"
    >{{ description }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  modelValue: string;
  id: string;
  description?: string;
}>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>
