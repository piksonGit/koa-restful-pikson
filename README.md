# koa-restful-pikson



restful风格的操作接口

使用方法：  

* 在koa入口文件中调用```setErrorCodeAnddb(app){mongoose,statusCode}``` 会把mongoose和statusCode绑定到app实例中。
* 在service层可以调用 **add**, **update**, **one**, **list** 四个方法。
#### ```add(ctx, model, requireParams=[], uniqueParam=String)：```
* ctx是koa的上下文，```model```是```mongoose```的```model```实例，requireParam是在插入的时候必须使用的参数，uniqueParam是在插入的时候要求唯一的字段。此方法接收```post```类型的请求。

返回值为完整的插入的信息：
```
{
    "code": 0,
    "desc": "success",
    "data": {
        "provider": "amazon",
        "domain": "",
        "bucket": "extfans",
        "prefix": "/extfans",
        "key": "",
        "ps": "",
        "expireTime": 3600,
        "createdTime": 1575512982891,
        "updatedTime": "",
        "fsize": 36500,
        "_id": "5de86b965fa3e3094ff25d48",
        "__v": 0
    }
} 
```

#### ```update(ctx, model ,forbid=[])```

* 此函数接收PUT方法，接收一个forbid数组，为你不允许别人更新的字段

* 返回值为如下：

```
 {
    "code": 0,
    "desc": "success",
    "data": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
```
#### ```one(ctx, model)```

* 此函数接收get或者delete方法 ```/domain/_id```
* 当为get方法返回您的一条记录值
```
{
    "code": 0,
    "desc": "success",
    "data": {
        "provider": "amazon",
        "domain": "",
        "bucket": "extfans",
        "prefix": "/extfans",
        "key": "",
        "ps": "",
        "expireTime": 3600,
        "createdTime": 1575449878917,
        "updatedTime": "1575513212674",
        "fsize": 36500,
        "_id": "5de775163ed41f0869019626",
        "__v": 0
    }
}

```
* 当为delete方法的时候会删除您的一条记录

返回值为：

```
{
    "code": 0,
    "desc": "success",
    "data": {
        "n": 0,
        "ok": 1,
        "deletedCount": 0
    }
}

```

#### ```list(ctx, model, condition)```
* condition 为查询条件
* 返回值为您的查询列表：
```
{
    "code": 0,
    "desc": "success",
    "data": [
        {
            "_id": "5de622cc231361080255a391",
            "provider": "amazon",
            "domain": "https://www.extfans.com",
            "bucket": "extfans-bucket",
            "prefix": "/extfans",
            "action": "w",
            "ps": "",
            "expireTime": 36500,
            "createdTime": 1575363276548,
            "updatedTime": "1575363349478",
            "__v": 0
        },
        {
            "_id": "5de77581a1c0570875ca8363",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 1575449540406,
            "createdTime": 1575449985013,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de776b0829e2c0881a4cc82",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 1575449540406,
            "createdTime": 1575450288169,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de777119ae7ff0895340c7b",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 1575449540406,
            "createdTime": 1575450385651,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de7773afeda9908a1cb6ac7",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 1575449540406,
            "createdTime": 1575450426918,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de777877d3c0308adb79b20",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 1575449540406,
            "createdTime": 1575450503951,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de777cb30b34308b9ff8ca0",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 1575449540406,
            "createdTime": 1575450571560,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de7784aa69ed508c5a5ec20",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 1575449540406,
            "createdTime": 1575450698146,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de7787748347f08d1a63b89",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 1575449540406,
            "createdTime": 1575450743852,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de779c344f95908dc9c1965",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 1575449540406,
            "createdTime": 1575451075688,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de77a222c44ff08e8bb0514",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 51200,
            "createdTime": 1575451170772,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        },
        {
            "_id": "5de86b965fa3e3094ff25d48",
            "provider": "amazon",
            "domain": "",
            "bucket": "extfans",
            "prefix": "/extfans",
            "key": "",
            "ps": "",
            "expireTime": 3600,
            "createdTime": 1575512982891,
            "updatedTime": "",
            "fsize": 36500,
            "__v": 0
        }
    ]
}

```

version v1.0.1 修改了代码错误，增加了readme.md