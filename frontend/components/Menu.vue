<script setup>
const route = useRoute();

const items = ref([
  {
    title: "Notas fiscais",
    path: "/orders",
    icon: "my-icon:handshake",
  },
]);

const isActiveRoute = (path) => {
  return route.path === path;
};
</script>

<template>
  <div class="flex flex-col w-[288px]">
    <header
      class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer w-[288px]"
    >
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>
    </header>

    <div>
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['h-16 flex items-center gap-2 px-4 py-1 transition cursor-pointer hover:bg-neutral-100', { 'border-l-4 border-[#00AD8C]': isActiveRoute(item.path) }]"
      >
        <NuxtLink :to="item.path" class="flex justify-start items-center w-full h-full">
          <UIcon
            size="24"
            class="w-6 h-6 text-[#00AD8C] mr-[15px]"
            name="i-fa6-regular:handshake"
          />
          <span class="text-[#00AD8C] text-sm">{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
