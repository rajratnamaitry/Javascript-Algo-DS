/**
 Graphs - BFS Exercise
 
 Implement the following methods on the Graph class:
 
 breadthFirstSearch - this function should return an array of vertices visited using BFS.
 
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            });
        }
        return result;
    }
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);


            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
    hasPath(graph, src, dst) {
        if (src == dst) return true;
        for (let n of graph[src]) {
            if (this.hasPath(graph, n, dst)) {
                return true;
            }
        }
        return false;
    }
    connectCompCount(graph = this.adjacencyList) {
        const visited = new Set();
        let count = 0;
        for (let node in graph) {
            if (this.explore(graph, node, visited)) {
                count++;
            }
        }
        return count;
    }
    explore(graph, current, visited) {
        if (visited.has(current)) return false;
        visited.add(current);
        for (let neighbor of graph[current]) {
            this.explore(graph, neighbor, visited);
        }
        return true;
    }
    largestComp(graph = this.adjacencyList) {
        const visited = new Set();
        let longest = 0;
        for (let node in graph) {
            const size = this.exploseSize(graph, node, visited);
            if (size > longest) longest = size;
        }
        return longest;
    }
    exploseSize(graph, node, visited) {
        if (visited.has(node)) return 0;
        visited.add(node);
        let size = 1;
        for (let neighbor in graph[node]) {
            size += this.exploseSize(graph, neighbor, visited);
        }
        return size;
    }
    shortestPath(edges, nodeA, nodeB) {
        const graph = this.buildGraph(edges);
        const visited = new Set([nodeA]);
        const queue = [[nodeA, 0]];
        while (queue.length > 0) {
            const [node, distance] = queue.shift();
            if (node == nodeB) return distance;
            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, distance + 1]);
                }
            }
        }
        return -1;
    }
    buildGraph(edges) {
        const graph = {};
        for (const edge of edges) {
            const [a, b] = edge;
            if (!(a in graph)) graph[a] = [];
            if (!(b in graph)) graph[b] = [];
            graph[a].push(b);
            graph[b].push(a);
        }
        return graph;
    }
    islandCount(grid) {
        const visited = new Set();

        let count = 0;
        for (let r = 0; r < grid.length; r += 1) {
            for (let c = 0; c < grid[0].length; c += 1) {
                if (this.explore(grid, r, c, visited) === true) {
                    count += 1;
                }
            }
        }

        return count;
    };

    explore(grid, r, c, visited) {
        const rowInbounds = 0 <= r && r < grid.length;
        const colInbounds = 0 <= c && c < grid[0].length;
        if (!rowInbounds || !colInbounds) return false;

        if (grid[r][c] === 'W') return false;

        const pos = r + ',' + c;
        if (visited.has(pos)) return false;
        visited.add(pos);

        this.explore(grid, r - 1, c, visited);
        this.explore(grid, r + 1, c, visited);
        this.explore(grid, r, c - 1, visited);
        this.explore(grid, r, c + 1, visited);
        return true;
    };

    minimumIsland(grid) {
        const visited = new Set();

        let minSize = Infinity;
        for (let r = 0; r < grid.length; r += 1) {
            for (let c = 0; c < grid[0].length; c += 1) {
                const size = this.exploreSize(grid, r, c, visited);
                if (size > 0 && size < minSize) {
                    minSize = size;
                }
            }
        }

        return minSize;
    };

    exploreSize(grid, r, c, visited) {
        const rowInbounds = 0 <= r && r < grid.length;
        const colInbounds = 0 <= c && c < grid[0].length;
        if (!rowInbounds || !colInbounds) return 0;

        if (grid[r][c] === 'W') return 0;

        const pos = r + ',' + c;
        if (visited.has(pos)) return 0;
        visited.add(pos);

        let size = 1;
        size += this.exploreSize(grid, r - 1, c, visited);
        size += this.exploreSize(grid, r + 1, c, visited);
        size += this.exploreSize(grid, r, c - 1, visited);
        size += this.exploreSize(grid, r, c + 1, visited);
        return size;
    };
}
// let g = new Graph();

// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")


// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B", "D")
// g.addEdge("C", "E")
// g.addEdge("D", "E")
// g.addEdge("D", "F")
// g.addEdge("E", "F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]
// console.log(g.breadthFirst('A')); // (6) ['A', 'B', 'C', 'D', 'E', 'F']
// console.log(g.depthFirstIterative('A')); // (6) ['A', 'C', 'E', 'F', 'D', 'B']
// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// };

// console.log(g.hasPath(graph, 'f', 'k')); // true 
// console.log(g.connectCompCount(graph)); // 2
// console.log(g.largestComp(graph)); // 3 

// const islandGrid = [
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'W', 'W', 'L', 'W'],
//     ['W', 'W', 'L', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['L', 'L', 'W', 'W', 'W'],
// ];
// // r = number of rows
// // c = number of columns
// // Time: O(rc)
// // Space: O(rc)
// const minimumIslandGrid = [
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'L', 'W', 'W', 'W'],
//     ['W', 'W', 'W', 'L', 'W'],
//     ['W', 'W', 'L', 'L', 'W'],
//     ['L', 'W', 'W', 'L', 'L'],
//     ['L', 'L', 'W', 'W', 'W'],
// ];
module.exports.Graph = Graph