function minimumBribes(q) {
    let bribes = 0;

    for (let i = 0; i < q.length; i++) {
        const originalPosition = q[i] - 1; // Adjust for 0-based index
        const currentPosition = i;

        // Check if a person has bribed more than two others
        if (originalPosition - currentPosition > 2) {
            console.log("Too chaotic");
            return;
        }

        // Count the number of bribes for this person
        for (let j = Math.max(0, originalPosition - 1); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }

    console.log(bribes);
}


const example1 = [1, 2, 3, 4, 5]; // 0
const example2 = [2, 1, 3, 4, 5]; // 1
const example3 = [1, 2, 3, 5, 4]; // 1
const example4 = [2, 1, 5, 3, 4]; // 3
const example5 = [1, 5, 2, 3, 4]; // Too chaotic
const example6 = [5, 1, 2, 3, 7, 8, 6, 4]; // Too chaotic
const example7 = [1, 2, 5, 3, 7, 8, 6, 4]; // 7

// minimumBribes(example1);
minimumBribes(example2);
// minimumBribes(example3);
// minimumBribes(example4);
// minimumBribes(example5);
// minimumBribes(example6);
// minimumBribes(example7);