import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Firstpage from '@/components/Firstpage'
import jygl from '@/components/寄养管理'
import jxaxwp from '@/components/捐献爱心物品'
import lygl from '@/components/领养管理'
import plq from '@/components/评论区'
import zy from '@/components/主页'
import wyjy from '@/components/我要寄养'
import wyly from '@/components/我要领养'
import xxhd from '@/components/线下活动'
import xxhd1 from '@/components/线下活动1'
import axjz from '@/components/爱心救助'
import axqj from '@/components/爱心求救'
import grzx from '@/components/个人中心'
import grzx1 from '@/components/个人中心1'
import gly from '@/components/管理员'
import glyxt from '@/components/管理员系统'
import yhxxgl from '@/components/用户信息管理'
import glryxxgl from '@/components/管理人员信息管理'
import cwxxgl from '@/components/宠物信息管理'
import lldw from '@/components/流浪动物管理'
import tjcwxx from '@/components/添加宠物信息'
import glyzy from '@/components/管理员主页'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      name: 'Home',
      component:Home
    }, 
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, 
    {
      path: '/about',
      name: 'About',
      component:About
    },
        {
            path: '/gly:id',
            name: 'gly',
            component: gly
        }, 
        {
            path: '/glyxt:id',
            name: 'glyxt',
            component: glyxt,
            children: [
                {
                    path: '/yhxxgl:id',
                    name: '用户信息管理',
                    component: yhxxgl
                },
                {
                    path: '/cwxxgl:id',
                    name: '宠物信息管理',
                    component: cwxxgl
                },
                {
                    path: '/cwxxgl:id',
                    name: '宠物信息管理',
                    component: cwxxgl
                },
                {
                    path: '/glryxxgl:id',
                    name: '管理人员信息管理',
                    component: glryxxgl
                },
                {
                    path: '/tjcwxx:id',
                    name: '添加宠物信息',
                    component: tjcwxx
                },
                {
                    path: '/xxhd1:id',
                    name: '线下活动1',
                    component: xxhd1
                },
                {
                    path: '/glyzy:id',
                    name: '管理员主页',
                    component: glyzy
                },
                {
                    path: '/lldw:id',
                    name: '流浪动物管理',
                    component: lldw
                },
                {
                    path: '/grzx1:id',
                    name: '个人中心1',
                    component: grzx1
                },
            ]
        }, 
    {
      path: '/Firstpage',
      name: 'Firstpage',
      component:Firstpage,
      children:[
        {
          path: '/jygl:id',
          name: '寄养管理',
          component:jygl
        },
        {
        path: '/zy:id',
        name: '主页',
        component:zy
      },
        {
          path: '/jxaxwp:id',
          name: '捐献爱心物品',
          component:jxaxwp
        },
        {
          path: '/lygl:id',
          name: '领养管理',
          component:lygl
        },
        {
          path: '/plq:id',
          name: '评论区',
          component:plq
        },
        {
          path: '/wyjy:id',
          name: '我要寄养',
          component:wyjy
        },
        {
          path: '/wyly:id',
          name: '我要领养',
          component:wyly
        },
        {
          path: '/xxhd:id',
          name: '线下活动',
          component:xxhd
        },
        
        {
          path: '/axjz:id',
          name: '爱心救助',
          component:axjz
        },
        {
          path: '/axqj:id',
          name: '爱心求救',
          component:axqj
        },
        {
          path: '/grzx:id',
          name: '个人中心',
          component:grzx
        },
      ]
    }
    
  ]
})
