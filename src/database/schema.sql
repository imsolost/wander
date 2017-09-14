CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  cityname VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  picture VARCHAR(255) DEFAULT 'http://www.pieglobal.com/wp-content/uploads/2015/10/placeholder-user.png',
  join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT,
  city_id INT,
  content VARCHAR(1000) NOT NULL,
  review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (city_id) REFERENCES cities(id)
);
