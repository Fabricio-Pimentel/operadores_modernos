const aluno = {
    nota: 0,
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);

//1° Saída ||: Mostra um valor alternativo (10) caso o valor original seja 0
//2° Saída ??: Mostra um valor alternatvo caso o valor original seja null, mas como o valor original é 0, então foi mostrado 0
