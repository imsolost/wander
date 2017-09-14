INSERT INTO
  cities (cityname, country)
VALUES
  ('Malibu', 'USA'),
  ('Oakland', 'USA'),
  ('Berkeley', 'USA'),
  ('London', 'England')
;

INSERT INTO
  users (username, email, password)
VALUES
  ('a', 'a@a.com', 'a'),
  ('b', 'b@b.com', 'b')
;

INSERT INTO
  posts (user_id, city_id, content)
VALUES
  (1, 1, 'A review of Malibu. It was great!'),
  (1, 2, 'A review of Oakland. It was great!'),
  (1, 3, 'A review of Berkeley. It was ok.'),
  (2, 1, 'A review of Malibu. It was ok.')
;
