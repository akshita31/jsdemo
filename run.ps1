$hostPort= 1887
$trydotnetPort = 5000
Start-Process -FilePath 'dotnet' -ArgumentList "try --port $trydotnetPort"
Start-Process -FilePath 'dotnet' -ArgumentList "serve -p $hostPort -o"