<template>
  <div class="flex items-start">
    <Sidebar />
    <div class="w-full bg-white">
      <AppHeader />
      <div class="px-12 py-10">
        <slot />
      </div>
    </div>
  </div>
</template>
 