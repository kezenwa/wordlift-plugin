import React, { createContext } from 'react';
import './../../scss/mapping-app.scss';

const MappingConfigurationContext = createContext();

export class Mapping extends React.Component {
	constructor() {
		super();

		this.editControlHandler = this.editControlHandler.bind( this );
		this.addNewMappingHandler = this.addNewMappingHandler.bind( this );
		this.closeCurrentMappingHandler = this.closeCurrentMappingHandler.bind( this );
		this.propertyTextUpdateHandler = this.propertyTextUpdateHandler.bind( this );

		this.state = {
			editControlHandler: this.editControlHandler,
			addNewMappingHandler: this.addNewMappingHandler,
			closeCurrentMappingHandler: this.closeCurrentMappingHandler,
			propertyTextUpdateHandler: this.propertyTextUpdateHandler,

			currentlyEditing: null,

			defaultProperties: {
				property: '',
				fieldType: {
					text: 'Text',
					acfCustomField: 'ACF Custom Field',
				},
				field: '',
				transform: {
					none: 'None',
					add: 'Add',
					subtract: 'subtract',
				},
			},

			savedProperties: [
				{
					property: 'telephone',
					fieldType: 'acfCustomField',
					field: 'Contact Form',
					transform: 'none',
				},
				{
					property: 'description',
					fieldType: 'text',
					field: 'Description',
					transform: 'add',
				},
			],
		};
	}

	editControlHandler( e, savedPropertyItemIndex ) {
		e.preventDefault();

		const editControlId = e.target.dataset;

		switch( Number( editControlId.controlId ) ) {
			case 0:
				this.setState( {
					currentlyEditing: savedPropertyItemIndex,
				} );
				break;

			case 1:
				this.setState( {
					savedProperties: this.state.savedProperties.reduce( ( accumulator, currentItem, currentIndex ) => ( currentIndex === savedPropertyItemIndex ? [ ...accumulator, currentItem, currentItem ] : [ ...accumulator, currentItem ] ), [] ),
				} );
				break;

			case 2:
				this.setState( {
					savedProperties: this.state.savedProperties.filter( ( item, index ) => index !== savedPropertyItemIndex )
				} );
				break;

			default:
				break;
		}
	}

	addNewMappingHandler() {
		this.setState( {
			savedProperties: [
				...this.state.savedProperties,
				Object.assign( {}, this.state.defaultProperties ),
			],
			currentlyEditing: this.state.savedProperties.length,
		} );

	}

	propertyTextUpdateHandler( e, savedPropertyItemIndex ) {
		const savedProperties = [ ...this.state.savedProperties ];
		savedProperties[ savedPropertyItemIndex ].property = e.target.value;

		this.setState( {
			savedProperties: savedProperties
		} )
	}

	closeCurrentMappingHandler( e ) {
		e.preventDefault();

		this.setState( {
			currentlyEditing: null,
		} )
	}

	render() {
		return (
			<MappingConfigurationContext.Provider value={ this.state } >
				<MappingConfiguration />
			</MappingConfigurationContext.Provider>
		);
	}
}

const MappingConfiguration = () => (
	<div className="wl-mapping__container">
		<MappingConfigurationContext.Consumer>
			{ ( { savedProperties, addNewMappingHandler, currentlyEditing } ) => (
				<>
				{ savedProperties.map( ( savedPropertyItem, savedPropertyItemIndex ) => (
					<MappingRow key={ savedPropertyItemIndex } mappingRowData={ savedPropertyItem } savedPropertyItemIndex={ savedPropertyItemIndex } />
				) ) }
				{ null === currentlyEditing && <button className="button wl-mapping__add-mapping" type="button" onClick={ addNewMappingHandler }>Add Mapping</button> }
				</>
			) }
		</MappingConfigurationContext.Consumer>
	</div>
);

const MappingRow = ( { mappingRowData, savedPropertyItemIndex } ) => (
	<MappingConfigurationContext.Consumer>
		{ ( { editControlHandler, currentlyEditing, defaultProperties, propertyTextUpdateHandler, closeCurrentMappingHandler } ) => (
			<div className="wl-mapping__unit">
				<div className="wl-mapping__checkbox">
					<input type="checkbox" />
				</div>

				<div className="wl-mapping__edit-panel">
					<div className="wl-mapping__title">{ mappingRowData.property }</div>

					{ currentlyEditing === savedPropertyItemIndex && ( <div className="wl-mapping__expanded-controls">
						<div className="wl-mapping__property-control">
							<label>Property</label>
							<input type="text" required defaultValue={ mappingRowData.property } onChange={ ( e ) => propertyTextUpdateHandler( e, savedPropertyItemIndex ) } />
						</div>

						<div className="wl-mapping__property-control">
							<label>Field Type</label>
							<select defaultValue={ mappingRowData.fieldType }>
								{ Object.keys( defaultProperties.fieldType ).map( ( key, index ) => <option key={ index } value={ key }>{ defaultProperties.fieldType[ key ] }</option> ) }
							</select>
						</div>

						<div className="wl-mapping__property-control">
							<label>Field</label>
							<input type="text" required defaultValue={ mappingRowData.field } />
						</div>

						<div className="wl-mapping__property-control">
							<label>Transform</label>
							<select defaultValue={ mappingRowData.transform }>
								{ Object.keys( defaultProperties.transform ).map( ( key, index ) => <option key={ index } value={ key }>{ defaultProperties.transform[ key ] }</option> ) }
							</select>
						</div>
					</div> ) }

					{ currentlyEditing !== savedPropertyItemIndex && <div className="wl-mapping__edit-controls">
						<a onClick={ ( e ) => editControlHandler( e, savedPropertyItemIndex ) } data-control-id={ 0 } href="#">Edit</a>
						<a onClick={ ( e ) => editControlHandler( e, savedPropertyItemIndex ) } data-control-id={ 1 } href="#">Duplicate</a>
						<a onClick={ ( e ) => editControlHandler( e, savedPropertyItemIndex ) } data-control-id={ 2 } href="#">Deletion</a>
					</div> }

					{ currentlyEditing === savedPropertyItemIndex && <a href="#" className="wl-mapping__close-mapping" onClick={ ( e ) => { closeCurrentMappingHandler( e ) } }>Close</a> }
				</div>
			</div>
		) }
	</MappingConfigurationContext.Consumer>
);
