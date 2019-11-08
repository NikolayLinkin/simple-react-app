import React, {Component, ReactElement, MouseEvent} from "react";

type AFBProps = {
    toggleFavorite(): void,
    favoriteCount: number,
}

class ArticleFavoriteBtn extends Component<AFBProps> {

    constructor(props: AFBProps) {
        super(props);
    }


    clickBtn = (event: MouseEvent): void => {
        event.preventDefault();

        this.props.toggleFavorite();
    };

    render(): ReactElement {
        const {favoriteCount} = this.props;

        return (
            <button className="article__favorite"
                    onClick={this.clickBtn}
            >
                {favoriteCount}
            </button>
        )
    }
}

export default ArticleFavoriteBtn;