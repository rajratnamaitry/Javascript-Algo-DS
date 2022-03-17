/**
 * Graphs Exercise - addEdge
 * 
 * Implement the following methods on the Graph class -
 * ddVertex has been implemented for you
 * 
 * addEdge - this function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list.
 * 
 * 
 */
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

graph.adjacencyList['A']; // contains both ('B', 'C')
graph.adjacencyList['B']; // contains both ('A', 'D')
graph.adjacencyList['C']; // contains both ('A', 'D')
graph.adjacencyList['D']; // contains both ('C', 'B')