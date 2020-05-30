import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "../collections-overview/collections-overview.component";


// Using Container pattern to promote dumb components.

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// Easier readibility when we have a lot of HOC
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);


export default CollectionsOverviewContainer;