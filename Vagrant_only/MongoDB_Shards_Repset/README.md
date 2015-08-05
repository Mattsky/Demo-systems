A Vagrant & VBox based MongoDB setup, involving 2 replica sets of 3 servers each acting as shards for a sample database (created for you.)  
  
Each system has its own SSH port assigned. They're on the same subnet, so removing the SSH 
ports from the VM definitions won't cause any problems - just use one as a jumpbox. (All
the systems have a complete list of all hosts created - see hosts.sh) 
  
This setup *DOES* use replica sets.  
  
This is horrifically insecure. DO *NOT* USE IN PRODUCTION!!  
