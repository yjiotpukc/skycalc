<template>
  <div class="radio-control-group">
    <div class="radio-control-group--label">
      {{ name }}
    </div>
    <div class="radio-values">
      <label
        v-for="possibleValue in possibleValues"
        :key="possibleValue.id"
        :for="possibleValue.id"
        class="pure-radio"
      >
        <input
          :id="possibleValue.id"
          type="radio"
          :name="name"
          :value="possibleValue.value"
          :checked="modelValue === possibleValue.value"
          @input="onInput"
        >
        {{ possibleValue.label }}
        <span
          v-if="possibleValue.description"
          class="description"
        >{{ possibleValue.description }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  modelValue: string | number;
  possibleValues: {
    id: string;
    value: string | number;
    label: string;
    description?: string;
  }[];
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

<style>
.radio-control-group--label {
  display: inline-block;
  width: 10em;
  margin: 0 1em 0 0;
  text-align: right;
  vertical-align: top;
}

.radio-values {
  display: inline-block;
  margin: -0.5em 0 0;
}

.radio-values label {
  display: block;
}

.radio-values .description {
  padding-left: 0.3em;
  color: #666;
  font-size: 0.875em;
}
</style>
