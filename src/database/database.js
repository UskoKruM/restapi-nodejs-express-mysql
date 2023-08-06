import mysql from "promise-mysql";

const connection = mysql.createConnection({
    host: "wearekingly.com",
    database: "dbgactbzrdzo0s",
    user: "uumm0hivgxvub",
    password: "KwazuluBulgaria2020"
});
export const getConnection = () => {
    return connection;
};
export default getConnection;
