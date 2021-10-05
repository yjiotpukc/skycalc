<template>
  <div class="pure-control-group">
    <label :for="id">{{ name }}</label>
    <input
      :id="id"
      type="checkbox"
      :checked="modelValue"
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
  modelValue: boolean;
  id: string;
  description?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const onInput = (event: Event) => {
  let value = null;
  const target = event.target;
  if (target && target instanceof HTMLInputElement) {
    value = target.checked;
  }

  if (value !== null) {
    emit("update:modelValue", value);
  }
};
</script>
