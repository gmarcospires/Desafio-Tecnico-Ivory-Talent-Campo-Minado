function verificaVizinhoDiferente() {     
    //AQUI VERIFICAR CORRETAMENTE SE O DIFERENTE É 1
    
    for (let index = 0; index < possiveisBombas.length; index++) {
        let verificador = false;
        //Acha a posição da possível bomba
        let i = parseInt((possiveisBombas[index].indices.split(""))[0]);
        let j = parseInt((possiveisBombas[index].indices.split(""))[1]);
        let qtdUm = 0;
        //Verificar vizinhos da possível bomba
        //Não haverá todos vizinhos um
        //Para ser bomba, apenas um vizinho deve ser um
        if (i === 0) {
            //Não verifica i-1
            if (j === 0) {
                //Não verifica j-1 
                if (tabuleiro[i][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (qtdUm === 1) {
                        verificador = true;
                }
            } else if (j === 8) {
                //Não verifica j+1
                if (tabuleiro[i][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j].numero === 1) {
                    qtdUm++;
                }
                if (qtdUm === 1) {
                    verificador = true;
                }
            } else {
                if (tabuleiro[i][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (qtdUm === 1) {    
                    verificador = true;
                }

            }
        } else if (i === 8) {
            //Não verifica i+1
            if (j === 0) {
                //Não verifica j-1
                if (tabuleiro[i - 1][j].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i - 1][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (qtdUm === 1) {
                    verificador = true;    
                }
            
            } else if (j === 8) {
                //Não verifica j+1
                if (tabuleiro[i - 1][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i - 1][j].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (qtdUm === 1) {
                    verificador = true;
                }
                
            } else {
                if (tabuleiro[i - 1][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i - 1][j].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i - 1][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (qtdUm === 1) {
                    verificador = true;
                }
            }
        } else {//
            if (j === 0) {
                //Não verifica j-1
                if (tabuleiro[i - 1][j].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i - 1][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j].numero === 1) {
                    qtdUm++;
                }
                if (qtdUm === 1) {
                    verificador = true;     
                }
                
            } else if (j === 8) {
                //Não verifica j+1
                if (tabuleiro[i - 1][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i - 1][j].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j].numero === 1) {
                    qtdUm++;
                }
                if (qtdUm === 1) {
                    verificador = true;
                }
                
            } else {
                if (tabuleiro[i - 1][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i - 1][j].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j - 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i - 1][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (tabuleiro[i + 1][j + 1].numero === 1) {
                    qtdUm++;
                }
                if (qtdUm === 1) {
                            verificador = true;
                }
            }
        }
            if (verificador === true) {
                bombaAuxiliar.push(possiveisBombas[index])
            }
        }
        return (bombaAuxiliar.length > 0) ? (true) : (false);
}
