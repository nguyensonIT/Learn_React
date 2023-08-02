export const Popup = ({
    handleShowForm,
    handleSubmit,
    title,
    content,
    btnSubmitText,
}) => {
    return (
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
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
                        <p>{content}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={handleShowForm}
                        >
                            Hủy
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            {btnSubmitText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
