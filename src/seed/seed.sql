CREATE TABLE `book` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(100),
  `author` varchar(100),
  `pages` int
);

CREATE TABLE `page` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `text` text,
  `book_id` int
);

ALTER TABLE `book` ADD FOREIGN KEY (`id`) REFERENCES `page` (`book_id`);
