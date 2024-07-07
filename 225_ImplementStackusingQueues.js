var MyStack = function () {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q.push(x); // Adiciona o novo valor (x) na fila
    // Move todos os elementos existentes da fila para o final,
    // mantendo o elemento recém-adicionado (x) no topo
    for (let i = 0; i < this.q.length - 1; i++){
        this.q.push(this.q.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.q.shift(); // Remove e retorna o primeiro elemento da fila (topo da pilha simulada)
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */