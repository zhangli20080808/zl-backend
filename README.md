# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

## 数据库选型以及 mongoDB 基本操作

### 非关系型数据库 NOSQL 和 关系型数据库 SQL

1. 关系型数据库是指采用了关系模型来组织数据的数据库。

   - 简单来说，关系模式就是二维表格模型。
   - 按照结构化的方法存储数据，每个数据表都必须对各个字段定义好。（predefined schema）
   - 使用 SQL 语言来进行通讯。
   - 纵向扩展。主要代表：MySQL，SQL Server 等。

2. 非关系型数据库
   NoSQL 仅仅是一个概念，泛指非关系型的数据库，区别于关系数据库。

   - 灵活的数据模型。不需要事先建立字段，预定义数据结构的类型，可以很好的对数据模型进行拓展，因为数据表之间没什么联系
   - 横向扩展
   - 代表 文档存储 - MongoDB、key value 存储 - Redis、图存储- Neo4J

### MongoDB 安装
1. 下载 地址：https://www.mongodb.com/try/download/community

2. 安装的官方文档
    * macOS 安装使用 homebrew：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
    * macOS 安装，手动安装:https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x-tarball/
    * windows 安装：https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

3. mac安装的两种方式

* 手动下载配置, 也适用于 linux：
```js
# 进入 /usr/local 安装本地软件的常用位置
cd /usr/local
# 1 下载
sudo curl -O https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-5.0.3.tgz
# 2 解压对应的下载文件
sudo tar -zxvf mongodb-macos-x86_64-5.0.3.tgz
# 创建数据库存放文件夹以及设定权限，特别注意权限问题
# 默认是在 /data/db
# macos 10.15 不能使用这个文件夹，创建一个其他的文件夹,官方推荐 下面路径
mkdir -p /usr/local/var/mongodb
# 3 运行
# 进入文件夹
cd mongodb-macos-x86_64-5.0.3/bin
./mongod --db-path /usr/local/var/mongodb

# 添加到全局命令
# 4 重命名
sudo mv mongodb-macos-x86_64-5.0.3  /usr/local/mongodb
# 5 添加到 $PATH 环境变量 
export PATH=/usr/local/mongodb/bin:$PATH
# 6 运行
mongod --dbpath /usr/local/var/mongodb
# 7. 将局部的命令写入全局
# echo $PATH / 将新的路径添加到就的路径前面，如何将命令写到终端的配置中
# 1. cd ~ 2. vim .bash_profile 3. 如果使用zsh shell也可以写入 .zshrc文件中 # 4. source .bash_profile/.zshrc - 将配置文件中一些列的配置写入当前的shell当中

# 后台运行
# 1 创建日志存放文件夹以及设定权限
mkdir -p /usr/local/var/log/mongodb
# 2 mongod 的参数
--dbpath 可以设定数据存放的位置
--logpath 配置文件地址
--fork 后台运行

mongod --dbpath=/usr/local/var/mongodb --logpath=/usr/local/var/log/mongodb/log.log --fork
//child process started successfully, parent exiting
# 3 查看 mongo 是否启动
ps aux | grep mongod
# 4 结束进程
kill -9 进程对应的pid

# 如果启动参数过长，不好输入，也希望能够在后台直接执行任务，不挂在终端，输出很多信息。此时可以使用配置文件
# 文档地址：https://docs.mongodb.com/manual/reference/configuration-options/#std-label-configuration-options
# 命令行工具参数和配置文件的对应关系：https://docs.mongodb.com/manual/reference/configuration-file-settings-command-line-options-mapping/#std-label-conf-file-command-line-mapping

# 配置文件存放目录 /usr/local/etc 一般的配置文件都会放在这边，比如redis.config 

# 配置示例
systemLog:
  destination: file
  path: "/usr/local/var/log/mongodb/mongo.log"
  logAppend: true
storage:
  dbPath: "/usr/local/var/mongodb"
processManagement:
  fork: true
# 使用配置启动
mongod --config /usr/local/etc/mongo.conf

# mongo shell 简单命令
[菜鸟教程](https://www.runoob.com/mongodb/mongodb-create-database.html) 
```
