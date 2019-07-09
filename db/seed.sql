  CREATE TABLE helo_posts (
    post_id SERIAL PRIMARY KEY,
    author_id INTEGER,
    image_url TEXT,
    post_title VARCHAR(40),
    post_text VARCHAR(600),
    FOREIGN KEY (author_id) REFERENCES helo_users(id)
  )