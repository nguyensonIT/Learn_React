export const PopupLogout = ({ handleLogout, handleShowForm }) => {
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Đăng xuất</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleShowForm}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Bạn có chắc muốn đăng xuất không?</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={handleShowForm}
                        >
                            Thoát
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleLogout}
                        >
                            Đăng xuất
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
