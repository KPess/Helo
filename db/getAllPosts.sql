SELECT helo_users.username, helo_posts.author_id, helo_posts.post_title, helo_posts.post_text, helo_posts.image_url
FROM helo_posts
JOIN helo_users ON helo_posts.author_id=helo_users.id
