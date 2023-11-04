function getLastMoment(n: number, left: number[], right: number[]): number {
  let maxLeftDistance = 0;
  let maxRightDistance = 0;

  // Calculate the maximum distance to the left and right separately
  for (const position of left) {
    maxLeftDistance = Math.max(maxLeftDistance, position);
  }

  for (const position of right) {
    maxRightDistance = Math.max(maxRightDistance, n - position);
  }

  // The last moment is the maximum of these two distances
  return Math.max(maxLeftDistance, maxRightDistance);
}
