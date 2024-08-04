import { ref } from 'vue';
import type { IOrderWithRelations } from '../interfaces/orders/OrderWithRelations';

export function useFetchData(url: string) {
  const data = ref<IOrderWithRelations[] | null>(null);
  const pending = ref(true);
  const error = ref<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      data.value = await response.json() as IOrderWithRelations[];
    } catch (err: any) {
      error.value = err.message;
    } finally {
      pending.value = false;
    }
  };

  return { data, pending, error, fetchData };
}