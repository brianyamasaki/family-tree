import { People, allPeople } from "@src/People";
import { ancestorTree } from "@src/treeUtils";
import type { AncestorNode } from "@src/treeUtils";
import './PathToOldestAncestors.scss';

type Props = {
  id: number;
}

const PathToOldest = ({id}:Props) => {
  const tree = ancestorTree(allPeople, id);
  const renderNode = (an: AncestorNode, isFather: boolean) => {
    return (
      <div className={isFather ? 'father' : 'mother'}>
        <p><a href={`/person/${an.person.id - 2}`}>{an.person.firstName} {an.person.lastName}</a></p>
        <div className='side-by-side'>
          {an.fatherNode ? renderNode(an.fatherNode, true) : null}  
          {an.motherNode ? renderNode(an.motherNode, false) : null}
        </div>
      </div>
    );
  }
  if (!tree.fatherNode && !tree.motherNode) {
    return <h3>No Ancestry Found</h3>
  }
  return (
    <>
      <h3>Ancestor Paths</h3>
      <div className="side-by-side">
      { tree.fatherNode ? renderNode(tree.fatherNode, true) : null}
      { tree.motherNode ? renderNode(tree.motherNode, false) : null}      
      </div>
    </>
  )
}

export default PathToOldest;