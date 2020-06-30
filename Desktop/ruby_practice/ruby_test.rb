require 'minitest/autorun'

class RubyTest < Minitest::Test
  def test_ruby 
    assert_equal 'Ruby', 'ruby'.upcase 
  end
end