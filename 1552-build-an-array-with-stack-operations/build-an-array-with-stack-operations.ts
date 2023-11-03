function buildArray(target: number[], n: number): string[] {
   let index: number = 0;
   let current: number = 1;
   const stack: number[] = [];
   const operations: string[] = [];
   while (index < target.length) {
      stack.push(current);
      operations.push("Push");
      if (target[index] === stack[index]) {
         index++;
      } else {
         stack.pop();
         operations.push("Pop");
      }
      current++;
   }
   return operations;
}
