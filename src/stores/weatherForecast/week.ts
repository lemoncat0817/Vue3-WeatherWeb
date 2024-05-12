import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWeekStore = defineStore(
  'week',
  () => {
    // 篩選切換
    const east = ref<boolean>(false)
    const south = ref<boolean>(false)
    const mid = ref<boolean>(false)
    const north = ref<boolean>(false)
    const out = ref<boolean>(false)
    // 重置篩選
    const resetFilter = () => {
      east.value = false
      south.value = false
      mid.value = false
      north.value = false
      out.value = false
    }
    // 搜尋功能關鍵字
    const keyWord = ref<string>('')
    return { east, south, mid, north, out, resetFilter, keyWord }
  },
  {
    persist: true
  }
)
