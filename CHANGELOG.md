.
├── README.md                       # README file
├── .git                            #
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── app   (路由)
        ├── 【local】                # 路由（添加了国际化路由设计规范）         # React自定义组件库
    ├── middleware.ts (4)        国际化适配拦截器，需要国际化路由放置在这里 
│   ├── libs                        # 三方组件
│   ├── components  
│   ├── messages                    # 国际化语言配置.,目前支持中文和英文
        ├──zh                         
        ├── cn                    
│   ├── models                      # 存放Data数据
│   ├── api                         # 网络请求
│   ├── styles（css）                # 样式文件
│   ├── types                       # 扩展类
│   ├── utils                       # 工具类
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration