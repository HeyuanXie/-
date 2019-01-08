// component/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    },
    activeIndex: {
      type: Number,
      value: 0
    },
    canSwipe: {
      type: Boolean,
      value: false
    },
    spaceAround: {
      type: Boolean,
       value: false
    },
    //是否显示顶部固定的tab
    showFixedTab: {
      type: Boolean,
      value: false
    },
    fixedBar: {
      type: Boolean,
      value: false,
      observer: "onScroll"
    },
    // 是否加粗
    fontBold: {
      type: Boolean,
      value: true,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTab(event) {
      let activeIndex = this.data.activeIndex;
      let currentIndex = event.currentTarget.dataset.current;
      if (activeIndex == currentIndex) return;
      this.setData({
        activeIndex: currentIndex
      })
      this.triggerEvent('clickTab', {currentIndex})
    },

    onScroll(event) {
      this.setData({
        showFixedTab: this.data.fixedBar
      });
    }
  }
})
