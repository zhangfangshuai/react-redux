### action
生成action对象

#### 同步action
action的值为Object类型的一般对象

#### 异步action
即action的值为函数。因为函数可以开启异步任务

1. 异步action需要使用中间件redux-thunk。需要给store传入第二个参数，用于加载中间件
2. 异步action中一般回调用同步action
3. 异步action不是必须要用的
4. 