CREATE TABLE emotions(
id SERIAL PRIMARY KEY,
country VARCHAR,
emotion VARCHAR,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
