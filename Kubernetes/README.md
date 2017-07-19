Sample YAML file for creating a LAMP stack in Kubernetes using a modified version of the PHP-Apache container found at the Docker Hub.  
  
The basic storage is currently set to use a directory on the nodes with the Drupal 8 files inside; this is by design as this is more a PoC than a production ready setup. It's trivial to change it to persistent disk, GlusterFS share etc.

An example GlusterFS setup is in the gluster subdirectory. Create the endpoints first, then the service, and finally run the deployment YAML. Obviously ensure you have a configured GlusterFS cluster available before doing this..
  
Ensure there's a sites/default/settings.php file writable by the webserver user on the backend storage; it'll throw a warning about this if you don't.  
  
When setting up the database use the service name - 'drupal8-test-db-service' in most cases.

TODO:

Automate download + deployment of files to Gluster storage

(curl -O https://ftp.drupal.org/files/projects/drupal-8.3.5.tar.gz ; tar -xzf drupal-8.3.5.tar.gz ; chown -R www-data /var/www/html)
