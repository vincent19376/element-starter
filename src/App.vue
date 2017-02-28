<template>
  <div>
    <h1>Tree</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
    <el-tree :data="treeData" :props="props" :render-content="renderContent"></el-tree>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      treeData: [],
      props: {
        children: 'children',
        label: 'label'
      }
    }
  },

  methods: {
    startHacking () {
      this.fetchInfo()
    },
    renderContent(h, {node, data, store}) {
      return h('span', node.label)
    },
    fetchInfo() {
      return axios.get('http://local.qccr.com:3000/data/')
        .then(response => {
          this.treeData = response.data.data
        })
    },
  },
  mounted: function() {
    this.fetchInfo()
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
