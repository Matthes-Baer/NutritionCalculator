<script setup lang="ts"></script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      TODO:
      <ul>
        <li>HomeView/AboutView vervollständigen bzgl. Styling (Bilder?)</li>
        <li>
          HomeView Text oben anpassen (die derzeitigen dastehenden Infos eher
          auf AboutView verschieben?)
        </li>
        <li>About Page etwas erweitern mit Informationen zum Projekt</li>
        <li>
          potential images: https://www.vexels.com/merch/designs/flat-people/ -
          background image, damit es mit AOS scroll reinkommt?
        </li>
        <li>responsive design optimieren überall</li>
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
