// Calculator.vue
<template>
  <div class="calculator">
    <h1>Calculadora Vue</h1>
    <div class="display">{{ currentValue || '0' }}</div>

    <div class="buttons">
      <div class="row">
        <button @click="clear">C</button>
        <button @click="changeSign">+/-</button>
        <button @click="percentage">%</button>
        <button @click="setOperation('/')" class="operator">/</button>
      </div>
      <div class="row">
        <button @click="append('7')">7</button>
        <button @click="append('8')">8</button>
        <button @click="append('9')">9</button>
        <button @click="setOperation('*')" class="operator">×</button>
      </div>
      <div class="row">
        <button @click="append('4')">4</button>
        <button @click="append('5')">5</button>
        <button @click="append('6')">6</button>
        <button @click="setOperation('-')" class="operator">-</button>
      </div>
      <div class="row">
        <button @click="append('1')">1</button>
        <button @click="append('2')">2</button>
        <button @click="append('3')">3</button>
        <button @click="setOperation('+')" class="operator">+</button>
      </div>
      <div class="row">
        <button @click="append('0')" class="zero">0</button>
        <button @click="dot">.</button>
        <button @click="calculate" class="operator">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      currentValue: '',
      previousValue: null,
      operation: null,
      operationClicked: false
    }
  },
  methods: {
    append(number) {
      if (this.operationClicked) {
        this.currentValue = '';
        this.operationClicked = false;
      }
      this.currentValue = `${this.currentValue}${number}`;
    },
    dot() {
      if (this.operationClicked) {
        this.currentValue = '';
        this.operationClicked = false;
      }
      if (this.currentValue.indexOf('.') === -1) {
        this.append('.');
      }
    },
    clear() {
      this.currentValue = '';
      this.previousValue = null;
      this.operation = null;
    },
    setOperation(operation) {
      this.previousValue = parseFloat(this.currentValue);
      this.operation = operation;
      this.operationClicked = true;
    },
    changeSign() {
      this.currentValue = `${parseFloat(this.currentValue || '0') * -1}`;
    },
    percentage() {
      this.currentValue = `${parseFloat(this.currentValue || '0') / 100}`;
    },
    calculate() {
      const current = parseFloat(this.currentValue);
      const previous = parseFloat(this.previousValue);

      if (this.operation === '+') {
        this.currentValue = previous + current;
      } else if (this.operation === '-') {
        this.currentValue = previous - current;
      } else if (this.operation === '*') {
        this.currentValue = previous * current;
      } else if (this.operation === '/') {
        this.currentValue = previous / current;
      }

      this.previousValue = null;
      this.operation = null;
      this.currentValue = `${this.currentValue}`;
    }
  }
}
</script>

<style scoped>
.calculator {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f7f7f7;
}

.display {
  background-color: #333;
  color: white;
  text-align: right;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-size: 24px;
  min-height: 40px;
}

.buttons {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
}

.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  border: none;
  background-color: #e0e0e0;
  padding: 15px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #d0d0d0;
}

button.operator {
  background-color: #ff9800;
  color: white;
}

button.operator:hover {
  background-color: #f57c00;
}

button.zero {
  grid-column: span 2;
}
</style>