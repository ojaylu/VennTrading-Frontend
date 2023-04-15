import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db, auth } from "firebase-config";
import { message } from "antd";

export async function deleteStrategy(strategyId) {
    const userRef = doc(db, "users", auth.currentUser.uid);
    try {
        await updateDoc(userRef, {
            [strategyId]: deleteField()
        });
    } catch(e) {
        message.error(JSON.stringify(e));
    }
}

export async function setStrategy(strategyId, payload) {
    const userRef = doc(db, "users", auth.currentUser.uid);
    try {
        await updateDoc(userRef, {
            [strategyId]: payload
        });
    } catch(e) {
        message.error(JSON.stringify(e));
    }
}