INSERT INTO users (
    first_name,
    last_name,
    email,
    hashed_password,
    profile_pic,
    about,
    city
)
VALUES
('Anton', 'Ahhhh', 'a@a.com', '$2a$10$Tu/tkQyUf9kHGhDb9BrzO.9KYNJBLpbW95wZgHgdf7r9OyPSK8ZjS',
'https://via.placeholder.com/150', 'Hej its me! I love cooking!', 'Old Town'), 
('Sam', 'Sass', 's@s.com', '$2a$10$Tu/tkQyUf9kHGhDb9BrzO.9KYNJBLpbW95wZgHgdf7r9OyPSK8ZjS',
'https://via.placeholder.com/150', 'Hej its me! I love cooking!', 'Old Town'),
('Tom', 'Tucker', 't@t.com', '$2a$10$Tu/tkQyUf9kHGhDb9BrzO.9KYNJBLpbW95wZgHgdf7r9OyPSK8ZjS',
'https://via.placeholder.com/150', 'Hej its me! I love cooking!', 'Old Town'), 
('Frida', 'Fox', 'f@f.com', '$2a$10$Tu/tkQyUf9kHGhDb9BrzO.9KYNJBLpbW95wZgHgdf7r9OyPSK8ZjS',
'https://via.placeholder.com/150', 'Hej its me! I love cooking!', 'Old Town'); 


INSERT INTO chapters (
    category
)
VALUES 
('Starters'),
('Salad'),
('Desert'),
('Soups'),
('Cakes'),
('Cocktails'),
('Fast Food'),
('Snacks');

INSERT INTO cookbooks (
    isPrivate, 
    cookbook_name, 
    cover_pic, 
    author
)
VALUES
(false, 'Pasta Dreams', 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 1),
(false, 'Nom nom nom', 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 1),
(false, 'Hard to digest', 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 1),
(false, 'JUST Hot Dogs', 'https://images.unsplash.com/photo-1599599810694-b5b37304c041?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80', 1),
(false, 'Veggo Stuff', 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80', 1),
(false, 'Nannys Secrets', 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80', 1),
(false, 'Me & my gurrrls', 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 1);


INSERT INTO co_authors (
    user_id,
    cookbook_id
)
VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(2,1),
(2,2),
(2,3),
(2,4),
(3,1),
(3,2),
(3,3),
(3,4);





INSERT INTO recipes (
    cookbook_id, 
    chapter_id, 
    owner_id, 
    recipe_name, 
    instructions,
    prep_time,
    difficulty_level,
    recipe_story)
VALUES 
(1,2,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,2,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,2,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,3,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,1,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,2,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,3,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,1,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,2,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,2,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,2,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,3,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,1,1, 'My Recipe', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!');



-- not working, cause Ingredient_name is UNIQUE
INSERT INTO Ingredients_list (
    Ingredient_name,
    quantity,
    unit,
    recipe_id
)
VALUES
('Potato', 1, 'x', 1),
('Milk', 100, 'ml', 1),
('Butter', 120, 'gr', 1),
('Flour', 100, 'gr', 1),
('Strawberries', 200, 'gr', 1),
('Oil', 100, 'ml', 1),

('Potato', 1, 'x',2),
('Milk', 100, 'ml', 2),
('Butter', 120, 'gr', 2),
('Flour', 100, 'gr', 2),
('Strawberries', 200, 'gr', 2),
('Oil', 100, 'ml', 2),

('Potato', 1, 'x', 3),
('Milk', 100, 'ml', 3),
('Butter', 120, 'gr', 3),
('Flour', 100, 'gr', 3),
('Strawberries', 200, 'gr', 3),
('Oil', 100, 'ml', 3),
('Potato', 1, 'x', 3),
('Milk', 100, 'ml', 3),
('Butter', 120, 'gr', 3),
('Flour', 100, 'gr', 3),
('Strawberries', 200, 'gr', 3),
('Oil', 100, 'ml', 3);

INSERT INTO comments (
    recipe_id,
    user_id,
    comment_text
)
VALUES
(1,2, 'Comment lorem ipsum !'),
(1,1, 'Comment lorem ipsum !'),
(1,2, 'Comment lorem ipsum !'),
(1,1, 'Comment lorem ipsum !'),
(1,1, 'Comment lorem ipsum !'),
(1,2, 'Comment lorem ipsum !'),
(1,1, 'Comment lorem ipsum !'),
(1,2, 'Comment lorem ipsum !'),
(1,1, 'Comment lorem ipsum !'),
(2,2, 'Comment lorem ipsum !'),
(2,2, 'Comment lorem ipsum !'),
(2,1, 'Comment lorem ipsum !'),
(2,2, 'Comment lorem ipsum !'),
(2,1, 'Comment lorem ipsum !'),
(2,1, 'Comment lorem ipsum !'),
(2,2, 'Comment lorem ipsum !'),
(2,1, 'Comment lorem ipsum !'),
(2,2, 'Comment lorem ipsum !'),
(2,1, 'Comment lorem ipsum !'),
(2,2, 'Comment lorem ipsum !');