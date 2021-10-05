<template>
  <div class="pure-control-group">
    <label :for="id">{{ name }}</label>
    <input
      :id="id"
      type="text"
      :value="modelValue"
      @input="onInput"
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

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (event: Event) => {
  let value = null;
  const target = event.target;
  if (target && target instanceof HTMLInputElement) {
    value = target.value;
  }

  if (value !== null) {
    emit("update:modelValue", value);
  }
};
</script>
