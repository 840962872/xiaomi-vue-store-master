<template>
  <div>
    <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">选择福缘</div>
    <div align="center" style="font-size: 15px;margin-top: 0px;font-family: 'Times New Roman'">———Choose US———</div>

    <div class="elrowdiv" v-for="item in InfoList" :key="item.id">
      <el-row class="el-info" justify="center" style="background-color:rgba(241,239,239,0.36)">
        <el-row>

          <el-col :span="12" align="center"><div ><el-avatar :shape="item.shape" :size="450" :src="require('../../public/imgs/InfoImg/'+item.Path)"></el-avatar></div></el-col>

          <div class="infodiv"><h1 class="infotitle" style="font-family: 楷体;font-size: 18pt;margin: auto;text-indent: 2em;text-align: justify">{{item.Title}}</h1></div>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroList",
  data() {
    return {
      InfoList: '',
    };
  },
  created() {
    // 获取轮播图数据
    this.$axios
        .get("/api/home/info", {})
        .then(res => {
          this.InfoList = res.data.data;
          //console.log(res.data)
          //console.log(this.InfoList.toString())
          //console.log(this.InfoList[1].img_path.split("\\")[0]+'\\\\'+this.InfoList[1].img_path.split("\\")[1]+'\\\\'+this.InfoList[1].img_path.split("\\")[2]+'\\\\'+this.InfoList[1].img_path.split("\\")[3]+'\\\\'+this.InfoList[1].img_path.split("\\")[4]+'\\\\'+this.InfoList[1].img_path.split("\\")[5])
        })
        .catch(err => {
          return Promise.reject(err);
        });
  },
  methods: {

}
}
</script>

<style>
.el-info{
  margin: 60px;
}
.infodiv{
  display: flex;
  width: 550px;
  height: 460px;

  align-content: center;
  vertical-align: middle;
}
.infotitle{
  align-content: center;
}
.elrowdiv {
  background-color: white;
}
</style>