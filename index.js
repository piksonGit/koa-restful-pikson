module.exports = {
  //先在koa入口文件调用这个把mongoose和错误代码绑定
  setErrorCodeAnddb: async (app,mongoose,statusCode) => {
    app.context.statusCode = statusCode;
    app.context.db = mongoose;
  },
  add: async (ctx, model, requireParams, uniqueParam) => {
    const now = new Date().getTime();
    if (uniqueParam) {
      const uniqueParamValue = ctx.request.body[uniqueParam];

      const uniqueObj = {};
      uniqueObj[uniqueParam] = uniqueParamValue;

      const exists = await model.countDocuments(uniqueObj);
      if (exists) {
        ctx.throw(406, JSON.stringify(ctx.statusCode('alreadyExists')));
      }
    }

    if (requiredParams && requiredParams instanceof Array) {
      const everyRes = requiredParams.every((item, index, array) => {
        return Boolean(ctx.request.body[item]);
      });
      if (!everyRes) {
        ctx.throw(406, JSON.stringify(ctx.statusCode('lackOfParameters')));
      }
    }
    const inObj = ctx.request.body;
    inObj.createdTime = now;
    const res = new model(inObj);
    const data = await res.save();
    return data;
  },
  one: async (ctx, model) => {
    const method = ctx.method;
    const { _id } = ctx.params;
    let res = {};
    if (!ctx.db.Types.ObjectId.isValid(_id)) {
      ctx.throw(406, JSON.stringify(ctx.statusCode('lackOfParameters')));
    }
    switch (method) {
      case 'GET':
        res = await model.findById(_id);
        break;
      case 'DELETE':
        const objectId = ctx.db.Types.ObjectId(_id);
        res = await model.deleteOne({ _id: objectId });
      default:
        ctx.throw(404, JSON.stringify(ctx.statusCode('notFound')));
        break;
    }
    return res;
  },
  update: async (ctx, model, forbid) => {
    const now = new Date().getTime();
    const obj = ctx.request.body;

    if (forbid && forbid instanceof Array) {
      for (item in forbid) {
        delete obj[forbid[item]];
      }
    }
    obj.updatedTime = now;
    if (!ctx.db.Types.ObjectId.isValid(obj._id)) {
      ctx.throw(406, JSON.stringify(ctx.statusCode('lackOfParameters')));
    }
    const _id = ctx.db.Types.ObjectId(obj._id);
    delete obj._id;
    const condition = { _id };
    const res = await model.updateOne(condition, obj);
    return res;
  },
  list: async (ctx, model, condition) => {
    const listCondition = {};
    if (condition && condition instanceof Array) {
      for (item in condition) {
        if (ctx.query[condition[item]]) {
          listCondition[condition[item]] = ctx.query[condition[item]];
        }
      }
      const res = await model.find(listCondition).lean();
      return res;
    }

  },
}