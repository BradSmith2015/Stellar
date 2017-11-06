--This script will check if the database exists, and if it doesn't, it will create it.
--From there, it will create the tables if they don't exist, and then I'll add some test entries
--manually

--Creating the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS Stellar;

--Check if liked_songs table exists and create it if not
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='liked_songs' and xtype='U')
    create table liked_songs (
        Name varchar(64) not null
    )
go

--Check if liked_artists table exists and create if not
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='liked_artists' and xtype='U')
    create table liked_artists (
        Name varchar(64) not null
    )
go


