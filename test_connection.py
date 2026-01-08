import mysql.connector
from mysql.connector import Error

def create_connection():
    connection = None
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password=''
        )
        if connection.is_connected():
            print("Connection to MySQL DB successful")
            
            # Print server information to verify
            db_info = connection.server_info
            print("Connected to MySQL Server version ", db_info)
            
    except Error as e:
        print(f"The error '{e}' occurred")
    finally:
        if connection and connection.is_connected():
            connection.close()
            print("MySQL connection is closed")

if __name__ == '__main__':
    create_connection()
