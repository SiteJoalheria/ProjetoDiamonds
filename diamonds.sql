-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24-Maio-2023 às 22:39
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `diamonds`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `id_cli` int(11) NOT NULL,
  `Nome_cli` varchar(45) NOT NULL,
  `CPF_cli` varchar(45) NOT NULL,
  `Telefone_cli` varchar(45) NOT NULL,
  `Endereco_cli` varchar(45) NOT NULL,
  `Cidade_cli` varchar(45) NOT NULL,
  `Cep_cli` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Email_cli` varchar(100) DEFAULT NULL,
  `Senha_cli` varchar(100) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id_cli`, `Nome_cli`, `CPF_cli`, `Telefone_cli`, `Endereco_cli`, `Cidade_cli`, `Cep_cli`, `createdAt`, `updatedAt`, `Email_cli`, `Senha_cli`, `isAdmin`) VALUES
(1, '1', '1', '1', '1', '1', '1', '2023-05-22 20:47:01', '2023-05-23 20:44:18', '1', '1', 0),
(2, 'Administrador', '000.000.000-00', '(00)00000.0000', 'ENDEREÇO', 'CIDADE', '00000-000', '2023-05-23 19:53:09', '2023-05-23 20:31:38', 'root', '1234', 1),
(3, 'hghg', '65656', '6565656', 'fdgdfgdfg', 'nhnhnhn', '534534', '2023-05-23 20:47:32', '2023-05-23 20:47:32', 'paulinho', '12345', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `fornecedor`
--

CREATE TABLE `fornecedor` (
  `id_forne` int(11) NOT NULL,
  `NomeFantasia_forne` varchar(45) NOT NULL,
  `CNPJ_forne` varchar(20) DEFAULT NULL,
  `Email_forne` varchar(45) NOT NULL,
  `Telefone_forne` varchar(20) DEFAULT NULL,
  `Endereco_forne` varchar(45) NOT NULL,
  `Cep_forne` varchar(100) DEFAULT NULL,
  `Cidade_forne` varchar(45) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `razaoSocial_forne` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `fornecedor`
--

INSERT INTO `fornecedor` (`id_forne`, `NomeFantasia_forne`, `CNPJ_forne`, `Email_forne`, `Telefone_forne`, `Endereco_forne`, `Cep_forne`, `Cidade_forne`, `createdAt`, `updatedAt`, `razaoSocial_forne`) VALUES
(10, 'Varejo Ubaldo', '11.279.957/0001-35', 'varejo.ubaldo@geradornv.com.br', '(11) 99582-7774', 'Rua de Santo Fáveri', '13163', 'Artur Nogueira', '2023-05-22 15:38:06', '2023-05-22 15:38:06', 'Ubaldo Gouveia Varejo LTDA'),
(11, 'Linda Bela', '64.680.394/0001-59', 'consultoria.vasconcelos@geradornv.com.br', '(15) 98533-9203', 'Rua Avelino Beraldo', '13144', 'Paulínia', '2023-05-22 15:40:26', '2023-05-22 15:40:26', 'LINDA BELA SEMIJOIAS SP'),
(12, 'Herreiras semi-joias', '41.842.426/0001-70', 'bar.kassab@geradornv.com.br', '(12) 98673-5688', 'Rua Armando Emanoel Miachon', '13847', 'Mogi Guaçu', '2023-05-22 15:42:19', '2023-05-22 15:42:19', 'FORN. HERREIRA SEMI JOIAS SP'),
(13, 'joias Gecko', '14.456.086/0001-76', 'restaurante.velasco@geradornv.com.br', '(19) 97685-5225', 'Rua Rio Verde', '14060', 'Ribeirão Preto', '2023-05-22 15:43:01', '2023-05-22 15:43:01', 'FORN. JOIAS GECKO SP'),
(14, 'Spectra Joias', '17.278.237/0001-31', 'consultoria.baptista@geradornv.com.br', '(19) 99281-5238', 'Estrada Municipal Fernando Luiz Landgraf', '13634', 'Pirassununga', '2023-05-22 15:43:52', '2023-05-22 19:18:34', 'CAIO JOIAS SPECTRA SP'),
(15, 'Libertation Joias', '95.425.148/0001-84', 'pinturas.cunha@geradornv.com.br', '(15) 98165-7282', 'Rua Rembrandt', '13329', 'Salto', '2023-05-22 15:45:12', '2023-05-22 15:45:12', 'LIBERTATION JOIAS LTDA'),
(16, 'Joias Rainha', '27.453.584/0001-07', 'entulhos.santomauro@geradornv.com.br', '(16) 99731-7745', 'Rua Odin', '4648', 'São Paulo', '2023-05-22 15:45:54', '2023-05-22 15:45:54', 'RAINHA SEMI-JOIAS EPP'),
(17, 'Omega Joias', '10.934.138/0001-11', 'pinturas.garbelini@geradornv.com.br', '(16) 99463-9818', 'Rua Vicenzo Cardi', '8621', 'Suzano', '2023-05-22 15:46:41', '2023-05-22 15:46:41', 'DIAS MARTINS JOIAS ME'),
(18, 'Yukon Joias', '12.217.251/0001-01', 'floricultura.fontes@geradornv.com.br', '(19) 98667-3846', 'Rua César Leite', '12245', 'São José dos Campos', '2023-05-22 15:47:26', '2023-05-22 15:47:26', 'FONTE QUEIROZ YUKON JOIAS EPP'),
(20, 'Joias Barbosa', '45.961.703/0001-14', 'calcados.barsosa@geradornv.com.br', '(17) 97944-3876', 'Rua José Antônio Guedes', '12316-250', 'Jacareí', '2023-05-22 16:30:36', '2023-05-22 16:30:36', 'BARBOSA DORES JOIAS ME'),
(21, '123', '123', '123', '123', '123', '123', '123', '2023-05-23 19:14:38', '2023-05-23 19:14:38', '123');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id_prod` int(11) NOT NULL,
  `Nome_prod` varchar(255) NOT NULL,
  `Preco_prod` double DEFAULT NULL,
  `nomeForne_prod` varchar(200) DEFAULT NULL,
  `QuantAtualEst_prod` int(11) NOT NULL,
  `Imagem_prod` longblob NOT NULL,
  `Categoria_prod` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id_prod`, `Nome_prod`, `Preco_prod`, `nomeForne_prod`, `QuantAtualEst_prod`, `Imagem_prod`, `Categoria_prod`, `createdAt`, `updatedAt`) VALUES
(21, 'Aliança em Ouro Diamantada Fininha 2.6mm', 4720, 'Linda Bela', 10, 0x2f496d6167656e734361642f313638343737333137313232312d3237393637303034352e6a7067, 'aliança', '2023-05-22 16:32:51', '2023-05-22 16:32:51'),
(22, 'Aliança em Ouro com joia 4mm', 3547, 'Herreiras semi-joias', 10, 0x2f496d6167656e734361642f313638343737333233313838322d3233343137303630382e6a7067, 'aliança', '2023-05-22 16:33:51', '2023-05-22 16:33:51'),
(23, 'Aliança em Ouro Abaulada 6mm', 4310, 'Herreiras semi-joias', 20, 0x2f496d6167656e734361642f313638343737333234373336322d3835313531333730392e6a7067, 'aliança', '2023-05-22 16:34:07', '2023-05-22 16:34:07'),
(24, 'Aliança em Ouro Trabalhada com Detalhes 4.5mm', 5395, 'Herreiras semi-joias', 20, 0x2f496d6167656e734361642f313638343737333237343833332d3831333036363338372e6a7067, 'aliança', '2023-05-22 16:34:34', '2023-05-22 16:34:34'),
(25, 'Aliança em Ouro Branco Comfort com Pedras', 2470, 'Varejo Ubaldo', 30, 0x2f496d6167656e734361642f313638343737333238373630322d3539373836393436342e6a7067, 'aliança', '2023-05-22 16:34:47', '2023-05-22 16:34:47'),
(26, 'Aliança em Ouro Branco Aro Liso 3.9mm', 2230, 'Varejo Ubaldo', 25, 0x2f496d6167656e734361642f313638343737333330353039362d3831393337313635322e6a7067, 'aliança', '2023-05-22 16:35:05', '2023-05-22 16:35:05'),
(27, 'Aliança em Ouro Branco Reta Riscada com 1 Pedra', 1740, 'Spectra Joias', 20, 0x2f496d6167656e734361642f313638343737333332323134352d3438333239343135332e6a7067, 'aliança', '2023-05-22 16:35:22', '2023-05-22 16:35:22'),
(28, 'Aliança em Ouro Branco Comfort Grossa Lisa 7mm', 2280, 'Varejo Ubaldo', 10, 0x2f496d6167656e734361642f313638343737333333363534372d3831323034303631352e6a7067, 'aliança', '2023-05-22 16:35:36', '2023-05-22 16:35:36'),
(29, 'Aliança em Ouro 18k/750 Fina Trabalhada 2.75mm', 2400, 'Varejo Ubaldo', 18, 0x2f496d6167656e734361642f313638343737333335363532382d3633313437393735302e6a7067, 'aliança', '2023-05-22 16:35:56', '2023-05-22 16:35:56'),
(30, 'Aliança em Ouro 18k/750 Comfort Lisa 3.4mm', 1200, 'Varejo Ubaldo', 20, 0x2f496d6167656e734361642f313638343737333337353339332d3533383332303838382e6a7067, 'aliança', '2023-05-22 16:36:15', '2023-05-22 16:36:15'),
(31, 'Aliança em Ouro 18k/750 Lisa Fina 1.1mm', 435, 'Varejo Ubaldo', 30, 0x2f496d6167656e734361642f313638343737333339303536312d3438383238333739332e6a7067, 'aliança', '2023-05-22 16:36:30', '2023-05-22 16:36:30'),
(32, 'Aliança em Ouro 18k/750 Diamantada Fininha 2.6mm', 880, 'Varejo Ubaldo', 25, 0x2f496d6167656e734361642f313638343737333430373538372d3830333138393930302e6a7067, 'aliança', '2023-05-22 16:36:47', '2023-05-22 16:36:47'),
(33, 'Pingente em Ouro 18k/750 Chuveiro 6mm com Diamantes', 2587, 'Joias Rainha', 10, 0x2f496d6167656e734361642f313638343737333436333832322d3930303238323330342e6a7067, 'pingente', '2023-05-22 16:37:43', '2023-05-22 16:37:43'),
(34, 'Pingente em Ouro 18k/750 Ponto de Luz com Asinha', 839, 'Yukon Joias', 20, 0x2f496d6167656e734361642f313638343737333438333034312d3935343633323836332e6a7067, 'pingente', '2023-05-22 16:38:03', '2023-05-22 16:38:03'),
(35, 'Pingente em Ouro 18k/750 Cruz com Coração Cravejado', 1378, 'Joias Barbosa', 20, 0x2f496d6167656e734361642f313638343737333439393631342d36383039303038332e6a7067, 'pingente', '2023-05-22 16:38:19', '2023-05-22 16:38:19'),
(36, 'Pingente em Ouro 18k/750 Separador Três Fileiras', 1129, 'Varejo Ubaldo', 38, 0x2f496d6167656e734361642f313638343737333531383231372d3930323839343937352e6a7067, 'pingente', '2023-05-22 16:38:38', '2023-05-22 16:38:38'),
(37, 'Gargantilha em Ouro 18k/750 Ponto de Luz com Pedra 5mm', 1838, 'Yukon Joias', 20, 0x2f496d6167656e734361642f313638343737333533393936392d3233303330343639342e6a7067, 'pingente', '2023-05-22 16:38:59', '2023-05-22 16:38:59'),
(38, 'Pingente em Ouro 18k/750 Oval Fileira', 1199, 'Libertation Joias', 20, 0x2f496d6167656e734361642f313638343737333535353832392d3132383335323136342e6a7067, 'pingente', '2023-05-22 16:39:15', '2023-05-22 16:39:15'),
(39, 'Pingente em Ouro 18k/750 Canga Dupla Cravejada', 1007, 'Varejo Ubaldo', 8, 0x2f496d6167656e734361642f313638343737333537313532382d3835353136343937352e6a7067, 'pingente', '2023-05-22 16:39:31', '2023-05-22 16:39:31'),
(40, 'Pingente em Ouro 18k/750 Girassol Médio', 1678, 'Joias Barbosa', 5, 0x2f496d6167656e734361642f313638343737333538373139382d3830353635333030302e6a7067, 'pingente', '2023-05-22 16:39:47', '2023-05-22 16:39:47'),
(41, 'Pingente em Ouro 18k/750 Separador com 24 Pedras', 779, 'Varejo Ubaldo', 12, 0x2f496d6167656e734361642f313638343737333630333737352d3233373939363437382e6a7067, 'pingente', '2023-05-22 16:40:03', '2023-05-22 16:40:03'),
(42, 'Pingente em Ouro 18k/750 Ponto de Luz 3mm', 335, 'Libertation Joias', 20, 0x2f496d6167656e734361642f313638343737333632333239392d3630323331313737392e6a7067, 'pingente', '2023-05-22 16:40:23', '2023-05-22 16:40:23'),
(43, 'Pingente em Ouro 18k/750 Miolo Flor Pavê', 1309, 'Spectra Joias', 7, 0x2f496d6167656e734361642f313638343737333634313531372d3939333136363936352e6a7067, 'pingente', '2023-05-22 16:40:41', '2023-05-22 16:40:41'),
(44, 'Pingente em Ouro 18k/750 Canga com Coração ', 2314, 'Spectra Joias', 15, 0x2f496d6167656e734361642f313638343737333635363637382d3835353733373431382e6a7067, 'pingente', '2023-05-22 16:40:56', '2023-05-22 16:40:56'),
(45, 'Pulseira em Ouro 18k/750 Groumet Achatada 22cm', 13968, 'Libertation Joias', 5, 0x2f496d6167656e734361642f313638343737333637393436392d3231343538333532352e6a7067, 'pulseira', '2023-05-22 16:41:19', '2023-05-22 16:41:19'),
(46, 'Pulseira em Ouro 18k/750 3x1 21.5cm', 7368, 'Libertation Joias', 7, 0x2f496d6167656e734361642f313638343737333639353134312d3336323938313939382e6a7067, 'pulseira', '2023-05-22 16:41:35', '2023-05-22 16:41:35'),
(47, 'Pulseira em Ouro 18k/750 Groumet Achatada', 5275, 'Herreiras semi-joias', 10, 0x2f496d6167656e734361642f313638343737333731353734322d3739373033353839312e6a7067, 'pulseira', '2023-05-22 16:41:55', '2023-05-22 16:41:55'),
(48, 'Pulseira em Ouro 18k/750 Infantil com Rosto de Menino', 3057, 'Varejo Ubaldo', 8, 0x2f496d6167656e734361642f313638343737333733323532352d3230363338393938302e6a7067, 'pulseira', '2023-05-22 16:42:12', '2023-05-22 16:42:12'),
(49, 'Pulseira em Ouro 18k/750 Infinito com Zircônias', 8069, 'Varejo Ubaldo', 12, 0x2f496d6167656e734361642f313638343737333735303132332d3630363432383037342e6a7067, 'pulseira', '2023-05-22 16:42:30', '2023-05-22 16:42:30'),
(50, 'Pulseira em Ouro 18k/750 Bola 7mm Diamantada 20cm', 7654, 'Varejo Ubaldo', 11, 0x2f496d6167656e734361642f313638343737333736383137312d3230333832323434372e6a7067, 'pulseira', '2023-05-22 16:42:48', '2023-05-22 16:42:48'),
(51, 'Pulseira em Ouro 18k/750 Infantil de Bolinha 13,5cm', 1279, 'Varejo Ubaldo', 16, 0x2f496d6167656e734361642f313638343737333738343835362d3731393831343433312e6a7067, 'pulseira', '2023-05-22 16:43:04', '2023-05-22 16:43:04'),
(52, 'Pulseira em Ouro 18k/750 Riviera 3mm 20cm', 14028, 'Linda Bela', 22, 0x2f496d6167656e734361642f313638343737333830323630332d3832333033313538392e6a7067, 'pulseira', '2023-05-22 16:43:22', '2023-05-22 16:43:22'),
(53, 'Pulseira em Ouro 18k/750 Milano com Coração', 15167, 'joias Gecko', 13, 0x2f496d6167656e734361642f313638343737333832343630352d3834313832343134332e6a7067, 'pulseira', '2023-05-22 16:43:44', '2023-05-22 16:43:44'),
(54, 'Pulseira em Ouro 18k/750 Portuguesa Amor', 3288, 'Joias Barbosa', 20, 0x2f496d6167656e734361642f313638343737333834343632312d3736343531363230382e6a7067, 'pulseira', '2023-05-22 16:44:04', '2023-05-22 16:44:04'),
(55, 'Pulseira em Ouro 18k/750 Milano Moment Elefante', 23320, 'Varejo Ubaldo', 3, 0x2f496d6167656e734361642f313638343737333836313735382d3534323034383137312e6a7067, 'pulseira', '2023-05-22 16:44:21', '2023-05-22 16:44:21'),
(56, 'Pulseira em Ouro 18k/750 Portuguesa com Pingente', 2517, 'Linda Bela', 10, 0x2f496d6167656e734361642f313638343737333837383930362d3431363435333631372e6a7067, 'pulseira', '2023-05-22 16:44:38', '2023-05-22 16:44:38'),
(57, 'Brinco em Ouro Ear Cuff Fileira e Navetes', 4164, 'Varejo Ubaldo', 8, 0x2f496d6167656e734361642f313638343737333930373238302d3133323039383736352e6a7067, 'brinco', '2023-05-22 16:45:07', '2023-05-22 16:45:07'),
(58, 'Brinco em Ouro Ear cuff Exclusivo com Diamantes', 3954, 'Spectra Joias', 9, 0x2f496d6167656e734361642f313638343737333933303532332d3937373136343131332e6a7067, 'brinco', '2023-05-22 16:45:30', '2023-05-22 16:45:30'),
(59, 'Brinco em Ouro Ear Cuff Crescente Seta', 2218, 'Libertation Joias', 5, 0x2f496d6167656e734361642f313638343737333934333830302d3936313839393635392e6a7067, 'brinco', '2023-05-22 16:45:43', '2023-05-22 16:45:43'),
(60, 'Brinco em Ouro Ear Cuff Raminho com Pedras', 1457, 'Varejo Ubaldo', 15, 0x2f496d6167656e734361642f313638343737333935383430352d3238353934353230392e6a7067, 'brinco', '2023-05-22 16:45:58', '2023-05-22 16:45:58'),
(61, 'Brinco em Ouro Argola Bicolor Diamantada', 3177, 'Varejo Ubaldo', 10, 0x2f496d6167656e734361642f313638343737333937373434322d3538303430383335352e6a7067, 'brinco', '2023-05-22 16:46:17', '2023-05-22 16:46:17'),
(62, 'Brinco em Ouro Argola Gota com Bolinhas ', 4496, 'Linda Bela', 22, 0x2f496d6167656e734361642f313638343737333939353431302d3636363739383634372e6a7067, 'brinco', '2023-05-22 16:46:35', '2023-05-22 16:46:35'),
(63, 'Brinco em Ouro Coração com Detalhes Fosco', 1558, 'Varejo Ubaldo', 25, 0x2f496d6167656e734361642f313638343737343031303934392d31323939373533372e6a7067, 'brinco', '2023-05-22 16:46:50', '2023-05-22 16:46:50'),
(64, 'Brinco em Ouro Argola com Quatro Estrelas Tricolor', 2817, 'Varejo Ubaldo', 19, 0x2f496d6167656e734361642f313638343737343032393830372d3432393439313133342e6a7067, 'brinco', '2023-05-22 16:47:09', '2023-05-22 16:47:09'),
(65, 'Brinco em Ouro Elos Navetes e Redondos', 1699, 'Joias Barbosa', 10, 0x2f496d6167656e734361642f313638343737343034333330352d3130323834323134372e6a7067, 'brinco', '2023-05-22 16:47:23', '2023-05-22 16:47:23'),
(66, 'Brinco em Ouro Elos Navete Pequeno', 1318, 'Omega Joias', 20, 0x2f496d6167656e734361642f313638343737343035373537342d3835323938393135392e6a7067, 'brinco', '2023-05-22 16:47:37', '2023-05-22 16:47:37'),
(67, 'Brinco em Ouro Elos Ovais Múltiplos com Coração', 3278, 'joias Gecko', 14, 0x2f496d6167656e734361642f313638343737343037353733352d3334303836393032302e6a7067, 'brinco', '2023-05-22 16:47:55', '2023-05-22 16:47:55'),
(68, 'Brinco em Ouro Argolas Diamantadas', 2082, 'Spectra Joias', 10, 0x2f496d6167656e734361642f313638343737343039323435362d3734333939373437392e6a7067, 'brinco', '2023-05-22 16:48:12', '2023-05-22 16:48:12'),
(69, 'Piercing em Ouro 18k/750 Argola Redonda Cravejada', 899, 'Herreiras semi-joias', 30, 0x2f496d6167656e734361642f313638343737343131343530342d3236383032313738342e6a7067, 'piercing', '2023-05-22 16:48:34', '2023-05-22 16:48:34'),
(70, 'Piercing em Ouro 18k/750 Cravejado com Pedras Navete', 1079, 'Herreiras semi-joias', 28, 0x2f496d6167656e734361642f313638343737343133303038302d3837333233393137372e6a7067, 'piercing', '2023-05-22 16:48:50', '2023-05-22 16:48:50'),
(71, 'Piercing em Ouro 18k/750 Ponto de Luz ', 539, 'Linda Bela', 35, 0x2f496d6167656e734361642f313638343737343135313435332d3838313938323734312e6a7067, 'piercing', '2023-05-22 16:49:11', '2023-05-22 16:49:11'),
(72, 'Piercing em Ouro 18k/750 Argola Coração Cravejado', 1262, 'Joias Rainha', 10, 0x2f496d6167656e734361642f313638343737343136363239312d3539323730373731332e6a7067, 'piercing', '2023-05-22 16:49:26', '2023-05-22 16:49:26'),
(73, 'Piercing em Ouro 18k/750 Argola Coração Rainbow', 1165, 'Spectra Joias', 8, 0x2f496d6167656e734361642f313638343737343138303737322d3234303633383533302e6a7067, 'piercing', '2023-05-22 16:49:40', '2023-05-22 16:49:40'),
(74, 'Piercing em Ouro 18k/750 Argola Rainbow ', 779, 'Varejo Ubaldo', 23, 0x2f496d6167656e734361642f313638343737343230303031382d37373933323536342e6a7067, 'piercing', '2023-05-22 16:50:00', '2023-05-22 16:50:00'),
(75, 'Piercing de Nariz em Ouro 18k/750 Argola Septo', 479, 'Varejo Ubaldo', 14, 0x2f496d6167656e734361642f313638343737343231373239322d3138383633363931332e6a7067, 'piercing', '2023-05-22 16:50:17', '2023-05-22 16:50:17'),
(76, 'Piercing de Nariz em Ouro 18k/750 Nostril Ponto de Luz', 194, 'Yukon Joias', 35, 0x2f496d6167656e734361642f313638343737343233353934322d35373830333533332e6a7067, 'piercing', '2023-05-22 16:50:35', '2023-05-22 16:50:35'),
(77, 'Piercing de Nariz em Ouro 18k/750 Nostril Bolinha', 254, 'Varejo Ubaldo', 31, 0x2f496d6167656e734361642f313638343737343235303233382d39323138343536332e6a7067, 'piercing', '2023-05-22 16:50:50', '2023-05-22 16:50:50'),
(78, 'Piercing em Ouro 18k/750 Nariz Segment 10mm', 199, 'Herreiras semi-joias', 40, 0x2f496d6167656e734361642f313638343737343237303030382d3839303837343134362e6a7067, 'piercing', '2023-05-22 16:51:10', '2023-05-22 16:51:10'),
(79, 'Piercing de orelha prata 925 banho dourado', 290, 'Varejo Ubaldo', 28, 0x2f496d6167656e734361642f313638343737343238373732392d3331323639323539392e6a7067, 'piercing', '2023-05-22 16:51:27', '2023-05-22 16:51:27'),
(80, 'Piercing de Prata 925 Dourado com Gema Redonda', 490, 'Joias Rainha', 22, 0x2f496d6167656e734361642f313638343737343330333430392d3830313538313433392e6a7067, 'piercing', '2023-05-22 16:51:43', '2023-05-22 16:51:43');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cli`);

--
-- Índices para tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  ADD PRIMARY KEY (`id_forne`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id_prod`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cli` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  MODIFY `id_forne` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
