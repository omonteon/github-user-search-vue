<script setup lang="ts">
import SunIcon from './icons/iconSun.vue'
import MoonIcon from './icons/iconMoon.vue'
</script>

<template>
  <fieldset class="theme-switch">
    <legend className="sr-only">Color mode selections</legend>
    <input
      type="radio"
      id="lightmode"
      name="colormode"
      aria-label="lightmode"
      value="lightmode"
      defaultChecked
    />
    <label htmlFor="lightmode"> LIGHT <SunIcon /> </label>
    <input type="radio" id="darkmode" name="colormode" aria-label="darkmode" />
    <label htmlFor="darkmode"> DARK <MoonIcon /> </label>
  </fieldset>
</template>

<style scoped>
.theme-switch {
  display: flex;
  align-items: center;
  border: none;
  padding: 0;
  margin: 0;
}

.theme-switch label {
  text-transform: uppercase;
  color: var(--text-color-auxiliary);
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  transition: color 200ms linear;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-switch:hover {
  cursor: pointer;
}

.theme-switch input[type='radio'] {
  opacity: 0;
}

.theme-switch input[type='radio']:hover,
.theme-switch label:hover {
  cursor: pointer;
}

.theme-switch input[type='radio']:checked,
.theme-switch input[type='radio']:checked + label {
  z-index: -1;
  position: absolute;
  opacity: 0;
}

.theme-switch svg path {
  transition: fill 200ms linear;
}

.theme-switch:hover svg path {
  fill: var(--text-switch-color-hover);
}

.theme-switch:hover label {
  color: var(--text-switch-color-hover);
}
</style>
