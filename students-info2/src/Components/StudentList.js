const studentArray=[
    {
        id: 1, 
        name: "Nguyễn Văn Tèo",
        age: 20,
        address: "Bình Dương"
    },
    {
        id: 2, 
        name: "Nguyễn Văn Tí",
        age: 22,
        address: "Bình Dương"
    },
    {
        id: 3, 
        name: "Nguyễn Văn Tèo",
        age: 21,
        address: "Bình Dương"
    },
    {
        id: 4, 
        name: "Nguyễn Văn Tèo",
        age: 23,
        address: "Bình Định"
    }
]
export const StudentList =()=>{
    return (
        <div className="container">
            <h1>Students List</h1>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Adress</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentArray.map((student,index)=>(
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))
                    }
                </tbody>
                
            </table>
        </div>
    )

}