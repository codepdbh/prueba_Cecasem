import mysql.connector
from mysql.connector import Error

def create_database():
    connection = None
    try:
        # Connect to MySQL Server (no database selected yet)
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password=''
        )
        if connection.is_connected():
            cursor = connection.cursor()
            
            # Read SQL file
            with open('database_setup.sql', 'r') as file:
                sql_script = file.read()
            
            # Execute each command
            for statement in sql_script.split(';'):
                if statement.strip():
                    cursor.execute(statement)
            
            connection.commit()
            print("Database and table created successfully with dummy data.")
            
    except Error as e:
        print(f"Error while connecting to MySQL: {e}")
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

if __name__ == '__main__':
    create_database()
