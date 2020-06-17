DROP TABLE IF EXISTS profile;
CREATE TABLE profile (
	-- this creates the attribute for the primary key
	-- auto_increment tells mySQL to number them {1, 2, 3, ...}
	-- not null means the attribute is required!
	profileId BINARY(16) NOT NULL,
	profileActivationToken CHAR(32),
	profileAtHandle VARCHAR(32) NOT NULL UNIQUE,
	profileAvatarUrl  VARCHAR(255),
	-- to make sure duplicate data cannot exist, create a unique index
	profileEmail VARCHAR(128) NOT NULL,
	-- to make something optional, exclude the not null
	profileHash CHAR(97) NOT NULL,
	profilePhone VARCHAR(32),
	UNIQUE(profileEmail),
	UNIQUE(profileAtHandle),
	-- this officiates the primary key for the entity
	PRIMARY KEY(profileId)
);


