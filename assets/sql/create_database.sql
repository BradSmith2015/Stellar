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
#-- removed the dummy data because it was of the wrong format
