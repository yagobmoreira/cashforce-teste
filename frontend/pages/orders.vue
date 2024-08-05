<script setup>
const loading = ref(false);
</script>
<template>
  <div>
    <header>
      <div class="flex items-center">
        <UIcon size="24" class="w-6 h-6 text-[#021B51]" name="i-fa6-regular:handshake"/>
        <h3 class="ml-2 text-[#021B51] text-2xl py-[2px] font-dmsans font-bold">
          Notas fiscais
        </h3>
      </div>
      <p class="text-sm text-[#727D94] font-dmsans font-normal">Visualize as notas fiscais que você tem.</p>
    </header>
    <main class="h-screen">
      <section>
        <Table />
      </section>
    </main>
  </div>
</template>
