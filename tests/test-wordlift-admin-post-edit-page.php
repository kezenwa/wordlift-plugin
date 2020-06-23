<?php

/**
 * Tests: Tests the wordlift admin post edit page
 * @since 3.26.0
 * @package wordlift
 * @subpackage wordlift/tests
 *
 */

class Test_Wordlift_Admin_Post_Edit_Page extends Wordlift_Unit_Test_Case {
	/**
	 * @var Wordlift_Admin_Post_Edit_Page
	 */
	private $instance;

	public function setUp() {
		parent::setUp(); // TODO: Change the autogenerated stub
		$this->instance  = new Wordlift_Admin_Post_Edit_Page(Wordlift::get_instance());
	}
	public function test_faq_settings_has_all_keys() {
		$faq_settings_array = $this->instance->get_faq_settings();
		$this->assertArrayHasKey('restUrl', $faq_settings_array);
		$this->assertArrayHasKey('listBoxId', $faq_settings_array);
		$this->assertArrayHasKey('addQuestionText', $faq_settings_array);
		$this->assertArrayHasKey('nonce', $faq_settings_array);
		$this->assertArrayHasKey('postId', $faq_settings_array);
		$this->assertArrayHasKey('invalidTagMessage', $faq_settings_array);
		$this->assertArrayHasKey('invalidWordCountMessage', $faq_settings_array);
	}
}