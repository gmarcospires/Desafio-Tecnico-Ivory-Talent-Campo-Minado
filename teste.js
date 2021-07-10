function verificaVizinhoDiferente() {
                
    //Verificado
    let verificador = false;
    for (let index = 0; index < possiveisBombas.length; index++) {
        //Acha a posição da possível bomba
        let i = parseInt((possiveisBombas[index].indices.split(""))[0]);
        let j = parseInt((possiveisBombas[index].indices.split(""))[1]);
        let qtdBomba = 0;
        let qtdVazio = 0;
        //Verificar vizinhos da possível bomba
        if (i == 0) {
            //Não verifica i-1
            if (j == 0) {
                //Não verifica j-1 
                if (tabuleiro[i][j + 1].numero == 1 || tabuleiro[i][j + 1].numero == "") {
                    if (tabuleiro[i][j + 1].bomba == true) {
                        qtdBomba++;
                    } else if (tabuleiro[i][j + 1].numero == "") {
                        qtdVazio++;
                    }
                    if (tabuleiro[i + 1][j].numero == 1 || tabuleiro[i + 1][j].numero == "") {
                        if (tabuleiro[i + 1][j].bomba == true) {
                            qtdBomba++;
                        } else if (tabuleiro[i + 1][j].numero == "") {
                            qtdVazio++;
                        }
                        if (tabuleiro[i + 1][j + 1].numero == 1 || tabuleiro[i + 1][j + 1].numero == "") {
                            if (tabuleiro[i + 1][j + 1].bomba == true) {
                                qtdBomba++;
                            } else if (tabuleiro[i + 1][j + 1].numero == "") {
                                qtdVazio++;
                            }
                            if (qtdBomba < 3) {
                                if (qtdVazio < 3) {
                                    verificador = true;
                                }
                            }
                        }
                    }
                }
            } else if (j == 8) {
                //Não verifica j+1
                if (tabuleiro[i][j - 1].numero == 1 || tabuleiro[i][j - 1].numero == "") {
                    if (tabuleiro[i][j - 1].bomba == true) {
                        qtdBomba++;
                    } else if (tabuleiro[i][j - 1].numero == "") {
                        qtdVazio++;
                    }
                    if (tabuleiro[i + 1][j - 1].numero == 1 || tabuleiro[i + 1][j - 1].numero == "") {
                        if (tabuleiro[i + 1][j - 1].bomba == true) {
                            qtdBomba++;
                        } else if (tabuleiro[i + 1][j - 1].numero == "") {
                            qtdVazio++;
                        }
                        if (tabuleiro[i + 1][j].numero == 1 || tabuleiro[i + 1][j].numero == "") {
                            if (tabuleiro[i + 1][j].bomba == true) {
                                qtdBomba++;
                            } else if (tabuleiro[i + 1][j].numero == "") {
                                qtdVazio++;
                            }
                            if (qtdBomba < 3) {
                                if (qtdVazio < 3) {
                                    if (qtdVazio + qtdBomba < 3) {
                                        verificador = true;
                                    }
                                }
                            }
                        }
                    }
                }

            } else {
                if (tabuleiro[i][j - 1].numero == 1 || tabuleiro[i][j - 1].numero == "") {
                    if (tabuleiro[i][j - 1].bomba == true) {
                        qtdBomba++;
                    } else if (tabuleiro[i][j - 1].numero == "") {
                        qtdVazio++;
                    }
                    if (tabuleiro[i][j + 1].numero == 1 || tabuleiro[i][j + 1].numero == "") {
                        if (tabuleiro[i][j + 1].bomba == true) {
                            qtdBomba++;
                        } else if (tabuleiro[i][j + 1].numero == "") {
                            qtdVazio++;
                        }
                        if (tabuleiro[i + 1][j - 1].numero == 1 || tabuleiro[i + 1][j - 1].numero == "") {
                            if (tabuleiro[i + 1][j - 1].bomba == true) {
                                qtdBomba++;
                            } else if (tabuleiro[i + 1][j - 1].numero == "") {
                                qtdVazio++;
                            }
                            if (tabuleiro[i + 1][j].numero == 1 || tabuleiro[i + 1][j].numero == "") {
                                if (tabuleiro[i + 1][j].bomba == true) {
                                    qtdBomba++;
                                } else if (tabuleiro[i + 1][j].numero == "") {
                                    qtdVazio++;
                                }
                                if (tabuleiro[i + 1][j + 1].numero == 1 || tabuleiro[i + 1][j + 1].numero == "") {
                                    if (tabuleiro[i + 1][j + 1].bomba == true) {
                                        qtdBomba++;
                                    } else if (tabuleiro[i + 1][j + 1].numero == "") {
                                        qtdVazio++;
                                    }
                                    if (qtdBomba < 5) {
                                        if (qtdVazio < 5) {
                                            if (qtdVazio + qtdBomba < 5) {
                                                verificador = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        } else if (i == 8) {
            //Não verifica i+1
            if (j == 0) {
                //Não verifica j-1
                if (tabuleiro[i - 1][j].numero == 1 || tabuleiro[i - 1][j].numero == "") {
                    if (tabuleiro[i - 1][j].bomba == true) {
                        qtdBomba++;
                    } else if (tabuleiro[i - 1][j].numero == "") {
                        qtdVazio++;
                    }
                    if (tabuleiro[i - 1][j + 1].numero == 1 || tabuleiro[i - 1][j + 1].numero == "") {
                        if (tabuleiro[i - 1][j + 1].bomba == true) {
                            qtdBomba++;
                        } else if (tabuleiro[i - 1][j + 1].numero == "") {
                            qtdVazio++;
                        }
                        if (tabuleiro[i][j + 1].numero == 1 || tabuleiro[i][j + 1].numero == "") {
                            if (tabuleiro[i][j + 1].bomba == true) {
                                qtdBomba++;
                            } else if (tabuleiro[i][j + 1].numero == "") {
                                qtdVazio++;
                            }
                            if (qtdBomba < 3) {
                                if (qtdVazio < 3) {
                                    if (qtdVazio + qtdBomba < 3) {
                                        verificador = true;
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (j == 8) {
                //Não verifica j+1
                if (tabuleiro[i - 1][j - 1].numero == 1 || tabuleiro[i - 1][j - 1].numero == "") {
                    if (tabuleiro[i - 1][j - 1].bomba == true) {
                        qtdBomba++;
                    } else if (tabuleiro[i - 1][j - 1].numero == "") {
                        qtdVazio++;
                    }
                    if (tabuleiro[i - 1][j].numero == 1 || tabuleirotabuleiro[i - 1][j].numero == "") {
                        if (tabuleiro[i - 1][j].bomba == true) {
                            qtdBomba++;
                        } else if (tabuleiro[i - 1][j].numero == "") {
                            qtdVazio++;
                        }
                        if (tabuleiro[i][j - 1].numero == 1 || tabuleiro[i][j - 1].numero == "") {
                            if (tabuleiro[i][j - 1].bomba == true) {
                                qtdBomba++;
                            } else if (tabuleiro[i][j - 1].numero == "") {
                                qtdVazio++;
                            }
                            if (qtdBomba < 3) {
                                if (qtdVazio < 3) {
                                    if (qtdVazio + qtdBomba < 3) {
                                        verificador = true;
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (tabuleiro[i - 1][j - 1].numero == 1 || tabuleiro[i - 1][j - 1].numero == "") {
                    if (tabuleiro[i - 1][j - 1].bomba == true) {
                        qtdBomba++;
                    } else if (tabuleiro[i - 1][j - 1].numero == "") {
                        qtdVazio++;
                    }
                    if (tabuleiro[i - 1][j].numero == 1 || tabuleiro[i - 1][j].numero == "") {
                        if (tabuleiro[i - 1][j].bomba == true) {
                            qtdBomba++;
                        } else if (tabuleiro[i - 1][j].numero == "") {
                            qtdVazio++;
                        }
                        if (tabuleiro[i - 1][j + 1].numero == 1 || tabuleiro[i - 1][j + 1].numero == "") {
                            if (tabuleiro[i - 1][j + 1].bomba == true) {
                                qtdBomba++;
                            } else if (tabuleiro[i - 1][j + 1].numero == "") {
                                qtdVazio++;
                            }
                            if (tabuleiro[i][j - 1].numero == 1 || tabuleiro[i][j - 1].numero == "") {
                                if (tabuleiro[i][j - 1].bomba == true) {
                                    qtdBomba++;
                                } else if (tabuleiro[i][j - 1].numero == "") {
                                    qtdVazio++;
                                }
                                if (tabuleiro[i][j + 1].numero == 1 || tabuleiro[i][j + 1].numero == "") {
                                    if (tabuleiro[i][j + 1].bomba == true) {
                                        qtdBomba++;
                                    } else if (tabuleiro[i][j + 1].numero == "") {
                                        qtdVazio++;
                                    }
                                    if (qtdBomba < 5) {
                                        if (qtdVazio < 5) {
                                            if (qtdVazio + qtdBomba < 5) {
                                                verificador = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {//
            if (j == 0) {
                //Não verifica j-1
                if (tabuleiro[i - 1][j].numero == 1 || tabuleiro[i - 1][j].numero == "") {
                    if (tabuleiro[i - 1][j].bomba == true) {
                        qtdBomba++;
                    } else if (tabuleiro[i - 1][j].numero == "") {
                        qtdVazio++;
                    }
                    if (tabuleiro[i - 1][j + 1].numero == 1 || tabuleiro[i - 1][j + 1].numero == "") {
                        if (tabuleiro[i - 1][j + 1].bomba == true) {
                            qtdBomba++;
                        } else if (tabuleiro[i - 1][j + 1].numero == "") {
                            qtdVazio++;
                        }
                        if (tabuleiro[i][j + 1].numero == 1 || tabuleiro[i][j + 1].numero == "") {
                            if (tabuleiro[i][j + 1].bomba == true) {
                                qtdBomba++;
                            } else if (tabuleiro[i][j + 1].numero == "") {
                                qtdVazio++;
                            }
                            if (tabuleiro[i + 1][j + 1].numero == 1 || tabuleiro[i + 1][j + 1].numero == "") {
                                if (tabuleiro[i + 1][j + 1].bomba == true) {
                                    qtdBomba++;
                                } else if (tabuleiro[i + 1][j + 1].numero == "") {
                                    qtdVazio++;
                                }
                                if (tabuleiro[i + 1][j].numero == 1 || tabuleiro[i + 1][j].numero == "") {
                                    if (tabuleiro[i + 1][j].bomba == true) {
                                        qtdBomba++;
                                    } else if (tabuleiro[i + 1][j].numero == "") {
                                        qtdVazio++;
                                    }
                                    if (qtdBomba < 5) {
                                        if (qtdVazio < 5) {
                                            if (qtdVazio + qtdBomba < 5) {
                                                verificador = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (j == 8) {
                //Não verifica j+1
                if (tabuleiro[i - 1][j - 1].numero == 1 || tabuleiro[i - 1][j - 1].numero == "") {
                    if (tabuleiro[i - 1][j - 1].bomba == true) {
                        qtdBomba++;
                    } else if (tabuleiro[i - 1][j - 1].numero == "") {
                        qtdVazio++;
                    }
                    if (tabuleiro[i - 1][j].numero == 1 || tabuleiro[i - 1][j].numero == "") {
                        if (tabuleiro[i - 1][j].bomba == true) {
                            qtdBomba++;
                        } else if (tabuleiro[i - 1][j].numero == "") {
                            qtdVazio++;
                        }
                        if (tabuleiro[i][j - 1].numero == 1 || tabuleiro[i][j - 1].numero == "") {
                            if (tabuleiro[i][j - 1].bomba == true) {
                                qtdBomba++;
                            } else if (tabuleiro[i][j - 1].numero == "") {
                                qtdVazio++;
                            }
                            if (tabuleiro[i + 1][j - 1].numero == 1 || tabuleiro[i + 1][j - 1].numero == "") {
                                if (tabuleiro[i + 1][j - 1].bomba == true) {
                                    qtdBomba++;
                                } else if (tabuleiro[i + 1][j - 1].numero == "") {
                                    qtdVazio++;
                                }
                                if (tabuleiro[i + 1][j].numero == 1 || tabuleiro[i + 1][j].numero == "") {
                                    if (tabuleiro[i + 1][j].bomba == true) {
                                        qtdBomba++;
                                    } else if (tabuleiro[i + 1][j].numero == "") {
                                        qtdVazio++;
                                    }
                                    if (qtdBomba < 5) {
                                        if (qtdVazio < 5) {
                                            if (qtdVazio + qtdBomba < 5) {
                                                verificador = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (tabuleiro[i - 1][j - 1].numero == 1 || tabuleiro[i - 1][j - 1].numero == "") {
                    if (tabuleiro[i - 1][j - 1].bomba == true) {
                        qtdBomba++;
                    } else if (tabuleiro[i - 1][j - 1].numero == "") {
                        qtdVazio++;
                    }
                    if (tabuleiro[i - 1][j].numero == 1 || tabuleiro[i - 1][j].numero == "") {
                        if (tabuleiro[i - 1][j].bomba == true) {
                            qtdBomba++;
                        } else if (tabuleiro[i - 1][j].numero == "") {
                            qtdVazio++;
                        }
                        if (tabuleiro[i][j - 1].numero == 1 || tabuleiro[i][j - 1].numero == "") {
                            if (tabuleiro[i][j - 1].bomba == true) {
                                qtdBomba++;
                            } else if (tabuleiro[i][j - 1].numero == "") {
                                qtdVazio++;
                            }
                            if (tabuleiro[i + 1][j - 1].numero == 1 || tabuleiro[i + 1][j - 1].numero == "") {
                                if (tabuleiro[i + 1][j - 1].bomba == true) {
                                    qtdBomba++;
                                } else if (tabuleiro[i + 1][j - 1].numero == "") {
                                    qtdVazio++;
                                }
                                if (tabuleiro[i + 1][j].numero == 1 || tabuleiro[i + 1][j].numero == "") {
                                    if (tabuleiro[i + 1][j].bomba == true) {
                                        qtdBomba++;
                                    } else if (tabuleiro[i + 1][j].numero == "") {
                                        qtdVazio++;
                                    }
                                    if (tabuleiro[i - 1][j + 1].numero == 1 || tabuleiro[i - 1][j + 1].numero == "") {
                                        if (tabuleiro[i - 1][j + 1].bomba == true) {
                                            qtdBomba++;
                                        } else if (tabuleiro[i - 1][j + 1].numero == "") {
                                            qtdVazio++;
                                        }
                                        if (tabuleiro[i][j + 1].numero == 1 || tabuleiro[i][j + 1].numero == "") {
                                            if (tabuleiro[i][j + 1].bomba == true) {
                                                qtdBomba++;
                                            } else if (tabuleiro[i][j + 1].numero == "") {
                                                qtdVazio++;
                                            }
                                            if (tabuleiro[i + 1][j + 1].numero == 1 || tabuleiro[i + 1][j + 1].numero == "") {
                                                if (tabuleiro[i + 1][j + 1].bomba == true) {
                                                    qtdBomba++;
                                                } else if (tabuleiro[i + 1][j + 1].numero == "") {
                                                    qtdVazio++;
                                                }
                                                if (qtdBomba < 8) {
                                                    if (qtdVazio < 8) {
                                                        if (qtdVazio + qtdBomba < 8) {
                                                            verificador = true;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
            if (verificador == true) {
                bombaAuxiliar.push(possiveisBombas[index])
            }
        }
        return (bombaAuxiliar.length > 0) ? (true) : (false);
    }