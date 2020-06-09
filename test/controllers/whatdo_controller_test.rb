require 'test_helper'

class WhatdoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get whatdo_index_url
    assert_response :success
  end

end
