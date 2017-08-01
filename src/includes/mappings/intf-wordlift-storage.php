<?php
/**
 * Created by PhpStorm.
 * User: david
 * Date: 01/08/2017
 * Time: 17:13
 */

abstract class Wordlift_Storage {

	/**
	 * Get the values for the property of the {@link WP_Post}.
	 *
	 * @since 3.15.0
	 *
	 * @param int $post_id The {@link WP_Post}'s id.
	 *
	 * @return array
	 */
	abstract public function get( $post_id );

	/**
	 * Get the first value for a property.
	 *
	 * @since 3.15.0
	 *
	 * @param int $post_id The {@link WP_Post}'s id.
	 *
	 * @return string The first property value or an empty string.
	 */
	public function get_first( $post_id ) {

		$values = $this->get( $post_id );

		if ( empty( $values ) ) {
			return '';
		}

		return $values[0];
	}

}
