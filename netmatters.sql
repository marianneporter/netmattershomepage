-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2023 at 11:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netmatters`
--

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_form`
--

CREATE TABLE `enquiry_form` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `message` varchar(1024) NOT NULL,
  `marketing_info_check` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enquiry_form`
--

INSERT INTO `enquiry_form` (`id`, `name`, `company_name`, `email`, `phone_number`, `message`, `marketing_info_check`) VALUES
(7, 'Mary Jones', 'Mary\'s Cupcakes', 'mary@test.com', '0131 9496 0475', 'Please contact me soon to discuss how I can improve my digital marketing for my delicious cakes.', 1),
(8, 'Bobby Smith', 'Bob\'s Building Inc', 'bob@test.com', '07700 900077', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 0),
(9, 'Marjorie Evans', '', 'marjorie@test.com', '07700 900461', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 0);

-- --------------------------------------------------------

--
-- Table structure for table `latest_news`
--

CREATE TABLE `latest_news` (
  `id` int(11) NOT NULL,
  `category` varchar(30) NOT NULL,
  `main_img` varchar(127) NOT NULL,
  `main_img_desc` varchar(255) NOT NULL,
  `service` varchar(50) NOT NULL,
  `title` varchar(127) NOT NULL,
  `description` varchar(600) NOT NULL,
  `posted_by_name` varchar(50) NOT NULL,
  `posted_by_img` varchar(127) NOT NULL,
  `posted_by_desc` varchar(127) NOT NULL,
  `posted_by_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `latest_news`
--

INSERT INTO `latest_news` (`id`, `category`, `main_img`, `main_img_desc`, `service`, `title`, `description`, `posted_by_name`, `posted_by_img`, `posted_by_desc`, `posted_by_date`) VALUES
(1, 'Careers', 'images/latest-news/digital-marketing-executive-UmWA.jpg', 'header image for digital marketing executive opportunity', 'marketing', 'Digital Marketing Executive', 'Salary Range £28,000 - £34,000 per annum + Bonus Hours 40 hours per week, Mon-Fri. Location Wymondh...', 'Jim Palmer', 'images/latest-news/james-palmer-1KKg.jpg', 'image of Jim Palmer', '2023-06-16'),
(2, 'Careers', 'images/latest-news/ppc-specialist-6XQl.png', 'header image for PPC specialist opportunity', 'marketing', 'PPC Specialist', 'Salary Range £30,000 - £34,000 per annum + Bonus Hours 40 hours per week, Mon - Fri Location Wymondh...,', 'Jim Palmer', 'images/latest-news/james-palmer-1KKg.jpg', 'image of Jim Palmer', '2023-06-14'),
(3, 'Case Study', 'images/latest-news/iceni-roofing-yPcB.png', 'title image case study iceni roofing', 'web-design', 'Iceni Roofing - Web Case Study', 'The Client Iceni Roofing are a family-run, Norfolk-based business, specialising in commercial and dom...', 'Netmatters', 'images/netmatters-ltd-VXAv.webp', 'posted by netmatters', '2023-06-14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `enquiry_form`
--
ALTER TABLE `enquiry_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `latest_news`
--
ALTER TABLE `latest_news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `enquiry_form`
--
ALTER TABLE `enquiry_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `latest_news`
--
ALTER TABLE `latest_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
