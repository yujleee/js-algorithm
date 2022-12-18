function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    for(let i=0; i<db.length; i++){
        let [db_id, db_pw] = db[i];
        
        if(db_id === id && db_pw === pw) return 'login';
        else if (db_id === id && db_pw !== pw) return 'wrong pw';
    }
    
    return 'fail';
}