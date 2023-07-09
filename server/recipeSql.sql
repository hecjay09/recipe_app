CREATE TABLE IF NOT EXISTS recipes(
    rid integer primary key,
    title varchar(50) NOT NULL,
    recipeinstructions varchar(4096) NOT NULL,
    timelastmodified varchar(4096) NOT NULL
);

CREATE TABLE IF NOT EXISTS ingredients(
    iid integer, rid integer, 
    ingredients varchar(1024), 
    foreign key (rid) 
    references recipes ON DELETE CASCADE);

ALTER TABLE ingredients ADD primary key (rid, iid);
