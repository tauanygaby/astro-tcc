async function getConexao() {  

    //verifico se a conexao ja foi estabelecida, caso ja tenha sido apenas retorno ela
    if (global.conexao && global.conexao.state!== 'disconnected') {
        return global.conexao;
    }

    const mysql2= require('../../node_modules/mysql2/promise');
    const bdConfig= require('./bdconfig.js'); 

    try {
        const conexao = await mysql2.createConnection(bdConfig); 
        global.conexao = conexao;
        return conexao;
        
    } catch (error) {
        return null; // retorna null caso nao seja possivel criar a conexao
    }
    

}

async function estruturese() {

    const conexao= await getConexao(); 

    if (conexao===undefined) {
        return null; // retorna null caso a conexao seja nula
    }
    const sql = 'CREATE TABLE IF NOT EXISTS alunos (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(45) NOT NULL, ra INT NOT NULL, email VARCHAR(60), idade INT NOT NULL, cep CHAR(8) NOT NULL,senha VARCHAR(64) NOT NULL)';
   
    try {
        await conexao.query(sql);
            return true; // retorna true se a quey foi executada
    
    } catch (error) {
        return false; // retorna false se a conexao nao foi executada
    }
   
    
}

module.exports={getConexao,estruturese} 