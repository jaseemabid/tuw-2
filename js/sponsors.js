window.onload = function() {
	thumbs = document.getElementById("sponsors").getElementsByTagName("img");
	for(var i = 0; i<thumbs.length; ++i) {
		image = thumbs[i];
		image.onclick = function() {
			var url=this.src;
			document.getElementById("msg_img").src=url;
			document.getElementById("msg_img").setAttribute("style","height:150px");
			if(this.title == "nrb")
			document.getElementById("description").innerHTML = "Understanding & satisfying customers since last 45 years - NRB Bearings is a total solutions provider, which specializes in developing bearings from concept to delivery. NRB has got a wide range of products in over 3000 different sizes in product categories like Needle Roller Bearings, Needle bushes & cages, Cylindrical Roller Bearings Ball Bearings, Taper Roller Bearings, etc. NRB is a brand trusted by auto experts globally. With strong relationships with major Auto companies in India & abroad, NRB is the chosen supplier to Global & Indian automotive companies.";
			if(this.title == "sanpar")
			document.getElementById("description").innerHTML = "Sanpar Microfilters PVT. LTD. headquartered in Bangalore, India is a manufacturer of precision engineered, Compressed Air Treatment Systems for industrial applications. They have pioneered the introduction of new technologies in refrigeration and air-drying across India. Since inception, they have successfully implemented several large solutions in Compressed Air Treatment and Industrial Cooling. Their current expertise allows them to offer completely customized airing solutions for capacity implementation of upto 50 tons.";
			if(this.title == "solidworks")
			document.getElementById("description").innerHTML = "DS Solidworks Corp. has sold over 1.5 million licenses of SolidWorks worldwide. This includes a large proportion of educational licenses. The Sheffield Telegraph comments that Solidworks is the world's most popular CAD software. Its user base ranges from individuals to large corporations, and covers a very wide cross-section of manufacturing market segments. Commercial sales are made through an indirect channel, which includes dealers and partners throughout the world." ;
			if(this.title == "gasotech")
			document.getElementById("description").innerHTML = "The company was founded in the year 2005 by Technocrat Mr. Prakash Shetty (NIT Calicut alumnus) having 20 years of work experience as Rotating Equipment specialist with India’s premier Engineering Consultancy organization M/s Engineers India Limited. The company was formed with an objective to provide Technical Advisory support to International Compressors, Steam Turbine, Pump, Gas Turbine Original Equipment Manufacturer’s while marketing their products in India. Gasotech is a registered proprietory organization having its Head office in Gurgaon and its associate Offices in Bangalore & Hyderabad."; 
			if(this.title == "eaton")
			document.getElementById("description").innerHTML = "Eaton is a global technology leader in diversified power management solutions that make electrical, hydraulic and mechanical power operate more efficiently, effectively, safely and sustainably. For nearly a century, Eaton has been supplying the global automotive industry with highly engineered products that help to increase fuel economy as well as improve a vehicle’s overall efficiency, performance and control. In addition to serving global OEMs, Eaton is also a leading manufacturer of products available in the automotive aftermarket through a network of qualified distributors and retailers.";
			if(this.title == "acc")
			document.getElementById("description").innerHTML = "ACC (ACC Limited) is India's foremost manufacturer of cement and concrete. ACC's operations are spread throughout the country with 16 modern cement factories, more than 40 Ready mix concrete plants, 20 sales offices, and several zonal offices. Since inception in 1936, the company has been a trendsetter and important benchmark for the cement industry in many areas of cement and concrete technology. ACC has a unique track record of innovative research, product development and specialized consultancy services. ACC is the largest producer of cement in India. ";
			if(this.title == "kennametal")
			document.getElementById("description").innerHTML = " Kennametal founded 1938 in Pittsburgh suburb of Latrobe, Pennsylvania is a major supplier of tooling and industrial materials. It operates in over 60 countries and is the leader in every market it serves.Kennametal India Ltd. is located in the city of Bangalore. India’s leading manufacturing and industrial giants from the private, public and government sectors, rely on Kennametal India’s tooling expertise to produce their products. NIT Calicut alumni Mr. Santanoo Medhi is the Managing Director at the Bangalore office, him and his team have been extremely supportive for TeamUnwired this racing season.";
			if(this.title == "ongc")
			document.getElementById("description").innerHTML = " Oil and Natural Gas Corporation Limited (ONGC) is a state- owned oil and gas company in India and contributes 77% of India's crude oil production and 81% of India's natural gas production. It is the highest profit making corporation in India. ONGC is Asia's largest and most active company involved in exploration and production of oil. It produces about 30% of India's crude oil requirement. It owns and operates more than 11,000 kilometres of pipelines in India. In 2010, it stood at 18th position in the Platts Top 250 Global Energy Company Rankings."; 
			if(this.title == "hpl")
			document.getElementById("description").innerHTML = "HPL is regarded as \"The Technology Brand of India\" and is one of the premium manufacturers of reliable Electrical Protection Equipments, Switchgears, Electronic Energy Meters and Energy Management Systems. Consistent and sound policies have helped the HPL Group mark a strong presence nationally as well as globally. In its own special way, HPL is committed to the growth and expansion of Brand India.HPL is a dynamic Group with a clear vision to be “Bring the Best” by not losing focus on the challenges the new economic order the world over poses for growing companies.";
//			if(this.title == "")
//			document.getElementById("description").innerHTML = "";
		}
	}
	thumbs1 = document.getElementById("category1").getElementsByTagName("img");
	for(var i = 0; i<thumbs1.length; ++i) {
		image = thumbs1[i];
		image.onclick = function() {
			var url=this.src;
			document.getElementById("msg_img").src=url;
			
			document.getElementById("msg_img").setAttribute("style","height:400px");
		}
	}	
	thumbs2 = document.getElementById("category2").getElementsByTagName("img");
	for(var i = 0; i<thumbs2.length; ++i) {
		image = thumbs2[i];
		image.onclick = function() {
			var url=this.src;
			document.getElementById("msg_img").src=url;
			
			document.getElementById("msg_img").setAttribute("style","height:400px");
		}
	}	
	thumbs3 = document.getElementById("category3").getElementsByTagName("img");
	for(var i = 0; i<thumbs3.length; ++i) {
		image = thumbs2[i];
		image.onclick = function() {
			var url=this.src;
			document.getElementById("msg_img").src=url;
			
			document.getElementById("msg_img").setAttribute("style","height:400px");
		}
	}	
}

