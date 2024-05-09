require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pages_index_url
    assert_response :success
  end

  test "should get blog" do
    get pages_blog_url
    assert_response :success
  end

  test "should get promo" do
    get pages_promo_url
    assert_response :success
  end

  test "should get search" do
    get pages_search_url
    assert_response :success
  end

  test "should get stones" do
    get pages_stones_url
    assert_response :success
  end
end
