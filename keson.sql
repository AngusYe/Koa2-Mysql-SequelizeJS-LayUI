/*
Navicat MySQL Data Transfer

Source Server         : ccd
Source Server Version : 50634
Source Host           : localhost:3306
Source Database       : keson

Target Server Type    : MYSQL
Target Server Version : 50634
File Encoding         : 65001

Date: 2019-10-23 10:31:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for about
-- ----------------------------
DROP TABLE IF EXISTS `about`;
CREATE TABLE `about` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeid` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `encontent` longtext,
  `honer` longtext,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of about
-- ----------------------------
INSERT INTO `about` VALUES ('1', '1', '<p><span>深圳市基胜电子有限公司创立于二零零四年，公司占地面积3000平方米，生产人员及管理人员达百余人；坐落在深圳福永橋頭富海工業區，是一家专业于高品质数码家庭影院、多媒体音响、激光视盘机、指南针等光电子技术产品设计、开发、生产、 销售、服务于一体的大型全资高科技企业 。</span><br><span>主要产品包括VCD/DVD播放机，Portable DVD播放机，DVD 刻录机，硬盘DVD刻录机，家庭影院，Mini-Combo, DVB-T机顶盒，HDTV, 指南针等多种系列产品。</span><br><span>公司实施ISO9001管理，从来料检测，生产制造，品质检验都严格按照国际标准，保证所有的产品是可靠，安全的。并获得了PHILIP LICESEN (3C认证) 和CE\\CB等多项认证。</span><br><span>基胜电子与ESS、SUNPLUS、MTK、SONY、SANYO、SAMSUNG等国际著名企业建立了长期紧密的战略合作伙伴关系；客户遍布于世界各地，产品远销欧盟，北美，南美，东南亚等市场.&nbsp;</span><br><span>基胜电子热忱欢迎新老朋友共同关注,共同发展,创造更美好的明天!</span><br><span>经营理念：以质量求效益；以质量得信任；以质量创名牌；</span><br><span>公司目标：为客户创造价值，为员工创造机会；为社会创造财富</span></p>', '<p class=\"_tgt transPara\"><span data-group=\"0-0\" class=\"transSent\">Founded in 2004, shenzhen jisheng electronics co., LTD. Covers an area of 3,000 square meters, with more than 100 production and management personnel.</span><span data-group=\"0-1\" class=\"transSent highlight\">Located in fuyong qiaotou fuhai industrial zone, shenzhen, it is a large-scale wholly-owned high-tech enterprise specializing in the design, development, production, sales and service of high-quality digital home theater, multimedia audio, laser video disc machine, compass and other optoelectronic technology products.</span></p><p class=\"_tgt transPara\"><span data-group=\"1-0\" class=\"transSent\">Main products include VCD/DVD player, Portable DVD player, DVD burner, hard disk DVD burner, home theater, mini-combo, dvb-t set-top box, HDTV, compass and other series.</span></p><p class=\"_tgt transPara\"><span data-group=\"2-0\" class=\"transSent\">The company implements ISO9001 management, from incoming material inspection, manufacturing, quality inspection are strictly in accordance with international standards, to ensure that all products are reliable and safe.</span><span data-group=\"2-1\" class=\"transSent\">It has obtained several certifications such as PHILIP LICESEN (3C certification) and CE\\CB.</span></p><p class=\"_tgt transPara\"><span data-group=\"3-0\" class=\"transSent\">Kisheng electronics has established long-term and close strategic cooperative partnership with ESS, SUNPLUS, MTK, SONY, SANYO, SAMSUNG and other international famous enterprises.</span><span data-group=\"3-1\" class=\"transSent\">Customers all over the world, products are exported to the eu, North America, South America, southeast Asia and other markets.</span></p><p class=\"_tgt transPara\"><span data-group=\"4-0\" class=\"transSent\">Kisheng electronics warmly welcomes new and old friends to pay attention to, develop together and create a better tomorrow!</span></p><p class=\"_tgt transPara\"><span data-group=\"5-0\" class=\"transSent\">Business philosophy: seek efficiency by quality;</span><span data-group=\"5-1\" class=\"transSent\">Trust in quality;</span><span data-group=\"5-2\" class=\"transSent\">Create famous brand with quality;</span></p><p class=\"_tgt transPara\"><span data-group=\"6-0\" class=\"transSent\">Company goal: create value for customers, create opportunities for employees;</span><span data-group=\"6-1\" class=\"transSent\">Create wealth for society</span></p>', null, '2019-08-26 09:21:49', '2019-09-10 16:57:29');
INSERT INTO `about` VALUES ('2', '2', '<p>&nbsp; &nbsp; &nbsp; &nbsp;在高科技技术飞速发展的时代，年轻的基胜电子稳扎稳打，一步一个脚印在前进。在这期间，我们提升了企业实力，形成了企业风格，建设了企业文化，也获得了来自政府，社会和行业的肯定，但我们还只是“在路上”。我们<span>凭着不断开拓创新的生产工艺，严格的产品质量控制，优良的售后服务，基胜品牌已成为广大客户值得信赖的标志</span></p><p>　　在这样一个激越变革的年代，基胜电子将坚定自己的步伐，仍需务实的努力的实践，以品质为保证，以诚信为纽带，坚持“<span>以质量求效益；以貭量得信任；以质量创名牌</span>”的企业<span>经营理念</span>，建设一个具有积极、良好、向上的企业团队，为行业发展提供更多有价值的帮助与服务，实现企业社会价值的体现。</p><p>　　视昨日为过去，把今天作起点，基胜电子的未来，依然任重而道远。但我们相信，方向对了，路就不远。昨天，我们风雨同舟，明天，我们共享丰收。</p>', '<p>&nbsp; &nbsp; &nbsp; &nbsp; In the era of rapid development of high-tech technology, the young ji sheng electronics steady, step by step forward. During this period, we have enhanced our corporate strength, formed our corporate style, built our corporate culture, and gained recognition from the government, society and industry. However, we are still on the way. With our continuous pioneering and innovative production process, strict product quality control, and excellent after-sales service, gisheng brand has become a reliable symbol for our customers</p><p>&nbsp; &nbsp; &nbsp; &nbsp; In such an era of radical change, ji sheng electronics will firm its own pace, still need to be pragmatic efforts to practice, to quality as a guarantee, to integrity as a link, adhere to the \"quality for efficiency; With 貭 quantity have to trust; With the business philosophy of \"creating famous brand with quality\", we will build a positive, good and upward enterprise team to provide more valuable help and service for the development of the industry and realize the embodiment of the social value of the enterprise.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; With yesterday as the past and today as the starting point, we still have a long way to go in the future. But we believe that if we go in the right direction, we won\'t be far away. Yesterday, we stood together through thick and thin, tomorrow, we share the harvest.</p><p><br></p>', null, '2019-08-26 09:26:37', '2019-09-08 21:09:13');
INSERT INTO `about` VALUES ('3', '4', '<p></p><p><span><b>公司宗旨：</b></span></p><p><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 为客户创造价值；为员工创造机会；为社会创造财富。</span></p><p><b>经营理念：</b></p><p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</b>以质量求效益；以貭量得信任；以质量创名牌。</p><p></p>', '<p><b>Company tenet:</b></p><p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Create value for customers; Create opportunities for employees; Create wealth for society.</b></p><p><b>Business philosophy:</b></p><p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Seek benefit by quality; Trust in quality; Create famous brand with quality.</b></p>', null, '2019-08-26 09:57:08', '2019-09-08 21:15:19');

-- ----------------------------
-- Table structure for advice
-- ----------------------------
DROP TABLE IF EXISTS `advice`;
CREATE TABLE `advice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `status` int(11) DEFAULT '0',
  `title` longtext NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of advice
-- ----------------------------
INSERT INTO `advice` VALUES ('1', 'sdfsdf', 'ygz0717@163.com', '13345345345', '243234', '0', '232342', '2019-08-28 09:36:31', '2019-08-28 09:36:31');
INSERT INTO `advice` VALUES ('2', '孙羽', '2349283@qq.com', '17304455016', 'qweqweqwe', '0', 'Swiper 轮播插件的使用', '2019-08-28 09:39:25', '2019-08-28 09:39:25');
INSERT INTO `advice` VALUES ('3', '孙羽', 'ygz0717@163.com', '17304455016', '123123', '0', 'Swiper 轮播插件的使用', '2019-08-28 09:41:44', '2019-08-28 09:41:44');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `entitle` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `encontent` longtext,
  `content` longtext NOT NULL,
  `status` int(11) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('14', '2', 'Samsung no longer sells blu-ray players in the United States', '三星不再于美国推出蓝光播放机产品', '<p>Following the announcement by OPPO Digital (USA), the leader of blu-ray players, that it is phasing out 4K UHD players, samsung recently responded by not introducing new models of blu-ray players in the us market and phasing out new models including 1080P blu-ray players and 4K UHD blu-ray players.</p><p>Samsung did not elaborate on the decision, but in terms of the market, there are several reasons.</p><p>First, the HDR format valued by uhd content has not yet unified direction, making it difficult for manufacturers to follow. Samsung, for example, once had a player that supported HDR10, but the market recently touted Dolby\'s HDR</p><p>Second, the popularity of streaming video services has a direct impact on the existence value of blu-ray discs, because the former can provide audiences with a new generation of movie-watching experience in a cheaper and more convenient way.</p><p>Third, the audience who will pursue the ultimate performance is still only a small number of players who are enthusiastic and cannot support the whole industry.</p>', '<p><span>继蓝光播放器领军者OPPO Digital（美国）宣布逐步停止制造4K UHD播放机后，三星也于近期回应不再在美国市场推出蓝光播放器新机型，并逐步停止制造包括1080P蓝光机及4K UHD蓝光播放机新品。</span></p><p><br></p><p style=\"text-align: center;\"><img src=\"/upload/d70d0f0e82e3f.jpg\" alt=\"undefined\"></p><p><br></p><p><br></p><p>对于这一决定，三星并没有进一步解释，但是从市场方面来看，不外于以下几点原因。</p><p>&nbsp;&nbsp;&nbsp; 一、超高清内容所看重的 HDR 格式至今仍未有统一的方向，让厂商难以跟随。像是三星曾经推出一台支持 HDR10 格式的播放器，然而市场近来却吹捧着 Dolby 家的 HDR 格式</p><p>&nbsp;&nbsp;&nbsp; 二，串流视频服务的大行其道更是直接影响蓝光碟的存在价值，因为前者能够以更便宜、更方便的方式来让观众享受新世代的观影体验。</p><p>&nbsp;&nbsp;&nbsp; 三，会追求极致表现的观众，始终还是只属于发烧级玩家的小数，难以支撑整个行业。</p>', '1', '2019-08-26 15:46:41', '2019-09-08 22:53:25');
INSERT INTO `article` VALUES ('15', '2', 'OPPO\'s new 4K UHD high-end blu-ray player udp-205 is coming soon', 'OPPO全新4K UHD高端蓝光播放机UDP-205即将发布', '<p>&nbsp; &nbsp; &nbsp; Shanghai advanced HIFI presentation (SIAV) will be held in Shanghai jinjiang hotel from April 21 to 23. OPPO will be presented with the SonicaDAC wireless audio decoder and udp-2034k blu-ray player, while the flagship 4K blu-ray player udp-205 will also make its debut.</p><p>&nbsp; &nbsp; &nbsp; Two devices powered by the ESSES9038PRO decoding chip are about to come on stage together, bringing a shocking original sound experience. At the same time, OPPO audio and video engineers will present 4K and HDR effects on site, so that you can experience 4K at the moment.</p><p>&nbsp; &nbsp; &nbsp; The theme of this exhibition is to restore a high-quality audio-visual art life, which is also the philosophy that OPPO has always adhered to. Whether it is SonicaDAC with ESS9038, or udp-203 blu-ray player with 4K and HDR functions, the beauty of science and technology radiates in simplicity and simplicity, adding to your audio and video life.</p><p>&nbsp; &nbsp; &nbsp; As an hd wireless audio decoder, SonicaDAC is equipped with ESSES9038PROSABREDAC to provide a pure sound quality experience, while simultaneously providing hd network player functions. Let you enjoy your favorite music even more.</p><p>&nbsp; &nbsp; &nbsp; 4KUHD blu-ray player udp-203, equipped with professional four-core system chip OP8591, with advanced image decoding and processing technology, supports 4K ultra-hd picture quality and HDR video technology, the image is clear and sharp, rich and full of color. As always, we have inherited the excellent quality of OPPO products.</p><p>&nbsp; &nbsp; &nbsp; The flagship 4K blu-ray player udp-205 is upgraded specifically for the audio part over the udp-203. Using the same ESSES9038PRO decoding chip as SonicaDAC, it brings a purest sound quality experience.</p>', '<p>上海高级HIFI演示会（SIAV)，将于4月21-23日在上海锦江饭店举行。OPPO影音将携SonicaDAC无线音频解码器与UDP-2034K蓝光播放器到场演示，同时旗舰级4K蓝光播放器UDP-205也将首次亮相。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;两个搭载ESSES9038PRO解码芯片的产品即将同台登场，带来震撼的原音体验。同时OPPO影音工程师现场专题讲解4K及演示HDR效果，零距离体验4K尽在此刻。</p><p style=\"text-align: center; \">&nbsp;&nbsp;&nbsp;&nbsp;本次展会的主题为还原一个高品质的影音艺术生活，这也是OPPO影音一贯坚持的理念。无论是搭载ESS9038的SonicaDAC，还是支持4K及HDR功能的UDP-203蓝光播放器，均于简约内敛之中散发出科技的美感，为您的影音生活锦上添花。</p><p style=\"text-align: center;\"><img src=\"/upload/6ea7d652ca92e.jpg\" alt=\"undefined\"><br></p><p><br></p><p style=\"text-align: center;\"><span>SonicaDAC作为一台高清无线音频解码器，配备ESSES9038PROSABREDAC带来纯臻音质体验，同时兼具高清网络播放器功能。让您更加沉醉于自己最爱的音乐。</span></p><p style=\"text-align: center; \"><span><img src=\"/upload/f51de1ba4d766.jpg\" alt=\"undefined\"><br></span></p><p><span><br></span></p><p><span>&nbsp;4KUHD蓝光播放机UDP-203，搭载了专业级四核系统芯片OP8591，配合先进的图像解码与处理技术，支持4K超高清画质与HDR视像技术，图像清晰锐利，色彩浓郁饱满。一如既往地传承了OPPO影音历代产品的精良品质。</span></p><p style=\"text-align: center; \"><span><img src=\"/upload/e49aed3aa5972.jpg\" alt=\"undefined\"><br></span></p><p><span><br></span></p><p><span>旗舰级4K蓝光播放器UDP-205在UDP-203的基础上，专门针对音频部分进行升级。采用与SonicaDAC相同的ESSES9038PRO解码芯片，带来更加纯臻的音质体验。</span></p>', '1', '2019-08-26 15:46:49', '2019-09-08 23:14:31');
INSERT INTO `article` VALUES ('16', '2', 'DVD players: shrinking and struggling', 'DVD播放机：萎缩不断，困局延续', '<p>On March 3, 2011, the Chinese authority ICT research and management consulting firm ccid consulting co., LTD. (stock code: HK8235) in the \"2011 annual meeting of China\'s consumer electronics market\" published on the DVD player in China market research in 2010-2011 annual report showed that in 2010 China DVD market increasingly shrinking, blu-ray DVD player performance is disappointing. Sales of DVD players in China have been declining since 2007. Blu-ray DVD players cut prices in 2010 in hopes of luring consumers with high-end technology and boosting sales, but the market slowed and didn\'t generate much demand.</p><p>2011 is a year full of opportunities and challenges for China\'s DVD market, especially whether blu-ray DVD players can continue to develop in the Chinese market. With China\'s current efforts to develop the integration of three networks, I believe that consumer demand for hd playback equipment will be increasingly expanding. In the face of promising demand for hd, the influence of the market in which hd DVD is sold depends on how hd DVD can mitigate the factors holding it back and replace the dominant position of DVD in replacing hd playback devices.</p><p>The market situation</p><p>(I) the market continues to shrink and sales volume drops again</p><p>China\'s DVD player market continued its downward trend in 2010, with 10.693 million players sold, or 4.67 billion yuan. In 2010, the sales volume of DVD players in China is still dominated by ordinary standard clear DVD, but the standard clear DVD market is already saturated, the effective demand is greatly reduced, the industry enters a recession period, and the industry profit further shrinks. Sales of blu-ray DVD players rose in 2010, slowing the decline of standard-clearing DVD players but not nearly making up for it.</p><p>(I) excessive brand competition, the price continues to go down</p><p>Because DVD production admittance threshold is not high, there have been many small and medium enterprises, competition is intense, at the same time, the economic downturn, make consumer spending behavior becomes more cautious, sharp decline in DVD sales, businesses have to use the price war to seize market share, but excessive competition makes domestic DVD production enterprise profits shrink, many enterprises is very difficult to compete on price, a poor foundation have to face the difficulties of survival. At the same time, as DVD players mature to make prices more transparent, the era of windfall profits is over.</p><p>In 2010, the leading product in China\'s DVD player market was the lower-end product of less than 400 yuan, and the low-end market share continued to maintain its main position.</p><p>(2) \"rural household appliances\" to expand the market</p><p>In March 2010, the ministry of finance, the ministry of commerce, and the ministry of industry and information technology jointly issued the implementation plan for subsidizing new types of household appliances in rural areas, in which DVD players were included in the six new types of products. At the same time of benefiting the people with the help of favorable policies, it is undoubtedly a good opportunity for traditional DVD to expand the rural market. This also makes many home appliance manufacturers increase the strength of channel construction on the basis of the original channel, and constantly improve the brand image of the terminal. \"Bringing home appliances to the countryside\" has greatly activated farmers\' purchasing power, expanded rural demand for home appliances, and become a new growth point for home appliances. The decline of DVD player market is mainly manifested in primary and secondary cities, but the low-end market still has great consumption potential for traditional DVD products, and DVD still has a lot of demand space in urban low-income groups and rural areas. \"Home appliances to the countryside\" policy effect is remarkable, so many DVD manufacturers hope to use this policy to achieve channel expansion, expand the market.</p><p>The future trend</p><p>(I) hd DVD market, bumpy future</p><p>The future of hd DVD is bumpy. Internally, it is affected by film source and demand, and externally, it faces threats from various substitutes. In terms of film sources, domestic introduction and production of blu-ray film sources are few, usually some classic film and television works. With the falling price of HDTV, if new movies are released along with the traditional DVD version, the matching blu-ray DVD version is also released, and the blu-ray DVD version making more old movies is provided for consumers to choose with moderate publicity, which can promote the sales of blu-ray DVD players to a certain extent.</p><p>In recent years, the home display market continues to upgrade, and the resolution of the TV gradually to hd 720P and full hd 1080P as the mainstream. Since the display resolution of traditional DVD disc player 576P cannot meet the output demand of hd devices, blu-ray DVD, hd player, HTPC and other products with hd output ability gradually erode the market share of traditional DVD.</p><p>(ii) the integration of three networks has laid a favorable foundation for the development of hd DVD in its own market.</p><p>Considering the external environment, in the context of China\'s current efforts to develop tri-network integration, the accelerated development of national policies and various industries in the process of tri-network integration undoubtedly plays a powerful role in promoting the hd industry. In order to cooperate with the launch of hd channels, most cities and tri-network convergence pilot cities are vigorously putting hd set-top boxes. On this basis, coupled with the upgraded hd TV, it is believed that consumers\' demand for hd broadcast equipment will be increasingly expanded. In the promising situation of hd demand, the influence of the market in which hd DVD is located depends on the influence of hd DVD to alleviate the factors blocking the development and replace the dominant position of DVD to replace hd playback devices.</p><p>At present, ordinary DVD is still the main force in Chinese DVD market, but due to the saturation of the market and the gradual increase of alternative products, the trend of decline and decline of ordinary DVD market can be foreseen. In the new numerous alternative products, whether hd DVD can become a unique, it is not decided, but without consumer recognition, without the performance of the market, not only hd DVD is facing the pressure of survival, the entire DVD playing industry is also at stake. Therefore, all parties in the industry need to actively cooperate with each other from the perspective of the long-term development of the whole industry, and finally make hd DVD enter the world of mass consumption, so as to realize the true running of hd DVD.</p>', '<p>2011年3月3日，中国权威ICT研究与管理咨询机构赛迪顾问股份有限公司(股票代码：HK8235)在“2011中国消费电子市场年会”上发布《2010-2011年中国DVD播放机市场研究年度报告》显示：2010年中国DVD播放机市场越发萎缩，蓝光DVD播放机表现不尽人意。中国DVD播放机市场销量从2007年开始一直呈延续下滑趋势。2010年，蓝光DVD播放机纷纷下调价格，希望能同时借助高端的技术优势吸引消费者促成销量的大幅增长，但市场发展滞缓，并未形成大量的需求。</p><p>&nbsp;&nbsp;&nbsp; 2011年对于中国的DVD市场来说是充满机遇和挑战的一年，尤其是蓝光DVD播放机在中国市场能否持续发展。随着我国当前大力发展三网融合的进程，相信消费者对高清播放设备的需求会日益扩大。在高清需求前景看好的形势下，高清DVD要想缓解阻滞发展的因素、代替DVD取代高清播放设备的主导地位，还取决于其本身所在的市场对它的影响。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<b>市场现状</b></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<b>(一) 市场持续萎缩，销量再次下降</b></p><p style=\"text-align: left;\">&nbsp;&nbsp;&nbsp; 2010年中国DVD播放机市场销售量延续了下滑的轨迹，中国DVD播放机实现市场销量1069.3万台，销售额为46.7亿元。2010年中国DVD播放机市场销售量中仍以普通标清DVD为主，但是，标清DVD市场早已饱和，有效需求大幅减少，产业进入衰退期，行业利润进一步萎缩。2010年蓝光DVD播放机市场销量兴起，呈现上升态势，其增长幅度虽然减缓了“标清”DVD播放机下降速度，但在销量上还远远不能弥补。</p><p style=\"text-align: center;\"><img src=\"/upload/74eea3cc6141c.jpg\" alt=\"undefined\"><br></p><p align=\"center\"><b>▲表1 2008-2010年中国DVD播放机市场规模与增长率 数据来源：赛迪顾问 2011，02</b></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<b>(一) 品牌竞争过度，价格持续走低</b></p><p>&nbsp;&nbsp;&nbsp; 由于DVD播放机生产准入门槛不高，已有众多中小型企业涌入，竞争激烈，同时经济的不景气，使消费者的消费行为变得更为谨慎，DVD播放机销售的大幅下滑，商家不得不用价格战来抢占市场份额，但过度竞争使国内DVD生产企业的利润缩减，很多底子薄的企业很难抗衡持续的价格战，不得不面对生存的困境。同时DVD播放机产品的不断成熟使价格更为透明化，暴利时代已一去不返。</p><p>&nbsp;&nbsp;&nbsp; 2010年，中国DVD播放机市场中的主导产品是400元以下的较低端产品，低端市场份额继续保持其主力地位，DVD播放机市场呈稳步衰退趋势，价格下降没有较大波动。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<b>(二) “家电下乡”，拓展市场</b></p><p>&nbsp;&nbsp;&nbsp; 2010年3月，财政部、商务部、工业和信息化部联合下发了《新增家电下乡补贴品种实施方案》，其中DVD影碟机就包含在新增的六大类产品当中，财政给予每台最高65元的补贴额。在借助利好政策惠民的同时，家电下乡也无疑成为传统DVD拓展农村市场的良好契机。这也使许多家电厂商在原有渠道基础上加大渠道建设的力度，不断提升终端品牌形象。 “家电下乡”大大激活农民购买能力，扩大农村对家电产品的需求，成为家电新的增长点。DVD播放机市场衰退主要表现在一、二级城市，但低端市场对传统DVD产品仍有极大的消费潜力，DVD在城市低收入群体以及农村地区仍有大量需求空间。 “家电下乡”政策成效显著，使许多DVD厂商冀望借助此政策实现渠道扩容，拓展市场。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<b>未来趋势</b></p><p>&nbsp;&nbsp;&nbsp;&nbsp;<b>(一) 高清DVD市场，前途坎坷</b></p><p>&nbsp;&nbsp;&nbsp; 高清DVD前途坎坷，对内受到片源和需求的影响，对外面对多种替代品的威胁。在片源方面，国内引进和制作的蓝光片源较少，通常都是一些经典的影视作品。随着高清电视价格的下降，若新电影在发布传统DVD版本的同时也发布配套的蓝光DVD版本，加上制作更多的老电影的蓝光DVD版本，配合适度的宣传，提供给消费者选择，在一定程度上能对蓝光DVD播放机的销售起到促进的作用。</p><p>&nbsp;&nbsp;&nbsp; 近年来，家用显示市场不断升级，电视的分辨率也逐渐以高清的720P以及全高清的1080P为主流。由于传统DVD碟机576P的显示分辨率无法满足高清设备的输出需求，因而具备高清输出能力的蓝光DVD、高清播放机、HTPC等产品逐渐蚕食传统DVD的市场份额。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;<b>(二) “三网融合”铺垫有利形势，高清DVD的发展还在于其本身的市场。</b></p><p>&nbsp;&nbsp;&nbsp; 结合外部环境来说，面对我国当前大力发展三网融合的形势下，国家的政策和各个产业在三网融合过程中的加速发展对于高清产业无疑起到一个强有力的推进作用。为了配合高清频道的开播，大部分城市和三网融合试点城市都在大力投放高清机顶盒，在此基础上，再配上已经更新换代的高清电视，相信消费者对高清播放设备的需求会日益扩大。在高清需求前景看好的形势下，高清DVD要想缓解阻滞发展的因素、代替DVD取代高清播放设备的主导地位，还需要取决于其本身所在的市场对它的影响。</p><p>&nbsp;&nbsp;&nbsp; 目前普通DVD仍然是中国DVD市场上的主力，但由于市场饱和以及替代产品的逐渐增多，普通DVD市场的走低之势和没落之路可以预见。在新的众多替代产品中，高清DVD能否成为一支独秀，目前尚不能下定论，但如果没有消费者的认可，没有市场的表现，不但高清DVD面临生存压力，整个DVD播放产业也岌岌可危。因此，业界各方需从整个产业长远发展的高度积极协作，最终使高清DVD走入普通大众消费世界，进而实现高清DVD真正意义上的奔跑。</p>', '1', '2019-08-26 15:46:57', '2019-09-08 22:54:58');
INSERT INTO `article` VALUES ('18', '1', 'New official website officially launched!', '新版官网正式上线！', '<p>Shenzhen kisheng electronics co., LTD., the new official website officially launched!!!</p>', '<p><b><span>深圳市基胜电子有限公司，</span>新版官网正式上线啦！！！</b></p>', '1', '2019-09-06 16:16:37', '2019-09-08 22:37:43');

-- ----------------------------
-- Table structure for base
-- ----------------------------
DROP TABLE IF EXISTS `base`;
CREATE TABLE `base` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sitename` varchar(255) DEFAULT NULL,
  `hotphone` varchar(255) DEFAULT NULL,
  `keywords` longtext,
  `descript` longtext,
  `copyright` longtext,
  `email` varchar(255) DEFAULT NULL,
  `ewm` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `waplogo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `enaddress` varchar(255) DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `wapbanner` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of base
-- ----------------------------
INSERT INTO `base` VALUES ('1', '深圳市基胜电子有限公司', '0755-27317018', '基胜 电子 数码家庭影院、多媒体音响、激光视盘机、指南针', '深圳市基胜电子有限公司，主要面象西欧;东南亚;中东;南美市场，客户群为国美 苏宁。主营DVD VCD 插卡小音响 指南针的生产，凭借专业的水平和成熟的技术。公司将始终坚持“质量第一，信誉第一”的宗旨', 'copyright 2011 Shenzhen Jisheng Electronic Co., Ltd. All Rights Reserved', 'kesonmail@163.com', '/upload/0e7aaf5ef2157.png', '/upload/9380e3ff44747.png', null, '广东省深圳市宝安区福永桥头富海工业区4栋2楼 ', 'Floor 2, building 4, fuyong qiaotou fuhai industrial zone, baoan district, ShenZhen, GuangDong', '[\"/upload/5ecee7f497efa.jpg\",\"/upload/99abf63917064.jpg\",\"/upload/2b87ba3888c02.jpg\",\"/upload/785cf034b74d6.jpg\"]', '[\"/upload/583c0401e5596.png\"]', '1', '2019-08-22 16:46:40', '2019-09-10 16:56:31');

-- ----------------------------
-- Table structure for brand
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `fulltitle` varchar(255) NOT NULL,
  `simplytitle` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `status` int(11) DEFAULT '1',
  `hotcar` int(11) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand
-- ----------------------------

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `brandid` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `galleryid` varchar(255) DEFAULT NULL,
  `gallery` varchar(255) DEFAULT NULL,
  `seriseid` varchar(255) DEFAULT NULL,
  `serise` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `userdate` varchar(255) DEFAULT NULL,
  `playcardate` varchar(255) DEFAULT NULL,
  `meter` int(11) DEFAULT NULL,
  `displacement` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `oldprice` varchar(255) DEFAULT NULL,
  `guarantee` varchar(255) DEFAULT NULL,
  `vehicle` varchar(255) DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `carphone` varchar(255) DEFAULT NULL,
  `salescall` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `appraiser` varchar(255) DEFAULT NULL,
  `evaluate` longtext,
  `newcar` varchar(255) DEFAULT NULL,
  `usage` varchar(255) DEFAULT NULL,
  `guohu` varchar(255) DEFAULT NULL,
  `case` varchar(255) DEFAULT NULL,
  `expiration` varchar(255) DEFAULT NULL,
  `inspection` varchar(255) DEFAULT NULL,
  `condition` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `standard` varchar(255) DEFAULT NULL,
  `consumption` varchar(255) DEFAULT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `supervalue` int(11) DEFAULT '1',
  `goodcar` int(11) DEFAULT '1',
  `depreciate` int(11) DEFAULT '0',
  `bking` varchar(255) DEFAULT '0',
  `city` varchar(255) DEFAULT NULL,
  `cityname` varchar(255) DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `coverurl` longtext,
  `pastcover` longtext,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------

-- ----------------------------
-- Table structure for carimg
-- ----------------------------
DROP TABLE IF EXISTS `carimg`;
CREATE TABLE `carimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sid` varchar(255) DEFAULT NULL,
  `coverurl` longtext,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carimg
-- ----------------------------

-- ----------------------------
-- Table structure for city
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) NOT NULL,
  `short` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `pcode` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city
-- ----------------------------

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proname` varchar(255) DEFAULT NULL,
  `enproname` varchar(255) DEFAULT NULL,
  `procontent` longtext,
  `enprocontent` longtext,
  `prointro` longtext,
  `enprointro` longtext,
  `seriseid` varchar(255) DEFAULT NULL,
  `serisename` varchar(255) DEFAULT NULL,
  `pastcover` varchar(255) DEFAULT NULL,
  `coverurl` longtext,
  `bigfront` int(11) DEFAULT '0',
  `frontwz` int(11) DEFAULT '0',
  `frontpro` int(11) DEFAULT '0',
  `status` int(11) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', 'DRN-577R 多功能DVD', 'DRN-577R Multi-function DVD', '<p>-AV/YUV输出</p><p>-最高级的音频质量（24位/96kHz）</p><p>-与DVD/VCD/SVCD/CVD兼容/</p><p>-CD-R/CD-RW/CD/DVCD/MP3/MP4</p><p>-32种字幕，多摄像头角度和8种语言选择</p><p>-显示纵横比转换（4:3/16:9）和智能缩放</p><p>-家长锁定</p><p>-PAL/NTSC/自动系统</p><p>-超错误隐藏</p><p>-带1个麦克风输入和回声控制的卡拉OK</p><p>-屏幕菜单</p><p>-2.1频道DVD</p><p>-LED显示屏</p><p>-USB端口</p><p>-功耗：15W</p><p>-电源：AC110V-240V 50/60Hz</p>', '<p>- Av/yuv output&nbsp;</p><p>- The hlghest audio quality(24bit/96KHz)&nbsp;</p><p>- Compatible with DVD/VCD/SVCD/CVD/&nbsp;</p><p>CD-R/CD-RW/CD/DVCD/MP3/MP4</p><p>&nbsp;- 32 kinds of subtitle, multiple camera&nbsp;</p><p>&nbsp;angles and8 kinds of language select&nbsp;</p><p>- Display aspect RATIO CONVERSION (&nbsp; 4:3/16:9) and smart zoom</p><p>&nbsp;- Parental lock</p><p>&nbsp;- Pal/ntsc/auto system</p><p>&nbsp;- Super error concealm ent&nbsp;&nbsp;</p><p>- Karaoke with 1 MIC input&nbsp; &nbsp; and echo control&nbsp;</p><p>- On screen menu&nbsp;&nbsp;</p><p>- 2.1 channel DVD&nbsp;&nbsp;</p><p>- LED display&nbsp;&nbsp;</p><p>- USB port&nbsp;&nbsp;</p><p>- Power consumption:15W&nbsp;&nbsp;</p><p>- Power source:AC110V-240V 50/60Hz</p>', 'DRN-577R Multi-function DVD', 'DRN-577R Multi-function DVD', '1', 'DVD', '/upload/90715effb4a64.jpg', '[\"/upload/90715effb4a64.jpg\",\"/upload/930e0b224a16b.jpg\",\"/upload/a8b1a5309f7b5.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:05:53', '2019-09-06 00:27:08');
INSERT INTO `product` VALUES ('2', '可塑 DVD', 'Plastic DVD', '<p>●超级多区域DVD/DVD±R/VCD/CD-R/USB/MP3/MP4播放器</p><p>●5.1通道输出</p><p>●视频输出</p><p>●48至96kHz音频DAC，16至24位数字编码</p><p>●OSD语言：英语、法语、西班牙语、葡萄牙语</p><p>●PAL/NTSCAuto系统</p><p>●渐进扫描</p><p>●全功能遥控</p><p>●家长锁定和密码功能</p><p>●可选择8种语言音轨，可选择32种语言字幕</p><p>●带USB功能</p><p>●调频收音机扫描：88-108MHz&nbsp;</p><p>●2个声功率放大器和1个扬声器</p><p>●卡拉OK功能</p><p>●LED显示屏（数字读数）</p><p>●自动电压：AC90V-260V 60/60Hz</p><p>●功耗：25W</p><p>●MMC SC MS 3合1卡</p>', '<p>● Supper Multi Zones DVD/DVD ± R/VCD/CD-R/USB/MP3/MP4 Player</p><p>● 5.1 Channel Output</p><p>● Video Output</p><p>● 48 to 96KHZ Audio DAC,16 to 24 Bit Digital Coding</p><p>● OSD Languages:English , French , Spanish , Portuguese</p><p>● PAL/NTSCAUTO System</p><p>● Progressive Scan</p><p>● Full Function Remote Control</p><p>● Parental Lock And Password Functions</p><p>● 8 Language Soundtracks Selectable , 32 Language Subtitles Selectable</p><p>● With USB Function</p><p>● FM Radio Scan:88 - 108MHZ</p><p>● 2 Sound Power Amplifier And 1 Speaker</p><p>● Karaoke Function</p><p>● LED Display(Digital Readout)</p><p>● Auto Voltage:AC90V-260V 60/60HZ</p><p>● Power Consumption:25W</p><p>● MMC SC MS 3 IN 1 CARD</p>', 'Plastic DVD', 'Plastic DVD', '1', 'DVD', '/upload/08de3c3cc534.jpg', '[\"/upload/08de3c3cc534.jpg\",\"/upload/859c7e3a4ea9e.jpg\",\"/upload/a20d2f531af32.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:19:57', '2019-09-02 23:19:57');
INSERT INTO `product` VALUES ('3', '便携式DVD', 'Portable DVD', '<p>●英寸TFT-LCD数字屏幕</p><p>●16:9宽屏幕</p><p>●电视调谐器</p><p>●独家设计，超薄单元</p><p>●支持SD/MMC卡</p><p>●内置USB端口</p><p>●与DVD、DVD-R、VCD、CD、MP3、MP4、CD-R/RW、JPEG兼容</p><p>●内置双轨立体声扬声器</p><p>●超级防震</p><p>●图像缩放功能</p><p>●多语言菜单</p><p>●超级多区域光盘</p><p>●多功能遥控器</p><p>●内置可充电锂电池</p><p>●智能充电功能</p><p>●电源适配器</p><p>（交流输入：110V-240V，直流输出：12V-1500MA）</p>', '<p>● inch TFT-LCD digital screen</p><p>● 16 : 9 wide-screen</p><p>● TV tuner</p><p>● Exclusive design , super slim unit</p><p>● Support SD/MMC card</p><p>● Built - in USB port</p><p>● Compatible with DVD,DVD-R,VCD,CD,MP3,MP4,CD-R/RW,JPEG</p><p>● Built-in double tracks stereo speakers</p><p>● Super anti-shock</p><p>● Zoom of picture function</p><p>● Multi language menu</p><p>● Super multi regional disc</p><p>● Multi function remote controller</p><p>● Built - in rechargeable lithium battery</p><p>● iniellgence charging function</p><p>● Power adapter</p><p>(AC input : 110V - 240V,DC output : 12V - 1500mA)</p>', '便携式电视/DVD播放器\n完全可携带', 'portable tv/dvd player\ncomplete portability', '1', 'DVD', '/upload/e82273060035c.jpg', '[\"/upload/e82273060035c.jpg\",\"/upload/44bfb9fa89d46.jpg\",\"/upload/26d62a60803f.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:31:06', '2019-09-06 00:07:57');
INSERT INTO `product` VALUES ('4', 'YK-9900 车载MP3播放器', 'YK-9900 Car Mp3 player', '<p>●立体声音频输出</p><p>●具有USB功能</p><p>●带时钟显示</p><p>●具有SD卡功能。</p><p>●具有辅助输入功能</p><p>●具有电子音效</p><p>●具有调频数字广播功能</p><p>●全功能遥控</p><p>●液晶显示器</p><p>●输入电压：DC12V/10A</p><p>●功耗：50W x4</p>', '<p>● Stereo Audio Output.&nbsp;</p><p>● With USB Function.&nbsp;</p><p>● With Clock display.&nbsp;</p><p>● With SD Card Function.&nbsp;</p><p>● With AUX input Function.&nbsp;</p><p>● With Electronic sound effects.&nbsp;</p><p>● With FM Digital radio Function.&nbsp;</p><p>● Full Function Remote Control.</p><p>● LCD Display.&nbsp;</p><p>● Input Voltage:DC12V/10A.&nbsp;</p><p>● Power Consumption:50W X4.</p><div><br></div>', 'YK-9900 车载MP3/FM和USB/SD播放器', 'YK-9900 CAR MP3/FM&USB/SD PLAYER', '2', '车载多媒体', '/upload/6053924f792e5.jpg', '[\"/upload/6053924f792e5.jpg\",\"/upload/ca3af9284530f.jpg\",\"/upload/b187a5881734f.jpg\"]', '0', '5', '1', '1', '2019-09-02 23:37:49', '2019-09-12 08:41:14');
INSERT INTO `product` VALUES ('5', 'YK-8899 车载DVD播放机', 'YK-8899 Car DVD player', '<p>参数：</p><p>&nbsp; 工作电压：直流输入12V/10A</p><p>&nbsp; &nbsp;产品尺寸：187x183x56mm</p><p>&nbsp; &nbsp;产品重量：1.13kg（单重）</p><p>&nbsp; &nbsp;解码IC:SUNPlus 8202RQ-D</p><p>&nbsp; &nbsp;功率放大器IC:CD7388</p><p>&nbsp; &nbsp;功率放大器输出：4x50W</p><p>&nbsp; &nbsp;支持多区域DVD/VCD/CD/MP3/MP4</p><p>&nbsp; &nbsp;具有调频收音机数字功能</p><p>&nbsp; &nbsp;具有USB播放器功能</p><p>&nbsp; &nbsp;具有SD卡播放器功能</p><p>&nbsp; &nbsp;带辅助输入接口</p><p>&nbsp; &nbsp;带时钟显示</p><p>&nbsp; &nbsp;带电子音效</p><p>&nbsp; &nbsp;液晶显示器</p><p>&nbsp; &nbsp;全功能遥控</p>', '<p>Parameter：&nbsp;&nbsp;</p><p>&nbsp;Working voltage：DC input 12V/10A&nbsp;</p><p>&nbsp;Product size：187X183X56MM&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;Product weight:1.13KG(Single weight)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;Decoding IC:Sunplus 8202RQ-D&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;Power amplifier IC: CD7388&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;Power amplifier output: 4X50W&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;Supports Multi Zones DVD/VCD/CD/MP3/MP4&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;With FM radio Digital function.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;With USB player function.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;With SD CARD player function.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><p>&nbsp;With AUX input interface.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p><p>&nbsp;With Clock display.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;With Electronic sound effects&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;LCD Display&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>&nbsp;Full Function Remote Control.&nbsp; &nbsp;</p>', 'YK-8899 Car DVD player', 'YK-8899 Car DVD player', '2', '车载多媒体', '/upload/5cc540e223b07.jpg', '[\"/upload/5cc540e223b07.jpg\",\"/upload/3bf78d2927cf9.jpg\",\"/upload/b2a1bb1ce5f82.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:41:56', '2019-09-06 00:49:37');
INSERT INTO `product` VALUES ('6', 'YK-8800 汽车多功能播放器', 'YK-8800 Car Multi-function player', '<p>支持多区域DVD/SVCD/VCD/CD-R/USB/MP3/MP4播放器</p><p>两组视频输出</p><p>立体声音频输出</p><p>带USB功能</p><p>具有SD卡功能</p><p>具有辅助输入功能</p><p>OSD语言：英语、法语、西班牙语、葡萄牙语</p><p>PAL/NTSC/自动系统</p><p>全功能遥控</p><p>家长锁定和密码功能</p><p>8语言音轨可选32语言字幕可选</p><p>吸入式移动LCD显示屏（数字读数）</p><p>输入电压：DC12V</p><p>功耗：50W x4</p><p>ATV输出</p><p>AM/FM收音机功能</p>', '<p>Supports Multi Zones DVD/SVCD/ VCD/CD-R/USB/MP3/Mp4 Player.&nbsp;</p><p>Two groups of&nbsp; Video Output.&nbsp;</p><p>Stereo Audio Output.&nbsp;</p><p>With USB Function.&nbsp;</p><p>With SD Card Function.&nbsp;</p><p>With AUX input Function.&nbsp;</p><p>OSD Languages:English ,French, Spanish,Portuguese.&nbsp;</p><p>PAL/NTSC/AUTO System.</p><p>Full Function Remote Control.&nbsp;</p><p>Parental Lock And Password Functions.&nbsp;</p><p>8 Language Soundtracks Selectable 32 Language Subtitles Selectable.&nbsp;</p><p>Suction type movement LCD Display(Digital Readout).&nbsp;</p><p>Input Voltage:DC12V.&nbsp;</p><p>Power Consumption:50W X4.&nbsp;</p><p>ATV Output.&nbsp;</p><p>AM/FM Radio Function</p>', 'YK-8800 Car Multi-function player', 'YK-8800 Car Multi-function player', '2', '车载多媒体', '/upload/721265c9bf736.jpg', '[\"/upload/721265c9bf736.jpg\",\"/upload/d1a8699e6597c.jpg\",\"/upload/8164304467869.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:44:44', '2019-09-04 21:06:05');
INSERT INTO `product` VALUES ('7', 'SR-888P 2.1声道扬声器', 'SR-888P 2.1 CH  Speaker', '<p>输出功率：105 W</p><p>输入电压：220 V</p><p>频率：20Hz-20kHz</p><p>输入灵敏度：500 mV</p>', '<p>Output power: 105 W&nbsp;</p><p>Input voltage: 220 V</p><p>Frequency: 20Hz-20KHZ&nbsp;</p><p>Input sensitivity: 500 mV</p>', 'SR-888P 蓝牙多媒体扬声器', 'BLUETOOTH MULTIMEDIA  SPEAKER', '3', '2.1声道扬声器', '/upload/79a9187ded2aa.jpg', '[\"/upload/79a9187ded2aa.jpg\",\"/upload/7138def8e00ce.jpg\",\"/upload/876019233180d.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:46:24', '2019-09-04 21:07:23');
INSERT INTO `product` VALUES ('8', 'SR-888A 2.1声道扬声器', 'SR-888A 2.1 CH  Speaker', '<p>输出功率：105 W</p><p>输入电压：220 V</p><p>频率：20Hz-20kHz</p><p>输入灵敏度：500 mV</p>', '<p>Output power: 105 W&nbsp;</p><p>Input voltage: 220 V</p><p>Frequency: 20Hz-20KHZ&nbsp;</p><p>Input sensitivity: 500 mV</p>', 'SR-888A 蓝牙多媒体扬声器', 'SR-888A BLUETOOTH MULTIMEDIA  SPEAKER', '3', '2.1声道扬声器', '/upload/dc3dae955ef3a.jpg', '[\"/upload/dc3dae955ef3a.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:48:46', '2019-09-06 09:55:35');
INSERT INTO `product` VALUES ('9', 'SR-878P 2.1声道扬声器', 'SR-878P 2.1 CH  Speaker', '<p>输出功率：105 W</p><p>输入电压：220 V</p><p>频率：20Hz-20kHz</p><p>输入灵敏度：500 mV</p>', '<p>Output power: 105 W&nbsp;</p><p>Input voltage: 220 V</p><p>Frequency: 20Hz-20KHZ&nbsp;</p><p>Input sensitivity: 500 mV</p>', 'SR-878P 蓝牙多媒体扬声器', 'SR-878P BLUETOOTH MULTIMEDIA  SPEAKER', '3', '2.1声道扬声器', '/upload/e399d0dd5ba12.jpg', '[\"/upload/e399d0dd5ba12.jpg\"]', '1', '1', '1', '1', '2019-09-02 23:50:07', '2019-09-12 08:41:14');
INSERT INTO `product` VALUES ('10', 'SR-878 878A 2.1声道扬声器', 'SR-878 878A 2.1 CH  Speaker', '<p>输出功率：105 W</p><p>输入电压：220 V</p><p>频率：20Hz-20kHz</p><p>输入灵敏度：500 mV</p>', '<p>Output power: 105 W&nbsp;</p><p>Input voltage: 220 V</p><p>Frequency: 20Hz-20KHZ&nbsp;</p><p>Input sensitivity: 500 mV</p>', 'SR-878 878A 蓝牙多媒体扬声器', 'SR-878 878A BLUETOOTH MULTIMEDIA  SPEAKER', '3', '2.1声道扬声器', '/upload/df2417a663b9c.jpg', '[\"/upload/f319e39d53972.jpg\",\"/upload/df2417a663b9c.jpg\",\"/upload/d1a87dac60fca.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:51:11', '2019-09-06 00:27:08');
INSERT INTO `product` VALUES ('11', '2.1声道扬声器', '2.1 CH  Speaker', '<p>输出功率：105 W</p><p>输入电压：220 V</p><p>频率：20Hz-20kHz</p><p>输入灵敏度：500 mV</p>', '<p>Output power: 105 W&nbsp;</p><p>Input voltage: 220 V</p><p>Frequency: 20Hz-20KHZ&nbsp;</p><p>Input sensitivity: 500 mV</p>', '蓝牙多媒体扬声器', 'BLUETOOTH MULTIMEDIA  SPEAKER', '3', '2.1声道扬声器', '/upload/b0ea907a67182.jpg', '[\"/upload/b0ea907a67182.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:52:20', '2019-09-02 23:52:20');
INSERT INTO `product` VALUES ('12', '5.1声道扬声器', '5.1 CH  Speaker', '<p>输出功率：5000 W</p><p>输入电压：220 V</p><p>频率：20Hz-20kHz</p><p>输入灵敏度：500 mV</p>', '<p>Output power: 5000 W&nbsp;</p><p>Input voltage: 220 V</p><p>Frequency: 20Hz-20KHZ&nbsp;</p><p>Input sensitivity: 500 mV</p>', '\n● 多功能\n● 卓越的环绕\n● 纯声学\n● 简单优雅的设计', '● MULTIFUNCTION    \n● SUPERB SURROUND\n● PURE ACOUSTIC \n● SIMPLY ELEGANCE DESIGN', '4', '5.1声道扬声器', '/upload/6abed9ad9cf11.jpg', '[\"/upload/6abed9ad9cf11.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:55:38', '2019-09-02 23:55:38');
INSERT INTO `product` VALUES ('13', '5.1声道扬声器', '5.1 CH  Speaker', '<p>输出功率：5000 W</p><p>输入电压：220 V</p><p>频率：20Hz-20kHz</p><p>输入灵敏度：500 mV</p>', '<p>Output power: 5000 W&nbsp;</p><p>Input voltage: 220 V</p><p>Frequency: 20Hz-20KHZ&nbsp;</p><p>Input sensitivity: 500 mV</p>', '● 多功能\n● 卓越的环绕\n● 纯声学\n● 简单优雅的设计', '● MULTIFUNCTION    \n● SUPERB SURROUND\n● PURE ACOUSTIC \n● SIMPLY ELEGANCE DESIGN', '4', '5.1声道扬声器', '/upload/ce59ebaa4d22c.jpg', '[\"/upload/ce59ebaa4d22c.jpg\",\"/upload/440b80bf1b956.jpg\",\"/upload/5e94521405fe9.jpg\"]', '0', '0', '0', '1', '2019-09-02 23:57:11', '2019-09-06 00:49:37');
INSERT INTO `product` VALUES ('14', 'SR-822  多媒体播放放大器', 'SR-822  Multimedia Play Ampliﬁer ', '<p>●蓝牙</p><p>●USB端口</p><p>●麦克风输入</p><p>●SD/MMC卡</p><p>●调频收音机</p><p>●交流/直流输入</p>', '<p>● Bluetooth</p><p>● USB Port&nbsp;</p><p>● MIC IN</p><p>● SD/MMC CARD</p><p>● FM RADIO</p><p>● AC/DC IN</p>', 'SR-822  Multimedia Play Ampliﬁer ', 'SR-822  Multimedia Play Ampliﬁer ', '5', '多媒体播放放大器', '/upload/7ed984504b022.jpg', '[\"/upload/f686e5c5eba61.jpg\",\"/upload/7ed984504b022.jpg\",\"/upload/fff4271071aec.jpg\"]', '0', '0', '0', '1', '2019-09-03 00:00:08', '2019-09-04 21:11:20');
INSERT INTO `product` VALUES ('15', 'SR-833 多媒体播放放大器', 'SR-833 Multimedia Play Ampliﬁer ', '<p>●蓝牙</p><p>●USB端口</p><p>●麦克风输入</p><p>●SD/MMC卡</p><p>●调频收音机</p><p>●交流/直流输入</p>', '<p>● Bluetooth</p><p>● USB Port&nbsp;</p><p>● MIC IN</p><p>● SD/MMC CARD</p><p>● FM RADIO</p><p>● AC/DC IN</p>', 'SR-833 Multimedia Play Ampliﬁer ', 'SR-833 Multimedia Play Ampliﬁer ', '5', '多媒体播放放大器', '/upload/7e5f4bff5e6ad.jpg', '[\"/upload/7e5f4bff5e6ad.jpg\",\"/upload/b22ed1a045c61.jpg\",\"/upload/1735fe4780334.jpg\"]', '0', '0', '0', '1', '2019-09-03 00:01:10', '2019-09-04 21:11:54');
INSERT INTO `product` VALUES ('16', 'KIPAS 风扇', 'KIPAS TORNADO', '<p>● 3档速度</p><p>● 节能</p><p>● 一阵强风</p><p>● 外壳不容易破裂</p><p>● 桌子扇风扇</p><p>● 墙壁扇风扇</p><p>● 站立风扇</p>', '<p>● 3 Kecepatan&nbsp;</p><p>● Hemat listrik&nbsp;</p><p>● Hembusan angin kencang&nbsp;</p><p>● Body kuat tidak mudah pecah</p><p>● Desk Fan Kipas Angin&nbsp;</p><p>● Wall Fan Kipas Angin&nbsp;</p><p>● Stand Fan Kipas Angin</p>', 'KIPAS 风扇  3合1', 'KIPAS TORNADO  3in1 18\" ', '6', 'KIPAS 风扇', '/upload/4b08c2dc6b00a.jpg', '[\"/upload/f7cd511856c9d.jpg\",\"/upload/4b08c2dc6b00a.jpg\",\"/upload/ae0d0c97e3a5f.jpg\"]', '0', '0', '0', '1', '2019-09-03 00:07:30', '2019-09-06 09:54:56');
INSERT INTO `product` VALUES ('17', 'KIPAS 铁桌风扇', 'KIPAS  MEJA  BESI', '<p>● 安静舒适</p><p>● 360°旋转</p><p>● 钢铁结构</p><p>● 自由白发</p><p>● 内置安全保险丝</p>', '<p>● Tidak Berisik</p><p>● Bisa Berputar 360°</p><p>● Rangka Dari Besi</p><p>● Bebas Getaran</p><p>● Dilengkapi Sekring Pengaman</p>', '12\"KIPAS  MEJA  BESI', '12\"KIPAS  MEJA  BESI\n', '6', 'KIPAS 风扇', '/upload/d3a74992e30f4.jpg', '[\"/upload/e05856ff8a0d9.jpg\",\"/upload/7fcb6bde10e97.jpg\",\"/upload/d3a74992e30f4.jpg\"]', '0', '0', '0', '1', '2019-09-03 00:12:49', '2019-09-06 00:49:37');
INSERT INTO `product` VALUES ('18', '电饭煲', 'Rice cooker ', '<p>1.8 L&nbsp; 电饭煲</p>', '<p>1.8 L&nbsp; Rice cooker</p>', '1.8 L  电饭煲', '1.8 L  Rice cooker', '7', '电饭煲', '/upload/f4dc31cd48894.jpg', '[\"/upload/cc6fc4edb35b8.jpg\",\"/upload/f4dc31cd48894.jpg\",\"/upload/d4b56652ca468.jpg\"]', '0', '0', '0', '1', '2019-09-03 00:14:28', '2019-09-06 00:16:42');
INSERT INTO `product` VALUES ('19', '三合一搅拌机', '3 IN1   Blender', '<p>● 干、湿</p><p>● 一个产品有两种功能</p><p>● 搅拌机可以是干湿配料</p>', '<p>● Dry &amp; Wet</p><p>● 2 functions in one product&nbsp;</p><p>● Blender can be dry &amp; wet ingredients</p>', '三合一搅拌机', '3 IN1   Blender\n', '8', '3合1搅拌机', '/upload/472dde2c9f0be.jpg', '[\"/upload/dfad3ff220a.jpg\",\"/upload/befa3705dd5fa.jpg\",\"/upload/472dde2c9f0be.jpg\"]', '0', '0', '0', '1', '2019-09-03 00:16:43', '2019-09-06 09:55:35');
INSERT INTO `product` VALUES ('20', '电热水壶', 'Electric kettle', '<p>电热水壶</p>', '<p>Electric kettle</p>', '电热水壶', 'Electric kettle', '9', '电热水壶', '/upload/feafd2073bad1.jpg', '[\"/upload/4894f18573b2f.jpg\",\"/upload/feafd2073bad1.jpg\"]', '0', '0', '0', '1', '2019-09-03 00:17:39', '2019-09-06 09:54:56');
INSERT INTO `product` VALUES ('21', 'DK-111 便携式DVD', 'DK-111 Portable DVD', '', '', '便携式电视/ DVD播放器\n简易、便携', 'Portable TV/DVD Player\nComplete Portability', '1', 'DVD', '/upload/04f1c30a8aaf7.jpg', '[\"/upload/04f1c30a8aaf7.jpg\",\"/upload/d7bbdb47162a2.jpg\"]', '0', '0', '0', '1', '2019-09-03 19:50:16', '2019-09-06 00:49:37');
INSERT INTO `product` VALUES ('22', 'DK-333 便携式DVD', 'DK-333 Portable DVD', '', '', '便携式电视/ DVD播放器\n简易、便携', 'Portable TV/DVD Player\nComplete Portability', '1', 'DVD', '/upload/4087d57f5f088.jpg', '[\"/upload/4087d57f5f088.jpg\",\"/upload/5243e394d2d83.jpg\"]', '0', '0', '0', '1', '2019-09-03 19:56:34', '2019-09-12 08:41:14');
INSERT INTO `product` VALUES ('23', 'DK-595D 多功能DVD', 'DK-595D Multi-function DVD', '', '', 'DK-595D 多功能DVD', 'DK-595D Multi-function DVD', '1', 'DVD', '/upload/cb09e74cd3155.jpg', '[\"/upload/cb09e74cd3155.jpg\",\"/upload/fb612ef30f4b4.jpg\"]', '0', '0', '0', '1', '2019-09-03 19:58:04', '2019-09-03 19:58:04');
INSERT INTO `product` VALUES ('24', 'DRN-511W 4K高清 便携DVD', 'DRN-511W 4K Portable DVD', '', '', 'RIN REI \nDRN-511W 4K高清 3D 便携DVD', 'RIN REI  \nDRN-511W 4K 3D Portable DVD', '1', 'DVD', '/upload/26d430629ee2.jpg', '[\"/upload/26d430629ee2.jpg\",\"/upload/b2efeb02ec065.jpg\"]', '0', '4', '1', '1', '2019-09-03 20:01:15', '2019-09-12 08:41:14');
INSERT INTO `product` VALUES ('25', 'DRN-778 便携式DVD', 'DRN-778 Portable DVD', '', '', '便携式电视/ DVD播放器\n简易、便携', 'Portable TV/DVD Player\nComplete Portability', '1', 'DVD', '/upload/cc67fc7f218a.jpg', '[\"/upload/cc67fc7f218a.jpg\",\"/upload/02f3a66aafa4c.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:02:28', '2019-09-03 20:02:28');
INSERT INTO `product` VALUES ('26', 'DRN-887 便携式DVD', 'DRN-887 Portable DVD', '', '', '便携式电视/ DVD播放器\n简易、便携', 'Portable TV/DVD Player\nComplete Portability', '1', 'DVD', '/upload/68b159e51ef3c.jpg', '[\"/upload/68b159e51ef3c.jpg\",\"/upload/d2e855db5b46.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:03:43', '2019-09-06 00:10:46');
INSERT INTO `product` VALUES ('27', 'HJ - 1602  2.1声道扬声器', 'HJ - 1602  2.1 CH  Speaker', '', '', 'HJ - 1602  2.1声道  多媒体扬声器', 'HJ - 1602  2.1 CH  Speaker', '3', '2.1声道扬声器', '/upload/aa1b9a7500b4f.jpg', '[\"/upload/aa1b9a7500b4f.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:05:23', '2019-09-03 20:05:23');
INSERT INTO `product` VALUES ('28', 'HJ - 1604  2.1声道扬声器', 'HJ - 1604  2.1 CH  Speaker', '', '', 'HJ - 1604  2.1声道  多媒体扬声器', 'HJ - 1604  2.1 CH  Speaker', '3', '2.1声道扬声器', '/upload/461b1689cb591.jpg', '[\"/upload/461b1689cb591.jpg\",\"/upload/0e63241e45995.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:06:21', '2019-09-03 20:06:21');
INSERT INTO `product` VALUES ('29', 'HJ - 1701B  2.1声道扬声器', 'HJ - 1701B  2.1 CH  Speaker', '', '', 'HJ - 1701B  2.1声道  多媒体扬声器', 'HJ - 1701B  2.1 CH  Speaker', '3', '2.1声道扬声器', '/upload/2db8b73c77d53.jpg', '[\"/upload/2db8b73c77d53.jpg\",\"/upload/d7ad52707cbb9.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:07:48', '2019-09-06 00:27:08');
INSERT INTO `product` VALUES ('30', 'HJ - 1703  2.1声道扬声器', 'HJ - 1703  2.1 CH  Speaker', '', '', 'HJ - 1703  2.1声道  多媒体扬声器', 'HJ - 1703  2.1 CH  Speaker', '3', '2.1声道扬声器', '/upload/9e49359bd5913.jpg', '[\"/upload/9e49359bd5913.jpg\",\"/upload/80c0408cc7817.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:08:47', '2019-09-03 20:08:47');
INSERT INTO `product` VALUES ('31', 'HJ - 3853  2.1声道扬声器', 'HJ - 3853  2.1 CH  Speaker', '', '', 'HJ - 3853  2.1声道  多媒体扬声器', 'HJ - 3853  2.1 CH  Speaker', '3', '2.1声道扬声器', '/upload/a59ce472203e1.jpg', '[\"/upload/a59ce472203e1.jpg\",\"/upload/278b9403063f4.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:09:32', '2019-09-03 20:09:32');
INSERT INTO `product` VALUES ('32', 'SR - 811  扩展多媒体播放', 'SR - 811  Multimedia Play Ampliﬁer ', '', '', 'SR - 811  扩展多媒体播放', 'SR - 811  Multimedia Play Ampliﬁer ', '5', '多媒体播放放大器', '/upload/a0089ac0adb25.jpg', '[\"/upload/a0089ac0adb25.jpg\",\"/upload/1aca4b43ec668.jpg\"]', '0', '3', '1', '1', '2019-09-03 20:11:18', '2019-09-12 08:41:14');
INSERT INTO `product` VALUES ('33', 'SR - 878D  扩展多媒体播放', 'SR - 878D  Multimedia Play Ampliﬁer ', '', '', 'SR - 878D  扩展多媒体播放', 'SR - 878D  Multimedia Play Ampliﬁer ', '5', '多媒体播放放大器', '/upload/08a4e6ad8e2df.jpg', '[\"/upload/08a4e6ad8e2df.jpg\",\"/upload/b4924891cca28.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:12:22', '2019-09-03 20:12:22');
INSERT INTO `product` VALUES ('34', 'SR- 888Y2  5.1声道扬声器', 'SR- 888Y2  5.1 CH  Speaker', '', '', 'SR- 888Y2  5.1声道扬声器', 'SR- 888Y2  5.1 CH  Speaker', '4', '5.1声道扬声器', '/upload/97c6954bcfe51.jpg', '[\"/upload/97c6954bcfe51.jpg\",\"/upload/411216bdb71aa.jpg\"]', '0', '2', '1', '1', '2019-09-03 20:13:28', '2019-09-12 08:41:14');
INSERT INTO `product` VALUES ('35', 'YK-8200N 多功能DVD', 'YK-8200N Multi-function DVD', '', '', 'YK-8200N 多功能DVD', 'YK-8200N Multi-function DVD', '1', 'DVD', '/upload/c6e25bc39ecaf.jpg', '[\"/upload/c6e25bc39ecaf.jpg\",\"/upload/7ebbc3f00b282.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:14:20', '2019-09-03 20:14:20');
INSERT INTO `product` VALUES ('36', 'YS-3302N 多功能DVD', 'YS-3302N Multi-function DVD', '', '', 'YS-3302N 多功能DVD', 'YS-3302N Multi-function DVD', '1', 'DVD', '/upload/f2ee5420b564d.jpg', '[\"/upload/81ee1c6dc2bd1.jpg\",\"/upload/f2ee5420b564d.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:25:11', '2019-09-03 20:25:11');
INSERT INTO `product` VALUES ('37', 'LOGO  2.1声道扬声器', 'LOGO  2.1 CH  Speaker', '', '', 'LOGO  2.1声道扬声器', 'LOGO  2.1 CH  Speaker', '3', '2.1声道扬声器', '/upload/31691179e234c.jpg', '[\"/upload/31691179e234c.jpg\",\"/upload/13e3b0c822878.jpg\"]', '0', '0', '0', '1', '2019-09-03 20:27:52', '2019-09-03 20:27:52');

-- ----------------------------
-- Table structure for sale
-- ----------------------------
DROP TABLE IF EXISTS `sale`;
CREATE TABLE `sale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  `status` int(11) DEFAULT '0',
  `city` varchar(255) DEFAULT NULL,
  `cityname` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sale
-- ----------------------------

-- ----------------------------
-- Table structure for serise
-- ----------------------------
DROP TABLE IF EXISTS `serise`;
CREATE TABLE `serise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `enname` varchar(255) NOT NULL,
  `status` int(11) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of serise
-- ----------------------------
INSERT INTO `serise` VALUES ('1', 'DVD', 'DVD', '1', '2019-09-02 22:39:52', '2019-09-02 22:39:52');
INSERT INTO `serise` VALUES ('2', '车载多媒体', 'Car Player', '1', '2019-09-02 22:40:30', '2019-09-02 22:40:30');
INSERT INTO `serise` VALUES ('3', '2.1声道扬声器', '2.1 CH Speaker', '1', '2019-09-02 22:42:25', '2019-09-02 22:42:25');
INSERT INTO `serise` VALUES ('4', '5.1声道扬声器', '5.1 CH Speaker', '1', '2019-09-02 22:42:49', '2019-09-02 22:42:49');
INSERT INTO `serise` VALUES ('5', '多媒体播放放大器', 'Multimedia Play Ampliﬁer ', '1', '2019-09-02 22:43:11', '2019-09-02 22:43:11');
INSERT INTO `serise` VALUES ('6', 'KIPAS 风扇', 'Kipas Tornado', '1', '2019-09-02 22:44:25', '2019-09-08 21:52:39');
INSERT INTO `serise` VALUES ('7', '电饭煲', 'Rice Cooker ', '1', '2019-09-02 22:45:07', '2019-09-08 21:29:51');
INSERT INTO `serise` VALUES ('8', '3合1搅拌机', '3 IN1   Blender', '1', '2019-09-02 22:45:25', '2019-09-02 22:45:25');
INSERT INTO `serise` VALUES ('9', '电热水壶', 'Electric Kettle', '1', '2019-09-02 22:45:46', '2019-09-08 21:51:04');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `rootpower` int(11) DEFAULT '0',
  `pwd` varchar(255) NOT NULL,
  `status` int(11) DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13345345323', null, '0', '$2a$10$d6JMLRwZaVyVg/EZTqdc6ePYuIbV9A4/m2E9LortLhwCMx8KQjBEe', '1', '2019-08-21 15:18:44', '2019-08-21 15:18:44');
INSERT INTO `user` VALUES ('2', '13828795272', 'admins', '0', '$2a$10$NLv7wlrQx9K4WnGaoiHApuuXz73KUUOEvJ1gnOn2ULU0GoUp2ziW.', '1', '2019-08-21 15:19:08', '2019-08-21 15:19:08');
INSERT INTO `user` VALUES ('3', '13798356048', '管理员', '0', '$2a$10$ZCl/p2LsidrmhbboHarsNuDH36HbB9Br/L9SY.8NCTHiea8U5/exW', '1', '2019-09-09 14:43:17', '2019-09-09 14:43:17');

-- ----------------------------
-- Table structure for valuer
-- ----------------------------
DROP TABLE IF EXISTS `valuer`;
CREATE TABLE `valuer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `status` int(11) DEFAULT '0',
  `title` varchar(255) NOT NULL,
  `content` longtext,
  `email` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of valuer
-- ----------------------------
INSERT INTO `valuer` VALUES ('1', 'qeqweq', '13435345443', '1', 'sd', null, '', '2019-08-28 20:30:36', '2019-08-28 20:38:30');
