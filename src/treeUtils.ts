import { People } from"@src/People.ts";
import type { Person } from "./Person";

export type AncestorNode = {
  person: Person;
  fatherNode?: AncestorNode;
  motherNode?: AncestorNode;
}

export const ancestorTree = (
    people: People, 
    personId: number) :AncestorNode => {
  const person = people.getPerson(personId);
  const anc: AncestorNode = {
    person
  };

  if (anc.person.fatherId > 1) {
    anc.fatherNode = ancestorTree(people, person.fatherId);
  }
  if (anc.person.motherId > 1) {
    anc.motherNode = ancestorTree(people, person.motherId);
  }
  return anc;
}

// compare each node in tree1 to all the nodes in tree2, looking for a match
export const compareTrees = (
  tree1: AncestorNode,
  tree2: AncestorNode
  ):AncestorNode | null => {
  let node = findNodeInTree(tree1, tree2);
  if (node) return node;
  if (tree1.fatherNode) {
    node = compareTrees(tree1.fatherNode, tree2);
    if (node) return node;
  }
  if (tree1.motherNode) {
    node = compareTrees(tree1.motherNode, tree2);
    if (node) return node;
  }
  return null;
}

const findNodeInTree = (node: AncestorNode, tree: AncestorNode): AncestorNode | null => {
  const nodeId = node.person.id;
  if (tree.person.id === nodeId) {
    return tree;
  }
  if (tree.fatherNode) {
    const foundNode = findNodeInTree(node, tree.fatherNode);
    if (foundNode) {
      return foundNode;
    }
  }
  if (tree.motherNode) {
    const foundNode = findNodeInTree(node, tree.motherNode);
    if (foundNode) {
      return foundNode;
    }
  }
  return null;
}