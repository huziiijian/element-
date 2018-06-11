<template>
<v-app id="inspire">
  <v-navigation-drawer
    fixed
    clipped
    app
    v-model="drawer"
  >
    <v-list dense>
      <template v-for="(item, i) in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="i"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group v-else-if="item.children" v-model="item.model" >
          <v-list-tile slot="item"  >
            <v-list-tile-action>
              <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click=""
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else @click="jumpToRouter(item)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar
    color="light-blue darken-3"
    dark
    app
    clipped-left
    fixed
  >
    <!--<v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">-->
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <el-button type="primary"  circle>
      <i class="material-icons" @click.stop="drawer = !drawer">
        calendar_view_day
      </i></el-button>&nbsp
      <h1>Project Kanban</h1>
    <!--</v-toolbar-title>-->

    <div class="d-flex align-center" style="margin-left: auto">
      <!--<v-btn icon>-->
        <!--<v-icon>apps</v-icon>-->
      <!--</v-btn>-->

      <el-button @click="jumpToHome" circle type="primary">
      	<i class="el-icon-bell" style="transform:scale(1.5);width:30px">
        <el-badge color="red" left style="background-color: rgba(0,0,0,0)">
          <span slot="badge" v-if="noti_num!=0">{{noti_num}}</span>
        </el-badge></i>
      </el-button>
      <!--<v-btn icon large @click="">-->
        <!--<v-avatar size="32px" tile>-->
          <!--<img-->
            <!--:src="myInformation.avatar"-->
            <!--v-if="myInformation.avatar"-->
          <!--&gt;-->
          <!--<v-icon>account</v-icon>-->
        <!--</v-avatar>-->
      <!--</v-btn>-->
      <v-avatar
        slot="activator"
        size="36px"
      >
        <img
          v-if="myInformation.avatar"
          :src="myInformation.avatar"
          alt=""
        >
        <v-icon v-else >ccaccount</v-icon>
      </v-avatar>
    </div>
  </v-toolbar>
  <v-content fluid grid-list-md>
    <router-view></router-view>
  </v-content>

</v-app>
</template>

<script>
  export default {

    name: "home",
    data: () => ({
      dialog: false,
      drawer: false,
      items: [
        { icon: 'dashboard', text: 'Home',link:'' },
        { icon: 'assignment', text: 'Projects',link:'projects' },
        { icon: 'account_box', text: 'Account',link:'myspace' },

      ],
      myInformation:{},
      notification:[],
      noti_num:0

    }),
    props: {
      source: String
    },
    mounted(){
      let that = this;
      that.myInfo();
      setInterval(function(){
        that.getNotification();
      },5000)
    },
    methods:{
      myInfo(){
        let url = "api/user/info";

        getData(this,url,(data)=>{
          this.myInformation=data;
        })

      },

      getNotification(){
        let url = "/api/notification/find";
        //此查询不是query式
        let req={
          "is_read":false
        }
        postData(this,url,req,(data)=>{
          this.notification = data;
          this.noti_num = data.length
        })
      },

      jumpToHome(){
        this.$router.push({ path: `/` })
      },

      jumpToRouter(item){
        const link = item.link;
        console.log("link");
        this.$router.push({path:`/${link}`})
      }

    }

  }
</script>

<style scoped>
  *{
    /*vertical-align: middle;*/
  }
  .el-button--primary {
    color: #fff;
    background-color: #0277BD;
    border-color: #0277BD;
}
</style>
