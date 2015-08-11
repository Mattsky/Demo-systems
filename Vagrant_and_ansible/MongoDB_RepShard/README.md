A sample MongoDB sharded setup with sample data automatically generated for you.  
  
Each system has its own SSH port assigned. They're on the same subnet, so removing the SSH 
ports from the VM definitions won't cause any problems - just use one as a jumpbox. (All
the systems have a complete list of all hosts created) 
  
This setup DOES use replica sets as shards. Two sets of three servers are used.  
  
This is horrifically insecure. DO *NOT* USE IN PRODUCTION!!  
