function buildArray(target: number[], n: number): string[] {
   let index: number = 0; // Initialize an index to keep track of the target array elements.
   let current: number = 1; // Initialize a current number to simulate the stream of integers.
   const stack: number[] = []; // Initialize an empty stack to simulate the stack operations.
   const operations: string[] = []; // Initialize an array to store the operations performed.

   while (index < target.length) {
      stack.push(current); // Push the current number to the stack.
      operations.push("Push"); // Add "Push" operation to the operations array.

      if (target[index] === stack[index]) {
         index++; // If the stack matches the target, move to the next target element.
      } else {
         stack.pop(); // If not, pop the top element from the stack.
         operations.push("Pop"); // Add "Pop" operation to the operations array.
      }
      current++; // Move to the next number in the stream.
   }

   return operations; // Return the array of operations.
}
