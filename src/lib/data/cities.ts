import type { City } from '$lib/types/city.type';
import { uniqBy } from '../utils/array';

export const cities: Array<City> = [
	{
		id: '13001',
		zipCode: '13100',
		latitude: 43.5360708378,
		longitude: 5.3985744458,
		population: 134324,
		name: 'Aix-en-Provence'
	},
	{
		id: '13001',
		zipCode: '13090',
		latitude: 43.5360708378,
		longitude: 5.3985744458,
		population: 134324,
		name: 'Aix-en-Provence'
	},
	{
		id: '13001',
		zipCode: '13080',
		latitude: 43.5360708378,
		longitude: 5.3985744458,
		population: 134324,
		name: 'Aix-en-Provence'
	},
	{
		id: '13001',
		zipCode: '13540',
		latitude: 43.5360708378,
		longitude: 5.3985744458,
		population: 134324,
		name: 'Aix-en-Provence'
	},
	{
		id: '13001',
		zipCode: '13100',
		latitude: 43.5360708378,
		longitude: 5.3985744458,
		population: 134324,
		name: 'Aix-en-Provence'
	},
	{
		id: '13001',
		zipCode: '13290',
		latitude: 43.5360708378,
		longitude: 5.3985744458,
		population: 134324,
		name: 'Aix-en-Provence'
	},
	{
		id: '80021',
		zipCode: '80080',
		latitude: 49.9009532186,
		longitude: 2.2900744554,
		population: 135449,
		name: 'Amiens'
	},
	{
		id: '80021',
		zipCode: '80090',
		latitude: 49.9009532186,
		longitude: 2.2900744554,
		population: 135449,
		name: 'Amiens'
	},
	{
		id: '80021',
		zipCode: '80000',
		latitude: 49.9009532186,
		longitude: 2.2900744554,
		population: 135449,
		name: 'Amiens'
	},
	{
		id: '49007',
		zipCode: '49100',
		latitude: 47.476837416,
		longitude: -0.5561259954,
		population: 151322,
		name: 'Angers'
	},
	{
		id: '49007',
		zipCode: '49000',
		latitude: 47.476837416,
		longitude: -0.5561259954,
		population: 151322,
		name: 'Angers'
	},
	{
		id: '06004',
		zipCode: '06600',
		latitude: 43.587465146,
		longitude: 7.1063541826,
		population: 72454,
		name: 'Antibes'
	},
	{
		id: '06004',
		zipCode: '06600',
		latitude: 43.587465146,
		longitude: 7.1063541826,
		population: 72454,
		name: 'Antibes'
	},
	{
		id: '06004',
		zipCode: '06160',
		latitude: 43.587465146,
		longitude: 7.1063541826,
		population: 72454,
		name: 'Antibes'
	},
	{
		id: '06004',
		zipCode: '06160',
		latitude: 43.587465146,
		longitude: 7.1063541826,
		population: 72454,
		name: 'Antibes'
	},
	{
		id: '95018',
		zipCode: '95100',
		latitude: 48.9511344629,
		longitude: 2.2410409502,
		population: 93932,
		name: 'Argenteuil'
	},
	{
		id: '92004',
		zipCode: '92600',
		latitude: 48.9153530123,
		longitude: 2.2880384663,
		population: 75832,
		name: 'Asni\u00e8res-sur-Seine'
	},
	{
		id: '93001',
		zipCode: '93300',
		latitude: 48.9121722626,
		longitude: 2.3844551377,
		population: 63130,
		name: 'Aubervilliers'
	},
	{
		id: '93005',
		zipCode: '93600',
		latitude: 48.9458384367,
		longitude: 2.4932904169,
		population: 80030,
		name: 'Aulnay-sous-Bois'
	},
	{
		id: '84007',
		zipCode: '84140',
		latitude: 43.9352448339,
		longitude: 4.840715725,
		population: 85937,
		name: 'Avignon'
	},
	{
		id: '84007',
		zipCode: '84000',
		latitude: 43.9352448339,
		longitude: 4.840715725,
		population: 85937,
		name: 'Avignon'
	},
	{
		id: '25056',
		zipCode: '25000',
		latitude: 47.2553872249,
		longitude: 6.0194869649,
		population: 117691,
		name: 'Besan\u00e7on'
	},
	{
		id: '33063',
		zipCode: '33300',
		latitude: 44.8572445351,
		longitude: -0.5736967812,
		population: 215374,
		name: 'Bordeaux'
	},
	{
		id: '33063',
		zipCode: '33800',
		latitude: 44.8572445351,
		longitude: -0.5736967812,
		population: 215374,
		name: 'Bordeaux'
	},
	{
		id: '33063',
		zipCode: '33000',
		latitude: 44.8572445351,
		longitude: -0.5736967812,
		population: 215374,
		name: 'Bordeaux'
	},
	{
		id: '33063',
		zipCode: '33200',
		latitude: 44.8572445351,
		longitude: -0.5736967812,
		population: 215374,
		name: 'Bordeaux'
	},
	{
		id: '33063',
		zipCode: '33100',
		latitude: 44.8572445351,
		longitude: -0.5736967812,
		population: 215374,
		name: 'Bordeaux'
	},
	{
		id: '92012',
		zipCode: '92100',
		latitude: 48.8365843138,
		longitude: 2.2391359906,
		population: 106316,
		name: 'Boulogne-Billancourt'
	},
	{
		id: '18033',
		zipCode: '18000',
		latitude: 47.0749572013,
		longitude: 2.4041713756,
		population: 72434,
		name: 'Bourges'
	},
	{
		id: '29019',
		zipCode: '29200',
		latitude: 48.4004997828,
		longitude: -4.5027907853,
		population: 149649,
		name: 'Brest'
	},
	{
		id: '34032',
		zipCode: '34500',
		latitude: 43.3475883319,
		longitude: 3.2307675416,
		population: 69359,
		name: 'B\u00e9ziers'
	},
	{
		id: '14118',
		zipCode: '14000',
		latitude: 49.1847936737,
		longitude: -0.369801713,
		population: 114007,
		name: 'Caen'
	},
	{
		id: '62193',
		zipCode: '62100',
		latitude: 50.9502072754,
		longitude: 1.8757556613,
		population: 77317,
		name: 'Calais'
	},
	{
		id: '06029',
		zipCode: '06150',
		latitude: 43.5526202843,
		longitude: 7.0042759273,
		population: 67406,
		name: 'Cannes'
	},
	{
		id: '06029',
		zipCode: '06400',
		latitude: 43.5526202843,
		longitude: 7.0042759273,
		population: 67406,
		name: 'Cannes'
	},
	{
		id: '94017',
		zipCode: '94500',
		latitude: 48.817254364,
		longitude: 2.5170981526,
		population: 74232,
		name: 'Champigny-sur-Marne'
	},
	{
		id: '94017',
		zipCode: '94500',
		latitude: 48.817254364,
		longitude: 2.5170981526,
		population: 74232,
		name: 'Champigny-sur-Marne'
	},
	{
		id: '63113',
		zipCode: '63100',
		latitude: 45.7856492991,
		longitude: 3.115545429,
		population: 137154,
		name: 'Clermont-Ferrand'
	},
	{
		id: '63113',
		zipCode: '63000',
		latitude: 45.7856492991,
		longitude: 3.115545429,
		population: 137154,
		name: 'Clermont-Ferrand'
	},
	{
		id: '68066',
		zipCode: '68000',
		latitude: 48.1099405789,
		longitude: 7.3846869032,
		population: 65118,
		name: 'Colmar'
	},
	{
		id: '92025',
		zipCode: '92700',
		latitude: 48.9225179147,
		longitude: 2.2467516063,
		population: 76690,
		name: 'Colombes'
	},
	{
		id: '92026',
		zipCode: '92400',
		latitude: 48.8984504771,
		longitude: 2.2557058729,
		population: 69665,
		name: 'Courbevoie'
	},
	{
		id: '94028',
		zipCode: '94000',
		latitude: 48.7837401836,
		longitude: 2.4546353042,
		population: 81786,
		name: 'Cr\u00e9teil'
	},
	{
		id: '21231',
		zipCode: '21000',
		latitude: 47.3229437965,
		longitude: 5.0378880588,
		population: 150138,
		name: 'Dijon'
	},
	{
		id: '93029',
		zipCode: '93700',
		latitude: 48.9234246259,
		longitude: 2.4449268869,
		population: 62271,
		name: 'Drancy'
	},
	{
		id: '59183',
		zipCode: '59430',
		latitude: 51.0307229078,
		longitude: 2.3375241409,
		population: 70834,
		name: 'Dunkerque'
	},
	{
		id: '59183',
		zipCode: '59140',
		latitude: 51.0307229078,
		longitude: 2.3375241409,
		population: 70834,
		name: 'Dunkerque'
	},
	{
		id: '59183',
		zipCode: '59640',
		latitude: 51.0307229078,
		longitude: 2.3375241409,
		population: 70834,
		name: 'Dunkerque'
	},
	{
		id: '59183',
		zipCode: '59240',
		latitude: 51.0307229078,
		longitude: 2.3375241409,
		population: 70834,
		name: 'Dunkerque'
	},
	{
		id: '59183',
		zipCode: '59240',
		latitude: 51.0307229078,
		longitude: 2.3375241409,
		population: 70834,
		name: 'Dunkerque'
	},
	{
		id: '59183',
		zipCode: '59430',
		latitude: 51.0307229078,
		longitude: 2.3375241409,
		population: 70834,
		name: 'Dunkerque'
	},
	{
		id: '59183',
		zipCode: '59640',
		latitude: 51.0307229078,
		longitude: 2.3375241409,
		population: 70834,
		name: 'Dunkerque'
	},
	{
		id: '59183',
		zipCode: '59240',
		latitude: 51.0307229078,
		longitude: 2.3375241409,
		population: 70834,
		name: 'Dunkerque'
	},
	{
		id: '59183',
		zipCode: '59279',
		latitude: 51.0307229078,
		longitude: 2.3375241409,
		population: 70834,
		name: 'Dunkerque'
	},
	{
		id: '97209',
		zipCode: '97200',
		latitude: 14.6411114389,
		longitude: -61.0691889244,
		population: 94152,
		name: 'Fort-de-France'
	},
	{
		id: '97209',
		zipCode: '97234',
		latitude: 14.6411114389,
		longitude: -61.0691889244,
		population: 94152,
		name: 'Fort-de-France'
	},
	{
		id: '38185',
		zipCode: '38100',
		latitude: 45.1821215167,
		longitude: 5.7213305175,
		population: 153426,
		name: 'Grenoble'
	},
	{
		id: '38185',
		zipCode: '38000',
		latitude: 45.1821215167,
		longitude: 5.7213305175,
		population: 153426,
		name: 'Grenoble'
	},
	{
		id: '17300',
		zipCode: '17000',
		latitude: 46.1620643972,
		longitude: -1.1746570284,
		population: 76711,
		name: 'La Rochelle'
	},
	{
		id: '17300',
		zipCode: '17000',
		latitude: 46.1620643972,
		longitude: -1.1746570284,
		population: 76711,
		name: 'La Rochelle'
	},
	{
		id: '17300',
		zipCode: '17000',
		latitude: 46.1620643972,
		longitude: -1.1746570284,
		population: 76711,
		name: 'La Rochelle'
	},
	{
		id: '83126',
		zipCode: '83500',
		latitude: 43.0880294967,
		longitude: 5.8708984175,
		population: 60070,
		name: 'La Seyne-sur-Mer'
	},
	{
		id: '83126',
		zipCode: '83500',
		latitude: 43.0880294967,
		longitude: 5.8708984175,
		population: 60070,
		name: 'La Seyne-sur-Mer'
	},
	{
		id: '76351',
		zipCode: '76610',
		latitude: 49.498452502,
		longitude: 0.1401537192,
		population: 190924,
		name: 'Le Havre'
	},
	{
		id: '76351',
		zipCode: '76600',
		latitude: 49.498452502,
		longitude: 0.1401537192,
		population: 190924,
		name: 'Le Havre'
	},
	{
		id: '76351',
		zipCode: '76610',
		latitude: 49.498452502,
		longitude: 0.1401537192,
		population: 190924,
		name: 'Le Havre'
	},
	{
		id: '76351',
		zipCode: '76620',
		latitude: 49.498452502,
		longitude: 0.1401537192,
		population: 190924,
		name: 'Le Havre'
	},
	{
		id: '72181',
		zipCode: '72000',
		latitude: 47.9885256718,
		longitude: 0.2000304935,
		population: 146064,
		name: 'Le Mans'
	},
	{
		id: '72181',
		zipCode: '72100',
		latitude: 47.9885256718,
		longitude: 0.2000304935,
		population: 146064,
		name: 'Le Mans'
	},
	{
		id: '97422',
		zipCode: '97430',
		latitude: -21.223274585,
		longitude: 55.5584875266,
		population: 60311,
		name: 'Le Tampon'
	},
	{
		id: '97422',
		zipCode: '97418',
		latitude: -21.223274585,
		longitude: 55.5584875266,
		population: 60311,
		name: 'Le Tampon'
	},
	{
		id: '97422',
		zipCode: '97430',
		latitude: -21.223274585,
		longitude: 55.5584875266,
		population: 60311,
		name: 'Le Tampon'
	},
	{
		id: '97422',
		zipCode: '97430',
		latitude: -21.223274585,
		longitude: 55.5584875266,
		population: 60311,
		name: 'Le Tampon'
	},
	{
		id: '97422',
		zipCode: '97430',
		latitude: -21.223274585,
		longitude: 55.5584875266,
		population: 60311,
		name: 'Le Tampon'
	},
	{
		id: '97422',
		zipCode: '97418',
		latitude: -21.223274585,
		longitude: 55.5584875266,
		population: 60311,
		name: 'Le Tampon'
	},
	{
		id: '97101',
		zipCode: '97139',
		latitude: 16.2727794035,
		longitude: -61.5017044974,
		population: 63001,
		name: 'Les Abymes'
	},
	{
		id: '97101',
		zipCode: '97142',
		latitude: 16.2727794035,
		longitude: -61.5017044974,
		population: 63001,
		name: 'Les Abymes'
	},
	{
		id: '59350',
		zipCode: '59800',
		latitude: 50.6317183168,
		longitude: 3.0478327231,
		population: 212566,
		name: 'Lille'
	},
	{
		id: '59350',
		zipCode: '59777',
		latitude: 50.6317183168,
		longitude: 3.0478327231,
		population: 212566,
		name: 'Lille'
	},
	{
		id: '59350',
		zipCode: '59000',
		latitude: 50.6317183168,
		longitude: 3.0478327231,
		population: 212566,
		name: 'Lille'
	},
	{
		id: '59350',
		zipCode: '59260',
		latitude: 50.6317183168,
		longitude: 3.0478327231,
		population: 212566,
		name: 'Lille'
	},
	{
		id: '59350',
		zipCode: '59160',
		latitude: 50.6317183168,
		longitude: 3.0478327231,
		population: 212566,
		name: 'Lille'
	},
	{
		id: '87085',
		zipCode: '87280',
		latitude: 45.8542549589,
		longitude: 1.2487579024,
		population: 133924,
		name: 'Limoges'
	},
	{
		id: '87085',
		zipCode: '87100',
		latitude: 45.8542549589,
		longitude: 1.2487579024,
		population: 133924,
		name: 'Limoges'
	},
	{
		id: '87085',
		zipCode: '87100',
		latitude: 45.8542549589,
		longitude: 1.2487579024,
		population: 133924,
		name: 'Limoges'
	},
	{
		id: '87085',
		zipCode: '87280',
		latitude: 45.8542549589,
		longitude: 1.2487579024,
		population: 133924,
		name: 'Limoges'
	},
	{
		id: '87085',
		zipCode: '87000',
		latitude: 45.8542549589,
		longitude: 1.2487579024,
		population: 133924,
		name: 'Limoges'
	},
	{
		id: '57463',
		zipCode: '57070',
		latitude: 49.1081133279,
		longitude: 6.1955245421,
		population: 123704,
		name: 'Metz'
	},
	{
		id: '57463',
		zipCode: '57050',
		latitude: 49.1081133279,
		longitude: 6.1955245421,
		population: 123704,
		name: 'Metz'
	},
	{
		id: '57463',
		zipCode: '57000',
		latitude: 49.1081133279,
		longitude: 6.1955245421,
		population: 123704,
		name: 'Metz'
	},
	{
		id: '34172',
		zipCode: '34090',
		latitude: 43.6134409138,
		longitude: 3.868516579,
		population: 225511,
		name: 'Montpellier'
	},
	{
		id: '34172',
		zipCode: '34000',
		latitude: 43.6134409138,
		longitude: 3.868516579,
		population: 225511,
		name: 'Montpellier'
	},
	{
		id: '34172',
		zipCode: '34070',
		latitude: 43.6134409138,
		longitude: 3.868516579,
		population: 225511,
		name: 'Montpellier'
	},
	{
		id: '34172',
		zipCode: '34080',
		latitude: 43.6134409138,
		longitude: 3.868516579,
		population: 225511,
		name: 'Montpellier'
	},
	{
		id: '93048',
		zipCode: '93100',
		latitude: 48.8633175054,
		longitude: 2.4481621186,
		population: 90735,
		name: 'Montreuil'
	},
	{
		id: '68224',
		zipCode: '68200',
		latitude: 47.749163303,
		longitude: 7.3257004751,
		population: 110141,
		name: 'Mulhouse'
	},
	{
		id: '68224',
		zipCode: '68200',
		latitude: 47.749163303,
		longitude: 7.3257004751,
		population: 110141,
		name: 'Mulhouse'
	},
	{
		id: '68224',
		zipCode: '68100',
		latitude: 47.749163303,
		longitude: 7.3257004751,
		population: 110141,
		name: 'Mulhouse'
	},
	{
		id: '68224',
		zipCode: '68200',
		latitude: 47.749163303,
		longitude: 7.3257004751,
		population: 110141,
		name: 'Mulhouse'
	},
	{
		id: '33281',
		zipCode: '33700',
		latitude: 44.8322953289,
		longitude: -0.6817330849,
		population: 61990,
		name: 'M\u00e9rignac'
	},
	{
		id: '54395',
		zipCode: '54000',
		latitude: 48.6901995499,
		longitude: 6.1758825443,
		population: 103552,
		name: 'Nancy'
	},
	{
		id: '54395',
		zipCode: '54100',
		latitude: 48.6901995499,
		longitude: 6.1758825443,
		population: 103552,
		name: 'Nancy'
	},
	{
		id: '92050',
		zipCode: '92000',
		latitude: 48.8960701282,
		longitude: 2.2067134635,
		population: 84270,
		name: 'Nanterre'
	},
	{
		id: '44109',
		zipCode: '44200',
		latitude: 47.2316356767,
		longitude: -1.5483100861,
		population: 270343,
		name: 'Nantes'
	},
	{
		id: '44109',
		zipCode: '44000',
		latitude: 47.2316356767,
		longitude: -1.5483100861,
		population: 270343,
		name: 'Nantes'
	},
	{
		id: '44109',
		zipCode: '44100',
		latitude: 47.2316356767,
		longitude: -1.5483100861,
		population: 270343,
		name: 'Nantes'
	},
	{
		id: '44109',
		zipCode: '44300',
		latitude: 47.2316356767,
		longitude: -1.5483100861,
		population: 270343,
		name: 'Nantes'
	},
	{
		id: '06088',
		zipCode: '06000',
		latitude: 43.7119992661,
		longitude: 7.2382688946,
		population: 343123,
		name: 'Nice'
	},
	{
		id: '06088',
		zipCode: '06200',
		latitude: 43.7119992661,
		longitude: 7.2382688946,
		population: 343123,
		name: 'Nice'
	},
	{
		id: '06088',
		zipCode: '06200',
		latitude: 43.7119992661,
		longitude: 7.2382688946,
		population: 343123,
		name: 'Nice'
	},
	{
		id: '06088',
		zipCode: '06200',
		latitude: 43.7119992661,
		longitude: 7.2382688946,
		population: 343123,
		name: 'Nice'
	},
	{
		id: '06088',
		zipCode: '06300',
		latitude: 43.7119992661,
		longitude: 7.2382688946,
		population: 343123,
		name: 'Nice'
	},
	{
		id: '06088',
		zipCode: '06100',
		latitude: 43.7119992661,
		longitude: 7.2382688946,
		population: 343123,
		name: 'Nice'
	},
	{
		id: '30189',
		zipCode: '30900',
		latitude: 43.844938394,
		longitude: 4.34806797,
		population: 133406,
		name: 'N\u00eemes'
	},
	{
		id: '30189',
		zipCode: '30900',
		latitude: 43.844938394,
		longitude: 4.34806797,
		population: 133406,
		name: 'N\u00eemes'
	},
	{
		id: '30189',
		zipCode: '30000',
		latitude: 43.844938394,
		longitude: 4.34806797,
		population: 133406,
		name: 'N\u00eemes'
	},
	{
		id: '45234',
		zipCode: '45000',
		latitude: 47.8828634214,
		longitude: 1.9161035748,
		population: 113089,
		name: 'Orl\u00e9ans'
	},
	{
		id: '45234',
		zipCode: '45100',
		latitude: 47.8828634214,
		longitude: 1.9161035748,
		population: 113089,
		name: 'Orl\u00e9ans'
	},
	{
		id: '45234',
		zipCode: '45100',
		latitude: 47.8828634214,
		longitude: 1.9161035748,
		population: 113089,
		name: 'Orl\u00e9ans'
	},
	{
		id: '64445',
		zipCode: '64000',
		latitude: 43.3200189773,
		longitude: -0.3503379182,
		population: 78800,
		name: 'Pau'
	},
	{
		id: '66136',
		zipCode: '66100',
		latitude: 42.6965954131,
		longitude: 2.8993695398,
		population: 105096,
		name: 'Perpignan'
	},
	{
		id: '66136',
		zipCode: '66000',
		latitude: 42.6965954131,
		longitude: 2.8993695398,
		population: 105096,
		name: 'Perpignan'
	},
	{
		id: '86194',
		zipCode: '86000',
		latitude: 46.5839207726,
		longitude: 0.359947653,
		population: 83507,
		name: 'Poitiers'
	},
	{
		id: '29232',
		zipCode: '29000',
		latitude: 47.9971425162,
		longitude: -4.0911194446,
		population: 63274,
		name: 'Quimper'
	},
	{
		id: '51454',
		zipCode: '51100',
		latitude: 49.2514906066,
		longitude: 4.0402302322,
		population: 187181,
		name: 'Reims'
	},
	{
		id: '51454',
		zipCode: '51100',
		latitude: 49.2514906066,
		longitude: 4.0402302322,
		population: 187181,
		name: 'Reims'
	},
	{
		id: '35238',
		zipCode: '35000',
		latitude: 48.1119791219,
		longitude: -1.6818644914,
		population: 206194,
		name: 'Rennes'
	},
	{
		id: '35238',
		zipCode: '35700',
		latitude: 48.1119791219,
		longitude: -1.6818644914,
		population: 206194,
		name: 'Rennes'
	},
	{
		id: '35238',
		zipCode: '35200',
		latitude: 48.1119791219,
		longitude: -1.6818644914,
		population: 206194,
		name: 'Rennes'
	},
	{
		id: '59512',
		zipCode: '59100',
		latitude: 50.6879774811,
		longitude: 3.1825843462,
		population: 96959,
		name: 'Roubaix'
	},
	{
		id: '76540',
		zipCode: '76000',
		latitude: 49.4413460103,
		longitude: 1.0925678428,
		population: 106560,
		name: 'Rouen'
	},
	{
		id: '76540',
		zipCode: '76100',
		latitude: 49.4413460103,
		longitude: 1.0925678428,
		population: 106560,
		name: 'Rouen'
	},
	{
		id: '92063',
		zipCode: '92500',
		latitude: 48.8691897371,
		longitude: 2.1773406315,
		population: 73599,
		name: 'Rueil-Malmaison'
	},
	{
		id: '92063',
		zipCode: '92500',
		latitude: 48.8691897371,
		longitude: 2.1773406315,
		population: 73599,
		name: 'Rueil-Malmaison'
	},
	{
		id: '97411',
		zipCode: '97490',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97490',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97417',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97400',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97417',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97400',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97490',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97400',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97490',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97490',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97400',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97400',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '97411',
		zipCode: '97400',
		latitude: -20.9329708192,
		longitude: 55.446867167,
		population: 131649,
		name: 'Saint-Denis'
	},
	{
		id: '93066',
		zipCode: '93200',
		latitude: 48.9295650455,
		longitude: 2.3592429975,
		population: 85994,
		name: 'Saint-Denis'
	},
	{
		id: '93066',
		zipCode: '93210',
		latitude: 48.9295650455,
		longitude: 2.3592429975,
		population: 85994,
		name: 'Saint-Denis'
	},
	{
		id: '94068',
		zipCode: '94210',
		latitude: 48.7990677797,
		longitude: 2.4938645045,
		population: 73071,
		name: 'Saint-Maur-des-Foss\u00e9s'
	},
	{
		id: '94068',
		zipCode: '94100',
		latitude: 48.7990677797,
		longitude: 2.4938645045,
		population: 73071,
		name: 'Saint-Maur-des-Foss\u00e9s'
	},
	{
		id: '44184',
		zipCode: '44600',
		latitude: 47.2802857028,
		longitude: -2.2537992725,
		population: 65868,
		name: 'Saint-Nazaire'
	},
	{
		id: '44184',
		zipCode: '44600',
		latitude: 47.2802857028,
		longitude: -2.2537992725,
		population: 65868,
		name: 'Saint-Nazaire'
	},
	{
		id: '97415',
		zipCode: '97411',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97423',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97434',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97460',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97460',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97435',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97435',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97435',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97422',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97434',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97415',
		zipCode: '97460',
		latitude: -21.0445317522,
		longitude: 55.3223334298,
		population: 87629,
		name: 'Saint-Paul'
	},
	{
		id: '97416',
		zipCode: '97410',
		latitude: -21.3123242427,
		longitude: 55.4936155164,
		population: 69009,
		name: 'Saint-Pierre'
	},
	{
		id: '97416',
		zipCode: '97432',
		latitude: -21.3123242427,
		longitude: 55.4936155164,
		population: 69009,
		name: 'Saint-Pierre'
	},
	{
		id: '97416',
		zipCode: '97410',
		latitude: -21.3123242427,
		longitude: 55.4936155164,
		population: 69009,
		name: 'Saint-Pierre'
	},
	{
		id: '97416',
		zipCode: '97410',
		latitude: -21.3123242427,
		longitude: 55.4936155164,
		population: 69009,
		name: 'Saint-Pierre'
	},
	{
		id: '97416',
		zipCode: '97410',
		latitude: -21.3123242427,
		longitude: 55.4936155164,
		population: 69009,
		name: 'Saint-Pierre'
	},
	{
		id: '97416',
		zipCode: '97410',
		latitude: -21.3123242427,
		longitude: 55.4936155164,
		population: 69009,
		name: 'Saint-Pierre'
	},
	{
		id: '97416',
		zipCode: '97410',
		latitude: -21.3123242427,
		longitude: 55.4936155164,
		population: 69009,
		name: 'Saint-Pierre'
	},
	{
		id: '42218',
		zipCode: '42100',
		latitude: 45.4301235512,
		longitude: 4.3791399708,
		population: 180438,
		name: 'Saint-\u00c9tienne'
	},
	{
		id: '42218',
		zipCode: '42100',
		latitude: 45.4301235512,
		longitude: 4.3791399708,
		population: 180438,
		name: 'Saint-\u00c9tienne'
	},
	{
		id: '42218',
		zipCode: '42100',
		latitude: 45.4301235512,
		longitude: 4.3791399708,
		population: 180438,
		name: 'Saint-\u00c9tienne'
	},
	{
		id: '42218',
		zipCode: '42230',
		latitude: 45.4301235512,
		longitude: 4.3791399708,
		population: 180438,
		name: 'Saint-\u00c9tienne'
	},
	{
		id: '42218',
		zipCode: '42000',
		latitude: 45.4301235512,
		longitude: 4.3791399708,
		population: 180438,
		name: 'Saint-\u00c9tienne'
	},
	{
		id: '67482',
		zipCode: '67200',
		latitude: 48.5712679849,
		longitude: 7.7675267952,
		population: 263941,
		name: 'Strasbourg'
	},
	{
		id: '67482',
		zipCode: '67100',
		latitude: 48.5712679849,
		longitude: 7.7675267952,
		population: 263941,
		name: 'Strasbourg'
	},
	{
		id: '67482',
		zipCode: '67000',
		latitude: 48.5712679849,
		longitude: 7.7675267952,
		population: 263941,
		name: 'Strasbourg'
	},
	{
		id: '83137',
		zipCode: '83200',
		latitude: 43.1361589728,
		longitude: 5.9323963425,
		population: 160712,
		name: 'Toulon'
	},
	{
		id: '83137',
		zipCode: '83100',
		latitude: 43.1361589728,
		longitude: 5.9323963425,
		population: 160712,
		name: 'Toulon'
	},
	{
		id: '83137',
		zipCode: '83000',
		latitude: 43.1361589728,
		longitude: 5.9323963425,
		population: 160712,
		name: 'Toulon'
	},
	{
		id: '31555',
		zipCode: '31300',
		latitude: 43.5963814303,
		longitude: 1.4316729336,
		population: 390301,
		name: 'Toulouse'
	},
	{
		id: '31555',
		zipCode: '31500',
		latitude: 43.5963814303,
		longitude: 1.4316729336,
		population: 390301,
		name: 'Toulouse'
	},
	{
		id: '31555',
		zipCode: '31400',
		latitude: 43.5963814303,
		longitude: 1.4316729336,
		population: 390301,
		name: 'Toulouse'
	},
	{
		id: '31555',
		zipCode: '31200',
		latitude: 43.5963814303,
		longitude: 1.4316729336,
		population: 390301,
		name: 'Toulouse'
	},
	{
		id: '31555',
		zipCode: '31000',
		latitude: 43.5963814303,
		longitude: 1.4316729336,
		population: 390301,
		name: 'Toulouse'
	},
	{
		id: '31555',
		zipCode: '31100',
		latitude: 43.5963814303,
		longitude: 1.4316729336,
		population: 390301,
		name: 'Toulouse'
	},
	{
		id: '59599',
		zipCode: '59200',
		latitude: 50.7254418902,
		longitude: 3.1588275721,
		population: 93531,
		name: 'Tourcoing'
	},
	{
		id: '37261',
		zipCode: '37100',
		latitude: 47.3986382281,
		longitude: 0.6965263764,
		population: 132677,
		name: 'Tours'
	},
	{
		id: '37261',
		zipCode: '37200',
		latitude: 47.3986382281,
		longitude: 0.6965263764,
		population: 132677,
		name: 'Tours'
	},
	{
		id: '37261',
		zipCode: '37000',
		latitude: 47.3986382281,
		longitude: 0.6965263764,
		population: 132677,
		name: 'Tours'
	},
	{
		id: '10387',
		zipCode: '10000',
		latitude: 48.2967099637,
		longitude: 4.0782796753,
		population: 60903,
		name: 'Troyes'
	},
	{
		id: '26362',
		zipCode: '26000',
		latitude: 44.9229811667,
		longitude: 4.9144401314,
		population: 64222,
		name: 'Valence'
	},
	{
		id: '78646',
		zipCode: '78000',
		latitude: 48.8025669671,
		longitude: 2.1178929719,
		population: 85761,
		name: 'Versailles'
	},
	{
		id: '59009',
		zipCode: '59650',
		latitude: 50.6324372393,
		longitude: 3.1535257221,
		population: 64997,
		name: "Villeneuve-d'Ascq"
	},
	{
		id: '59009',
		zipCode: '59493',
		latitude: 50.6324372393,
		longitude: 3.1535257221,
		population: 64997,
		name: "Villeneuve-d'Ascq"
	},
	{
		id: '59009',
		zipCode: '59491',
		latitude: 50.6324372393,
		longitude: 3.1535257221,
		population: 64997,
		name: "Villeneuve-d'Ascq"
	},
	{
		id: '69266',
		zipCode: '69100',
		latitude: 45.7707704179,
		longitude: 4.8884581743,
		population: 124152,
		name: 'Villeurbanne'
	},
	{
		id: '94081',
		zipCode: '94400',
		latitude: 48.7882828307,
		longitude: 2.3941268053,
		population: 78908,
		name: 'Vitry-sur-Seine'
	}
];

export const uniqCities = uniqBy(cities, (c) => c.id);
