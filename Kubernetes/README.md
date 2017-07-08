Sample YAML file for creating a LAMP stack in Kubernetes using a modified version of the PHP-Apache container found at the Docker Hub.  
  
The storage is currently set to use a directory on the nodes with the Drupal 8 files inside; this is by design as this is more a PoC than a production ready setup. It's trivial to change it to persistent disk, GlusterFS share etc.
  
Ensure there's a sites/default/settings.php file writable by the webserver user on the backend storage; it'll throw a warning about this if you don't.  
  
When setting up the database use 127.0.0.1 instead of 'localhost'!  
