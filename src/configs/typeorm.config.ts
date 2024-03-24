import { DataSource } from "typeorm";

export const dataSouce = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'askdev',
  username: 'root',
  password: 'Khang123@',
  entities: [__dirname + "./../**/*.entity.{js,ts}"],
  synchronize: true,
})

export const connectDB = async () => {
  try {
    await dataSouce.initialize()
    console.log('Connect database success!!');
  } catch (error) {
    console.log('Something wrong when connect database!!', error);
  }
}