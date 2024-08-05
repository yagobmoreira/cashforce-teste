<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Cedente } from '~/../interfaces/Cedente';

export default defineComponent({
  name: 'CedenteModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    cedenteData: {
      type: Object as PropType<Cedente | undefined>,
      required: true,
    },
    closeModal: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
});
</script>

<template>
  <UModal v-model="isOpen" prevent-close>
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Cedente
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="closeModal"
          />
        </div>
      </template>

      <template #default>
        <div class="flex flex-col">
          <span><strong>Nome fantasia:</strong> <i>{{ cedenteData?.name ?? 'Não cadastrado'}}</i></span>
          <span><strong>Razão social:</strong> <i>{{ cedenteData?.tradingName ?? 'Não cadastrado' }}</i></span>
          <span><strong>Responsável:</strong> <i>{{ cedenteData?.resposibleName ?? 'Não cadastrado' }}</i></span>
          <span><strong>Website:</strong> <i>{{ cedenteData?.website ?? 'Não cadastrado'}}</i></span>
          <span><strong>E-mail:</strong> <i>{{ cedenteData?.email ?? 'Não cadastrado' }}</i></span>
          <span><strong>Telefone:</strong> <i>{{ cedenteData?.phoneNumber ?? 'Não cadastrado'}}</i></span>
        </div>
      </template>

      <template #footer>
        <UButton label="Ver mais"/>
      </template>
      
    </UCard>
  </UModal>
</template>
