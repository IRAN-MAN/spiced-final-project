DROP TABLE IF EXISTS reset_codes;
DROP TABLE IF EXISTS profile_photos;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS favourite_recipes;
DROP TABLE IF EXISTS Ingredients_list;
DROP TABLE IF EXISTS co_authors;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS chapters;
DROP TABLE IF EXISTS cookbooks;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id              SERIAL PRIMARY KEY,
    first_name      VARCHAR(255) NOT NULL,
    last_name       VARCHAR(255) NOT NULL,
    email           VARCHAR(50) NOT NULL UNIQUE,
    hashed_password VARCHAR NOT NULL,
    profile_pic     TEXT DEFAULT '/images/default_user.jpeg',
    about           TEXT,
    city            VARCHAR(50),
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cookbooks (
    id              SERIAL PRIMARY KEY,
    isPrivate       BOOLEAN DEFAULT true,
    cookbook_name   VARCHAR(50) NOT NULL,
    cover_pic       TEXT DEFAULT '/images/default_cover.jpeg',
    author          INT REFERENCES users (id) NOT NULL,    
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chapters (
    id              SERIAL PRIMARY KEY,
    category        VARCHAR(25) NOT NULL UNIQUE         
);


CREATE TABLE recipes (
    id                      SERIAL PRIMARY KEY,
    cookbook_id             INT REFERENCES cookbooks (id) NOT NULL,        
    chapter_id              INT REFERENCES chapters (id) NOT NULL,    
    owner_id                INT REFERENCES users (id) NOT NULL, 
    recipe_name             VARCHAR(255) NOT NULL,
    instructions            TEXT NOT NULL,
    prep_time               INTEGER NOT NULL,
    difficulty_level        INT DEFAULT 3,
    recipe_story            TEXT,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE co_authors (
    id              SERIAL PRIMARY KEY,
    user_id         INT REFERENCES users (id) NOT NULL,    
    cookbook_id     INT REFERENCES cookbooks (id) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        
);

CREATE TABLE Ingredients_list (
    id                  SERIAL PRIMARY KEY,
    ingredient_name     VARCHAR(25) NOT NULL,         
    quantity            INT NOT NULL,        
    unit                VARCHAR(25) NOT NULL,
    recipe_id           INT REFERENCES recipes (id) NOT NULL        
);

CREATE TABLE favourite_recipes (
    id              SERIAL PRIMARY KEY,
    user_id         INT REFERENCES users (id) NOT NULL,    
    recipe_id       INT REFERENCES recipes (id) NOT NULL        
);

CREATE TABLE comments (
    id              SERIAL PRIMARY KEY,
    recipe_id       INT REFERENCES recipes (id) NOT NULL,        
    user_id         INTEGER NOT NULL REFERENCES users (id),
    comment_text    TEXT NOT NULL ,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE photos (
    id              SERIAL PRIMARY KEY,
    recipe_id       INT REFERENCES recipes (id) NOT NULL,        
    user_id         INTEGER NOT NULL REFERENCES users (id),
    photo_url       TEXT DEFAULT '/images/default_photo.jpeg',
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profile_photos (
    id              SERIAL PRIMARY KEY,
    user_id         INTEGER NOT NULL REFERENCES users (id),
    photo_url       TEXT NOT NULL ,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reset_codes (
    id              SERIAL PRIMARY KEY,    
    email           VARCHAR(50) NOT NULL ,
    secret_code     VARCHAR(6) NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);