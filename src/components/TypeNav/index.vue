<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click="goSearch">
            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex == index}">
              <h3 @mouseenter="changeIndex(index)">
                <a :data-categoryname="c1.categoryName" :data-category1id="c1.categoryId">{{c1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix" :style="{display: currentIndex===index ? 'block': 'none'}">
                <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryname="c2.categoryName" :data-category2id="c2.categoryId">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                        <a :data-categoryname="c3.categoryName" :data-category3id="c3.categoryId">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
//是把lodash全部功能函数引入
import throttle from 'lodash';
export default {
  name: 'TypeNav',
  //组件挂载完毕：可以向服务器发请求
  props: {},
  data() {
    return {
      //存储用户鼠标移上哪一个一级分类
      currentIndex: -1
    };
  },
  computed: {
    ...mapState({
      // 对象写法右侧需要一个函数，当使用这个计算属性的时候，右侧函数回立即执行一次
      //注入一个参数state, 其实即为大仓库中的数据
      categoryList: (state) => state.home.categoryList.slice(0,16)
    })
  },
  created() {},
  mounted() {
    //通知vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch('categoryList')
  },
  watch: {},
  methods: {
    //鼠标进入修改响应式数据currentIndex
    // changeIndex(index) {
    //   //index:鼠标移上某一个一级菜单的某一个位置
    //   this.currentIndex = index
    //   console.log(index)
    // },
    changeIndex: throttle(function(index){
      this.currentIndex = index
    }, 50),
    leaveIndex() {
      this.currentIndex = -1
    },
    //进行路由跳转的方法
    goSearch(event) {
      //最好的解决方案：编程式导航+事件委派
      //利用事件委派存在一些问题：1:点击一定是a标签 2:如何获取参数【1，2，3级产品名字】
      //解决： 把子节点当中的a标签，加上自定义属性data-catetoryName，其余的子节点都是没有的
      let element = event.target;
      //节点有一个dataset属性，可以获取节点的自定义属性与属性值
      let { categoryname, category1id, category2id, category3id } = element.dataset;
      console.log('element.dataset', element.dataset)
      if(categoryname) {
        //怎么知道是几级分类的
        //整理路由跳转的参数
          let location = {name: 'search'};
          let query = {categoryName: categoryname}
        if(category1id){
          query.category1Id = category1id;
        }else if(category2id){
          query.category2Id = category2id;
        }else{
          query.category3Id = category3id;
        }
        // 整理完参数
        location.query = query;
        //路由跳转
        　this.$router.push(location)
      }
    }
  },
  components: {},
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background: skyblue;
        }
      }
    }
  }
}
</style>
