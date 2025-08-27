<template>
  <div class="common-layout">
    <el-container class="main-layout">
      <el-aside width="220px">
        <div class="logo-container">
          <h3>Asset Manager</h3>
        </div>
        <el-menu :router="true" default-active="/">
          <el-menu-item index="/">
            <el-icon><HomeFilled /></el-icon>
            <span>Home</span>
          </el-menu-item>
          <el-sub-menu index="categories">
            <template #title>
              <el-icon><Folder /></el-icon>
              <span>Asset Categories</span>
            </template>
            <el-menu-item index="/category/ae-templates">AE Templates</el-menu-item>
            <el-menu-item index="/category/video-footage">Video Footage</el-menu-item>
            <el-menu-item index="/category/sound-effects">Sound Effects</el-menu-item>
            <el-menu-item index="/category/luts">LUTs</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="main-header">
          <div><!-- Placeholder for breadcrumbs or other controls --></div>
          <div class="theme-switcher">
            <el-switch
              v-model="isDarkMode"
              inline-prompt
              :active-icon="Moon"
              :inactive-icon="Sunny"
              style="--el-switch-on-color: #2c2c2c; --el-switch-off-color: #f2f2f2;"
            />
          </div>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { Sunny, Moon, Folder, HomeFilled } from '@element-plus/icons-vue'

const isDarkMode = ref(false)

// Function to toggle dark mode
const toggleDarkMode = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Watch for changes in the switch
watch(isDarkMode, (newVal) => {
  toggleDarkMode(newVal)
  localStorage.setItem('theme', newVal ? 'dark' : 'light')
})

// Check for saved theme preference on component mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
  } else if (savedTheme === 'light') {
    isDarkMode.value = false
  } else {
    // Fallback to system preference if no theme is saved
    isDarkMode.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  toggleDarkMode(isDarkMode.value)
})
</script>

<style>
/* Global styles */
:root {
  --el-color-primary-light-9: #f5f7fa;
  --el-color-primary-light-8: #eaeff5;
}

html.dark {
  --el-color-primary-light-9: #1a1a1a;
  --el-color-primary-light-8: #2c2c2c;
}

body, #app, .common-layout, .main-layout {
  height: 100vh;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  background-color: var(--el-bg-color-page);
  color: var(--el-text-color-primary);
}

.main-layout {
  height: 100%;
}

.el-aside {
  border-right: 1px solid var(--el-border-color-light);
}

.logo-container {
  padding: 20px;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  border-bottom: 1px solid var(--el-border-color-light);
}

.el-menu {
  height: calc(100% - 77px); /* Adjust based on logo container height */
  border-right: none;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color-light);
}

.el-main {
  background-color: var(--el-bg-color-page);
}

/* Page transition animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
