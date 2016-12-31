<template>
  <div class="hello">
	<el-row>
	  <el-col :span="8" v-for="gridData in gridDatas">
	    <el-card :body-style="{ padding: '0px' }">
	      <div style="padding: 14px;">
	        <span v-text="gridData.title"></span>
	        <div class="bottom clearfix">
	          <time class="time" v-text="gridData.create_at"></time>
	        </div>
	      </div>
	    </el-card>
	  </el-col>
	</el-row>
  </div>
</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>

<script>

import {indexGetList} from '../api/index'

export default {
 	name: 'hello',
 	data:function(){
	 	return{
	 	    gridDatas:''
	 	}
 	},created() {
 		indexGetList(1,5).then((response) => {
 			this.gridDatas = response
		})
    },methods:{

    }
}
</script>