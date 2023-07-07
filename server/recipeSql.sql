CREATE TABLE IF NOT EXISTS recipes(
    rid integer primary key,
    rtitle varchar(50) NOT NULL,
    ringredients varchar(4096) NOT NULL,
    rdirections varchar(4096) NOT NULL
);
