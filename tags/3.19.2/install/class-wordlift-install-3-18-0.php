<?php
/**
 * Installs: Install Version 3.18.0.
 *
 * @since      3.18.0
 * @package    Wordlift
 * @subpackage Wordlift/install
 */

/**
 * Define the {@link Wordlift_Install_3_18_0} interface.
 *
 * @since      3.18.0
 * @package    Wordlift
 * @subpackage Wordlift/install
 */
class Wordlift_Install_3_18_0 extends Wordlift_Install {
	/**
	 * @inheritdoc
	 */
	protected static $version = '3.18.0';

	/**
	 * @inheritdoc
	 */
	public function __construct() {
		parent::__construct();

		add_action( 'wl_async_wl_push_references', array(
			$this,
			'push_references',
		) );
	}

	/**
	 * @inheritdoc
	 */
	public function install() {
		$this->add_offer_entity_type();
		$this->add_editors_read_wordlift_entity_capability();
		do_action( 'wl_push_references' );
	}

	/**
	 * Creates references for articles *referencing* entities
	 *
	 * @since 3.18.0
	 *
	 * @return void
	 */
	public function push_references() {
		// Get relations.
		$relations = Wordlift_Relation_Service::get_instance()->find_all_grouped_by_subject_id();

		$entity_service = Wordlift_Entity_Service::get_instance();

		// Loop through all relations and push the references.
		foreach ( $relations as $relation ) {

			$post = get_post( $relation->subject_id );

			// Bail out if it's an entity: we're only interested in articles
			// *referencing* entities.
			if ( $entity_service->is_entity( $post->ID ) ) {
				continue;
			}

			// Push the references.
			Wordlift_Linked_Data_Service::get_instance()->push( $post->ID );
		}

	}

	/**
	 * Adds the new `Offer` entity type.
	 *
	 * @since 3.18.0
	 *
	 * @return void
	 */
	public function add_offer_entity_type() {
		// Check whether the `offer` term exists.
		$offer = get_term_by(
			'slug',
			'offer',
			Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME
		);

		// The `offer` term doesn't exists, so create it.
		if ( empty( $offer ) ) {
			wp_insert_term(
				'Offer',
				Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME,
				array(
					'slug'        => 'offer',
					'description' => 'An Offer.',
				)
			);
		}
	}

	/**
	 * Add additional `read_wordlift_entity` capability to editors.
	 *
	 * @since 3.18.0
	 *
	 * @return void
	 */
	public function add_editors_read_wordlift_entity_capability() {
		// Get the editor roles.
		$admins  = get_role( 'administrator' );
		$editors = get_role( 'editor' );

		// Add read capability.
		$admins->add_cap( 'read_wordlift_entity' );
		$editors->add_cap( 'read_wordlift_entity' );
	}

}
