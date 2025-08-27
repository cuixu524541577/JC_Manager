import { defineStore } from 'pinia'

export const useAssetStore = defineStore('assets', {
  state: () => ({
    assets: [
      {
        id: 1,
        category: 'ae-templates',
        name: 'Modern Intro Pack',
        description: 'A pack of 10 modern and stylish intro templates for After Effects.',
        tags: ['intro', 'modern', 'stylish', 'corporate'],
        preview: '/previews/modern-intro.jpg',
        filePath: 'C:/Users/Jules/Documents/AETemplates/ModernIntro.aep'
      },
      {
        id: 2,
        category: 'video-footage',
        name: 'Drone Shot of Mountains',
        description: 'A breathtaking 4K drone shot of a mountain range at sunrise.',
        tags: ['drone', 'mountains', 'nature', '4k', 'sunrise'],
        preview: '/previews/drone-mountains.jpg',
        filePath: 'D:/StockFootage/Nature/mountains_01.mp4'
      },
      {
        id: 3,
        category: 'sound-effects',
        name: 'Cinematic Whoosh',
        description: 'A classic cinematic whoosh sound effect, perfect for transitions.',
        tags: ['whoosh', 'transition', 'cinematic', 'sfx'],
        preview: null, // Sound effects might not have a visual preview
        filePath: 'E:/SoundFX/Cinematic/whoosh_01.wav'
      },
      {
        id: 4,
        category: 'luts',
        name: 'Teal and Orange LUT',
        description: 'A popular color grading LUT that gives a cinematic teal and orange look.',
        tags: ['lut', 'color grading', 'teal', 'orange', 'cinematic'],
        preview: '/previews/teal-orange-lut.jpg',
        filePath: 'F:/LUTs/Cinematic/TealAndOrange.cube'
      },
      {
        id: 5,
        category: 'ae-templates',
        name: 'Minimal Lower Thirds',
        description: 'Clean and minimal lower thirds for any project.',
        tags: ['lower third', 'minimal', 'clean', 'text'],
        preview: '/previews/lower-thirds.jpg',
        filePath: 'C:/Users/Jules/Documents/AETemplates/LowerThirds.aep'
      }
    ]
  }),
  getters: {
    getAssetsByCategory: (state) => {
      return (categoryName) => state.assets.filter(asset => asset.category === categoryName)
    }
  },
  actions: {
    // Actions to add, edit, delete assets will be defined here later
  }
})
