<template>
<div align="center">
  <div>
    <el-row style="background-color: rgba(241,239,239,0.36)">
      <div align="center" style="font-size: 35px;margin-top: 50px;font-family: 华文行楷">福缘护理院专家简介</div>
      <div align="center" style="font-size: 15px;margin-top: 0px;font-family: 'Times New Roman'">———Introduction ———</div>
      <div style="display: flex;flex-wrap: wrap;justify-content: center">
        <div style="margin:20px;">
          <img style="max-width:250px;" :src="require('../../public/imgs/environment/Wang.png')">
          <div style="text-align: center;font-size: 20pt;font-family: 华文行楷">王铭维</div>
        </div>

        <div style="margin-top:100px;" align="center">
            <div style="width: 500px;display: inline-block;margin:auto;font-size: 18pt;font-family: 楷体" >
              <p style="text-indent: 2em;">&nbsp;王铭维，&#12288;河北医科大学第一医院原副院长，医学博士，教授，主任医师，博士生导师，享受国务院专家津贴。</p>
              <p style="margin-top: 20px;text-indent: 2em;">擅长神经系统疑难病症，尤其对脑血管病、痴呆、帕金森病、癫痫等疾病有独特的治疗方法。致力于帕金森疾病、痴呆等神经系统退行性疾病方面的研究。</p>
            </div>
        </div>
      </div>

    </el-row>
  </div>
  <div align="center" style="width: auto;margin: 4%">
    <div align="center" style="font-size: 35px;margin-top: 10px;font-family: 华文行楷">福缘护理院专家团队</div>
    <div align="center" style="font-size: 15px;margin-top: 0px;margin-bottom:20px;font-family: 'Times New Roman'">——— Teams ———</div>
    <el-button @click="clearFilter">清除过滤器</el-button>
    <el-table
        ref="filterTable"
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="科室（专业）"
          width="180"
          :formatter="formatter">
      </el-table-column>
      <el-table-column
          prop="tag"
          label="职称"
          width="180"
          :filters="[{ text: '主任医师', value: '主任医师' }, { text: '副主任医师', value: '副主任医师' }, { text: '主治医师', value: '主治医师' }, { text: '康复医学治疗技术（师）', value: '康复医学治疗技术（师）' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
              :type="scope.row.tag === '主任医师' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        name: '王铭维',
        age: 65,
        address: '神经内科',
        tag: '主任医师'
      }, {
        name: '田惠玉',
        age: '47',
        address: '重症医学',
        tag: '主任医师'
      },  {
        name: '马芹颖',
        age: '39',
        address: '神经病学',
        tag: '主任医师'
      },
        {
          name: '王华龙',
          age: '38',
          address: '神经内科',
          tag: '副主任医师'
        },
        {
          name: '张立海',
          age: '44',
          address: '老年病科',
          tag: '副主任医师'
        },
        {
          name: '梁瑞景',
          age: '38',
          address: '老年病科',
          tag: '主治医师'
        },
        {
          name: '孙佳玮',
          age: '40',
          address: '呼吸与危重症医学科',
          tag: '副主任医师'
        },
        {
          name: '王乐',
          age: '44',
          address: '心内科',
          tag: '副主任医师'
        },
        {
          name: '穆立芹',
          age: '43',
          address: '肾内科',
          tag: '副主任医师'
        },
        {
          name: '杨春春',
          age: '37',
          address: '消化肉科',
          tag: '主治医师'
        },
        {
          name: '白亚平',
          age: '60',
          address: '中医科',
          tag: '主任医师'
        },
        {
          name: '邢军',
          age: '52',
          address: '康复科（中医专业）',
          tag: '主任医师'
        },
        {
          name: '刘晓栋',
          age: '27',
          address: '康复科',
          tag: '康复医学治疗技术（师）'
        },
        {
          name: '张曼曼',
          age: '26',
          address: '康复科',
          tag: '康复医学治疗技术（师）'
        },
        {
          name: '李佩娜',
          age: '29',
          address: '康复科',
          tag: '康复医学治疗技术（师）'
        },
        {
          name: '赵智',
          age: '29',
          address: '康复科',
          tag: '康复医学治疗技术（师）'
        }],
    }
  },
  methods: {
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>

<style>
</style>