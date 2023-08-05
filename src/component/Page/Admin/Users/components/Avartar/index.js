import "./Avatar.css";

export const Avatar = ({ name, urlImg }) => {
    const countCharInWordArr = (nameUser) => {
        let colorImg = ["#9C27B0", "#3498DB", "#E74C3C", "#2ECC71", "#F39C12"];
        let colorRandom = "";
        let multipleName = 1;
        const worlds = nameUser.split(" ");
        const charCount = worlds.map((world) => world.length);
        for (let i = 0; i < charCount.length; i++) {
            multipleName *= charCount[i];
        }
        colorRandom = colorImg[(multipleName * 111) % 5];
        return colorRandom;
    };

    return (
        <>
            {urlImg.avatar ? (
                <img
                    src={urlImg.avatar}
                    alt={name.name[0]}
                    className="img-thumbnail rounded-circle profile-image"
                />
            ) : (
                <span
                    className="avatar"
                    style={{ backgroundColor: countCharInWordArr(name.name) }}
                >
                    {name.name[0]}
                </span>
            )}
        </>
    );
};
