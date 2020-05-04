/**
 * External dependencies
 */
import { connect } from 'react-redux';
/**
 * Internal dependencies
 */
import withSpinner from '../../common/components/spinner/with-spinner';
import { ContentClassificationPanel } from '../../classic-editor/components/App';

// Add the spinner to the sidebar component.
const SidebarWithSpinner = withSpinner(ContentClassificationPanel);

// Connect the spinner to the `blockEditor.loading` state.
export default connect(({ blockEditor }) => ({ loading: blockEditor.loading }))(
	SidebarWithSpinner
);
