<template>
  <el-card shadow="hover" class="asset-card">
    <div class="card-content">
      <div class="preview-container">
        <img v-if="asset.preview" :src="asset.preview" class="asset-preview" alt="Asset preview" />
        <div v-else class="no-preview">
          <span>No Preview</span>
        </div>
      </div>
      <div class="info-container">
        <h3>{{ asset.name }}</h3>
        <p class="description">{{ asset.description }}</p>
        <div class="tags-container">
          <el-tag v-for="tag in asset.tags" :key="tag" type="info" size="small" class="tag">{{ tag }}</el-tag>
        </div>
        <p class="file-path">
          <strong>Path:</strong> {{ asset.filePath }}
        </p>
      </div>
    </div>
  </el-card>
</template>

<script setup>
defineProps({
  asset: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.asset-card {
  margin-bottom: 20px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.asset-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--el-box-shadow-light);
}

.card-content {
  display: flex;
}

.preview-container {
  width: 200px;
  height: 120px;
  margin-right: 20px;
  flex-shrink: 0;
  background-color: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.asset-preview {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.no-preview {
  color: #909399;
  font-size: 14px;
}

.info-container {
  flex-grow: 1;
}

h3 {
  margin: 0 0 10px 0;
}

.description {
  font-size: 14px;
  color: #606266;
  margin: 0 0 10px 0;
}

.tags-container {
  margin-bottom: 10px;
}

.tag {
  margin-right: 5px;
}

.file-path {
  font-size: 12px;
  color: #909399;
  margin: 0;
  word-break: break-all;
}
</style>
