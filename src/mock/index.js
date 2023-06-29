import Mock from 'mockjs'

Mock.mock('/api/resources/carousel',{
    "ret":0,
    "data":[
        {
            "mitme": "@datatime",
            "score|1-800":1,
            "rank|1-100":1,
            "stars|1-5":1,
            "nickname":"@cname",
            "Path": "NiaoKan.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','FastMock')"
        },
        {
            "mitme": "@datatime",
            "score|1-800":1,
            "rank|1-100":1,
            "stars|1-5":1,
            "nickname":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "mitme": "@datatime",
            "score|1-800":1,
            "rank|1-100":1,
            "stars|1-5":1,
            "nickname":"@cname",
            "Path": "SheJi.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "mitme": "@datatime",
            "score|1-800":1,
            "rank|1-100":1,
            "stars|1-5":1,
            "nickname":"@cname",
            "Path": "ShiJing.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        }
    ]

})

Mock.mock('/api/user/token',{
    "code":"001",
    "ret":0,
    "data":
        {
            "mitme": "@datatime",
            "score|1-800":1,
            "rank|1-100":1,
            "stars|1-5":1,
            "nickname":"@cname",
            "img":"@image('200x100','#ffcc33','#FFF','png','FastMock')"
        }
})

Mock.mock('/api/product/category/limit/1',{
    "data":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        }
    ]
})

Mock.mock('/api/product/category/limit/2',{
    "data":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        }
    ]
})

Mock.mock('/api/product/category/limit/5',{
    "data":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        }
    ]
})

Mock.mock('/api/product/category/limit/7',{
    "data":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        }
    ]
})


Mock.mock('/api/product/category/hot',{
    "data":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        }
    ]
})


Mock.mock('/api/home/info',{
    "data":[
        {
            "InfoId":1,
            "shape": "circle",
            "Title": "“石家庄福缘护理院”坐落于风景秀丽的福瑞祥合颐养园，位于元氏县马村镇聊村村西，北距石家庄市区15公里，东临红旗大街南延线，西临南水北调水渠。\n",
            "Path": "img.png",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "InfoId":2,
            "shape": "circle",
            "Title": "杨瑞珍, 女, 75岁石家庄市元氏县人，1945年10月出生大专学历，2007年创建福瑞祥合燃料有限公司，任公司董事长。公司董事长杨瑞珍，是一个具有社会情怀的企业家，投资2亿元建成了“福瑞祥合颐养园”另外计划投资5亿元，建成容纳1500户老人家庭，与医院、护理院、养老院三位一体，形成医养、颐养、乐养相结合的康复养老大型示范院区。\n",
            "Path": "img_1.png",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "InfoId":3,
            "shape": "square",
            "Title": "石家庄福缘护理院已按照2011年原国家卫计委下发了关于印发《护理院基本标准（2011版）》的要求，对经营用房进行了无障碍设计改造，卫生间增加了防滑扶手配置，紧急呼叫器等，单独的洗澡间放置了行动受限老人专用的洗澡椅和洗澡床。护理院一共41间病房，100张床位，每个都配备了独立卫生间、储藏柜、床头柜、还有治疗带、呼叫器、中央空调、24小时热水;部分房间配备了多功能护理床、防治压疮功能液晶电视;护理院还有一个康复治疗厅，一个康复大厅;大楼北侧是小型景观花园，树木花草繁茂，设置无障碍甬道，供病患者散步活动，石家庄福缘护理院配备专业人员，达到执业的标准。\n",
            "Path": "img_3.png",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
    ]
})


Mock.mock('/api/category',{
    "data":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')",
            "categoryId":1,
            "categoryName":"小米"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')",
            "categoryId":2,
            "categoryName":"苹果"
        }
    ]
})


Mock.mock('/api/product/page/1/5/0',{
    "data":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":2,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":3,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":4,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":5,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        }
    ]
})


Mock.mock('/api/product/page/1/5/1',{
    "data":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":2,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":3,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        }
    ]
})


Mock.mock('/api/product/page/1/5/2',{
    "data":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId":2,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')"
        }
    ]
})



Mock.mock('/api/product/getProductBySearch',{
    "total":16,
    "Product":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')",
            "categoryId":1,
            "categoryName":"小米"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')",
            "categoryId":2,
            "categoryName":"华为"
        }
    ]
})


Mock.mock('/goods',{
    "total":16,
    "Product":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')",
            "categoryId":1,
            "categoryName":"小米"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')",
            "categoryId":2,
            "categoryName":"华为"
        }
    ]
})


Mock.mock('/seckill/product/time',{
    "total":16,
    "Product":[
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')",
            "categoryId":1,
            "categoryName":"小米"
        },
        {
            "productTitle": "@datatime",
            "productSellingPrice|200-800":1,
            "productPrice|50-100":1,
            "productId|1-5":1,
            "productName":"@cname",
            "Path": "Farm.jpg",
            "imgPath":"@image('200x100','#ffcc33','#FFF','png','22222')",
            "categoryId":2,
            "categoryName":"华为"
        }
    ]
})