let $ = require("jquery");
window.DataSrc = (function () {
    var domain = "";
    var baseUrl = "/api/";
    return {
        //一、新闻资讯区域
        getlunbo:function () {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        url:"./src/images/swiper1.jpg",
                        img:"./src/images/swiper1.jpg"
                    },{
                        url:"./src/images/swiper2.jpg",
                        img:"./src/images/swiper2.jpg"
                    },{
                        url:"./src/images/swiper3.jpg",
                        img:"./src/images/swiper3.jpg"
                    },{
                        url:"./src/images/swiper4.jpg",
                        img:"./src/images/swiper4.jpg"
                    },
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        getLunbotu:function () {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        src:"./src/images/bueaty00.jpg",
                    },{
                        src:"./src/images/bueaty01.jpg",
                    },{
                        src:"./src/images/bueaty02.jpg",
                    },{
                        src:"./src/images/bueaty03.jpg",
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        getnewslistUrl:domain + baseUrl +"getnewslist",//1.查询模型列表
        getnewslist:function () {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        id:12,
                        title:"黄下有音",
                        add_time:"2018-08-08T08:08:08",
                        zhaiyao:"测试数据",
                        click:12,
                        img_url:"./src/images/bueaty01.jpg"
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        getnew:function (id) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        id:12,
                        title:"黄下有音" + id,
                        add_time:"2018-08-08T08:08:08",
                        content:"测试数据",
                        click:12,
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        getimages:function (cateId) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData;
                switch(cateId){
                    case 1:
                    resData = [
                        {
                            id:2,
                            title:"黄下有音2",
                            zhaiyao:"测试数据2",
                            img_url:"./src/images/swiper2.jpg"
                        },{
                            id:4,
                            title:"黄下有音4",
                            zhaiyao:"测试数据4",
                            img_url:"./src/images/swiper4.jpg"
                        },
                    ]
                    
                    break;
                    case 2:
                    resData = [
                        {
                            id:1,
                            title:"黄下有音",
                            zhaiyao:"测试数据",
                            img_url:"./src/images/swiper1.jpg"
                        },{
                            id:3,
                            title:"黄下有音3",
                            zhaiyao:"测试数据3",
                            img_url:"./src/images/swiper3.jpg"
                        },
                    ]
                    
                    break;
                    default:
                    resData = [
                        {
                            id:1,
                            title:"黄下有音",
                            zhaiyao:"测试数据",
                            img_url:"./src/images/swiper1.jpg"
                        },{
                            id:2,
                            title:"黄下有音2",
                            zhaiyao:"测试数据2",
                            img_url:"./src/images/swiper2.jpg"
                        },{
                            id:3,
                            title:"黄下有音3",
                            zhaiyao:"测试数据3",
                            img_url:"./src/images/swiper3.jpg"
                        },{
                            id:4,
                            title:"黄下有音4",
                            zhaiyao:"测试数据4",
                            img_url:"./src/images/swiper4.jpg"
                        },
                    ]
                    
                    break;
                }
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        getimgcategory:function () {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        id:1,
                        title:"家居生活",
                    },{
                        id:2,
                        title:"摄影设计",
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        getthumimages:function (id) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        src:"",
                    },{
                        src:"",
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        getimageInfo:function (id) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        id:12,
                        title:"黄下有音",
                        add_time:"2018-08-08T08:08:08",
                        content:"测试数据",
                        click:12,
                    },{
                        id:13,
                        title:"黄下有音",
                        add_time:"2018-08-08T08:08:08",
                        content:"测试数据",
                        click:12,
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        getcomments:function (id,pageIndex) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        user_name:"匿名用户",
                        add_time:"2018-08-08T08:08:08",
                        content:"测试数据",
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        postcomment:function (params) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = {
                    
                }
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        //五、商品展示
        getgoods:function (pageindex) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        id:pageindex * 2 -1,
                        title:"黄下有音",
                        add_time:"2018-08-08T08:08:08",
                        zhaiyao:"测试数据",
                        click:12,
                        img_url:"./src/images/bueaty0"+ (pageindex* 2 -1) % 4 + ".jpg",
                        sell_price:2195,
                        market_price:24999,
                        stock_quantity:60
                    },{
                        id:pageindex * 2,
                        title:"黄下有音",
                        add_time:"2018-08-08T08:08:08",
                        zhaiyao:"测试数据",
                        click:12,
                        img_url:"./src/images/bueaty0"+ (pageindex * 2 - 0) % 4 + ".jpg",
                        sell_price:2195,
                        market_price:24999,
                        stock_quantity:60
                    },
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        goods_getdesc:function (pageindex) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        id:12,
                        title:"黄下有音",
                        content:"测试数据",
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        goods_getshopcarlist:function (ids) {
            var deferred = $.Deferred();
            setTimeout(() => {
                var indexs = ids.split(",");
                let resData = [
                    {
                        id:1,
                        cou:1,
                        title:"女装1",
                        sell_price:2195,
                        thumb_path:"./src/images/bueaty01.jpg",
                        selected:true
                    },{
                        id:2,
                        cou:2,
                        title:"女装2",
                        sell_price:2195,
                        thumb_path:"./src/images/bueaty02.jpg",
                        selected: true
                    },{
                        id:3,
                        cou:3,
                        title:"女装3",
                        sell_price:2195,
                        thumb_path:"./src/images/bueaty03.jpg",
                        selected: true
                    },{
                        id:4,
                        cou:4,
                        title:"女装4",
                        sell_price:2195,
                        thumb_path:"./src/images/bueaty00.jpg",
                        selected: 1
                    },
                ]
                
                deferred.resolve(resData.filter((item,index) => {
                    return indexs.indexOf(index+1 + "") != -1
                }));
            }, 0);
            return deferred.promise();
        },
        goods_getinfo:function (ids) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        id:12,
                        title:"黄下有音",
                        add_time:"2018-08-08T08:08:08",
                        goos_no:"SD154787248",
                        sell_price:2195,
                        market_price:24999,
                        stock_quantity:60
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
        //六、品牌管理
        goods_getinfo:function (ids) {
            var deferred = $.Deferred();
            setTimeout(() => {
                let resData = [
                    {
                        id:12,
                        title:"黄下有音",
                        add_time:"2018-08-08T08:08:08",
                        goos_no:"SD154787248",
                        sell_price:2195,
                        market_price:24999,
                        stock_quantity:60
                    }
                ]
                deferred.resolve(resData);
            }, 0);
            return deferred.promise();
        },
    }
})();