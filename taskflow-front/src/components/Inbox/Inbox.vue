<template>
  <v-layout scrollable>
    <v-flex xs12>
        <v-list two-line subheader>
          <v-expansion-panel expand>
            <v-expansion-panel-content>
              <v-subheader slot="header">收件箱</v-subheader>
              <v-list-tile v-if="notifications.length==0">
                <v-list-tile-content>
                 <v-chip>暂无新消息</v-chip>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile else v-for="(item,index) in notifications" :key="index">
                <v-list-tile-action>
                  <v-checkbox v-model="item.is_read" @click="markRead(item)"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{item.header}}</v-list-tile-title>
                  <v-list-tile-sub-title>{{item.content}}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.date |format_Date}}</v-list-tile-action-text>
                </v-list-tile-action>
               </v-list-tile>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-divider></v-divider>
          <v-expansion-panel>
            <v-expansion-panel-content>
          <v-subheader slot="header">正在进行中</v-subheader>
          <v-expansion-panel popout>
            <v-expansion-panel-content
            v-for="(item,index) in filterProgress" :key="index">
              <div slot="header">{{item.name}}</div>
              <v-list>
              <v-list-tile avatar v-for="(list,subindex) in item.data" :key="subindex">
                <v-list-tile-action>

                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{list.name}}</v-list-tile-title>
                  <v-list-tile-sub-title></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              </v-list>
            <!--</template>-->
          <!--</template>-->
            </v-expansion-panel-content>
          </v-expansion-panel>
            <!--<v-pagination :length="6" v-model="page"></v-pagination>-->
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
    import {formatDate2} from '../../utils/date'
    export default {
      name: "Inbox",
      props:{
        bigData:{
          type:Array,
        },
        users:{
          type:Array,
        },
        myInformation:{
          type:Object
        }
      },
      data(){
          return{
            page:1,
            notifications:[]


          }
      },

      filters: {
        format_Date(time) {
          return formatDate2(time);
        },

        format_Name(name){

        }


      },

      mounted(){
        let that = this;
        that.getNotifications();
      },
      computed:{
        //正在进行的项目
        filterProgress(){

          let length = this.bigData.length;
          let result=[];
          if(length>0){
            for(let i =0;i<length;i++) {
              let item = this.bigData[i];
              let progressData = [];
              progressData = item.assets.filter((v) => {
                if (v.status === "progress" && v.owner == this.myInformation._id) {
                    return v;
                  }
                })
              result[i]={
                "name":item.name,
                "_id":item._id,
                "data":progressData
              }
            }
          }

          return result;
        }

      },
      methods:{

        getNotifications(){
          let url = "/api/notification/find";
          let req ={
            "to":this.myInformation._id,
            "is_read":false
          };
          postData(this,url,req,(data)=>{
            console.log("get",data)
            this.notifications = data;
          })

        },
        markRead(item){
          console.log(item)

          let id = [item._id]
          let url ="/api/notification/read";

          postData(this,url,id,()=>{
            this.getNotifications();
            console.log("success")
          })


        }

      }
    }
</script>

<style scoped>

</style>
