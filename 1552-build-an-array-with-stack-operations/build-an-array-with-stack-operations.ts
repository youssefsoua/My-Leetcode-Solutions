function buildArray(target: number[], n: number): string[] {
   let index: number = 0; // Initialize an index to keep track of the target array elements.
   let current: number = 1; // Initialize a current number to simulate the stream of integers.
   const operations: string[] = []; // Initialize an array to store the operations performed.

   while (index < target.length) {
      if (target[index] === current) { // If the current matches the target
         operations.push("Push"); // Add "Push" operation to the operations array.
         index++; // Move to the next target element.
      } else {
         operations.push("Push"); // Add "Push" operation to the operations array.
         operations.push("Pop"); // Add "Pop" operation to the operations array.
      }
      current++; // Move to the next number in the stream.
   }

   return operations; // Return the array of operations.
}
