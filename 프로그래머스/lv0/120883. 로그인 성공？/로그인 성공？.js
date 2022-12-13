function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    if(!db.find(([db_id]) => db_id === id)) return 'fail';
    return db.find(([db_id, db_pw]) => db_id === id && db_pw === pw) ? 'login' : 'wrong pw';
}