def number(n)
  if n % 15 ==0
    puts "Fizz Buzz" 
  elsif n % 5 == 0
    puts "Buzz"
  elsif n % 3 == 0
    puts "Fizz"
  else
    puts n.to_s
  end
end

number(19)