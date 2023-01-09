<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      TODO:
      <ul>
        <li>
          items data erweitern (Bilder, mehr Informationen etc.) für die details
          page
        </li>
        <li>Details Page bearbeiten</li>
        <li>HomeView vervollständigen bzgl. Styling</li>
        <li>About Page etwas erweitern mit Informationen zum Projekt</li>
        <li>Header anpassen bzlg. Styling - bei App.vue</li>
        <li>
          potential images: https://www.vexels.com/merch/designs/flat-people/
        </li>
        <li>responsive design optimieren überall</li>
        <li>
          Error Message statt alert verwenden bei Gramm-Angabe (siehe ui folder)
        </li>
        <li>...?</li>
      </ul>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
