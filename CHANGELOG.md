.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── app  
        ├── local                       # 路由（添加了国际化路由）
│       ├── components                  # React自定义组件库
        ├── middleware.ts (4)           
│       ├── libs                        # 三方组件
│   ├── messages
        ├──zh
        ├── cn                     # 国际化语言配置.,目前支持中文和英文
│   ├── models                      # 存放Data数据
│   ├── styles（css）                      # 样式文件
│   ├── types                       # 扩展类
│   ├── utils                       # 工具类
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration