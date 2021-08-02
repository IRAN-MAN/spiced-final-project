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
'https://via.placeholder.com/150', 'Hej its me! I love cooking!', 'Old Town'),
('Berta', 'Borchert', 'b@b.com', '$2a$10$Tu/tkQyUf9kHGhDb9BrzO.9KYNJBLpbW95wZgHgdf7r9OyPSK8ZjS',
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
(1,2,1, 'Pasta Salad', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'Pasta Salad', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'Pasta Salad', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,2,1, 'Pasta Salad', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'Bolognaise', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'Bolognaise', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,2,1, 'Bolognaise', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'Bolognaise', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'Chocolate Mousse', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Chocolate Mousse', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,3,1, 'Chocolate Mousse', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,1,1, 'Chocolate Mousse', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,2,1, 'Chocolate Mousse', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,3,1, 'Chocolate Mousse', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,1,1, 'Chocolate Mousse', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,2,1, 'Rice Pudding', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'Rice Pudding', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'Rice Pudding', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Rice Pudding', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'Rice Pudding', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'Rice Pudding', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,2,1, 'Rice Pudding', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'Rice Pudding', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'Lemon Cake', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,2,1, 'Lemon Cake', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,3,1, 'Lemon Cake', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,1,1, 'Lemon Cake', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Lemon Cake', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'Lemon Cake', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'Lemon Cake', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,2,1, 'Lemon Cake', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'Lemon Cake', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'Spaghetti', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,2,1, 'Spaghetti', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'Spaghetti', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'Spaghetti', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Spaghetti', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,3,1, 'Spaghetti', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,1,1, 'Spaghetti', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,2,1, 'Spaghetti', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,3,1, 'Shepards Pie', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,1,1, 'Shepards Pie', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,2,1, 'Shepards Pie', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'Shepards Pie', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'Shepards Pie', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Shepards Pie', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'Shepards Pie', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'Shepards Pie', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,2,1, 'Pea Soup', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'Pea Soup', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'Pea Soup', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,2,1, 'Pea Soup', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,3,1, 'Pea Soup', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,1,1, 'Pea Soup', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,4,1, 'Pea Soup', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,5,1, 'Pho', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,4,1, 'Pho', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,5,1, 'Pho', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,4,1, 'Pho', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,5,1, 'Pho', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,4,1, 'Pho', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,5,1, 'Potato Stew', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,5,1, 'Potato Stew', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Potato Stew', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,6,1, 'Potato Stew', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,5,1, 'Potato Stew', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,6,1, 'Potato Stew', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,5,1, 'Lasagna', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,6,1, 'Lasagna', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,5,1, 'Lasagna', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,6,1, 'Lasagna', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,7,1, 'Lasagna', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Banh mi', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,6,1, 'Banh mi', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,7,1, 'Banh mi', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,6,1, 'Banh mi', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,4,1, 'Strawberry Jam', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,5,1, 'Strawberry Jam', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,6,1, 'Strawberry Jam', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,1,1, 'Strawberry Jam', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,2,1, 'Strawberry Jam', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Strawberry Jam', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'Lemonade', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,2,1, 'Lemonade', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,2,1, 'Lemonade', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,5,1, 'Lemonade', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'Lemonade', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,4,1, 'Lemonade', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,3,1, 'Nans Applestrudel', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(1,1,1, 'Nans Applestrudel', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Nans Applestrudel', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,3,1, 'Nans Applestrudel', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,1,1, 'Homemade Kimchi', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,2,1, 'Homemade Kimchi', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,3,1, 'Homemade Kimchi', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,1,1, 'Homemade Kimchi', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(2,2,1, 'Homemade Kimchi', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'Vegan Mayonnaise', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'Vegan Mayonnaise', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),(1,2,1, 'Vegan Mayonnaise', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'Roasted Vegetables', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'Roasted Vegetables', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,2,1, 'Roasted Vegetables', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,3,1, 'Roasted Vegetables', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(3,1,1, 'Roasted Vegetables', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,2,1, 'Juicy Muffins', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,3,1, 'Juicy Muffins', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
Set aside for 30 mins to rest if you have time, or start cooking straight away.
Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper.
When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.
Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.', 
'60min', 5, 'My Nanny used to cook this for me!'),
(4,1,1, 'Juicy Muffins', 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter.
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


Insert INTO photos (
    recipe_id,          
    user_id,        
    photo_url)
    VALUES 
    (1,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (2,1, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (3,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (4,1, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (5,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (6,1, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (7,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (8,3, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (9,5, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (10,1, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (11,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (12,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (13,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (14,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (15,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (16,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (17,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (18,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (19,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (20,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (21,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (22,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (23,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (24,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (25,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (26,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80'),
    (27,2, 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80');