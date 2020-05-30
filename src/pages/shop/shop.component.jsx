import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionsPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  // //Promise pattern of getting collections map
  // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-2882c/databases/(default)/documents/collections')
  // .then(response => response.json())
  // .then(collections => console.log(collections))

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
