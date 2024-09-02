var removeDuplicates = function(nums) {
    const set = new Set(nums)
    nums.length = 0
    nums.push(...set)
    return nums.length
};
/*
No código fornecido, nums.length = 0 é usado para 
limpar a matriz existente nums, e então os elementos 
do Set são novamente adicionados à mesma matriz. 
Isso funciona porque nums ainda se refere ao mesmo 
objeto de matriz na memória, e você está modificando
o conteúdo dessa matriz.

No entanto, se você substituir nums.length = 0 por 
nums = [], na verdade você está reatribuindo a 
variável nums para uma nova matriz vazia, quebra 
a referência para a matriz original. Isso significa 
que as alterações feitas em nums dentro da função não 
serão refletidas fora da função.
*/