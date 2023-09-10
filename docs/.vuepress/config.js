module.exports = {
    base: "/blog/",
    title: '爱喝胡辣汤',
    description: '爱喝胡辣汤的个人知识分享库',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'author', content: '爱喝胡辣汤' }],
      ['meta', { name: 'keywords', content: '个人知识分享库，学习笔记，后端开发，Java开发，爱喝胡辣汤' }]
    ],
    markdown: {
      lineNumbers: true
    },
    //插件
    plugins: {
      '@vuepress/active-header-links': { /* options */sidebarLinkSelector: '.sidebar-link', headerAnchorSelector: '.header-anchor' },
      '@vuepress/back-to-top': {},
      '@vuepress/nprogress':{},
      '@vuepress/last-updated':{}
    },
    themeConfig: {
      logo: '/icons/index.jpg',
      lastUpdated:'更新时间',
      //上下篇
      nextLinks: true,
      prevLinks:  true,
      //页面滚动
      smoothScroll: true,
      //活动的标题链接
      activeHeaderLinks: true,
      //侧边栏
      sidebar: [
        {
          title: '学习笔记',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            //后端基础
            '/notes/javase',
            '/notes/mysql',
            '/notes/jdbc',
            '/notes/javaweb',
            //框架技术
            '/notes/spring',
            '/notes/springmvc',
            '/notes/mybatis',
            '/notes/ssm',
            //微服务
            '/notes/springboot',
            '/notes/springcloud',
            //必学必会技术栈
            '/notes/git',
            '/notes/linux',
          ]
        },
        {
          title: '刷题笔记',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            //Leetcode
            '/questions/leetcode-AaDS',
            '/questions/leetcode-sql',
            //牛客网
            '/questions/nowcoder-AaDS',
            '/questions/nowcoder-AaDS',
          ]
        },
        {
          title: '计算机基础',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            //Leetcode
            '/notes/pocc',
            '/notes/ds',
            '/notes/cn',
            '/notes/os'
          ]
        },
      ],
      //导航栏配置
      nav: [
        {
          text: '主页', link: '/home/'
        },

        {
          text: '学习笔记',
          items: [
            { 
              text: '后端基础',
              items: [
                { text: 'JavaSE', link: '/notes/javase' },
                { text: 'JavaWeb', link: '/notes/javaweb' },
                { text: 'MySQL+JDBC', link: '/notes/mysql' }
              ]
            },

            { text: '框架技术', items: [
                              { text: 'Spring+SpringMVC+MyBatis', link: '/notes/spring' },
                              { text: 'SSM', link: '/notes/ssm' }
                            ]
            },

            { text: '微服务', items: [
                              { text: 'SpringBoot', link: '/notes/springboot' },
                              { text: 'SpringCloud', link: '/notes/springcloud' }
                            ]
            },

            { text: '必学必会技术栈', items: [
                              { text: 'Git', link: '/notes/git' },
                              { text: 'Linux', link: '/notes/linux' }
                            ]
            },
          ]
        },

        {
          text: '刷题笔记',
          items: [
            { text: 'Leetcode', items: [
                              { text: '数据结构与算法', link: '/questions/leetcode-AaDS' },
                              { text: 'SQL', link: '/questions/leetcode-sql' }
                            ]
            },
            { text: '牛客网', items: [
                              { text: '数据结构与算法', link: '/questions/nowcoder-AaDS' },
                  
                              { text: 'SQL', link: '/questions/nowcoder-sql' }
                            ]
            }
          ]
        },

        { text: '计算机基础',
          items:[
            { text: '计算机组成原理', link: '/notes/pocc' },
            { text: '数据结构', link: '/notes/ds' },
            { text: '计算机网络', link: '/notes/cn' },
            { text: '操作系统', link: '/notes/os' }
          ]
        },

        { text: '实战项目',
          items:[
            { text:'项目案例1', link: '/practical-projects/project1' },
            { text:'项目案例2', link: '/practical-projects/project2' }
          ]
        },

        {
          text: '开发工具',
          items: [
            { text: 'Java', items: [
                              { text: 'IntelliJ IDEA', link: '/development-tools/idea' },
                              { text: 'Eclipse', link: '/development-tools/eclipse' },
                            ]
            },
            { text: 'Linux', items: [
                              { text: 'VMware', link: '/development-tools/vmware' },
                              { text: 'CentOS', link: '/development-tools/centos' },
                              { text: 'Xshell', link: '/development-tools/xshell' },
                              { text: 'Xftp', link: '/development-tools/xftp' }
                            ]
            }
          ]
        },

        { 
          text: '电子资源', link: '/resource' 
        },

        { 
          text: 'Github', link: 'https://github.com/ahhlt' 
        },
      ],
    }
  }
