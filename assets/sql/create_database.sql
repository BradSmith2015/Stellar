#--This script will check if the database exists, and if it doesn't, it will create it.
#--From there, it will create the tables if they don't exist, and then I'll add some test entries
#--manually

#--Creating the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS Stellar;

#--Use Stellar
use Stellar;

#--Check if users table exists and create it if not
create table if not exists users (
    id int not null,
    email varchar(255) not null,
    password varchar(255) not null
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;

#--Check if liked_songs table exists and create it if not
create table if not exists liked_songs (
    u_id int not null,
    s_id varchar(255) not null
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;


#--Check if liked_artists table exists and create if not
create table if not exists liked_artists (
    u_id int not null,
    a_id varchar(255) not null
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=7;

#--This will add some dummy data
insert into users (id, email, password)
	values
	(1, 'vail.dorhcester@colorado.edu', 'password'),
	(2, 'vail.p.dorchester@gmail.com', 'password1');

#--More dummy daya
insert into liked_artists (u_id, a_id)
	values
	(1, 'Kendrick Lamar'),
	(1, 'Beirut'),
	(2, 'Thundercat');

#--Even more data
insert into liked_songs (u_id, s_id)
	values
	(1, 'Oh Devil'),
	(1, 'Get Healed'),
	(1, 'The Youth'),
	(2, 'Pumped Up Kicks');

