function munrar
	for file in *.rar; unrar e "$file" -p"$argv[1]"; end
end
