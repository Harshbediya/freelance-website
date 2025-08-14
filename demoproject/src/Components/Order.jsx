import axios from "axios";
import { useEffect, useState } from "react";
import './Order.css';

function Order() {
    const [data, setData] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [updatedName, setUpdatedName] = useState("");
    const [updatedPrice, setUpdatedPrice] = useState("");

    // Fetch data from the server
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:3000/user")
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    };

    // Delete an order
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/user/${id}`)
            .then(() => {
                alert("Order deleted successfully!");
                fetchData();
            })
            .catch(err => console.error(err));
    };

    // Start editing an order
    const handleEdit = (item) => {
        setEditingItem(item.id);
        setUpdatedName(item.name);
        setUpdatedPrice(item.price);
    };

    // Save the edited order
    const handleSave = (id) => {
        const updatedOrder = {
            name: updatedName,
            price: updatedPrice
        };

        axios.put(`http://localhost:3000/user/${id}`, updatedOrder)
            .then(() => {
                alert("Order updated successfully!");
                fetchData();
                setEditingItem(null);
            })
            .catch(err => console.error(err));
    };

    // Cancel the edit
    const handleCancel = () => {
        setEditingItem(null);
        setUpdatedName("");
        setUpdatedPrice("");
    };

    return (
        <div className="dashboard-container22">
            <h2>ORDER CARD</h2>
            <table className="data-table22">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                {editingItem === item.id ? (
                                    <input
                                        type="text"
                                        value={updatedName}
                                        onChange={(e) => setUpdatedName(e.target.value)}
                                    />
                                ) : (
                                    item.name
                                )}
                            </td>
                            <td>
                                {editingItem === item.id ? (
                                    <input
                                        type="text"
                                        value={updatedPrice}
                                        onChange={(e) => setUpdatedPrice(e.target.value)}
                                    />
                                ) : (
                                    item.price
                                )}
                            </td>
                            <td>
                                {editingItem === item.id ? (
                                    <>
                                        <button className="save-btn22" onClick={() => handleSave(item.id)}>Save</button>
                                        <button className="cancel-btn22" onClick={handleCancel}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button className="edit-btn22" onClick={() => handleEdit(item)}>Edit</button>
                                        <button className="delete-btn22" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Order;
