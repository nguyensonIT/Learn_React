export const FormCheckBoxHobby = ({ handleHobbySelect, hobbiesCheck }) => {
    const handleCheckBox = (e) => {
        const { value, checked } = e.target;
        handleHobbySelect(value, checked);
    };
    const hobbies = [
        { id: "thethao", name: "Thể thao" },
        { id: "docsach", name: "Đọc sách" },
        { id: "nauan", name: "Nấu ăn" },
        { id: "dulich", name: "Du lịch" },
        { id: "nghenhac", name: "Nghe nhạc" },
        { id: "nghethuat", name: "Nghệ thuật" },
        { id: "xemphim", name: "Xem phim" },
        { id: "choigame", name: "Chơi game" },
        { id: "hocngoaingu", name: "Học ngoại ngữ" },
    ];

    return (
        <div className="form-group form-row form-hobby-main">
            {hobbies.map((hobby, index) => (
                <div key={index} className="form-group col-md-4">
                    <input
                        type="checkbox"
                        id={hobby.id}
                        value={hobby.name}
                        onChange={handleCheckBox}
                        defaultChecked={
                            hobbiesCheck && hobbiesCheck.includes(hobby.name)
                        }
                    />
                    <label className="hobby-label" htmlFor={hobby.id}>
                        {hobby.name}
                    </label>
                </div>
            ))}
        </div>
    );
};
