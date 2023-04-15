import { Button, Popconfirm } from "antd";
import { deleteStrategy } from "utils/firebase/firestore";

export default function DeleteStrategyButton({ strategyId, f = () => {} }) {
    const confirm = () => {
        deleteStrategy(strategyId);
        f();
    };

    return (
        <Popconfirm
            title="Are you sure to delete this strategy?"
            onConfirm={confirm}
            onCancel={() => {}}
            okText="Yes"
            cancelText="No"
            placement="bottom"
        >
            <Button danger shape="round"
                onClick={() => { }}
            >Delete</Button>
        </Popconfirm>
  )
}