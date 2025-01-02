import React from 'react';
import './dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            {/* Header Section */}
            <header className="dashboard-header">
                <h1>Celebrity Dashboard</h1>
            </header>

            {/* Table Section */}
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Followers</th>
                        <th>Following</th>
                        <th>Instagram</th>
                        <th>SnapChat</th>
                        <th>FaceBook</th>
                        <th>X</th>
                        <th>TikTok</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>AD Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://via.placeholder.com/50" alt="John Doe" /></td>
                        <td>John Doe</td>
                        <td>Male</td>
                        <td>5000</td>
                        <td>200</td>
                        <td>@johndoe</td>
                        <td>@johndoeSC</td>
                        <td>John Doe FB</td>
                        <td>@johnX</td>
                        <td>@johnTT</td>
                        <td>USA</td>
                        <td>john.doe@example.com</td>
                        <td>+1234567890</td>
                        <td>$500</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td><img src="https://via.placeholder.com/50" alt="Jane Smith" /></td>
                        <td>Jane Smith</td>
                        <td>Female</td>
                        <td>3000</td>
                        <td>150</td>
                        <td>@janesmith</td>
                        <td>@janesmithSC</td>
                        <td>Jane Smith FB</td>
                        <td>@janeX</td>
                        <td>@janeTT</td>
                        <td>Canada</td>
                        <td>jane.smith@example.com</td>
                        <td>+1987654321</td>
                        <td>$300</td>
                        <td><button>Edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
