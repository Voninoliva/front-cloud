function UneAnnonce(props){
    
    return (
        <>
            <div className="column is-4">
                    <div className="card">
                        <div className="card-image">
                            <div className="carousel" style="overflow-x: hidden;">
                                <div className="item-1">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="item-2">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="item-3">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="card-content p-3">
                            <div className="list has-visible-pointer-controls has-overflow-ellipsis">
                                <div className="list-item">
                                    <div className="list-item-image">
                                        <figure className="image is-48x48">
                                            <img className="is-rounded" src="https://via.placeholder.com/128x128.png?text=Image"/>
                                        </figure>
                                    </div>
                                    <div className="list-item-content">
                                        <div className="list-item-title">List item</div>
                                        <div className="list-item-description help">List item description</div>
                                    </div>
                
                                    <div className="list-item-controls">
                                        <div className="buttons is-right">
                                            <button className="button is-info is-small">
                                                <span>View more</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}