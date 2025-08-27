<template>
  <div class="category-view">
    <div class="header">
      <h1>{{ categoryTitle }}</h1>
      <el-input
        v-model="searchQuery"
        placeholder="Search by name or description..."
        clearable
        class="search-input"
      />
    </div>

    <div v-if="filteredAssets.length > 0" class="asset-list">
      <AssetCard v-for="asset in filteredAssets" :key="asset.id" :asset="asset" />
    </div>
    <el-empty v-else :description="emptyDescription"></el-empty>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAssetStore } from '../store/assets'
import AssetCard from '../components/AssetCard.vue'

const props = defineProps({
  categoryName: {
    type: String,
    required: true
  }
})

const searchQuery = ref('')
const assetStore = useAssetStore()

const filteredAssets = computed(() => {
  const assets = assetStore.getAssetsByCategory(props.categoryName)
  if (!searchQuery.value) {
    return assets
  }
  const lowerCaseQuery = searchQuery.value.toLowerCase()
  return assets.filter(asset =>
    asset.name.toLowerCase().includes(lowerCaseQuery) ||
    asset.description.toLowerCase().includes(lowerCaseQuery)
  )
})

const categoryTitle = computed(() => {
  return props.categoryName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})

const emptyDescription = computed(() => {
  return searchQuery.value
    ? `No assets found for your search in '${categoryTitle.value}'`
    : `No assets found in '${categoryTitle.value}'`
})

</script>

<style scoped>
.category-view {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  max-width: 300px;
}

h1 {
  margin: 0;
}
</style>
