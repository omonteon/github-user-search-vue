<script setup lang="ts">
// import React, { useState, useEffect, useRef } from "react";
// import { getUser } from "../../api/user-client";
// import ThemeSwitch from "../ThemeSwitch";
// import SearchBar from "../SearchBar";
// import GitHubProfile from "../GithubProfile";
// import { INITIAL_USERNAME, THEME_BG_COLOR } from "../../constants";
// import styles from "./App.module.css";
import ThemeSwitch from './components/ThemeSwitch.vue'
</script>

<template>
  <main>
    <!-- <div className={`theme-${theme}`}> -->
    <div class="theme-dark">
      <div class="app">
        <div class="app__header">
          <h1>devfinder</h1>
          <ThemeSwitch />
          <!-- <ThemeSwitch theme={theme} toggleTheme={toggleTheme} /> -->
        </div>
        <!-- <SearchBar
          onSearch={handleSearch}
          error={error}
          onTextChange={clearErrorMessage}
        /> -->
        <!-- {{loading ? "Loading..." : null}} -->
        <!-- {{error || loading ? null : <GitHubProfile user={user} />}} -->
        <!-- <div ref="{liveRegion}" class="sr-only" aria-live="polite"></div> -->
      </div>
      <div class="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6"
          target="_blank"
          rel="noreferrer noopener"
        >
          Frontend Mentor</a
        >. Coded by <a href="https://github.com/omonteon">Omar Monteon</a>.
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 573px) {
  .app {
    padding: 0;
    margin: 0;
  }
}

.app {
  width: var(--app-width);
  margin: var(--app-margin);
}

.app__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  margin-bottom: 36px;
}

.app__header h1 {
  margin: 0;
  color: var(--text-color);
}
</style>
