var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // Move todos os elementos de s1 para s2 (temporariamente)
    while (this.s1.length) {
        this.s2.push(this.s1.pop())
    }
    // Adiciona o novo valor (x) na pilha s1
    this.s1.push(x)
    // Move todos os elementos de volta para s1, mantendo a ordem original
    while (this.s2.length){
        this.s1.push(this.s2.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // Remove e retorna o elemento do topo da pilha s1 (primeiro da fila)
    return this.s1.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // Usa slice(-1)[0] para pegar o último elemento de s1 (primeiro da fila)
    return this.s1.slice(-1)[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.s1.length && !this.s2.length
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */