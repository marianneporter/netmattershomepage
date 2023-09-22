<?php 
	/**
	*  DB connection class 
	*/		
	
	class DB_Connect { 	
      
        protected $pdo;	

 
	    /**
		*  Create PDO object, connect to DB and check if connection was successful.
		*  Handle error if necessary using try-catch block.
		*
		*/
		public function CreateConnection() { 

            [ $host, $dbName, $username, $password ] = self::getDBCredentials();
			          
			// Set DSN
			$dsn='mysql:host='.$host.';dbname='.$dbName;

            try {
                $this->pdo=new PDO($dsn, $username, $password);	
                $this->pdo->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
                $this->pdo->setAttribute( PDO::ATTR_EMULATE_PREPARES, false ); 
                return $this->pdo;       
            } 
            catch(Exception $e) {             
                return null;
            }


		}

        private function getDBCredentials() {
            // if ( $_SERVER['SERVER_NAME'] == 'localhost') {
            //     [ $host, $dbName, $username, $password ] = self::getLocalhostDets();   
            // } else {
            //    get cpanel db details          
            // }

            [ $host, $dbName, $username, $password ] = self::getLocalhostDets();       

            return [ $host, $dbName, $username, $password];  			                  
        }
 
        private function getLocalhostDets() {
            $host =   "localhost";
            $dbName = "netmatters";
            $username = "root";
            $password = "";

            return [ $host, $dbName, $username, $password];                        
        }

	}