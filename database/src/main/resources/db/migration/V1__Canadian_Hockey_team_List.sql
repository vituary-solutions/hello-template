CREATE TABLE hockey_teams (
    name TEXT PRIMARY KEY,
    arena TEXT NOT NULL,
    street TEXT NOT NULL,
    city TEXT NOT NULL,
    region CHAR(2) NOT NULL,
    country CHAR(2) NOT NULL,
    postal_code VARCHAR(10)
);

INSERT INTO hockey_teams (name, arena, street, city, region, country, postal_code)
VALUES
    ('Vancouver Canucks', 'Rogers Arena', '800 Griffiths Way', 'Vancouver', 'BC', 'CA', 'V6B 6G1'),
    ('Calgary Flames', 'Scotiabank Saddledome', '555 Saddledome Rise SE', 'Calgary', 'AB', 'CA', 'T2G 2W1'),
    ('Edmonton Oilers', 'Rogers Place', '10220 104 Ave NW', 'Edmonton', 'AB', 'CA', 'T5J 1B8'),
    ('Winnipeg Jets', 'Bell MTS Place', '345 Portage Ave', 'Winnipeg', 'MB', 'CA', 'R3C 5S4'),
    ('Toronto Maple Leafs', 'Scotiabank Arena', '40 Bay Street', 'Toronto', 'ON', 'CA', 'M5J 2X2'),
    ('Ottawa Senators', 'Canadian Tire Centre', '1000 Palladium Dr', 'Ottawa', 'ON', 'CA', 'K2V 1A4'),
    ('Montreal Canadiens', 'Bell Centre', '1909 Avenue des Canadiens-de-Montreal', 'Montreal', 'QC', 'CA', 'H4B 5G0');
