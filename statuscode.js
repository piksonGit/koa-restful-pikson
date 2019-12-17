
module.exports = status => {
    const statusCode = {
      success: {
        code: 0,
        desc: "success"
      },
      serverError: {
        code: -1,
        desc: "Internal Server Error"
      },
      notFound: {
        code: 1005,
        desc: "not found"
      },
      noPermission: {
        code: 1004,
        desc: "you don't have the permission"
      },
      alreadyExists: {
        code: 1006,
        desc:'already exists', 
      },
      lackOfParameters: {
        code: 1003,
        desc:'lack of parameters or invaild parameters',
      },
      invalidUser: {
        code:1008,
        desc:'account or password error,maybe this user doesn\' exists',
      },
      notSameUser: {
        code: 1009,
        desc: 'you are not the right man',
      },
      qiniuError: {
        code:1010,
        desc:'qiniu error',
      },
    };
    //Object.assign 会复制一个相同的新对象。
    return Object.assign({},statusCode[status]);
}