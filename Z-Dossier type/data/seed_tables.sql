BEGIN;

-- Insertion des utilisateurs
INSERT INTO app_user (email, name, firstname, password) VALUES
('alice@example.com', 'Durand', 'Alice', 'hashed_password_1'),
('bob@example.com', 'Martin', 'Bob', 'hashed_password_2'),
('charlie@example.com', 'Bernard', 'Charlie', 'hashed_password_3');

-- Insertion des tags
INSERT INTO tag (name) VALUES
('Culture Générale'),
('Informatique'),
('Mathématiques'),
('Histoire'),
('Sport');

-- Insertion des niveaux de difficulté
INSERT INTO difficulty (name) VALUES
('Facile'),
('Moyen'),
('Difficile');

-- Insertion des quiz
INSERT INTO quiz (name, description, id_app_user) VALUES
('Quiz Culture Générale', 'Testez vos connaissances générales !', 1),
('Quiz Programmation', 'Questions sur les bases de la programmation.', 2),
('Quiz Mathématiques Avancées', 'Niveau difficile, pour les matheux.', 3);

-- Insertion des relations quiz-tag
INSERT INTO quiz_tag (id_quiz, id_tag) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Insertion des questions
INSERT INTO question (name, description, id_quiz, id_difficulty) VALUES
('Capitale de la France', 'Quelle est la capitale de la France ?', 1, 1),
('Variable en Python', 'Quelle syntaxe est correcte pour définir une variable en Python ?', 2, 1),
('Intégrale', 'Quelle est l’intégrale de x^2 ?', 3, 3);

-- Insertion des réponses
-- Question 1
INSERT INTO answer (name, is_correct, id_question) VALUES
('Paris', TRUE, 1),
('Lyon', FALSE, 1),
('Marseille', FALSE, 1),
('Toulouse', FALSE, 1);

-- Question 2
INSERT INTO answer (name, is_correct, id_question) VALUES
('x = 10', TRUE, 2),
('int x = 10', FALSE, 2),
('let x = 10', FALSE, 2),
('dim x = 10', FALSE, 2);

-- Question 3
INSERT INTO answer (name, is_correct, id_question) VALUES
('x^3 / 3 + C', TRUE, 3),
('2x + C', FALSE, 3),
('x^2 / 2 + C', FALSE, 3),
('ln(x) + C', FALSE, 3);

COMMIT;