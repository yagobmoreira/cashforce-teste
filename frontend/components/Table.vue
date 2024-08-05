<script lang="ts">
import type { Cedente } from "~/src/interfaces/Cedente";
import CedenteModal from "./CedenteModal.vue";
import { useFetchData } from "~/src/composables/useFetchData";
import { useDateFormat } from "@vueuse/core";
import type { OrderNf } from "~/src/interfaces/orders/OrderNf";

const initialCedente: Cedente = {
  id: 1,
  name: "",
  email: "",
  phoneNumber: "",
  resposibleName: "",
  tradingName: "",
  website: "",
};

export default defineComponent({
  components: {
    CedenteModal,
  },
  setup() {
    const config = useRuntimeConfig();
    const { data, pending, error, fetchData } = useFetchData(
      `${config.public.apiUrl}/orders`
    );

    const ordersData = ref<OrderNf[]>([]);
    const isOpen = ref(false);
    const cedenteData = ref<Cedente>(initialCedente);
    const filteredData = ref([]);
    const statusMapper = [
      "Pendente de confirmação",
      "Pedido confirmado",
      "Não reconhece o pedido",
      "Mercadoria não recebida",
      "Recebida com avaria",
      "Devolvida",
      "Recebida com devolução parcial",
      "Recebida e confirmada",
      "Pagamento Autorizado",
    ];

    const openModal = (cedente: Cedente) => {
      isOpen.value = true;
      cedenteData.value = cedente;
    };

    const closeModal = () => {
      isOpen.value = false;
    };

    const formatDate = (date: string) => {
      return useDateFormat(date, "DD/MM/YYYY", {
        locales: "pt-BR",
      }).value;
    };

    const currency = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    onMounted(async () => {
      await fetchData();
      if (data.value) {
        filteredData.value = data.value.filter((item) => item.nNf && item.value && item.buyer && item.provider && item.emissionDate && item.orderStatusBuyer)
        ordersData.value = filteredData.value.map((item) => {
            return {
            nNf: item.nNf,
            value: item.value,
            sacado: item.buyer,
            cedente: item.provider,
            emissionDate: item.emissionDate,
            status: item.orderStatusBuyer,
          };
        })
      }
    });

    return {
      isOpen,
      cedenteData,
      openModal,
      closeModal,
      pending,
      error,
      ordersData,
      formatDate,
      currency,
      statusMapper,
    };
  },
});
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="flex px-4 gap-16 items-center mt-5">
      <span class="font-dmsans text-xs uppercase text-zinc-400 w-20"
        >Nota fiscal</span
      >
      <span class="font-dmsans text-xs uppercase text-zinc-400 w-24"
        >Sacado</span
      >
      <span class="font-dmsans text-xs uppercase text-zinc-400 w-24"
        >Cedente</span
      >
      <span class="font-dmsans text-xs uppercase text-zinc-400 w-20"
        >Emissão</span
      >
      <span class="font-dmsans text-xs uppercase text-zinc-400 w-32"
        >Valor</span
      >
      <span class="font-dmsans text-xs uppercase text-zinc-400 w-56"
        >Status</span
      >
    </div>
    <div class="flex flex-col gap-4">
      <div
        v-for="item in ordersData"
        :key="item.nNf"
        class="w-full flex items-center gap-16 px-4 py-2 h-12 border-[1px] border-[#DFE2EB] rounded-lg"
      >
        <div
          class="text-[#4D5566] font-dmsans text-sm font-medium text-left uppercase w-20"
        >
          {{ item.nNf }}
        </div>
        <div
          class="text-[#4D5566] font-dmsans text-sm font-medium text-left uppercase w-24 truncate"
        >
          {{ item.sacado.name }}
        </div>
        <div
          class="text-[#4D5566] font-dmsans text-sm font-medium text-left uppercase w-24 truncate"
        >
          {{ item.cedente.name }}
        </div>
        <div
          class="text-[#4D5566] font-dmsans text-sm font-medium text-left uppercase w-20"
        >
          {{ formatDate(item.emissionDate) }}
        </div>
        <div
          class="text-[#00AD8C] font-dmsans text-sm font-medium text-left uppercase w-32"
        >
          {{ currency.format(Number(item.value)) }}
        </div>
        <div
          class="text-[#00AD8C] font-dmsans text-xs font-bold text-left uppercase w-56 truncate"
        >
          {{ statusMapper[Number(item.status)] }}
        </div>
        <UButton
          class="bg-transparent text-[#727D94] border-[#CAD3FF] border-[1px] rounded-2xl font-dmsans text-xs hover:bg-zinc-200 mr-3"
          @click="openModal(item.cedente)"
        >
          Dados do cedente
        </UButton>
      </div>
    </div>
  </div>

  <CedenteModal
    :isOpen="isOpen"
    :cedenteData="cedenteData"
    :closeModal="closeModal"
    @update:isOpen="isOpen = $event"
  />
</template>
