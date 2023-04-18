import PublicPage from "layouts/PublicPage";
import Tree from "react-d3-tree";

const data = [
  [-4, "hbsbsb"],
  [1, "hbsbsh"],
  [3, "hbsbhs"],
  [-3, "hbsbhh"],
  [1, "hbshbs"],
  [-5, "hbshbh"],
  [-6, "hbshhb"],
  [0, "hbshhh"],
  [3, "hbhsbs"],
  [-3, "hbhsbh"],
  [-4, "hbhshb"],
  [2, "hbhshh"],
  [-3, "hbhhsb"],
  [3, "hbhhsh"],
  [4, "hbhhhs"],
  [-2, "hbhhhh"],
  [4, "hsbsbs"],
  [-2, "hsbsbh"],
  [-3, "hsbshb"],
  [3, "hsbshh"],
  [-2, "hsbhsb"],
  [4, "hsbhsh"],
  [5, "hsbhhs"],
  [-1, "hsbhhh"],
  [-3, "hshbsb"],
  [3, "hshbsh"],
  [4, "hshbhs"],
  [-2, "hshbhh"],
  [3, "hshhbs"],
  [-3, "hshhbh"],
  [-4, "hshhhb"],
  [2, "hshhhh"],
  [2, "hhbsbs"],
  [-4, "hhbsbh"],
  [-5, "hhbshb"],
  [1, "hhbshh"],
  [-4, "hhbhsb"],
  [2, "hhbhsh"],
  [3, "hhbhhs"],
  [-3, "hhbhhh"],
  [-2, "hhsbsb"],
  [4, "hhsbsh"],
  [5, "hhsbhs"],
  [-1, "hhsbhh"],
  [4, "hhshbs"],
  [-2, "hhshbh"],
  [-3, "hhshhb"],
  [3, "hhshhh"],
  [-5, "hhhbsb"],
  [1, "hhhbsh"],
  [2, "hhhbhs"],
  [-4, "hhhbhh"],
  [5, "hhhsbs"],
  [-1, "hhhsbh"],
  [-2, "hhhshb"],
  [4, "hhhshh"],
  [1, "hhhhbs"],
  [-5, "hhhhbh"],
  [-1, "hhhhsb"],
  [5, "hhhhsh"],
  [-6, "hhhhhb"],
  [6, "hhhhhs"],
  [0, "hhhhhh"],
];

function convertArrayToTree(array) {
  const tree = [];
  array.forEach((combination) => {
    const [rtn, str] = combination;
    [...str].reduce((accum, current, index, arr) => {
      if (index == arr.length - 1) {
        accum.push({ name: current, attributes: { return: rtn } });
        return;
      }
      const elementIndex = accum.findIndex(
        (element) => element.name == current
      );
      if (elementIndex == -1) {
        const newIndex = accum.push({ name: current, children: [] });
        return accum[newIndex - 1].children;
      }
      return accum[elementIndex].children;
    }, tree);
  });

  return tree;
}

export default function Graph() {
    const straightPathFunc = (linkDatum, orientation) => {
        const { source, target } = linkDatum;
        return orientation === 'horizontal'
          ? `M${source.y},${source.x}L${target.y},${target.x}`
          : `M${source.x},${source.y}L${target.x},${target.y}`;
      };
    
    return (
        <PublicPage>
        <div id="treeWrapper" style={{ width: '100vh', height: '100vh' }}>
            <Tree data={convertArrayToTree(data)} orientation="vertical"/>
        </div>
        </PublicPage>
    )
}