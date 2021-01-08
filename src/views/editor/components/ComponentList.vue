<template>
  <div>
    <el-collapse style="margin-top: 0px">
      <el-collapse-item
        v-for="(componentCatagory, index) in componentCatagoryList"
        :key="index"
        :title="componentCatagory.title"
      >
        <el-row :gutter="20">
          <el-col :span="8" v-for="o in 3" :key="o">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div class="catagory-title">
                <span>好吃的汉堡</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import componentCatagoryList from "@/components/universal/config/componentCatagoryList";
export default {
  data() {
    return {
      componentCatagoryList: [],
    };
  },
  created() {
    console.log(componentCatagoryList);
    this.componentCatagoryList = componentCatagoryList;
  },
  methods: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image {
  width: 100%;
  display: block;
}
.catagory-title {
  padding: 6px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
