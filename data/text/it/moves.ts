export const MovesText: { [id: IDEntry]: MoveText } = {
	"10000000voltthunderbolt": {
		name: "Iperfulmine",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Ha una possibilità molto alta di infliggere un brutto colpo.",
		shortDesc: "Molto probabile brutto colpo.",
	},
	absorb: {
		name: "Assorbimento",
		// Official flavor text: "Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto."
		desc: "L'utilizzatore recupera 1/2 dei PS sottratti al bersaglio, arrotondati per eccesso sul valore intermedio. Se l'utilizzatore tiene una Granradice, recupera 1,3x i PS, arrotondati per difetto sul valore intermedio.",
		shortDesc: "L'utilizzatore recupera il 50% dei danni inflitti.",
		gen4: {
			desc: "L'utilizzatore recupera 1/2 dei PS sottratti al bersaglio, arrotondati per difetto. Se l'utilizzatore tiene una Granradice, recupera 1,3x i PS, arrotondati per difetto.",
		},
		gen3: {
			desc: "L'utilizzatore recupera 1/2 dei PS sottratti al bersaglio, arrotondati per difetto.", 
		},
		gen2: {
			desc: "L'utilizzatore recupera 1/2 dei PS sottratti al bersaglio, arrotondati per difetto. Se il bersaglio ha Sostituto attivo, la mossa fallisce.", 
		},
		gen1: {
			desc: "L'utilizzatore recupera 1/2 dei PS sottratti al bersaglio, arrotondati per difetto. Se questa mossa rompe il Sostituto del bersaglio, l'utilizzatore non recupera PS.", 
		},
	},
	accelerock: {
		name: "Rocciarapida",
		// Official flavor text: "Chi la usa attacca il bersaglio colpendolo a tutta velocità. Questa mossa ha priorità alta."
		desc: "Nessun effetto aggiuntivo.", 
		shortDesc: "Alta priorità.", 
	},
	acid: {
		name: "Acido",
		// Official flavor text: "Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale."
		desc: "Possibilità del 10% di ridurre la Difesa Speciale del bersaglio di 1 stadio.", 
		shortDesc: "10% di ridurre la DSp. Colpisce nemici adiacenti.", 
		gen3: {
			desc: "Possibilità del 10% di ridurre la Difesa del bersaglio di 1 stadio.", 
			shortDesc: "10% di ridurre la Dif. Colpisce nemici adiacenti.", 
		},
		gen1: {
			desc: "Possibilità del 33% di ridurre la Difesa del bersaglio di 1 stadio.", 
			shortDesc: "33% di ridurre la Dif del bersaglio di 1 stadio.",  // NEEDS CHECK
		},
		gen2: {
			shortDesc: "10% di ridurre la Dif del bersaglio di 1 stadio.",  // NEEDS CHECK
		},
	},
	acidarmor: {
		name: "Scudo Acido",
		// Official flavor text: "Chi la usa altera la sua struttura cellulare passando allo stato liquido. La Difesa sale di molto."
		desc: "Aumenta la Difesa dell'utilizzatore di 2 stadi.", 
		shortDesc: "Aumenta la Dif dell'utilizzatore di 2 stadi.",
	},
	aciddownpour: {
		name: "Acidiluvio Corrosivo",
		shortDesc: "Potenza influenzata dalla mossa di partenza.",
	},
	acidspray: {
		name: "Acidobomba",
		// Official flavor text: "Chi la usa attacca il bersaglio con un acido altamente corrosivo. Il fluido riduce di molto la Difesa Speciale del bersaglio."
		desc: "Possibilità del 100% di ridurre la Difesa Speciale del bersaglio di 2 stadi.", // NEEDS CHECK
		shortDesc: "Riduce la DSp del bersaglio di 2 stadi.", // NEEDS CHECK
	},
	acrobatics: {
		name: "Acrobazia",
		desc: "La potenza raddoppia se l'utilizzatore non usa uno strumento",
		shortDesc: "Danni raddoppiati senza uno strumento.",
	},
	acupressure: {
		name: "Acupressione",
		// Official flavor text: "Chi la usa esercita pressione su alcuni punti nevralgici e aumenta di molto una statistica a caso."
		desc: "Aumenta di 2 stadi una statistica casuale escludendo le statistiche già a 6 stadi. L'utilizzatore può scegliere se usare questa mossa su sé stesso o su un alleato adiacente. La mossa fallisce se nessuna statistica può essere aumentata o se usata su un alleato con Sostituto attivo.", 
		shortDesc: "Aumenta di 2 una statistica casuale.",
		gen4: {
			desc: "Aumenta di 2 stadi una statistica casuale escludendo le statistiche già a 6 stadi. L'utilizzatore può scegliere se usare questa mossa su sé stesso o su un alleato. La mossa fallisce se nessuna statistica può essere aumentata o se usata su bersaglio con Sostituto attivo.", 
		},
	},
	aerialace: {
		name: "Aeroassalto",
		shortDesc: "Va sempre a segno.",
	},
	aeroblast: {
		name: "Aerocolpo",
		// Official flavor text: "Colpisce il bersaglio con un vortice d’aria per danneggiarlo. Probabile brutto colpo."
		desc: "Maggiori probabilità di infliggere un brutto colpo.",
		shortDesc: "Probabile brutto colpo.",
	},
	afteryou: {
		name: "Cortesia",
		// Official flavor text: "Chi la usa aiuta un bersaglio più lento permettendogli di agire subito dopo."
		desc: "Durante questo turno costringe il bersaglio a muoversi subito dopo l'utilizzatore, indipendentemente dalla priorità della mossa selezionata. Fallisce se il bersaglio si sarebbe comunque mosso subito dopo o se ha già agito durante questo turno.",
		shortDesc: "Costringe il bersaglio ad agire subito.",

		activate: "  {TARGET} approfitta della cortesia!",
	},
	agility: {
		name: "Agilità",
		// Official flavor text: "Chi la usa rilassa e alleggerisce il proprio corpo per far salire di molto la Velocità."
		desc: "Aumenta la Velocità dell'utilizzatore di 2 stadi.",
		shortDesc: "Aumenta la Vel dell'utilizzatore di 2 stadi.",
	},
	aircutter: {
		name: "Aerasoio",
		// Official flavor text: "Chi la usa provoca un vento tagliente che sferza i nemici intorno. Probabile brutto colpo."
		desc: "Probabile brutto colpo.",
		shortDesc: "Probabile brutto colpo. Colpisce nemici adiacenti.",
	},
	airslash: {
		name: "Eterelama",
		// Official flavor text: "Chi la usa attacca con un vento tagliente che squarcia il cielo. Può anche far tentennare il Pokémon colpito."
		desc: "Possibilità del 30% di far tentennare il bersaglio.", // NEEDS CHECK
		shortDesc: "30% di far tentennare il bersaglio.", // NEEDS CHECK
	},
	alloutpummeling: {
		name: "Iperscarica Furiosa",
		shortDesc: "Potenza influenzata dalla mossa di partenza.",
	},
	alluringvoice: {
		name: "Ammaliavoce",
		desc: "Possibilità del 100% di confondere i bersagli se hanno ricevuto un aumento di statistiche durante questo turno.", // NEEDS CHECK
		shortDesc: "Confonde i bersagli che si sono appena potenziati.", // NEEDS CHECK
	},
	allyswitch: {
		name: "Cambiaposto",
		// Official flavor text: "Chi la usa cambia di posto con un alleato in campo grazie a un misterioso potere."
		desc: "L'utilizzatore si scambia di posizione con il suo alleato. Fallisce se l'utilizzatore non ha un alleato in campo. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e triplica ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Cambiaposto.", 
		shortDesc: "Utilizzatore e bersaglio si scambiano di posizione.",
		gen8: {
			desc: "L'utilizzatore si scambia di posizione con il suo alleato. Fallisce se l'utilizzatore non ha un alleato in campo.",
			shortDesc: "Utilizzatore e bersaglio si scambiano di posizione.",
		},
		gen6: {
			desc: "L'utilizzatore si scambia di posto con l'alleato dal lato opposto del campo. Fallisce se non c'è un alleato in quella posizione, se non ci sono alleati in campo o se l'utilizzatore è al centro.",
			shortDesc: "L'utilizzatore si scambia con l'alleato più lontano.", 
		},
	},
	amnesia: {
		name: "Amnesia",
		// Official flavor text: "Chi la usa svuota per un po’ la mente per dimenticare i problemi. La Difesa Speciale aumenta di molto."
		desc: "Aumenta la Difesa Speciale dell'utilizzatore di 2 stadi.",
		shortDesc: "Aumenta la DSp dell'utilizzatore di 2 stadi.",
		gen1: {
			desc: "Aumenta gli Speciali dell'utilizzatore di 2 stadi.",
			shortDesc: "Aumenta gli Spe dell'utilizzatore di 2 stadi.",
		},
	},
	anchorshot: {
		name: "Colpo d’Ancora",
		// Official flavor text: "Chi la usa attacca il nemico con un’ancora e lo intrappola nella catena impedendogli di fuggire."
		desc: "Impedisce al bersaglio di essere ritirato. Il bersaglio può comunque essere ritirato se tiene un Disfoguscio o usa Invertivolt, Monito, Retromarcia, Staffetta, Teletrasporto o Virata. L'effetto termina se l'utilizzatore o il bersaglio lascia il campo.", 
		shortDesc: "Impedisce al bersaglio di essere ritirato.", // NEEDS CHECK
		gen7: {
			desc: "Impedisce al bersaglio di essere ritirato. Il bersaglio può comunque essere ritirato se tiene un Disfoguscio o usa Invertivolt, Monito, Retromarcia o Staffetta. Se il bersaglio lascia il campo grazie a Staffetta, chi lo sostituisce rimarrà intrappolato. L'effetto termina se l'utilizzatore lascia il campo.", // NEEDS CHECK
		},
	},
	ancientpower: {
		name: "Forzantica",
		// Official flavor text: "Colpisce il bersaglio con una forza primordiale. Può aumentare tutte le statistiche."
		desc: "Possibilità del 10% di aumentare Attacco, Difesa, Attacco Speciale, Difesa Speciale e Velocità dell'utilizzatore di 1 stadio.",
		shortDesc: "10% di aumentare tutte le statistiche.",
	},
	appleacid: {
		name: "Acido Malico",
		// Official flavor text: "Chi la usa attacca il bersaglio con un liquido acido ricavato da mele aspre riducendone la Difesa Speciale."
		desc: "Possibilità del 100% di ridurre la Difesa Speciale del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "Riduce la DSp del bersaglio di 1 stadio.", // NEEDS CHECK
	},
	aquacutter: {
		name: "Idrotaglio",
		desc: "Maggiori probabilità di infliggere un brutto colpo.",
		shortDesc: "Probabile brutto colpo",
	},
	aquajet: {
		name: "Acquagetto",
		// Official flavor text: "Chi la usa colpisce a una tale velocità da rendersi quasi invisibile. Questa mossa ha priorità alta."
		desc: "Nessun effetto aggiuntivo.",
		shortDesc: "Alta priorità.", 
	},
	aquaring: {
		name: "Acquanello",
		// Official flavor text: "Chi la usa si avvolge in un velo d’acqua. Recupera alcuni PS a ogni turno."
		desc: "L'utilizzatore recupera 1/16 dei suoi PS massimi, arrotondati per difetto, alla fine di ogni turno fintanto che rimane in campo. Se l'utilizzatore tiene una Granradice, recupera 1,3x i PS, arrotondati per difetto sul valore intermedio. Se l'utilizzatore usa Staffetta, chi lo sostituisce riceverà l'effetto curativo.",
		shortDesc: "L'utilizzatore recupera 1/16 dei PS ogni turno.",

		start: "  Un velo d’acqua avvolge {POKEMON}!",
		heal: "  Un velo d’acqua fa recuperare PS {POKEMON:a}!",
	},
	aquastep: {
		name: "Idroballetto",
		desc: "Possibilità del 100% di aumentare la Velocità dell'utilizzatore di 1 stadio.",
		shortDesc: "Aumenta la Vel dell'utilizzatore di 1 stadio.",
	},
	aquatail: {
		name: "Idrondata",
		shortDesc: "Nessun effetto aggiuntivo.",
	},
	armorcannon: {
		name: "Corazza Cannone",
		desc: "Riduce la Difesa e la Difesa Speciale dell'utilizzatore di 1 stadio.",
		shortDesc: "Riduce Dif e DSp dell'utilizzatore di 1 stadio.", // NEEDS CHECK
	},
	armthrust: {
		name: "Sberletese",
		// Official flavor text: "Raffica di ceffoni che colpisce da due a cinque volte di fila."
		desc: "Colpisce da due a cinque volte. Ha il 35% di possibilità di colpire due o tre volte e il 15% di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte. Se l'utilizzatore tiene un Dado truccato, questa mossa colpisce 4-5 volte.",
		shortDesc: "Colpisce 2-5 volte in un turno.",
		gen8: {
			desc: "Colpisce da due a cinque volte. Ha il 35% di possibilità di colpire due o tre volte e il 15% di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte.",
		},
		gen4: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte. Se il bersaglio tiene un Focalnastro e ha tutti i PS quando questa mossa viene usata, non verrà mandato KO a prescindere dal numero di colpi.",
		},
		gen3: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi.",
		},
	},
	aromatherapy: {
		name: "Aromaterapia",
		// Official flavor text: "Chi la usa rilascia un dolce profumo che cura tutti i problemi di stato propri e degli alleati."
		desc: "Tutti i Pokémon nella squadra dell'utilizzatore vengono curati dei loro problemi di stato non volatili. I Pokémon in campo con l'abilità Mangiaerba non vengono curati, a meno che non siano l'utilizzatore.",
		shortDesc: "Cura i problemi di stato della squadra.",
		gen5: {
			desc: "Tutti i Pokémon nella squadra dell'utilizzatore vengono curati dei loro problemi di stato non volatili.",
		},

		activate: "  Un gradevole profumo si diffonde nell’aria!",
	},
	aromaticmist: {
		name: "Nebularoma",
		// Official flavor text: "Aumenta la Difesa Speciale di un alleato tramite un misterioso aroma."
		desc: "Aumenta la Difesa Speciale del bersaglio di 1 stadio. Fallisce se non c'è un alleato adiacente all'utilizzatore.",
		shortDesc: "Aumenta la DSp di un alleato di 1 stadio.",
	},
	assist: {
		name: "Assistente",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Viene usata una mossa casuale tra quelle conosciute dai membri della squadra dell'utilizzatore. Non può scegliere Agodifesa, Altruismo, Assistente, Auguri, Boato, Cadutalibera, Cannonbecco, Cediregalo, Centripugno, Codadrago, Contrattacco, Copione, Destinobbligato, Fintoattacco, Fortino, Fossa, Furto, Gusciotrappola, Individua, Mano nella Mano, Metronomo, Mimica, Naturforza, Oscurtuffo, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltappeto, Ribaltiro, Riflettore, Rimbalzo, Rutto, Schiamazzo, Schizzo, Scippo, Scontro, Scudo Reale, Sonnonalia, Sonoqui, Specchiovelo, Speculmossa, Spettrotuffo, Sub, Supplica, Teracluster, Trasformazione, Turbine, Turboincanto, Turborissa, Turbotenebra, Turbotossina, Turboustione o Volo.", // NEEDS CHECK
		shortDesc: "Usa una mossa causale di un membro della squadra.",
		gen8: {
			desc: "Viene usata una mossa casuale tra quelle conosciute dai membri della squadra dell'utilizzatore. Non può scegliere Agodifesa, Altruismo, Assistente, Auguri, Boato, Cadutalibera, Cannonbecco, Cediregalo, Centripugno, Codadrago, Contrattacco, Copione, Destinobbligato, Fintoattacco, Fortino, Fossa, Furto, Gusciotrappola, Individua, Mano nella Mano, Metronomo, Mimica, Naturforza, Oscurtuffo, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltappeto, Ribaltiro, Riflettore, Rimbalzo, Rutto, Schiamazzo, Schizzo, Scippo, Scontro, Scudo Reale, Sonnonalia, Sonoqui, Specchiovelo, Speculmossa, Spettrotuffo, Sub, Supplica, Trasformazione, Turbine o Volo.", // NEEDS CHECK
		},
		gen7: {
			desc: "Viene usata una mossa casuale tra quelle conosciute dai membri della squadra dell'utilizzatore. Non può scegliere Agodifesa, Altruismo, Assistente, Auguri, Boato, Cadutalibera, Cannonbecco, Cediregalo, Centripugno, Codadrago, Contrattacco, Copione, Destinobbligato, Fintoattacco, Fortino, Fossa, Furto, Gusciotrappola, Individua, Mano nella Mano, Metronomo, Mimica, Naturforza, Oscurtuffo, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltappeto, Ribaltiro, Riflettore, Rimbalzo, Rutto, Schiamazzo, Schizzo, Scippo, Scontro, Scudo Reale, Sonnonalia, Sonoqui, Specchiovelo, Speculmossa, Spettrotuffo, Sub, Supplica, Trasformazione, Turbine, Volo. o qualunque mossa Z.", // NEEDS CHECK
		},
		gen6: {
			desc: "Viene usata una mossa casuale tra quelle conosciute dai membri della squadra dell'utilizzatore. Non può scegliere Agodifesa, Altruismo, Assistente, Auguri, Boato, Cadutalibera, Cediregalo, Centripugno, Codadrago, Contrattacco, Copione, Destinobbligato, Fintoattacco, Fossa, Furto, Individua, Mano nella Mano, Metronomo, Mimica, Naturforza, Oscurtuffo, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltappeto, Ribaltiro, Rimbalzo, Rutto, Schiamazzo, Schizzo, Scippo, Scontro, Scudo Reale, Sonnonalia, Sonoqui, Specchiovelo, Speculmossa, Spettrotuffo, Sub, Supplica, Trasformazione, Turbine o Volo.", // NEEDS CHECK
		},
		gen5: {
			desc: "Viene usata una mossa casuale tra quelle conosciute dai membri della squadra dell'utilizzatore. Non può scegliere Altruismo, Assistente, Cediregalo, Centripugno, Codadrago, Contrattacco, Copione, Destinobbligato, Fintoattacco, Furto, Individua, Metronomo, Mimica, Naturforza, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltiro, Schiamazzo, Schizzo, Scippo, Scontro, Sonnonalia, Sonoqui, Specchiovelo, Speculmossa, Supplica o Trasformazione.", // NEEDS CHECK
		},
		gen4: {
			desc: "Viene usata una mossa casuale tra quelle conosciute dai membri della squadra dell'utilizzatore. Non può scegliere Altruismo, Assistente, Centripugno, Contrattacco, Copione, Destinobbligato, Fintoattacco, Furto, Individua, Metronomo, Mimica, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Schiamazzo, Schizzo, Scippo, Scontro, Sonnonalia, Sonoqui, Specchiovelo o Supplica." // NEEDS CHECK
		},
		gen3: {
			desc: "Viene usata una mossa casuale tra quelle conosciute dai membri della squadra dell'utilizzatore. Non può scegliere Altruismo, Assistente, Centripugno, Contrattacco, Destinobbligato, Furto, Individua, Metronomo, Mimica, Protezione, Raggiro, Resistenza, Schizzo, Scippo, Scontro, Sonnonalia, Sonoqui, Specchiovelo, Speculmossa o Supplica.",  // NEEDS CHECK
		},
	},
	assurance: {
		name: "Garanzia",
		// Official flavor text: "Se il bersaglio ha già subito dei danni nello stesso turno, la potenza di questa mossa raddoppia."
		desc: "La potenza raddoppia se il bersaglio ha già subito danni in questo turno, ignorando i danni diretti di Panciamburo, confusione, Maledizione e Malcomune.",
		shortDesc: "Danni raddoppiati se il bersaglio ha già subito danni.",
		gen4: {
			desc: "La potenza raddoppia se il bersaglio ha già subito danni in questo turno", 
		},
	},
	astonish: {
		name: "Sgomento",
		// Official flavor text: "Chi la usa attacca il bersaglio emettendo un verso terrificante. Può anche farlo tentennare."
		desc: "Possibilità del 30% di far tentennare il bersaglio.", // NEEDS CHECK
		shortDesc: "30% di far tentennare il bersaglio.", // NEEDS CHECK
		gen3: {
			desc: "Possibilità del 30% di far tentennare il bersaglio. La potenza raddoppia se il bersaglio ha usato Minimizzato da quando è in campo.", // NEEDS CHECK
		},
	},
	astralbarrage: {
		name: "Schegge Astrali",
		// Official flavor text: "Il Pokémon attacca i nemici scatenandogli contro una miriade di piccoli spettri."
		desc: "Nessun effetto aggiuntivo.", 
		shortDesc: "Nessun effetto aggiuntivo. Colpisce nemici adiacenti.",
	},
	attackorder: {
		name: "Comandourto",
		// Official flavor text: "Chi la usa raduna i suoi sgherri per colpire il bersaglio. Probabile brutto colpo."
		desc: "Maggiori probabilità di infliggere un brutto colpo.", 
		shortDesc: "Probabile brutto colpo.", 
	},
	attract: {
		name: "Attrazione",
		// Official flavor text: "Se il bersaglio è del sesso opposto, s’infatua e diventa riluttante ad attaccare."
		desc: "Applica infatuazione sul bersaglio, rendendolo incapace di attaccare il 50% delle volte. Fallisce se l'utilizzatore e il bersaglio sono dello stesso genere, se uno dei due è di genere neutro, o se il bersaglio è già infatuato. L'effetto finisce quando l'utilizzatore o il bersaglio viene ritirato. I Pokémon con l'abilità Indifferenza o protetti da Aromavelo sono immuni.", 
		shortDesc: "Applica infatuazione sul bersaglio di genere opposto.", 
		gen5: {
			desc: "Applica infatuazione sul bersaglio, rendendolo incapace di attaccare il 50% delle volte. Fallisce se l'utilizzatore e il bersaglio sono dello stesso genere, se uno dei due è di genere neutro, o se il bersaglio è già infatuato. L'effetto finisce quando l'utilizzatore o il bersaglio viene ritirato. I Pokémon con l'abilità Indifferenza sono immuni.", 
		},
		gen2: {
			desc: "Applica infatuazione sul bersaglio, rendendolo incapace di attaccare il 50% delle volte. Fallisce se l'utilizzatore e il bersaglio sono dello stesso genere, se uno dei due è di genere neutro, o se il bersaglio è già infatuato. L'effetto finisce quando l'utilizzatore o il bersaglio viene ritirato.", 
		},

		start: "  {POKEMON} si innamora!",
		startFromItem: "  {ITEM:definite:capitalize} fa{INFLECT:ITEM:s=:p=nno} innamorare {POKEMON}!",
		end: "  {POKEMON} non è più innamorato!",
		endFromItem: "  {POKEMON} guarisce dall’innamoramento grazie {ITEM:a:definite:classified}!",
		activate: "  {POKEMON} è innamorato di {TARGET}!",
		cant: "L’innamoramento impedisce {POKEMON:a} di agire!",
	},
	aurasphere: {
		name: "Forzasfera",
		shortDesc: "Va sempre a segno.", 
	},
	aurawheel: {
		name: "Ruota d’Aura",
		// Official flavor text: "Chi la usa emette l’energia accumulata nelle guance per attaccare e aumentare la propria Velocità. Il tipo della mossa cambia in base alla forma assunta da Morpeko."
		desc: "Possibilità del 100% di aumentare la Velocità dell'utilizzatore di 1 stadio. Se l'utilizzatore è Morpeko in forma Panciapiena, questa mossa è di tipo Elettro. Se l'utilizzatore è Morpeko in forma Panciavuota, questa mossa è di tipo Buio. Questa mossa non può essere utilizzata a meno che l'utilizzatore sia, considerando anche Trasformazione, Morpeko in forma Panciapiena o Panciavuota.", 
		shortDesc: "Morpeko: Elettro; Panciavuota: Buio; 100% +1 Vel.", 
	},
	aurorabeam: {
		name: "Raggiaurora",
		// Official flavor text: "Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco."
		desc: "Possibilità del 10% di ridurre l'Attacco del bersaglio di 1 stadio.", 
		shortDesc: "10% di ridurre l'Att del bersaglio di 1 stadio.", 
		gen1: {
			desc: "Possibilità del 33% di ridurre l'Attacco del bersaglio di 1 stadio.", 
			shortDesc: "33% di ridurre l'Att del bersaglio di 1 stadio.", 
		},
	},
	auroraveil: {
		name: "Velaurora",
		// Official flavor text: "Riduce i danni subiti dalle mosse fisiche e dalle mosse speciali per cinque turni. Si può usare solo quando grandina."
		desc: "Per 5 turni, l'utilizzatore e la sua squadra incassano 0,5x danni dagli attacchi fisici e speciali, o 0,66x danni se in una Lotta in Doppio; la riduzione dei danni non è cumulabile con Riflesso e Schermoluce. I brutti colpi ignorano questa protezione. Viene rimossa dalla squadra dell'utilizzatore se questo o un suo alleato viene successivamente colpito da Breccia, Psicozanna o Scacciabruma. Breccia e Psicozanna rimuovono l'effetto prima del calcolo dei danni. Dura per 8 turni se l'utilizzatore tiene una Creta luce. Fallisce a meno che la condizione atmosferica attiva non sia la neve.", // NEEDS CHECK
		shortDesc: "Dimezza i danni per 5 turni. Necessita la neve.", 
		gen8: {
			desc: "Per 5 turni, l'utilizzatore e la sua squadra incassano 0,5x danni dagli attacchi fisici e speciali, o 0,66x danni se in una Lotta in Doppio; la riduzione dei danni non è cumulabile con Riflesso e Schermoluce. I brutti colpi ignorano questa protezione. Viene rimossa dalla squadra dell'utilizzatore se questo o un suo alleato viene successivamente colpito da Breccia, Psicozanna o Scacciabruma. Breccia e Psicozanna rimuovono l'effetto prima del calcolo dei danni. Dura per 8 turni se l'utilizzatore tiene una Creta luce. Fallisce a meno che la condizione atmosferica attiva non sia la grandine.", // NEEDS CHECK
			shortDesc: "Dimezza i danni per 5 turni. Necessita la grandine.", 
		},

		start: "  La resistenza di {TEAM} agli attacchi fisici e speciali aumenta grazie a Velaurora!",
		end: "  L’effetto di Velaurora su {TEAM} è finito!",
	},
	autotomize: {
		name: "Sganciapesi",
		// Official flavor text: "Chi la usa si libera di tutti i pesi in eccesso, alleggerendosi e aumentando di molto la propria Velocità."
		desc: "Aumenta la Velocità dell'utilizzatore di 2 stadi. Se la Velocità dell'utilizzatore è stata cambiata, il suo peso viene ridotto di 100 kg finché resta in campo. Questo effetto è cumulabile ma non può ridurre il peso dell'utilizzatore a meno di 0,1 kg.", 
		shortDesc: "Aumenta la Vel di 2 stadi; utilizzatore perde 100 kg.", 

		start: "  {POKEMON} diventa velocissimo!",
	},
	avalanche: {
		name: "Slavina",
		// Official flavor text: "Mossa d’attacco che infligge doppi danni se chi la usa è stato ferito dal Pokémon bersaglio nello stesso turno."
		desc: "La potenza raddoppia se l'utilizzatore è stato colpito dal bersaglio durante questo turno.",
		shortDesc: "Danni raddoppiati su chi ha danneggiato l'utilizzatore.",
		gen4: {
			desc: "La potenza raddoppia se l'utilizzatore è stato colpito da un Pokémon nella posizione del bersaglio durante questo turno.",
		},
	},
	axekick: {
		name: "Calcio ad Ascia",
		desc: "Possibilità del 30% di confondere il bersaglio. Se l'attacco non ha successo, l'utilizzatore perde metà dei suoi PS massimi, arrotondati per difetto, come danno da caduta. I Pokémon con Magicscudo sono immuni al danno da caduta.", // NEEDS CHECK
		shortDesc: "30% confusione. -50% PS se la mossa fallisce.", // NEEDS CHECK

		damage: "#crash",
	},
	babydolleyes: {
		name: "Occhioni Teneri",
		// Official flavor text: "Chi la usa rivolge i propri occhioni languidi al bersaglio, riducendone l’Attacco. Questa mossa ha priorità alta."
		desc: "Riduce l'Attacco del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "Riduce l'Att del bersaglio di 1 stadio. Alta priorità", // NEEDS CHECK
	},
	baddybad: {
		name: "Zona Buiabuia",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Evoca Riflesso per 5 turni all'utilizzo.", // NEEDS CHECK
		shortDesc: "Evoca Riflesso.", // NEEDS CHECK
	},
	banefulbunker: {
		name: "Fortino",
		// Official flavor text: "Protegge dagli attacchi e avvelena i Pokémon che lanciano un attacco diretto su chi la usa."
		desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno; i Pokémon che lo attaccano con mosse da contatto vengono avvelenati. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e triplica ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Agodifesa, Anticipo, Bodyguard, Dynabarriera, Egida Ignea, Fortino, Individua, Protezione, Resistenza, Sbarramento, Scudo Reale, Telatrappola o se è stata una delle mosse menzionate e l'avversario ha rotto la protezione. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		shortDesc: "Protegge dalle mosse. Contatto: Avvelenamento.", // NEEDS CHECK
		gen8: {
			desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno; i Pokémon che lo attaccano con mosse da contatto vengono avvelenati. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e triplica ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Agodifesa, Anticipo, Bodyguard, Dynabarriera, Fortino, Individua, Protezione, Resistenza, Sbarramento, Scudo Reale o se è stata una delle mosse menzionate e l'avversario ha rotto la protezione. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		},
		gen7: {
			desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno; i Pokémon che lo attaccano con mosse da contatto vengono avvelenati. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e triplica ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Agodifesa, Anticipo, Bodyguard, Fortino, Individua, Protezione, Resistenza, Scudo Reale o se è stata una delle mosse menzionate e l'avversario ha rotto la protezione. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		},
	},
	barbbarrage: {
		name: "Mille Fielespine",
		desc: "Possibilità del 50% di infliggere avvelenamento al bersaglio. La potenza raddoppia se il bersaglio è già avvelenato.", // NEEDS CHECK
		shortDesc: "50% avvelenamento. Danni raddoppiati se avvelenato.", // NEEDS CHECK
	},
	barrage: {
		name: "Attacco Pioggia",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Colpisce da due a cinque volte. Ha il 35% di possibilità di colpire due o tre volte e il 15% di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte.", // NEEDS CHECK
		shortDesc: "Colpisce 2-5 volte in un turno.", // NEEDS CHECK
		gen4: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte. Se il bersaglio tiene un Focalnastro e ha tutti i PS quando questa mossa viene usata, non verrà mandato KO a prescindere dal numero di colpi.", // NEEDS CHECK
		},
		gen3: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi.", // NEEDS CHECK
		},
		gen1: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Il danno è calcolato una volta per il primo colpo e usato per ogni altro colpo. Se uno dei colpi rompe il Sostituto del bersaglio, la mossa si interrompe.", // NEEDS CHECK
		},
	},
	barrier: {
		name: "Barriera",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Aumenta la Difesa dell'utilizzatore di 2 stadi.", // NEEDS CHECK
		shortDesc: "Aumenta la Dif dell'utilizzatore di 2 stadi.", // NEEDS CHECK
	},
	batonpass: {
		name: "Staffetta",
		// Official flavor text: "Chi la usa è sostituito da un Pokémon della squadra, che eredita anche ogni modifica alle statistiche."
		desc: "L'utilizzatore viene rimpiazzato con un altro membro della squadra. Il Pokémon selezionato riceve le modifiche alle statistiche dell'utilizzatore, oltre agli effetti di confusione, Acquavelo, Anticura, Divieto, Focalenergia, Gastroacido, Grido del Drago, Ingannoforza, Localizza (Leggimente), Magnetascesa, Maledizione, Parassiseme, Radicamento, Telecinesi, Ultimocanto e Sostituto con i relativi PS rimasti. L'effetto di Gastroacido non viene trasferito se il Pokémon che entra in campo ha un'abilità che ne è immune.", // NEEDS CHECK
		shortDesc: "L'utilizzatore si ritira passando vari effetti.", // NEEDS CHECK
		gen8: {
			desc: "L'utilizzatore viene rimpiazzato con un altro membro della squadra. Il Pokémon selezionato riceve le modifiche alle statistiche dell'utilizzatore, oltre agli effetti di confusione, Acquavelo, Anticura, Divieto, Focalenergia, Gastroacido, Ingannoforza, Localizza (Leggimente), Magnetascesa, Maledizione, Parassiseme, Radicamento, Telecinesi, Ultimocanto e Sostituto con i relativi PS rimasti. L'effetto di Gastroacido non viene trasferito se il Pokémon che entra in campo ha un'abilità che ne è immune.", // NEEDS CHECK
		},
		gen7: {
			desc: "L'utilizzatore viene rimpiazzato con un altro membro della squadra. Il Pokémon selezionato riceve le modifiche alle statistiche dell'utilizzatore, oltre agli effetti di confusione, Acquavelo, Anticura, Divieto, Focalenergia, Gastroacido, Ingannoforza, Localizza (Leggimente), Magnetascesa, Maledizione, Parassiseme, Radicamento, Telecinesi, Ultimocanto, lo stato antifuga (Malosguardo, Blocco, Ragnatela) e Sostituto con i relativi PS rimasti. L'effetto di Gastroacido non viene trasferito se il Pokémon che entra in campo ha un'abilità che ne è immune. L'effetto di Telecinesi non viene trasferito se il Pokémon ricevente è Mega Gengar.", // NEEDS CHECK
		},
		gen5: {
			desc: "L'utilizzatore viene rimpiazzato con un altro membro della squadra. Il Pokémon selezionato riceve le modifiche alle statistiche dell'utilizzatore, oltre agli effetti di confusione, Acquavelo, Anticura, Divieto, Focalenergia, Gastroacido, Ingannoforza, Localizza (Leggimente), Magnetascesa, Maledizione, Parassiseme, Radicamento, Telecinesi, Ultimocanto, lo stato antifuga (Malosguardo, Blocco, Ragnatela) e Sostituto con i relativi PS rimasti.", // NEEDS CHECK
		},
		gen4: {
			desc: "L'utilizzatore viene rimpiazzato con un altro membro della squadra. Il Pokémon selezionato riceve le modifiche alle statistiche dell'utilizzatore, oltre agli effetti di confusione, Acquavelo, Anticura, Divieto, Docciascudo, Fangata, Focalenergia, Gastroacido, Ingannoforza, Localizza (Leggimente), Magnetascesa, Maledizione, Parassiseme, Radicamento, Telecinesi, Ultimocanto, lo stato antifuga (Malosguardo, Blocco, Ragnatela) e Sostituto con i relativi PS rimasti." // NEEDS CHECK
		},
		gen3: {
			desc: "L'utilizzatore viene rimpiazzato con un altro membro della squadra. Il Pokémon selezionato riceve le modifiche alle statistiche dell'utilizzatore, oltre agli effetti di confusione, Docciascudo, Fangata, Focalenergia, Localizza (Leggimente), Maledizione, Parassiseme, Ultimocanto, lo stato antifuga (Malosguardo, Blocco, Ragnatela) e Sostituto con i relativi PS rimasti.", // NEEDS CHECK
		},
		gen2: {
			desc: "L'utilizzatore viene rimpiazzato con un altro membro della squadra. Il Pokémon selezionato riceve le modifiche alle statistiche dell'utilizzatore, oltre agli effetti di confusione, Focalenergia, Localizza (Leggimente), Maledizione, Minimizzato, Nebbia, Parassiseme, Preveggenza, Ricciolscudo, Ultimocanto, lo stato antifuga (Malosguardo, Ragnatela) e Sostituto con i relativi PS rimasti.", // NEEDS CHECK
		},
	},
	beakblast: {
		name: "Cannonbecco",
		// Official flavor text: "Chi la usa arroventa il proprio becco e poi attacca. Se un Pokémon lo colpisce con un attacco diretto mentre sta accumulando calore, resta scottato."
		desc: "Se l'utilizzatore viene colpito con una mossa di contatto in questo turno prima dell'esecuzione di Cannonbecco, il Pokémon attaccante viene scottato.", // NEEDS CHECK
		shortDesc: "Scotta a contatto prima che la mossa venga usata.", // NEEDS CHECK

		start: "  {POKEMON} inizia a scaldare il becco!",
	},
	beatup: {
		name: "Picchiaduro",
		// Official flavor text: "Chi la usa chiama in aiuto i Pokémon della squadra: più ce ne sono, maggiore è il numero di attacchi."
		desc: "Colpisce una volta per l'utilizzatore e una volta per ogni Pokémon non KO senza problemi di stato non volatili nella squadra dell'utilizzatore. La potenza di ogni colpo equivale a 5+(X/10), dove X è l'Attacco base di ogni Pokémon partecipante; ogni colpo viene considerato come se l'avesse scagliato l'utilizzatore.", // NEEDS CHECK
		shortDesc: "Tutti gli alleati in salute danneggiano il bersaglio.", // NEEDS CHECK
		gen4: {
			desc: "Infligge danno senza tipo. Colpisce una volta per l'utilizzatore e una volta per ogni Pokémon non KO senza problemi di stato non volatili nella squadra dell'utilizzatore. Per ogni colpo, la formula dei danni usa l'Attacco base del Pokémon partecipante come statistica di Attacco, la Difesa base del bersaglio come statistica di Difesa e ignora modifiche alle statistiche o altri effetti che modificano i risultanti valori di Attacco e Difesa; ogni colpo viene considerato come se l'avesse scagliato l'utilizzatore.", // NEEDS CHECK
		},
		gen3: {
			desc: "Infligge danno senza tipo. Colpisce una volta per ogni Pokémon non KO senza problemi di stato non volatili nella squadra dell'utilizzatore; fallisce se nessun Pokémon soddisfa questo criterio. Per ogni colpo, la formula dei danni usa l'Attacco base del Pokémon partecipante come statistica di Attacco, la Difesa base del bersaglio come statistica di Difesa e ignora modifiche alle statistiche o altri effetti che modificano i risultanti valori di Attacco e Difesa; ogni colpo viene considerato come se l'avesse scagliato l'utilizzatore.", // NEEDS CHECK
		},
		gen2: {
			desc: "Infligge danno senza tipo. Colpisce una volta per ogni Pokémon non KO senza problemi di stato non volatili nella squadra dell'utilizzatore. Per ogni colpo, la formula dei danni usa il livello del Pokémon partecipante e il suo Attacco base come statistica di Attacco, la Difesa base del bersaglio come statistica di Difesa e ignora modifiche alle statistiche o altri effetti che modificano i risultanti valori di Attacco e Difesa. Fallisce se nessun membro della squadra può partecipare.", // NEEDS CHECK
		},

		activate: "  Attacco di {NAME}!",
	},
	behemothbash: {
		name: "Colpo Maestoso",
		shortDesc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
		gen8: {
			shortDesc: "Danno doppio sui Pokémon Dynamax.", // NEEDS CHECK
		},
	},
	behemothblade: {
		name: "Taglio Maestoso",
		shortDesc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
		gen8: {
			shortDesc: "Danno doppio sui Pokémon Dynamax.", // NEEDS CHECK
		},
	},
	belch: {
		name: "Rutto",
		// Official flavor text: "Chi la usa attacca il bersaglio con un rutto potente. Per utilizzare questa mossa, il Pokémon deve mangiare la bacca che possiede."
		desc: "Questa mossa non può essere selezionata finché l'utilizzatore non mangia una bacca, che sia mangiandone una tenuta, rubandone una tenuta da un altro Pokémon con Coleomorso o Spennata o mangiandone una ottenuta tramite Lancio. Una volta soddisfatta questa condizione, questa mossa può essere selezionata fino alla fine della battaglia anche se l'utilizzatore guadagna o usa un altro strumento o se viene ritirato dal campo. Consumare una bacca con Dononaturale non conta come mangiarla.", // NEEDS CHECK
		shortDesc: "Inutilizzabile finché non viene mangiata una bacca.", // NEEDS CHECK
		champions: {
			desc: "Questa mossa non può essere selezionata finché l'utilizzatore non mangia una bacca, che sia mangiandone una tenuta, rubandone una tenuta da un altro Pokémon con Coleomorso o Spennata o mangiandone una ottenuta tramite con Lancio. Consumare una bacca con Dononaturale non conta come mangiarla.", // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: "Inutilizzabile finché non viene mangiata una bacca.", // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	bellydrum: {
		name: "Panciamburo",
		// Official flavor text: "Chi la usa massimizza l’Attacco in cambio di metà dei PS massimi."
		desc: "Aumenta l'Attacco dell'utilizzatore di 12 stadi in cambio di metà dei PS massimi, arrotondati per difetto. Fallisce se l'utilizzatore andrebbe KO o se il suo Attacco è già a 6 stadi.", // NEEDS CHECK
		shortDesc: "L'utilizzatore perde 50% dei PS e massimizza l'Att.", // NEEDS CHECK
		gen2: {
			desc: "L'utilizzatore perde metà dei PS massimi, arrotondati per difetto, a meno che l'utilizzatore non andrebbe KO o il suo Attacco è già a 6 stadi. Se l'utilizzatore non aveva abbastanza PS, il suo Attacco sale di 2 stadi. Altrimenti, se l'utilizzatore ha l'Attacco a meno di 6 stadi, questo viene aumentato di 2 stadi e, se il suo Attacco prima di questo step era 999, allora l'Attacco viene ridotto di 1 stadio e il ciclo termina.", // NEEDS CHECK
		},

		boost: "  {POKEMON} riduce i suoi PS e aumenta al massimo il suo Attacco!",
	},
	bestow: {
		name: "Cediregalo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Il bersaglio riceve lo strumento dell'utilizzatore. Fallisce se l'utilizzatore non ha uno strumento, se tiene un Cristallo Z, se il bersaglio tiene già uno strumento, se lo strumento è una Megapietra e uno tra il bersaglio o l'utilizzatore è della specie capace di Megaevolversi grazie a suddetta Megapietra o se lo strumento è una Gemma blu, Gemma rossa, Grigiosfera, Lastra, Modulo o ROM e l'utilizzatore o il bersaglio è rispettivamente Kyogre, Groudon, Giratina, Arceus, Genesect o Silvally.", // NEEDS CHECK
		shortDesc: "L'utilizzatore passa il suo strumento al bersaglio.", // NEEDS CHECK
		gen6: {
			desc: "Il bersaglio riceve lo strumento dell'utilizzatore. Fallisce se l'utilizzatore non ha uno strumento, se il bersaglio tiene già uno strumento, se lo strumento è una Megapietra e uno tra il bersaglio o l'utilizzatore è della specie capace di Megaevolversi grazie alla suddetta Megapietra o se lo strumento è una Gemma blu, Gemma rossa, Grigiosfera, Lastra o Modulo e l'utilizzatore o il bersaglio è rispettivamente Kyogre, Groudon, Giratina, Arceus o Genesect.", // NEEDS CHECK
		},
		gen5: {
			desc: "Il bersaglio riceve lo strumento dell'utilizzatore. Fallisce se l'utilizzatore non ha uno strumento o tiene un Messaggio, se il bersaglio tiene già uno strumento o se lo strumento è una Grigiosfera, Lastra o Modulo e l'utilizzatore o il bersaglio è rispettivamente Giratina, Arceus o Genesect.", // NEEDS CHECK
		},

		takeItem: "  {POKEMON} ottiene {ITEM:definite} di {SOURCE}!",
	},
	bide: {
		name: "Pazienza",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "L'utilizzatore è bloccato su questa mossa per due turni, dopodiché l'utilizzatore attacca l'ultimo Pokémon che l'ha colpito infliggendo il doppio dei danni ricevuti nei due turni precedenti. Se l'ultimo Pokémon che ha colpito l'utilizzatore non è più in campo, viene scelto un avversario casuale come bersaglio. Se l'utilizzatore non è in grado di muoversi durante l'uso di questa mossa, il suo effetto termina. Questa mossa va sempre a segno e non ignora le immunità di tipo. ", // NEEDS CHECK
		shortDesc: "Infliggi il doppio dei danni ricevuti dopo 2 turni.", // NEEDS CHECK
		gen4: {
			desc: "L'utilizzatore è bloccato su questa mossa per due turni, dopodiché l'utilizzatore attacca l'ultimo Pokémon che l'ha colpito infliggendo il doppio dei danni ricevuti nei due turni precedenti. Se l'ultimo Pokémon che ha colpito l'utilizzatore non è più in campo, viene scelto un avversario casuale come bersaglio. Se l'utilizzatore non è in grado di muoversi durante l'uso di questa mossa, il suo effetto termina. Questa mossa va sempre a segno e ignora le immunità di tipo. ", // NEEDS CHECK
		},
		gen3: {
			desc: "L'utilizzatore è bloccato su questa mossa per due turni, dopodiché l'utilizzatore attacca l'ultimo Pokémon che l'ha colpito infliggendo il doppio dei danni ricevuti nei due turni precedenti. Se l'ultimo Pokémon che ha colpito l'utilizzatore non è più in campo, viene scelto un avversario casuale come bersaglio. Se l'utilizzatore non è in grado di muoversi durante l'uso di questa mossa, il suo effetto termina. Questa mossa non ignora le immunità di tipo. ", // NEEDS CHECK
		},
		gen2: {
			desc: "L'utilizzatore è bloccato su questa mossa per due o tre turni, dopodiché l'utilizzatore attacca l'avversario infliggendo il doppio dei danni ricevuti nei due o tre turni precedenti. Se l'utilizzatore non è in grado di muoversi durante l'uso di questa mossa, il suo effetto termina. Questa mossa non ignora le immunità di tipo. ", // NEEDS CHECK
			shortDesc: "Infliggi il doppio dei danni ricevuti dopo 2-3 turni.", // NEEDS CHECK
		},
		gen1: {
			desc: "L'utilizzatore è bloccato su questa mossa per due o tre turni, dopodiché l'utilizzatore attacca l'avversario infliggendo il doppio dei danni ricevuti nei due o tre turni precedenti. Questa mossa ignora le immunità di tipo e va sempre a segno, anche se l'avversario usa Fossa o Volo. L'utilizzatore può essere ritirato dal campo durante l'effetto di questa mossa. Se l'utilizzatore viene scambiato o non è in grado di muoversi durante l'uso di questa mossa, il suo effetto termina. Se durante l'effetto di questa mossa l'avversario viene ritirato o usa Conversione, Covauova, Focalenergia, Mimica, Nebbia, Nube, Paralizzante, Parassiseme, Riflesso, Riposo, Ripresa, Sguardo Feroce, Sostituto, Specchiovelo, Splash, Stordiraggio, Supersuono, Teletrasporto, Tossina, Trasformazione, Tuononda, Velenogas o Velenpolvere, i danni inflitti precedentemente all'utilizzatore si sommano al totale.", // NEEDS CHECK
		},

		start: "  {POKEMON} accumula energia!",
		end: "  {POKEMON} libera energia!",
		activate: "  {POKEMON} accumula energia!",
	},
	bind: {
		name: "Legatutto",
		// Official flavor text: "Il lungo corpo o i tentacoli di chi la usa legano e stritolano il bersaglio per quattro o cinque turni."
		desc: "Impedisce al bersaglio di essere ritirato per 4-5 turni (7 turni con Presartigli). Infligge danni pari a 1/8 dei PS massimi del bersaglio (1/6 con Legafascia), arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Freddura, Invertivolt, Monito, Retromarcia, Staffetta, Tagliacoda, Teletrasporto o Virata. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Glitturbine, Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
		shortDesc: "Imprigiona e danneggia il bersaglio per 4-5 turni.", // NEEDS CHECK
		gen8: {
			desc: "Impedisce al bersaglio di essere ritirato per 4-5 turni (7 turni con Presartigli). Infligge danni pari a 1/8 dei PS massimi del bersaglio (1/6 con Legafascia), arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Invertivolt, Monito, Retromarcia, Staffetta, Teletrasporto o Virata. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
		},
		gen7: {
			desc: "Impedisce al bersaglio di essere ritirato per 4-5 turni (7 turni con Presartigli). Infligge danni pari a 1/8 dei PS massimi del bersaglio (1/6 con Legafascia), arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Invertivolt, Monito, Retromarcia o Staffetta. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
		},
		gen5: {
			desc: "Impedisce al bersaglio di essere ritirato per 4-5 turni (7 turni con Presartigli). Infligge danni pari a 1/16 dei PS massimi del bersaglio (1/8 con Legafascia), arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Invertivolt, Retromarcia o Staffetta. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa intrappolante.", // NEEDS CHECK
		},
		gen4: {
			desc: "Impedisce al bersaglio di essere ritirato per 2-5 turni (sempre 5 turni con Presartigli). Infligge danni pari a 1/16 dei PS massimi del bersaglio, arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Retromarcia o Staffetta. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
			shortDesc: "Imprigiona e danneggia il bersaglio per 2-5 turni.", // NEEDS CHECK
		},
		gen3: {
			desc: "Impedisce al bersaglio di essere ritirato per 2-5 turni. Infligge danni pari a 1/16 dei PS massimi del bersaglio, arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se usa Staffetta. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
		},
		gen1: {
			desc: "L'utilizzatore usa questa mossa per 2-5 turni. Ha una possibilità di 3/8 di durare due o tre turni e una di 1/8 di durare quattro o cinque turni. Il danno è calcolato una volta per il primo turno e usato per ogni altro turno. L'utilizzatore non può selezionare una mossa e il bersaglio non può eseguirne alcuna durante l'effetto di questa mossa, ma entrambi possono essere ritirati dal campo. Se l'utilizzatore viene ritirato, il bersaglio resta incapace di usare una mossa durante quel turno. Se il bersaglio viene ritirato, l'utilizzatore usa automaticamente questa mossa di nuovo e, se aveva 0 PP rimasti al momento, i PP diventano 63. Se l'utilizzatore o il bersaglio vengono ritirati o se l'utilizzatore è incapace di muoversi, l'effetto di questa mossa termina. Se il bersaglio ha un'immunità di tipo contro questa mossa, non riceve danni ma resta comunque incapace di muoversi.", // NEEDS CHECK
			shortDesc: "Impedisce al bersaglio di muoversi per 2-5 turni.", // NEEDS CHECK
		},

		start: "  {SOURCE} stritola {POKEMON} con Legatutto!",
		move: "#wrap",
	},
	bite: {
		name: "Morso",
		// Official flavor text: "Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare."
		desc: "Possibilità del 30% di far tentennare il bersaglio.", // NEEDS CHECK
		shortDesc: "Possibilità del 30% di far tentennare il bersaglio.", // NEEDS CHECK
		gen1: {
			desc: "Possibilità del 10% di far tentennare il bersaglio.", // NEEDS CHECK
			shortDesc: "30% di far tentennare il bersaglio.", // NEEDS CHECK
		},
	},
	bitterblade: {
		name: "Lama del Rimorso",
		desc: "L'utilizzatore recupera 1/2 dei PS sottratti al bersaglio, arrotondati per eccesso sul valore intermedio. Se l'utilizzatore tiene una Granradice, recupera 1,3x i PS, arrotondati per difetto sul valore intermedio.", // NEEDS CHECK
		shortDesc: "Recupera il 50% dei danni inflitti.", // NEEDS CHECK
	},
	bittermalice: {
		name: "Livore",
		desc: "Possibilità del 100% di ridurre l'Attacco del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "Riduce l'Att del bersaglio di 1 stadio.", // NEEDS CHECK
	},
	blackholeeclipse: {
		name: "Buco Nero del Non Ritorno",
		shortDesc: "Potenza influenzata dalla mossa di partenza.", // NEEDS CHECK
	},
	blastburn: {
		name: "Incendio",
		// Official flavor text: "Potente esplosione che danneggia il bersaglio, ma fa saltare il turno successivo a chi la provoca."
		desc: "Se la mossa ha successo, l'utilizzatore salta il turno successivo e non può scegliere una mossa.", // NEEDS CHECK
		shortDesc: "L'utilizzatore salta il prossimo turno.", // NEEDS CHECK
	},
	blazekick: {
		name: "Calciardente",
		// Official flavor text: "Chi la usa tira un calcio. Probabile brutto colpo. Può anche scottare il bersaglio."
		desc: "Possibilità del 10% di scottare il bersaglio. Maggiori probabilità di infliggere un brutto colpo.", // NEEDS CHECK
		shortDesc: "Probabile brutto colpo. 10% di scottare.", // NEEDS CHECK
	},
	blazingtorque: {
		name: "Turboustione",
		desc: "Possibilità del 30% di scottare il bersaglio.", // NEEDS CHECK
		shortDesc: "30% di scottare il bersaglio.", // NEEDS CHECK
	},
	bleakwindstorm: {
		name: "Tempesta Boreale",
		desc: "Possibilità del 30% di ridurre la Velocità dei bersagli di 1 stadio. Se la condizione atmosferica attiva è pioggia o acquazzone, questa mossa va sempre a segno. Se usata contro un Pokémon con il Superombrello, la precisione di questa mossa rimane 80%", // NEEDS CHECK
		shortDesc: "30% -1 Vel. Va sempre a segno sotto pioggia.", // NEEDS CHECK
	},
	blizzard: {
		name: "Bora",
		// Official flavor text: "Colpisce i nemici intorno con una tremenda tempesta di ghiaccio che può anche congelarli."
		desc: "Possibilità del 10% di congelare i bersagli. Se la condizione atmosferica attiva è neve, questa mossa va sempre a segno.", // NEEDS CHECK
		shortDesc: "10% congelamento. Va sempre a segno sotto neve.", // NEEDS CHECK
		gen8: {
			desc: "Possibilità del 10% di congelare i bersagli. Se la condizione atmosferica attiva è grandine, questa mossa va sempre a segno.", // NEEDS CHECK
			shortDesc: "10% congelamento. Va sempre a segno sotto grandine.", // NEEDS CHECK
		},
		gen3: {
			desc: "Possibilità del 10% di congelare i bersagli.", // NEEDS CHECK
			shortDesc: "10% congelamento. Colpisce nemici adiacenti.", // NEEDS CHECK
		},
		gen2: {
			shortDesc: "10% di congelare il bersaglio.", // NEEDS CHECK
		},
	},
	block: {
		name: "Blocco",
		// Official flavor text: "Chi la usa sbarra la strada al bersaglio impedendone la fuga o la sostituzione."
		desc: "Impedisce al bersaglio di essere ritirato. Il bersaglio può comunque essere ritirato se tiene un Disfoguscio o usa Invertivolt, Monito, Retromarcia, Staffetta, Teletrasporto o Virata. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo.", // NEEDS CHECK
		shortDesc: "Impedisce al bersaglio di essere ritirato.", // NEEDS CHECK
		gen7: {
			desc: "Impedisce al bersaglio di essere ritirato. Il bersaglio può comunque essere ritirato se tiene un Disfoguscio o usa Invertivolt, Monito, Retromarcia o Staffetta. Se il bersaglio lascia il campo usando Staffetta, il suo alleato in entrata rimarrà imprigionato. L'effetto termina se l'utilizzatore lascia il campo.", // NEEDS CHECK
		},
		gen5: {
			desc: "Impedisce al bersaglio di essere ritirato. Il bersaglio può comunque essere ritirato se tiene un Disfoguscio o usa Invertivolt, Retromarcia o Staffetta. Se il bersaglio lascia il campo usando Staffetta, il suo alleato in entrata rimarrà imprigionato. L'effetto termina se l'utilizzatore lascia il campo."ll, // NEEDS CHECK
		},
		gen4: {
			desc: "Impedisce al bersaglio di essere ritirato. Il bersaglio può comunque essere ritirato se tiene un Disfoguscio o usa Retromarcia o Staffetta. Se il bersaglio lascia il campo usando Staffetta, il suo alleato in entrata rimarrà imprigionato. L'effetto termina se l'utilizzatore lascia il campo a meno che non usi Staffetta, in tal caso, il bersaglio continua a essere imprigionato.", // NEEDS CHECK
		},
		gen3: {
			desc: "Impedisce al bersaglio di essere ritirato. Il bersaglio può comunque essere ritirato se usa Staffetta. Se il bersaglio lascia il campo usando Staffetta, il suo alleato in entrata rimarrà imprigionato. L'effetto termina se l'utilizzatore lascia il campo a meno che non usi Staffetta, in tal caso, il bersaglio continua a essere imprigionato.", // NEEDS CHECK
		},
	},
	bloodmoon: {
		name: "Luna Rossa",
		shortDesc: "Non può essere selezionata il turno dopo l'uso.", // NEEDS CHECK
	},
	bloomdoom: {
		name: "Floriscoppio Sfolgorante",
		shortDesc: "Potenza influenzata dalla mossa di partenza.", // NEEDS CHECK
	},
	blueflare: {
		name: "Fuocoblu",
		// Official flavor text: "Chi la usa attacca il bersaglio avvolgendolo con magnifiche e intense fiamme blu che possono anche scottarlo."
		desc: "Possibilità del 20% di scottare il bersaglio.", // NEEDS CHECK
		shortDesc: "20% di scottare il bersaglio.", // NEEDS CHECK
	},
	bodypress: {
		name: "Schiacciacorpo",
		// Official flavor text: "Chi la usa schiaccia il bersaglio con il suo corpo. Più la sua Difesa è alta, maggiori sono i danni inflitti."
		desc: "Il calcolo dei danni tiene conto della Difesa dell'utilizzatore invece che il suo Attacco, includendo le modifiche alle statistiche. Altri effetti che influenzano l'Attacco dell'utilizzatore vengono applicati come di norma.", // NEEDS CHECK
		shortDesc: "Usa la Dif invece che l'Att per calcolare i danni.", // NEEDS CHECK
	},
	bodyslam: {
		name: "Corposcontro",
		// Official flavor text: "Chi la usa carica il bersaglio con tutto il corpo. Può causarne anche la paralisi."
		desc: "Possibilità del 30% di paralizzare il bersaglio. Se il bersaglio ha usato Minimizzato da quando è entrato in campo, la potenza raddoppia e va sempre a segno.", // NEEDS CHECK
		shortDesc: "30% di paralizzare il bersaglio.", // NEEDS CHECK
		gen5: {
			desc: "Possibilità del 30% di paralizzare il bersaglio.", // NEEDS CHECK
		},
	},
	boltbeak: {
		name: "Beccoshock",
		// Official flavor text: "Chi la usa attacca il bersaglio con il becco appuntito carico d’elettricità. Se attacca per primo, la potenza della mossa raddoppia."
		desc: "La potenza raddoppia se l'utilizzatore si muove prima del bersaglio.", // NEEDS CHECK
		shortDesc: "Danni raddoppiati se attacca prima del bersaglio.", // NEEDS CHECK
	},
	boltstrike: {
		name: "Lucesiluro",
		// Official flavor text: "Colpisce il bersaglio con una possente carica elettrica e può anche paralizzarlo."
		desc: "Possibilità del 20% di paralizzare il bersaglio.", // NEEDS CHECK
		shortDesc: "20% di paralizzare il bersaglio.", // NEEDS CHECK
	},
	boneclub: {
		name: "Ossoclava",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Possibilità del 10% di far tentennare il bersaglio.", // NEEDS CHECK
		shortDesc: "10% di far tentennare il bersaglio.", // NEEDS CHECK
	},
	bonemerang: {
		name: "Ossomerang",
		// Official flavor text: "Chi la usa lancia l’osso che ha con sé. L’osso colpisce due volte e ritorna come un vero e proprio boomerang."
		desc: "Colpisce due volte. Se il primo colpo rompe il Sostituto del bersaglio, questo riceverà i danni del secondo colpo.", // NEEDS CHECK
		shortDesc: "Colpisce 2 volte in un turno.", // NEEDS CHECK
		gen4: {
			desc: "Colpisce due volte. Se il primo colpo rompe il Sostituto del bersaglio, questo riceverà i danni del secondo colpo. Se il bersaglio tiene un Focalnastro e ha tutti i PS quando questa mossa viene usata, non verrà mandato KO a prescindere dal numero di colpi.", // NEEDS CHECK
		},
		gen3: {
			desc: "Colpisce due volte. Se il primo colpo rompe il Sostituto del bersaglio, questo riceverà i danni del secondo colpo.", // NEEDS CHECK
		},
		gen1: {
			desc: "Colpisce due volte. Se il primo colpo rompe il Sostituto del bersaglio, la mossa si interrompe.", // NEEDS CHECK
		},
	},
	bonerush: {
		name: "Ossoraffica",
		// Official flavor text: "Chi la usa colpisce il bersaglio con un osso da due a cinque volte di fila."
		desc: "Colpisce da due a cinque volte. Ha il 35% di possibilità di colpire due o tre volte e il 15% di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte. Se l'utilizzatore tiene un Dado truccato, questa mossa colpisce 4-5 volte.", // NEEDS CHECK
		shortDesc: "Colpisce 2-5 volte in un turno.", // NEEDS CHECK
		gen8: {
			desc: "Colpisce da due a cinque volte. Ha il 35% di possibilità di colpire due o tre volte e il 15% di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte.", // NEEDS CHECK
		},
		gen4: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte. Se il bersaglio tiene un Focalnastro e ha tutti i PS quando questa mossa viene usata, non verrà mandato KO a prescindere dal numero di colpi.", // NEEDS CHECK
		},
		gen3: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi.", // NEEDS CHECK
		},
	},
	boomburst: {
		name: "Ondaboato",
		// Official flavor text: "Colpisce i Pokémon che ha intorno con la forza di un boato distruttivo."
		desc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
		shortDesc: "Nessun effetto aggiuntivo. Colpisce Pokémon adiacenti.", // NEEDS CHECK
	},
	bounce: {
		name: "Rimbalzo",
		// Official flavor text: "Chi la usa balza in alto e ricade sul bersaglio dopo un turno. Può anche paralizzarlo."
		desc: "Possibilità del 30% di paralizzare il bersaglio. Questo attacco si carica durante il primo turno e colpisce durante il secondo. Durante il primo turno l'utilizzatore evita tutti gli attacchi tranne Abbattimento, Mille Frecce, Raffica, Stramontante, Tifone, Tornado e Tuono, con Raffica e Tornado che infliggono danni doppi. Se l'utilizzatore usa una Vigorerba, la mossa viene completata in un turno.", // NEEDS CHECK
		shortDesc: "Primo turno di semi-invulnerabilità. 30% paralisi.", // NEEDS CHECK
		gen5: {
			desc: "Possibilità del 30% di paralizzare il bersaglio. Questo attacco si carica durante il primo turno e colpisce durante il secondo. Durante il primo turno l'utilizzatore evita tutti gli attacchi tranne Abbattimento, Raffica, Stramontante, Tifone, Tornado e Tuono, con Raffica e Tornado che infliggono danni doppi. Se l'utilizzatore usa una Vigorerba, la mossa viene completata in un turno.", // NEEDS CHECK
		},
		gen4: {
			desc: "Possibilità del 30% di paralizzare il bersaglio. Questo attacco si carica durante il primo turno e colpisce durante il secondo. Durante il primo turno l'utilizzatore evita tutti gli attacchi tranne Raffica, Stramontante, Tornado e Tuono, con Raffica e Tornado che infliggono danni doppi. Se l'utilizzatore usa una Vigorerba, la mossa viene completata in un turno.", // NEEDS CHECK
		},
		gen3: {
			desc: "Possibilità del 30% di paralizzare il bersaglio. Questo attacco si carica durante il primo turno e colpisce durante il secondo. Durante il primo turno l'utilizzatore evita tutti gli attacchi tranne Raffica, Stramontante, Tornado e Tuono, con Raffica e Tornado che infliggono danni doppi.", // NEEDS CHECK
		},

		prepare: "{POKEMON} spicca un gran balzo!",
	},
	bouncybubble: {
		name: "Bollaslurp",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "L'utilizzatore recupera 1/2 dei PS sottratti al bersaglio, arrotondati per eccesso sul valore intermedio. Se l'utilizzatore tiene una Granradice, recupera 1,3x i PS, arrotondati per difetto sul valore intermedio.", // NEEDS CHECK
		shortDesc: "Recupera il 50% dei danni inflitti.", // NEEDS CHECK
	},
	branchpoke: {
		name: "Ramostoccata",
		// Official flavor text: "Chi la usa attacca il bersaglio con un ramo incredibilmente appuntito."
		desc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
		shortDesc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
	},
	bravebird: {
		name: "Baldeali",
		// Official flavor text: "Chi la usa ripiega le ali e carica da bassa quota. Tuttavia, subisce considerevoli danni."
		desc: "Se il bersaglio ha subito dei danni, l'utilizzatore subisce un contraccolpo equivalente a 33% dei PS persi dal bersaglio arrotondati per eccesso sul valore intermedio, ma comunque mai meno di 1 PS.", // NEEDS CHECK
		shortDesc: "Contraccolpo del 33%", // NEEDS CHECK
		gen4: {
			desc: "Se il bersaglio ha subito dei danni, l'utilizzatore subisce un contraccolpo equivalente a 1/3 dei PS persi dal bersaglio arrotondati per difetto, ma comunque mai meno di 1 PS.", // NEEDS CHECK
			shortDesc: "Contraccolpo di 1/3.", // NEEDS CHECK
		},
	},
	breakingswipe: {
		name: "Vastoimpatto",
		// Official flavor text: "Chi la usa attacca i nemici intorno con la sua robusta coda riducendone l’Attacco."
		desc: "Possibilità del 100% di ridurre l'Attacco dei bersagli di 1 stadio.", // NEEDS CHECK
		shortDesc: "Riduce l'Att di 1 stadio. Colpisce nemici adiacenti.", // NEEDS CHECK
	},
	breakneckblitz: {
		name: "Carica Travolgente",
		shortDesc: "Potenza influenzata dalla mossa di partenza.", // NEEDS CHECK
	},
	brickbreak: {
		name: "Breccia",
		// Official flavor text: "Colpisce il bersaglio con una mano e rompe barriere come Riflesso e Schermoluce."
		desc: "Se questo attacco colpisce, gli effetti di Riflesso, Schermoluce e Velaurora si interrompono per la squadra del bersaglio prima del calcolo dei danni.", // NEEDS CHECK
		shortDesc: "Rompe gli schermi se colpisce.", // NEEDS CHECK
		gen6: {
			desc: "Se questo attacco colpisce, gli effetti di Riflesso e Schermoluce si interrompono per la squadra del bersaglio prima del calcolo dei danni.", // NEEDS CHECK
		},
		gen4: {
			desc: "Se questo attacco non viene evitato, a prescindere dall'immunità di tipo del bersaglio, gli effetti di Riflesso e Schermoluce si interrompono per la squadra del bersaglio prima del calcolo dei danni.", // NEEDS CHECK
			shortDesc: "Rompe gli schermi, anche se il bersaglio è immune.", // NEEDS CHECK
		},
		gen3: {
			desc: "Se questo attacco non viene evitato, a prescindere dall'immunità di tipo del bersaglio, gli effetti di Riflesso e Schermoluce si interrompono per la squadra dell'avversario prima del calcolo dei danni.", // NEEDS CHECK
		},

		activate: "La barriera misteriosa che proteggeva {TEAM} è svanita!", // NEEDS CHECK
	},
	brine: {
		name: "Acquadisale",
		// Official flavor text: "Se i PS del bersaglio sono scesi a metà o meno, questa mossa colpirà con il doppio della potenza."
		desc: "La potenza raddoppia se il bersaglio perso almeno metà dei suoi PS massimi.", // NEEDS CHECK
		shortDesc: "Danni raddoppiati se il bersaglio è a 50% PS o meno.", // NEEDS CHECK
	},
	brutalswing: {
		name: "Vorticolpo",
		// Official flavor text: "Chi la usa infligge danni intorno a sé facendo ruotare una parte del suo corpo."
		desc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
		shortDesc: "Nessun effetto aggiuntivo. Colpisce Pokémon adiacenti.", // NEEDS CHECK
	},
	bubble: {
		name: "Bolla",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Possibilità del 10% di ridurre la Velocità dei bersagli di 1 stadio.", // NEEDS CHECK
		shortDesc: "10% -1 Vel. Colpisce nemici adiacenti.", // NEEDS CHECK
		gen1: {
			desc: "Possibilità del 33% di ridurre la Velocità del bersaglio di 1 stadio.", // NEEDS CHECK
			shortDesc: "33% di ridurre la Vel del bersaglio di 1 stadio.", // NEEDS CHECK
		},
		gen2: {
			desc: "Possibilità del 10% di ridurre la Velocità del bersaglio di 1 stadio.", // NEEDS TRANSLATION
			shortDesc: "10% di ridurre la Vel del bersaglio di 1 stadio.", // NEEDS CHECK
		},
	},
	bubblebeam: {
		name: "Bollaraggio",
		// Official flavor text: "Colpisce il bersaglio con una forte scarica di bolle. Può anche ridurne la Velocità."
		desc: "Possibilità del 10% di ridurre la Velocità del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "10% di ridurre la Vel del bersaglio di 1 stadio.", // NEEDS CHECK
		gen1: {
			desc: "Possibilità del 33% di ridurre la Velocità del bersaglio di 1 stadio.", // NEEDS CHECK
			shortDesc: "33% di ridurre la Vel del bersaglio di 1 stadio.", // NEEDS CHECK
		},
	},
	bugbite: {
		name: "Coleomorso",
		// Official flavor text: "Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti."
		desc: "Se questa mossa ha effetto e il bersaglio non va KO, la bacca tenuta dal bersaglio, se ne tiene una, viene rubata e mangiata immediatamente dall'utilizzatore, che ne sfrutta gli effetti anche se è incapace di usare il proprio strumento. Le bacche perse in questo modo non possono essere recuperate con Riciclo o Coglibacche.", // NEEDS CHECK
		shortDesc: "Ruba e mangia la bacca del bersaglio.", // NEEDS CHECK
		gen4: {
			desc: "La bacca tenuta dal bersaglio, se ne tiene una, viene rubata e mangiata immediatamente dall'utilizzatore, che ne sfrutta gli effetti anche se è incapace di usare il proprio strumento. Le bacche perse in questo modo non possono essere recuperate con Riciclo.", // NEEDS CHECK
		},

		removeItem: "  {SOURCE} ruba e mangia {ITEM:definite:classified} del bersaglio!",
	},
	bugbuzz: {
		name: "Ronzio",
		// Official flavor text: "Chi la usa crea un’onda sonora che infligge danni. Può anche ridurre la Difesa Speciale del bersaglio."
		desc: "Possibilità del 10% di ridurre la Difesa Speciale del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "10% di ridurre la DSp del bersaglio di 1 stadio.", // NEEDS CHECK
	},
	bulkup: {
		name: "Granfisico",
		// Official flavor text: "Chi la usa tende i muscoli per gonfiare il corpo, aumentando Difesa e Attacco."
		desc: "Aumenta l'Attacco e la Difesa dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		shortDesc: "Aumenta Att e Dif dell'utilizzatore di 1 stadio.", // NEEDS CHECK
	},
	bulldoze: {
		name: "Battiterra",
		// Official flavor text: "Chi la usa calpesta il terreno e scatena un terremoto che danneggia i Pokémon nei paraggi, riducendone la Velocità."
		desc: "Possibilità del 100% di ridurre la Velocità dei bersagli di 1 stadio.", // NEEDS CHECK
		shortDesc: "-1 Vel. Colpisce i Pokémon adiacenti.", // NEEDS CHECK
	},
	bulletpunch: {
		name: "Pugnoscarica",
		// Official flavor text: "Chi la usa attacca con una scarica di pugni veloci come proiettili. Questa mossa ha priorità alta."
		desc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
		shortDesc: "Alta priorità.", // NEEDS CHECK
	},
	bulletseed: {
		name: "Semitraglia",
		// Official flavor text: "Chi la usa spara da due a cinque raffiche di semi contro il bersaglio in successione."
		desc: "Colpisce da due a cinque volte. Ha il 35% di possibilità di colpire due o tre volte e il 15% di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte. Se l'utilizzatore tiene un Dado truccato, questa mossa colpisce 4-5 volte.", // NEEDS CHECK
		shortDesc: "Colpisce 2-5 volte in un turno.", // NEEDS CHECK
		gen8: {
			desc: "Colpisce da due a cinque volte. Ha il 35% di possibilità di colpire due o tre volte e il 15% di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte.", // NEEDS CHECK
		},
		gen4: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte. Se il bersaglio tiene un Focalnastro e ha tutti i PS quando questa mossa viene usata, non verrà mandato KO a prescindere dal numero di colpi.", // NEEDS CHECK
		},
		gen3: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi.", // NEEDS CHECK
		},
	},
	burningbulwark: {
		name: "Egida Ignea",
		desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno; i Pokémon che lo attaccano con mosse da contatto vengono scottati. Le mosse di stato ignorano questa protezione. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e triplica ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Agodifesa, Anticipo, Bodyguard, Dynabarriera, Egida Ignea, Fortino, Individua, Protezione, Resistenza, Sbarramento, Scudo Reale, Telatrappola o se è stata una delle mosse menzionate e l'avversario ha rotto la protezione. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		shortDesc: "Protegge dalle mosse offensive. Contatto: Scottatura.", // NEEDS CHECK
	},
	burningjealousy: {
		name: "Fiamminvidia",
		// Official flavor text: "Chi la usa attacca con la forza dell’invidia, causando una scottatura a tutti i Pokémon le cui statistiche sono aumentate durante quel turno."
		desc: "Possibilità del 100% di scottare i bersagli se hanno ricevuto un aumento di statistiche durante questo turno.", // NEEDS CHECK
		shortDesc: "Scotta i bersagli che si sono appena potenziati.", // NEEDS CHECK
	},
	burnup: {
		name: "Ultima Fiamma",
		// Official flavor text: "Chi la usa attacca sfruttando tutta la sua potenza incendiaria per infliggere gravi danni al bersaglio, ma come conseguenza perde il tipo Fuoco."
		desc: "Fallisce a meno che l'utilizzatore non sia di tipo Fuoco. Se questa mossa ha successo e l'utilizzatore non sta facendo uso del fenomeno Teracristal, il tipo Fuoco dell'utilizzatore viene perso finché resta in campo.", // NEEDS CHECK
		shortDesc: "L'utilizzatore perde il tipo Fuoco; deve essere Fuoco.", // NEEDS CHECK
		gen8: {
			desc: "Fallisce a meno che l'utilizzatore non sia di tipo Fuoco. Se questa mossa ha successo il tipo Fuoco dell'utilizzatore viene perso finché resta in campo.", // NEEDS CHECK
		},

		typeChange: "  Le fiamme di {POKEMON} si sono spente!",
	},
	buzzybuzz: {
		name: "Elettrozap",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Possibilità del 100% di paralizzare il bersaglio.", // NEEDS CHECK
		shortDesc: "Paralizza il bersaglio.", // NEEDS CHECK
	},
	calmmind: {
		name: "Calmamente",
		// Official flavor text: "Chi la usa placa il proprio spirito meditando per aumentare l’Attacco Speciale e la Difesa Speciale."
		desc: "Aumenta l'Attacco Speciale e la Difesa Speciale dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		shortDesc: "Aumenta ASp e DSp dell'utilizzatore di 1 stadio.", // NEEDS CHECK
	},
	camouflage: {
		name: "Camuffamento",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "L'utilizzatore cambia tipo in base al campo attivo. Normale per il terreno standard delle lotte Wi-Fi, Elettro con il Campo Elettrico, Folletto con il Campo Nebbioso, Erba con il Campo Erboso e Psico con il Campo Psichico. Fallisce se il tipo dell'utilizzatore non può essere cambiato o se l'utilizzatore è già di quel tipo puro", // NEEDS CHECK
		shortDesc: "Cambia il tipo dell'utilizzatore in base al campo.", // NEEDS CHECK
		gen6: {
			desc: "L'utilizzatore cambia tipo in base al campo attivo. Normale per il terreno standard delle lotte Wi-Fi, Elettro con il Campo Elettrico, Folletto con il Campo Nebbioso ed Erba con il Campo Erboso. Fallisce se il tipo dell'utilizzatore non può essere cambiato o se l'utilizzatore è già di quel tipo puro", // NEEDS CHECK
		},
		gen5: {
			desc: "L'utilizzatore cambia tipo in base al terreno di gioco. Terra per il terreno standard delle lotte Wi-Fi. Fallisce se il tipo dell'utilizzatore non può essere cambiato o se è già di quel tipo puro.", // NEEDS CHECK
			shortDesc: "Cambia il tipo dell'utilizzatore in tipo Terra.", // NEEDS CHECK
		},
		gen4: {
			desc: "L'utilizzatore cambia tipo in base al terreno di gioco. Normale per il terreno standard delle lotte Wi-Fi. Fallisce se l'utilizzatore ha l'abilità Multitipo o se è già in parte Normale.", // NEEDS CHECK
			shortDesc: "Cambia il tipo dell'utilizzatore in tipo Normale.", // NEEDS CHECK
		},
		gen3: {
			desc: "L'utilizzatore cambia tipo in base al terreno di gioco. Normale per il terreno standard delle lotte Wi-Fi. Fallisce se l'utilizzatore è già in parte Normale.", // NEEDS CHECK
		},
	},
	captivate: {
		name: "Incanto",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Riduce l'Attacco Speciale dei bersagli di 2 stadi. I singoli bersagli sono immuni se dello stesso genere dell'utilizzatore o se uno dei due è di genere neutro. I Pokémon con l'abilità Indifferenza sono immuni a questa mossa.", // NEEDS CHECK
		shortDesc: "-2 ASp ai nemici di genere opposto.", // NEEDS CHECK
	},
	catastropika: {
		name: "Super Pikaboom",
		shortDesc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
	},
	ceaselessedge: {
		name: "Lama Milleflutti",
		desc: "Se questa mossa ha successo, piazza una trappola sul terreno avversario che danneggia ogni Pokémon appena entra in campo, a meno che non siano di tipo Volante o abbiano l'abilità Levitazione. È possibile piazzare un massimo di tre strati e gli avversari perdono 1/8 dei loro PS massimi con uno strato, 1/6 con due strati e 1/4 con tre strati, tutti arrotondati per difetto. Le trappole possono essere rimosse dal terreno avversario se qualunque Pokémon usa Pulizie, se un Pokémon avversario usa con successo Glitturbine, Rapigiro o Scacciabruma o se un Pokémon avversario viene colpito da Scacciabruma.", // NEEDS CHECK
		shortDesc: "Piazza uno strato di Punte sul terreno avversario.", // NEEDS CHECK
	},
	celebrate: {
		name: "Auguri",
		shortDesc: "Nessun utilizzo competitivo.", // NEEDS CHECK

		activate: "  Auguri, {TRAINER}!",
	},
	charge: {
		name: "Sottocarica",
		// Official flavor text: "Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa."
		desc: "Aumenta la Difesa Speciale dell'utilizzatore di 1 stadio. Il prossimo attacco Elettro dell'utilizzatore avrà potenza raddoppiata; l'effetto termina se l'utilizzatore lascia il campo o se tenta di usare qualsiasi mossa Elettro diversa da Sottocarica, anche se fallisce.", // NEEDS CHECK
		shortDesc: "+1 DSp. Il prossimo attacco Elettro fa danni doppi.", // NEEDS CHECK
		gen8: {
			desc: "Aumenta la Difesa Speciale dell'utilizzatore di 1 stadio. Se nel turno successivo l'utilizzatore usa un attacco Elettro, la sua potenza viene raddoppiata.", // NEEDS CHECK
			shortDesc: "+1 DSp. Danni Elettro doppi il prossimo turno.", // NEEDS CHECK
		},
		gen3: {
			desc: "Se nel turno successivo l'utilizzatore usa un attacco Elettro, la sua potenza viene raddoppiata.", // NEEDS CHECK
			shortDesc: "Danni Elettro doppi il prossimo turno.", // NEEDS CHECK
		},

		start: "  {POKEMON} si carica di elettricità!",
	},
	chargebeam: {
		name: "Raggioscossa",
		// Official flavor text: "Chi la usa lancia un fascio di elettricità molto intensa. Può anche aumentare il suo Attacco Speciale."
		desc: "Possibilità del 70% di aumentare l'Attacco Speciale dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		shortDesc: "70% di aumentare l'ASp dell'utilizzatore di 1 stadio.", // NEEDS CHECK
	},
	charm: {
		name: "Fascino",
		// Official flavor text: "Ammalia il bersaglio con lo sguardo per renderlo meno cauto. Ne riduce molto l’Attacco."
		desc: "Riduce l'Attacco del bersaglio di 2 stadi.", // NEEDS CHECK
		shortDesc: "Riduce l'Att del bersaglio di 2 stadi.", // NEEDS CHECK
	},
	chatter: {
		name: "Schiamazzo",
		// Official flavor text: "Chi la usa attacca creando un’onda sonora di parole a vanvera e confonde il bersaglio."
		desc: "Possibilità del 100% di confondere il bersaglio.", // NEEDS CHECK
		shortDesc: "Confonde il bersaglio.", // NEEDS CHECK
		gen5: {
			desc: "Possibilità X% di confondere il bersaglio, dove X è 0 a meno che l'utilizzatore non sia Chatot che non ha usato Trasformazione. Se l'utilizzatore è Chatot, X è 0 o 10 in base al volume del verso registrato per Chatot. 0 per una registrazione dal volume basso o senza registrazione, 10 per una registrazione dal volume medio o alto.", // NEEDS CHECK
			shortDesc: "Per Chatot, 10% di confondere il bersaglio.", // NEEDS CHECK
		},
		gen4: {
			desc: "Possibilità X% di confondere il bersaglio, dove X è 0 a meno che l'utilizzatore non sia Chatot che non ha usato Trasformazione. Se l'utilizzatore è Chatot, X è 1, 11 o 31 in base al volume del verso registrato per Chatot. 1 per una registrazione dal volume basso o senza registrazione, 11 per una registrazione dal volume medio e 31 per una registrazione dal volume alto.", // NEEDS CHECK
			shortDesc: "Per Chatot, 31% di confondere il bersaglio.", // NEEDS CHECK
		},
	},
	chillingwater: {
		name: "Doccia Fredda",
		desc: "Possibilità del 100% di ridurre l'Attacco del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "Riduce l'Att del bersaglio di 1 stadio.", // NEEDS CHECK
	},
	chillyreception: {
		name: "Freddura",
		desc: "la condizione atmosferica diventa neve per 5 turni. L'utilizzatore esce dal campo anche se imprigionato e viene rimpiazzato immediatamente da un membro della squadra scelto. L'utilizzatore non esce dal campo se non ci sono altri alleati in salute nella squadra.", // NEEDS CHECK
		shortDesc: "Evoca la neve, l'utilizzatore esce dal campo.", // NEEDS CHECK

		prepare: "  {POKEMON} sta per fare una battuta!",
	},
	chipaway: {
		name: "Insidia",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Ignora le modifiche alle statistiche del bersaglio, inclusa l'elusione.", // NEEDS CHECK
		shortDesc: "Ignora le modifiche alle statistiche del bersaglio.", // NEEDS CHECK
	},
	chloroblast: {
		name: "Clorofillaser",
		desc: "Se questa mossa ha successo, l'utilizzatore perde metà dei suoi PS massimi arrotondati per eccesso, a meno che l'utilizzatore non abbia l'abilità Magicscudo o Testadura.", // NEEDS CHECK
		shortDesc: "L'utilizzatore perde 50% dei PS massimi.", // NEEDS CHECK
	},
	circlethrow: {
		name: "Ribaltiro",
		// Official flavor text: "Il bersaglio è scaraventato via ed è costretto a lasciare il posto a un altro. Mette fine alle lotte contro singoli Pokémon selvatici."
		desc: "Se entrambi l'utilizzatore e il bersaglio non sono andato KO, il bersaglio viene costretto a uscire dal campo in favore di un suo alleato casuale. Questo effetto fallisce se il bersaglio è sotto l'effetto di Radicamento, ha l'abilità Ventose o se questa mossa colpisce un Sostituto.", // NEEDS CHECK
		shortDesc: "Forza in campo un avversario casuale.", // NEEDS CHECK
	},
	clamp: {
		name: "Tenaglia",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Impedisce al bersaglio di essere ritirato per quattro o cinque turni (sette turni con Presartigli). Infligge danni pari a 1/8 dei PS massimi del bersaglio (1/6 con la Legafascia), arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Freddura, Invertivolt, Monito, Retromarcia, Staffetta, Tagliacoda, Teletrasporto o Virata. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Glitturbine, Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
		shortDesc: "Imprigiona e danneggia il bersaglio per 4-5 turni.", // NEEDS CHECK
		gen8: {
			desc: "Impedisce al bersaglio di essere ritirato per 4-5 turni (7 turni con Presartigli). Infligge danni pari a 1/8 dei PS massimi del bersaglio (1/6 con la Legafascia), arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Invertivolt, Monito, Retromarcia, Staffetta, Teletrasporto o Virata. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
		},
		gen7: {
			desc: "Impedisce al bersaglio di essere ritirato per 4-5 turni (7 turni con Presartigli). Infligge danni pari a 1/8 dei PS massimi del bersaglio (1/6 con la Legafascia), arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Invertivolt, Monito, Retromarcia o Staffetta. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
		},
		gen5: {
			desc: "Impedisce al bersaglio di essere ritirato per 4-5 turni (7 turni con Presartigli). Infligge danni pari a 1/16 dei PS massimi del bersaglio (1/8 con la Legafascia), arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Invertivolt, Retromarcia o Staffetta. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
		},
		gen4: {
			desc: "Impedisce al bersaglio di essere ritirato per 2-5 turni (sempre 5 turni con Presartigli). Infligge danni pari a 1/16 dei PS massimi del bersaglio, arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se tiene un Disfoguscio o se usa Retromarcia o Staffetta. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
			shortDesc: "Imprigiona e danneggia il bersaglio per 2-5 turni.", // NEEDS CHECK
		},
		gen3: {
			desc: "Impedisce al bersaglio di essere ritirato per 2-5 turni. Infligge danni pari a 1/16 dei PS massimi del bersaglio, arrotondati per difetto, alla fine di ogni turno durante il suo effetto. Il bersaglio può comunque ritirarsi se usa Staffetta. L'effetto termina se l'utilizzatore o il bersaglio lasciano il campo o se il bersaglio usa Rapigiro o Sostituto con successo. Questo effetto non è cumulabile e non viene sovrascritto usando di nuovo questa mossa o un'altra mossa imprigionante.", // NEEDS CHECK
		},
		gen1: {
			desc: "L'utilizzatore usa questa mossa per 2-5 turni. Ha una possibilità di 3/8 di durare due o tre turni e una di 1/8 di durare quattro o cinque turni. Il danno è calcolato una volta per il primo turno e usato per ogni altro turno. L'utilizzatore non può selezionare una mossa e il bersaglio non può eseguirne alcuna durante l'effetto di questa mossa, ma entrambi possono essere ritirati dal campo. Se l'utilizzatore viene ritirato, il bersaglio resta incapace di usare una mossa durante quel turno. Se il bersaglio viene ritirato, l'utilizzatore usa automaticamente questa mossa di nuovo e, se aveva 0 PP rimasti al momento, i PP diventano 63. Se l'utilizzatore o il bersaglio vengono ritirati o se l'utilizzatore è incapace di muoversi, l'effetto di questa mossa termina. Se il bersaglio ha un'immunità di tipo contro questa mossa, non riceve danni ma resta comunque incapace di muoversi.", // NEEDS CHECK
			shortDesc: "Impedisce al bersaglio di muoversi per 2-5 turni.", // NEEDS CHECK
		},

		start: "  {SOURCE} stritola {POKEMON} con Tenaglia!",
		move: "#wrap",
	},
	clangingscales: {
		name: "Clamorsquame",
		// Official flavor text: "Chi la usa attacca il bersaglio con un suono fortissimo che genera sfregando le scaglie del corpo. Dopo aver attaccato, la sua Difesa diminuisce."
		desc: "Riduce la Difesa dei bersagli di 1 stadio.", // NEEDS CHECK
		shortDesc: "-1 Dif. Colpisce nemici adiacenti.", // NEEDS CHECK
	},
	clangoroussoul: {
		name: "Dracofonia",
		// Official flavor text: "Chi la usa sacrifica un po’ dei suoi PS per aumentare tutte le sue statistiche."
		desc: "Aumenta Attacco, Difesa, Attacco Speciale, Difesa Speciale e Velocità dell'utilizzatore di 1 stadio in cambio del 33% dei PS massimi, arrotondati per difetto. Fallisce se l'utilizzatore andrebbe KO o se le sue statistiche rimarrebbero invariate.", // NEEDS CHECK
		shortDesc: "-33% PS, +1 a tutte le statistiche.", // NEEDS CHECK
	},
	clangoroussoulblaze: {
		name: "Dracofonia Divampante",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Aumenta Attacco, Difesa, Attacco Speciale, Difesa Speciale e Velocità dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		shortDesc: "Aumenta Att, Dif, ASp, DSp e Vel di 1 stadio.", // NEEDS CHECK
	},
	clearsmog: {
		name: "Pulifumo",
		shortDesc: "Azzera le modifiche alle statistiche del bersaglio.", // NEEDS CHECK
	},
	closecombat: {
		name: "Zuffa",
		// Official flavor text: "Chi la usa attacca abbassando la guardia. La propria Difesa e la Difesa Speciale si riducono."
		desc: "Riduce Difesa e Difesa Speciale dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		shortDesc: "Riduce Dif e DSp dell'utilizzatore di 1 stadio.", // NEEDS CHECK
	},
	coaching: {
		name: "Coaching",
		// Official flavor text: "Chi la usa aumenta l’Attacco e la Difesa di tutti gli alleati dando loro indicazioni precise."
		desc: "Aumenta Attacco e Difesa del bersaglio di 1 stadio. Fallisce se non ci sono alleati adiacenti all'utilizzatore.", // NEEDS CHECK
		shortDesc: "Aumenta Att e Dif di un alleato di 1 stadio.", // NEEDS CHECK
	},
	coil: {
		name: "Arrotola",
		// Official flavor text: "Chi la usa si concentra aumentando Attacco, Difesa e precisione."
		desc: "Aumenta Attacco, Difesa e precisione dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		shortDesc: "Aumenta Att, Dif e precisione di 1 stadio.", // NEEDS CHECK
	},
	collisioncourse: {
		name: "Turboschianto",
		desc: "Se questa mossa è superefficace contro il bersaglio, i danni vengono moltiplicati per 1,3333.", // NEEDS CHECK
		shortDesc: "1,3333x danni con attacchi superefficaci.", // NEEDS CHECK
	},
	combattorque: {
		name: "Turborissa",
		desc: "Possibilità del 30% di paralizzare il bersaglio.", // NEEDS CHECK
		shortDesc: "30% di paralizzare il bersaglio.", // NEEDS CHECK
	},
	cometpunch: {
		name: "Cometapugno",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Colpisce da due a cinque volte. Ha il 35% di possibilità di colpire due o tre volte e il 15% di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte.", // NEEDS CHECK
		shortDesc: "Colpisce 2-5 volte in un turno.", // NEEDS CHECK
		gen4: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi. Se l'utilizzatore ha l'abilità Abillegame, questa mossa colpisce sempre cinque volte. Se il bersaglio tiene un Focalnastro e ha tutti i PS quando questa mossa viene usata, non verrà mandato KO a prescindere dal numero di colpi.", // NEEDS CHECK
		},
		gen3: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Se uno dei colpi rompe il Sostituto del bersaglio, questo riceverà i danni dei colpi successivi.", // NEEDS CHECK
		},
		gen1: {
			desc: "Colpisce da due a cinque volte. Ha una possibilità di 3/8 di colpire due o tre volte e una di 1/8 di colpire quattro o cinque volte. Il danno è calcolato una volta per il primo colpo e usato per ogni altro colpo. Se uno dei colpi rompe il Sostituto del bersaglio, la mossa si interrompe.", // NEEDS CHECK
		},
	},
	comeuppance: {
		name: "Ritorsione",
		desc: "Mira all'ultimo Pokémon che ha colpito l'utilizzatore con un attacco fisico o speciale durante questo turno, infliggendoli 1,5x i danni ricevuti da quell'attacco, arrotondati per difetto. Se l'utilizzatore non ha perso PS dall'attacco subito, questa mossa infligge 1 PS di danno. Se la posizione del Pokémon che ha attaccato l'utilizzatore è vuota e c'è un altro avversario in campo, questa mossa viene ridirezionata su quell'avversario. Solo l'ultimo colpo delle mosse multicolpo viene considerato per il calcolo dei danni. Questa mossa fallisce se l'utilizzatore non è stato colpito da un attacco fisico o speciale di un avversario durante questo turno.", // NEEDS CHECK
		shortDesc: "Se colpito, restituisce 1,5x i danni.", // NEEDS CHECK
	},
	confide: {
		name: "Confidenza",
		// Official flavor text: "Chi la usa svela dei segreti al bersaglio, distraendolo e riducendone l’Attacco Speciale."
		desc: "Riduce l'Attacco Speciale del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "Riduce l'ASp del bersaglio di 1 stadio.", // NEEDS CHECK
	},
	confuseray: {
		name: "Stordiraggio",
		// Official flavor text: "Colpisce il bersaglio con un raggio funesto che lo confonde."
		desc: "Causa confusione al bersaglio.", // NEEDS CHECK
		shortDesc: "Confonde il bersaglio.", // NEEDS CHECK
	},
	confusion: {
		name: "Confusione",
		// Official flavor text: "Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo."
		desc: "Possibilità del 10% di confondere il bersaglio.", // NEEDS CHECK
		shortDesc: "10% di confondere il bersaglio.", // NEEDS CHECK
	},
	constrict: {
		name: "Limitazione",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: "Possibilità del 10% di ridurre la Velocità del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "10% di ridurre la Vel del bersaglio di 1 stadio.", // NEEDS CHECK
		gen1: {
			desc: "Possibilità del 33% di ridurre la Velocità del bersaglio di 1 stadio.", // NEEDS CHECK
			shortDesc: "33% di ridurre la Vel del bersaglio di 1 stadio.", // NEEDS CHECK
		},
	},
	continentalcrush: {
		name: "Gigamacigno Polverizzante",
		shortDesc: "Potenza influenzata dalla mossa di partenza.", // NEEDS CHECK
	},
	conversion: {
		name: "Conversione",
		// Official flavor text: "Il tipo di chi la usa muta in quello della prima mossa nella lista delle sue mosse."
		desc: "L'utilizzatore cambia il proprio tipo a quello della mossa nel suo primo slot. Fallisce se l'utilizzatore non può cambiare il proprio tipo o se è già in parte dello stesso tipo della sua prima mossa.", // NEEDS CHECK
		shortDesc: "L'utilizzatore passa al tipo della sua prima mossa.", // NEEDS CHECK
		gen5: {
			desc: "L'utilizzatore cambia il proprio tipo a quello di una delle mosse da lui conosciute a caso diverse da questa mossa e di tipi diversi dal tipo corrente dell'utilizzatore. Fallisce se l'utilizzatore non può cambiare il proprio tipo o se l'unico tipo a cui potrebbe cambiare è il suo tipo corrente.", // NEEDS CHECK
			shortDesc: "L'utilizzatore passa al tipo di una delle sue mosse.", // NEEDS CHECK
		},
		gen4: {
			desc: "L'utilizzatore cambia il proprio tipo a quello di una delle mosse da lui conosciute a caso diverse da questa mossa, da Maledizione e di tipi diversi dal tipo corrente dell'utilizzatore. Fallisce se l'utilizzatore non può cambiare il proprio tipo o se l'unico tipo a cui potrebbe cambiare è il suo tipo corrente.", // NEEDS CHECK
		},
		gen3: {
			desc: "L'utilizzatore cambia il proprio tipo a quello di una delle mosse da lui conosciute a caso diverse da Maledizione e di tipi diversi dal tipo corrente dell'utilizzatore. Fallisce se l'utilizzatore non può cambiare il proprio tipo o se l'unico tipo a cui potrebbe cambiare è il suo tipo corrente.", // NEEDS CHECK
		},
		gen1: {
			desc: "L'utilizzatore cambia il proprio tipo per copiare i tipi del bersaglio.", // NEEDS CHECK
			shortDesc: "L'utilizzatore passa al tipo del bersaglio.", // NEEDS CHECK
		},

		typeChange: "  Passa al tipo di {SOURCE}",
	},
	conversion2: {
		name: "Conversione2",
		// Official flavor text: "Chi la usa cambia tipo per rendersi resistente al tipo dell’ultima mossa usata dal bersaglio."
		desc: "L'utilizzatore cambia il proprio tipo a uno resistente o immune all'ultima mossa usata dal bersaglio, ma non di uno dei suoi tipi correnti. Viene considerato il tipo effettivo della mossa piuttosto che il suo tipo originale. Fallisce se il bersaglio non ha mai attaccato, se l'utilizzatore non può cambiare il proprio tipo o se questa mosse cambierebbe il tipo dell'utilizzatore in uno dei suoi tipi correnti.", // NEEDS CHECK
		shortDesc: "Cambio di tipo per resistere l'ultima mossa usata.", // NEEDS CHECK
		gen4: {
			desc: "L'utilizzatore cambia il proprio tipo a uno resistente o immune all'ultima mossa subita se ha avuto successo e se non corrisponde a uno dei suoi tipi correnti. Viene considerato il tipo effettivo della mossa piuttosto che il suo tipo originale. Fallisce se l'ultima mossa usata contro l'utilizzatore non ha avuto successo, se l'utilizzatore ha l'abilità Multitipo o se questa mossa può solo cambiare il tipo dell'utilizzatora a uno dei suoi tipi correnti.", // NEEDS CHECK
			shortDesc: "Cambio di tipo per resistere l'ultima mossa subita.", // NEEDS CHECK
		},
		gen3: {
			desc: "L'utilizzatore cambia il proprio tipo a uno resistente o immune all'ultima mossa subita se ha avuto successo e se non corrisponde a uno dei suoi tipi correnti. Viene considerato il tipo effettivo della mossa piuttosto che il suo tipo originale. Scontro viene considerata di tipo Normale. Fallisce se l'ultima mossa usata contro l'utilizzatore non ha avuto successo, se l'utilizzatore ha l'abilità Multitipo o se questa mossa può solo cambiare il tipo dell'utilizzatora a uno dei suoi tipi correnti.", // NEEDS CHECK
		},
		gen2: {
			desc: "L'utilizzatore cambia il proprio tipo a uno resistente o immune all'ultima mossa usata dall'avversario, anche se corrisponde a uno dei suoi tipi correnti. Viene considerato il tipo originale della mossa piuttosto che il suo tipo effettivo. Fallisce se l'avversario non ha usato alcuna mossa.", // NEEDS CHECK
			shortDesc: "Cambio di tipo per resistere l'ultima mossa usata", // NEEDS CHECK
		},
	},
	copycat: {
		name: "Copione",
		// Official flavor text: "Chi la usa mima l’ultima mossa eseguita. Fallisce se non è stata ancora usata alcuna mossa."
		desc: "L'utilizzatore usa l'ultima mossa usata da qualunque Pokémon, incluso sé stesso. Fallisce se nessuna mossa è ancora stata usata o se l'ultima mossa usata è Agodifesa, Altruismo, Assistente, Auguri, Boato, Cannonbecco, Cannone Dynamax, Cediregalo, Centripugno, Codadrago, Colpo Maestoso, Contrattacco, Copione, Destinobbligato, Fintattacco, Fortino, Furto, Gusciotrappola, Individua, Mano nella Mano, Metronomo, Mimica, Naturforza, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltappeto, Ribaltiro, Riflettore, Rutto, Schiamazzo, Schizzo, Scippo, Scontro, Scudo Reale, Sonnolalia, Sonoqui, Specchiovelo, Speculmossa, Supplica, Taglio Maestoso, Teracluster, Trasformazione, Turbine, Turboincanto, Turborissa, Turbotenebra, Turbotossina o Turboustione.", // NEEDS CHECK
		shortDesc: "Copia l'ultima mossa usata.", // NEEDS CHECK
		gen8: {
			desc: "L'utilizzatore usa l'ultima mossa usata da qualunque Pokémon, incluso sé stesso. Vengono considerate le versioni base delle mosse Dynamax e Gigamax. Fallisce se nessuna mossa è ancora stata usata o se l'ultima mossa usata è Agodifesa, Altruismo, Assistente, Auguri, Boato, Cannonbecco, Cannone Dynamax, Cediregalo, Centripugno, Codadrago, Colpo Maestoso, Contrattacco, Copione, Destinobbligato, Fintattacco, Fortino, Furto, Gusciotrappola, Individua, Mano nella Mano, Metronomo, Mimica, Naturforza, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltappeto, Ribaltiro, Riflettore, Rutto, Schiamazzo, Schizzo, Scippo, Scontro, Scudo Reale, Sonnolalia, Sonoqui, Specchiovelo, Speculmossa, Supplica, Taglio Maestoso, Trasformazione o Turbine", // NEEDS CHECK
		},
		gen7: {
			desc: "L'utilizzatore usa l'ultima mossa usata da qualunque Pokémon, incluso sé stesso. Fallisce se nessuna mossa è ancora stata usata o se l'ultima mossa usata è Agodifesa, Altruismo, Assistente, Auguri, Boato, Cannonbecco, Cediregalo, Centripugno, Codadrago, Contrattacco, Copione, Destinobbligato, Fintattacco, Fortino, Furto, Gusciotrappola, Individua, Mano nella Mano, Metronomo, Mimica, Naturforza, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltappeto, Ribaltiro, Riflettore, Rutto, Schiamazzo, Schizzo, Scippo, Scontro, Scudo Reale, Sonnolalia, Sonoqui, Specchiovelo, Speculmossa, Supplica, Trasformazione, Turbine o qualsiasi mossa z.", // NEEDS CHECK
		},
		gen6: {
			desc: "L'utilizzatore usa l'ultima mossa usata da qualunque Pokémon, incluso sé stesso. Fallisce se nessuna mossa è ancora stata usata o se l'ultima mossa usata è Agodifesa, Altruismo, Assistente, Auguri, Boato, Cediregalo, Centripugno, Codadrago, Contrattacco, Copione, Destinobbligato, Fintattacco, Furto, Individua, Mano nella Mano, Metronomo, Mimica, Naturforza, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltappeto, Ribaltiro, Rutto, Schiamazzo, Schizzo, Scippo, Scontro, Scudo Reale, Sonnolalia, Sonoqui, Specchiovelo, Speculmossa, Supplica, Trasformazione o Turbine.", // NEEDS CHECK
		},
		gen5: {
			desc: "L'utilizzatore usa l'ultima mossa usata da qualunque Pokémon, incluso sé stesso. Fallisce se nessuna mossa è ancora stata usata o se l'ultima mossa usata è Altruismo, Assistente, Cediregalo, Centripugno, Codadrago, Contrattacco, Copione, Destinobbligato, Fintattacco, Furto, Individua, Metronomo, Mimica, Naturforza, Polverabbia, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Ribaltiro, Schiamazzo, Schizzo, Scippo, Scontro, Sonnolalia, Sonoqui, Specchiovelo, Speculmossa, Supplica o Trasformazione.", // NEEDS CHECK
		},
		gen4: {
			desc: "L'utilizzatore usa l'ultima mossa usata da qualunque Pokémon, incluso sé stesso. Fallisce se nessuna mossa è ancora stata usata o se l'ultima mossa usata è Altruismo, Assistente, Centripugno, Contrattacco, Copione, Destinobbligato, Fintattacco, Furto, Individua, Metronomo, Mimica, Precedenza, Protezione, Raggiro, Rapidscambio, Resistenza, Schiamazzo, Schizzo, Scippo, Scontro, Sonnolalia, Sonoqui, Specchiovelo, Speculmossa o Supplica.", // NEEDS CHECK
		},
	},
	coreenforcer: {
		name: "Nucleocastigo",
		// Official flavor text: "Il bersaglio subisce dei danni e, se ha già agito nel turno, perde la sua abilità."
		desc: "Se l'utilizzatore si muove dopo il bersaglio, l'abilità del bersaglio viene resa inefficace fintanto che rimane in campo. Se il bersaglio usa Staffetta, l'alleato che lo sostituisce continuerà a subire di questo effetto. Se l'abilità del bersaglio è Accendilotta, Banco, Fantasmanto, Gelofaccia, Inghiottimissile, Morfosintonia, Multitipo, Sciamefusione, Scudosoglia, Sintonia Equina, Sistema Primevo, Sonno Assoluto, Stato Zen, Supercambio o Teramorfosi, questo effetto non avviene e riceverlo tramite Staffetta lo farà terminare immediatamente.", // NEEDS CHECK
		shortDesc: "Nullifica le abilità dei bersagli se hanno già agito.", // NEEDS CHECK
		gen8: {
			desc: "Se l'utilizzatore si muove dopo il bersaglio, l'abilità del bersaglio viene resa inefficace fintanto che rimane in campo. Se il bersaglio usa Staffetta, l'alleato che lo sostituisce continuerà a subire di questo effetto. Se l'abilità del bersaglio è Accendilotta, Banco, Fantasmanto, Gelofaccia, Inghiottimissile, Morfosintonia, Multitipo, Sciamefusione, Scudosoglia, Sintonia Equina, Sistema Primevo, Sonno Assoluto o Stato Zen, questo effetto non avviene e riceverlo tramite Staffetta lo farà terminare immediatamente.", // NEEDS CHECK
		},
		gen7: {
			desc: "Se l'utilizzatore si muove dopo il bersaglio, l'abilità del bersaglio viene resa inefficace fintanto che rimane in campo. Se il bersaglio usa Staffetta, l'alleato che lo sostituisce continuerà a subire di questo effetto. Se l'abilità del bersaglio è Accendilotta, Banco, Fantasmanto, Morfosintonia, Multitipo, Sciamefusione, Scudosoglia, Sistema Primevo, Sonno Assoluto o Stato Zen, questo effetto non avviene e riceverlo tramite Staffetta lo farà terminare immediatamente.", // NEEDS CHECK
		},
	},
	corkscrewcrash: {
		name: "Spirale Perforante",
		shortDesc: "Potenza influenzata dalla mossa di partenza.", // NEEDS CHECK
	},
	corrosivegas: {
		name: "Gas Corrosivo",
		// Official flavor text: "Chi la usa avvolge tutti i Pokémon che ha intorno in un gas altamente acido, dissolvendo i loro strumenti."
		desc: "I bersagli perdono i propri strumenti. Questa mossa non può rimuovere lo strumento a un Pokémon con l'abilità Ventose o a Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvally, Zacian, Zamazenta, Pokémon paradosso o Ogerpon che tengono rispettivamente Gemma blu, Gemma rossa, Adamasferoide, Splendisferoide, Grigiosferoide, una Lastra, un Modulo, una ROM, Spada rovinata, Scudo rovinato, Capsula energetica o una Maschera. In questo caso, la categoria Pokémon paradosso include tutte le specie con le abilità Paleoattivazione o Carica Quark eccetto Vampeaguzze, Furiatonante, Massoferreo e Capoferreo. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo o Coglibacche.", // NEEDS CHECK
		shortDesc: "Rimuove gli strumenti dei Pokémon adiacenti.", // NEEDS CHECK
		gen8: {
			desc: "I bersagli perdono i propri strumenti. Questa mossa non può rimuovere lo strumento a un Pokémon con l'abilità Ventose o a Kyogre, Groudon, Giratina, Arceus, Genesect, Silvally, Zacian o Zamazenta che tengono rispettivamente Gemma blu, Gemma rossa, Grigiosfera, una Lastra, un Modulo, una ROM, Spada rovinata o Scudo rovinato. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo o Coglibacche.", // NEEDS CHECK
		},

		fail: "#healblock",
		removeItem: "  {SOURCE} scioglie {ITEM:definite} di {POKEMON}!",
	},
	cosmicpower: {
		name: "Cosmoforza",
		// Official flavor text: "Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale."
		desc: "Aumenta Difesa e Difesa Speciale dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		shortDesc: "Aumenta Dif e DSp dell'utilizzatore di 1 stadio.", // NEEDS CHECK
	},
	cottonguard: {
		name: "Cotonscudo",
		// Official flavor text: "Chi la usa avvolge il proprio corpo con del cotone molto morbido, proteggendosi e aumentando moltissimo la propria Difesa."
		desc: "Aumenta la Difesa dell'utilizzatore di 3 stadi.", // NEEDS CHECK
		shortDesc: "Aumenta la Dif dell'utilizzatore di 3 stadi.", // NEEDS CHECK
	},
	cottonspore: {
		name: "Cottonspora",
		// Official flavor text: "Rilascia spore simili al cotone che si attaccano ai nemici nei paraggi e ne riducono di molto la Velocità."
		desc: "Riduce le Velocità del bersaglio di 2 stadi.", // NEEDS CHECK
		shortDesc: "Riduce la Vel del bersaglio di 2 stadi.", // NEEDS CHECK
	},
	counter: {
		name: "Contrattacco",
		// Official flavor text: "Mossa che contrasta ogni attacco fisico, arrecando il doppio del danno ricevuto."
		desc: "Attacca l'ultimo Pokémon avversario che ha colpito l'utilizzatore con un attacco fisico con danno equivalente al doppio dei PS persi dall'utilizzatore da quell'attacco. Se l'utilizzatore non ha perso PS dall'attacco subito, questa mossa infligge 1 PS di danno. Se la posizione del Pokémon che ha attaccato l'utilizzatore è vuota e c'è un altro avversario in campo, questa mossa viene ridirezionata su quell'avversario. Solo l'ultimo colpo delle mosse multicolpo viene considerato per il calcolo dei danni. Questa mossa fallisce se l'utilizzatore non è stato colpito da un attacco fisico di un avversario durante questo turno.", // NEEDS CHECK
		shortDesc: "Infligge il doppio del danno fisico subito.", // NEEDS CHECK
		gen6: {
			desc: "Attacca l'ultimo Pokémon avversario che ha colpito l'utilizzatore durante questo turno con un attacco fisico con danno equivalente al doppio dei PS persi dall'utilizzatore da quell'attacco. Se l'utilizzatore non ha perso PS dall'attacco subito, questa mossa ha potenza base 1. Se la posizione del Pokémon che ha attaccato l'utilizzatore è vuota e c'è un altro avversario in campo, questa mossa viene ridirezionata su quell'avversario. Solo l'ultimo colpo delle mosse multicolpo viene considerato per il calcolo dei danni. Questa mossa fallisce se l'utilizzatore non è stato colpito da un attacco fisico di un avversario durante questo turno.", // NEEDS CHECK
		},
		gen4: {
			desc: "Attacca l'ultimo Pokémon avversario che ha colpito l'utilizzatore durante questo turno con un attacco fisico con danno equivalente al doppio dei PS persi dall'utilizzatore da quell'attacco. Se la posizione del Pokémon che ha attaccato l'utilizzatore è vuota e c'è un altro avversario in campo, questa mossa viene ridirezionata su quell'avversario. Solo l'ultimo colpo delle mosse multicolpo viene considerato per il calcolo dei danni. Questa mossa fallisce se l'utilizzatore non è stato colpito da un attacco fisico di un avversario durante questo turno o se l'utilizzatore non ha perso PS dall'attacco.", // NEEDS CHECK
		},
		gen3: {
			desc: "Attacca l'ultimo Pokémon avversario che ha colpito l'utilizzatore durante questo turno con un attacco fisico con danno equivalente al doppio dei PS persi dall'utilizzatore da quell'attacco. Se la posizione del Pokémon che ha attaccato l'utilizzatore è vuota e c'è un altro avversario in campo, questa mossa viene ridirezionata su quell'avversario. Questa mossa considera Introforza come una mossa Normale. Solo l'ultimo colpo delle mosse multicolpo viene considerato per il calcolo dei danni. Questa mossa fallisce se l'utilizzatore non è stato colpito da un attacco fisico di un avversario durante questo turno o se l'utilizzatore non ha perso PS dall'attacco.", // NEEDS CHECK
		},
		gen2: {
			desc: "Attacca il Pokémon avversario con danno equivalente al doppio dei PS persi dall'utilizzatore a causa di un suo attacco fisico in questo turno. Questa mossa considera Introforza come una mossa Normale. Solo l'ultimo colpo delle mosse multicolpo viene considerato per il calcolo dei danni. Questa mossa fallisce se l'utilizzatore si muove per primo, se non è stato colpito da un attacco fisico durante questo turno o se l'utilizzatore non ha perso PS dall'attacco. Se l'avversario ha usato Abisso o Perforcorno e ha mancato, questa mossa infligge 65535 danni.", // NEEDS CHECK
		},
		gen1: {
			desc: "Attacca il Pokémon avversario con danno equivalente al doppio dei PS persi a causa dell'ultima mossa usata battaglia. Questa mossa ignora le immunità di tipo. Questa mossa fallisce se l'utilizzatore si muove per primo, se l'ultima mossa di un Pokémon avversario è stata Contatore, aveva 0 potenza base o non è stata di tipo Normale o Lotta. Fallisce se l'ultima mossa usata da qualunque Pokémon ha inflitto 0 danni e non è stata Conversione, Covauova, Focalenergia, Mimica, Nebbia, Nube, Paralizzante, Parassiseme, Riflesso, Riposo, Ripresa, Schermoluce, Sguardo Feroce, Sostituto, Splash, Stordiraggio, Supersuono, Teletrasporto, Tossina, Trasformazione, Tuononda, Velenogas o Velenpolvere.", // NEEDS CHECK
			shortDesc: "Se colpito da un attacco fisico, ritorna danni doppi.", // NEEDS CHECK
		},
	},
	courtchange: {
		name: "Cambiocampo",
		// Official flavor text: "Una forza misteriosa inverte gli effetti attivi sul campo alleato e sul campo avversario."
		desc: "Scambia gli effetti di Nebbia, Schermoluce, Riflesso, Punte, Salvaguardia, Ventoincoda, Fielepunte, Levitoroccia, Acquapatto, Fiammapatto, Erbapatto, Rete Vischiosa, Velaurora, Gigaferroaculei, Gigacannonata, Gigasferzata, e Gigavampa tra il lato del campo dell'utilizzatore e quello dell'avversario.", // NEEDS CHECK
		shortDesc: "Scambia gli effetti sul terreno con l'avversario.", // NEEDS CHECK

		activate: "  {POKEMON} ha invertito gli effetti attivi nelle due metà del campo!",
	},
	covet: {
		name: "Supplica",
		// Official flavor text: "Chi la usa attacca il bersaglio sorridendo e gli ruba lo strumento."
		desc: "Se questo attacco ha successo e l'utilizzatore non è andato KO, ruba lo strumento del bersaglio se l'utilizzatore non ne tiene uno. I Pokémon con l'abilità Ventose non possono perdere il loro strumento a meno che non venga mandato KO. Se lo strumento in questione è tra Gemma blu, Gemma rossa, Adamasferoide, Splendisferoide, Grigiosferoide, una Lastra, un Modulo, una ROM, Spada rovinata, Scudo rovinato, Capsula energetica o Machera tenuto rispettivamente da Kyogre, Groudon, Dialga, Palkia, Giratina, Arceus, Genesect, Silvally, Zacian, Zamazenta, un Pokémon paradosso o Ogerpon, o se l'utilizzatore è una delle specie menzionate con il rispettivo strumento tenuto, allora lo strumento non verrà rubato. In questo caso, la categoria Pokémon paradosso include tutte le specie con le abilità Paleoattivazione o Carica Quark eccetto Vampeaguzze, Furiatonante, Massoferreo e Capoferreo. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo o Coglibacche.", // NEEDS CHECK
		shortDesc: "Ruba lo strumento del bersaglio.", // NEEDS CHECK
		champions: {
			desc: "Se questo attacco ha successo e l'utilizzatore non ha uno strumento, ruba lo strumento del bersaglio. I Pokémon con l'abilità Ventose non possono perdere il loro strumento a meno che non venga mandato KO. Se lo strumento in questione è una Megapietra e l'utilizzatore o il bersaglio sono della specie in gradi di usare questa Megapietra per Megaevolversi, allora lo strumento non verrà rubato. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo o Coglibacche.", // NEEDS CHECK: not in PokeAPI
		},
		gen8: {
			desc: "Se questo attacco ha successo e l'utilizzatore non è andato KO, ruba lo strumento del bersaglio se l'utilizzatore non ne tiene uno. I Pokémon con l'abilità Ventose non possono perdere il loro strumento a meno che non venga mandato KO. Se lo strumento in questione è tra Gemma blu, Gemma rossa, Grigiosfera, una Lastra, un Modulo, una ROM, Spada rovinata o Scudo rovinato tenuto rispettivamente da Kyogre, Groudon, Giratina, Arceus, Genesect, Silvally, Zacian o Zamazenta, o se l'utilizzatore è una delle specie menzionate con il rispettivo strumento tenuto, allora lo strumento non verrà rubato. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo o Coglibacche.", // NEEDS CHECK
		},
		gen7: {
			desc: "Se questo attacco ha successo e l'utilizzatore non è andato KO, ruba lo strumento del bersaglio se l'utilizzatore non ne tiene uno. I Pokémon con l'abilità Ventose non possono perdere il loro strumento a meno che non venga mandato KO. Se lo strumento in questione è un Cristallo z, una Megapietra assegnata a una specie capace di usarla per Megaevolversi o una Gemma blu, Gemma rossa, Grigiosfera, una Lastra, un Modulo o una ROM tenuto rispettivamente da Kyogre, Groudon, Giratina, Arceus, Genesect o Silvally, o se l'utilizzatore è una delle specie menzionate con il rispettivo strumento tenuto, allora lo strumento non verrà rubato. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo o Coglibacche.", // NEEDS CHECK
		},
		gen6: {
			desc: "Se questo attacco ha successo e l'utilizzatore non è andato KO, ruba lo strumento del bersaglio se l'utilizzatore non ne tiene uno. I Pokémon con l'abilità Ventose non possono perdere il loro strumento a meno che non venga mandato KO. Se lo strumento in questione è una Megapietra assegnata a una specie capace di usarla per Megaevolversi o una Gemma blu, Gemma rossa, Grigiosfera, una Lastra o un Modulo tenuto rispettivamente da Kyogre, Groudon, Giratina, Arceus o Genesect, o se l'utilizzatore è una delle specie menzionate con il rispettivo strumento tenuto, allora lo strumento non verrà rubato. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo o Coglibacche.", // NEEDS CHECK
		},
		gen5: {
			desc: "Se questo attacco ha successo e l'utilizzatore non è andato KO, ruba lo strumento del bersaglio se l'utilizzatore non ne tiene uno. I Pokémon con l'abilità Ventose non possono perdere il loro strumento a meno che non venga mandato KO. Se lo strumento in questione è un messaggio una Grigiosfera, una Lastra o un Modulo tenuto rispettivamente da Giratina, Arceus o Genesect, o se l'utilizzatore è una delle specie menzionate con il rispettivo strumento tenuto, allora lo strumento non verrà rubato. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo o Coglibacche.", // NEEDS CHECK
		},
		gen4: {
			desc: "Se questo attacco ha successo e l'utilizzatore non ha uno strumento, ruba lo strumento del bersaglio. Se lo strumento in questione è un messaggio una Grigiosfera, o se il bersaglio ha l'abilità Multitipo o Ventose, allora lo strumento non verrà rubato. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo.", // NEEDS CHECK
		},
		gen3: {
			desc: "Se questo attacco ha successo e l'utilizzatore non ha uno strumento, ruba lo strumento del bersaglio. Se lo strumento in questione è un messaggio una Baccaenigma, o se il bersaglio ha l'abilità Ventose, allora lo strumento non verrà rubato. Gli strumenti persi in questo modo non possono essere recuperati con Riciclo.", // NEEDS CHECK
		},
	},
	crabhammer: {
		name: "Martellata",
		// Official flavor text: "Danneggia il bersaglio servendosi di una grande tenaglia. Probabile brutto colpo."
		desc: "Maggiori probabilità di infliggere un brutto colpo.", // NEEDS CHECK
		shortDesc: "Probabile brutto colpo.", // NEEDS CHECK
	},
	craftyshield: {
		name: "Truccodifesa",
		// Official flavor text: "Grazie a un misterioso potere, protegge chi la usa e gli alleati dalle mosse di stato. È tuttavia inefficace contro mosse che infliggono danni."
		desc: "L'utilizzatore e i suoi compagni di squadra sono protetti dalle mosse di stato di altri Pokémon, alleati o avversari, durante questo turno. Fallisce se l'utilizzatore si muove per ultimo o se l'effetto di questa mossa è già attivo per la propria squadra.", // NEEDS CHECK
		shortDesc: "Protegge gli alleati dalle mosse di stato.", // NEEDS CHECK

		start: "  {TEAM} è protetto da Truccodifesa!",
		block: "  {POKEMON} è protetto da Truccodifesa!",
	},
	crosschop: {
		name: "Incrocolpo",
		// Official flavor text: "Investe il bersaglio con un colpo sferrato con entrambe le braccia incrociate. Probabile brutto colpo."
		desc: "Maggiori probabilità di infliggere un brutto colpo.", // NEEDS CHECK
		shortDesc: "Probabile brutto colpo.", // NEEDS CHECK
	},
	crosspoison: {
		name: "Velenocroce",
		// Official flavor text: "Attacco con zanne avvelenate che può anche avvelenare il Pokémon colpito. Probabile brutto colpo."
		desc: "Probabilità del 10% di infliggere avvelenamento al bersaglio. Maggiori probabilità di infliggere brutto colpo.", // NEEDS CHECK
		shortDesc: "10% avvelenamento. Probabile brutto colpo.", // NEEDS CHECK
	},
	crunch: {
		name: "Sgranocchio",
		// Official flavor text: "Il bersaglio viene morso con denti affilati. Può anche ridurne la Difesa."
		desc: "Possibilità del 20% di ridurre la Difesa del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "20% di ridurre la Dif del bersaglio di 1 stadio.", // NEEDS CHECK
		gen3: {
			desc: "Possibilità del 20% di ridurre la Difesa Speciale del bersaglio di 1 stadio.", // NEEDS CHECK
			shortDesc: "20% di ridurre la DSp del bersaglio di 1 stadio.", // NEEDS CHECK
		},
	},
	crushclaw: {
		name: "Tritartigli",
		// Official flavor text: "Colpisce il bersaglio con artigli robusti e affilati che possono ridurne la Difesa."
		desc: "Possibilità del 50% di ridurre la Difesa del bersaglio di 1 stadio.", // NEEDS CHECK
		shortDesc: "50% di ridurre la Dif del bersaglio di 1 stadio.", // NEEDS CHECK
	},
	crushgrip: {
		name: "Sbriciolmano",
		// Official flavor text: "Colpisce il bersaglio con grande forza. Più PS ha il Pokémon colpito, maggiore è la potenza della mossa."
		desc: "La potenza di questa mossa equivale a 120 x (PS attuali del bersaglio / PS massimi del bersaglio), arrotondato per difetto sul valore intermedio, ma non meno di 1.", // NEEDS CHECK
		shortDesc: "Potenza proporzionale ai PS del bersaglio.", // NEEDS CHECK
		gen4: {
			desc: "La potenza di questa mossa 120 x (PS attuali del bersaglio / PS massimi del bersaglio) + 1, arrotondato per difetto.", // NEEDS CHECK
		},
	},
	curse: {
		name: "Maledizione",
		// Official flavor text: "Una mossa che agisce in modo diverso se chi la usa è di tipo Spettro."
		desc: "Se l'utilizzatore non è un tipo Spettro, riduce la Velocità dell'utilizzatore di 1 stadio e ne aumenta Attacco e Difesa di 1 stadio. Se l'utilizzatore è un tipo Spettro, perde metà dei suoi PS massimi, arrotondati per difetto, anche se ciò lo manda KO; in cambio, il bersaglio perde 1/4 dei suoi PS massimi, arrotondati per difetto, alla fine di ogni turno fintanto che rimane in campo. Se il bersaglio usa Staffetta, il Pokémon che lo sostituisce continuerà a subire questo effetto. Fallisce se il bersaglio non c'è o se è già affetto da Maledizione.", // NEEDS CHECK
		shortDesc: "Maledizione se Spettro, altrimenti -1 Vel +1 Att / Def", // NEEDS CHECK
		gen4: {
			desc: "Se l'utilizzatore non è un tipo Spettro, riduce la Velocità dell'utilizzatore di 1 stadio e ne aumenta Attacco e Difesa di 1 stadio. Se l'utilizzatore è un tipo Spettro, perde metà dei suoi PS massimi, arrotondati per difetto, anche se ciò lo manda KO; in cambio, il bersaglio perde 1/4 dei suoi PS massimi, arrotondati per difetto, alla fine di ogni turno fintanto che rimane in campo. Se il bersaglio usa Staffetta, il Pokémon che lo sostituisce continuerà a subire questo effetto. Fallisce se il bersaglio non c'è, se è già affetto da Maledizione o se ha un Sostituto attivo.", // NEEDS CHECK
		},
		gen2: {
			desc: "Se l'utilizzatore non è un tipo Spettro, riduce la Velocità dell'utilizzatore di 1 stadio e ne aumenta Attacco e Difesa di 1 stadio, a meno che Attacco e Difesa dell'utilizzatore siano già a 6 stadi. Se l'utilizzatore è un tipo Spettro, perde metà dei suoi PS massimi, arrotondati per difetto, anche se ciò lo manda KO; in cambio, il bersaglio perde 1/4 dei suoi PS massimi, arrotondati per difetto, alla fine di ogni turno fintanto che rimane in campo. Se il bersaglio usa Staffetta, il Pokémon che lo sostituisce continuerà a subire questo effetto. Fallisce se il bersaglio è già affetto da Maledizione o se ha un Sostituto attivo.", // NEEDS CHECK
		},

		start: "  {SOURCE} riduce i suoi PS per lanciare una maledizione su {POKEMON}!",
		damage: "  {POKEMON} è colpito dalla maledizione!",
	},
	cut: {
		name: "Taglio",
		shortDesc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
	},
	darkestlariat: {
		name: "Braccioteso",
		// Official flavor text: "Chi la usa attacca il bersaglio mulinando gli arti. Il danno inflitto ignora le modifiche alle statistiche del bersaglio."
		desc: "Ignora le modifiche alle statistiche del bersaglio, inclusa l'elusione.", // NEEDS CHECK
		shortDesc: "Ignora le modifiche alle statistiche del bersaglio.", // NEEDS CHECK
	},
	darkpulse: {
		name: "Neropulsar",
		// Official flavor text: "Chi la usa emana un’aura impregnata di oscuri pensieri. Può anche far tentennare il Pokémon colpito."
		desc: "Possibilità del 20% di far tentennare il bersaglio.", // NEEDS CHECK
		shortDesc: "20% di far tentennare il bersaglio.", // NEEDS CHECK
	},
	darkvoid: {
		name: "Vuototetro",
		// Official flavor text: "Trascina i nemici intorno in un mondo di totale oscurità e li fa addormentare."
		desc: "Causa addormentamento agli avversari. Questa mossa non può essere usata con successo se l'utilizzatore non è Darkrai, considerando anche Trasformazione.", // NEEDS CHECK
		shortDesc: "Darkrai: addormenta gli avversari.", // NEEDS CHECK
		gen6: {
			desc: "Causa addormentamento agli avversari.", // NEEDS CHECK
			shortDesc: "Addormenta gli avversari.", // NEEDS CHECK
		},

		fail: "Ma non ne è capace!",
		failWrongForme: "Ma nella forma attuale non ci riesce!",
	},
	dazzlinggleam: {
		name: "Magibrillio",
		// Official flavor text: "Chi la usa emette una luce potentissima che infligge danni ai nemici intorno."
		desc: "Nessun effetto aggiuntivo.", // NEEDS CHECK
		shortDesc: "Nessun effetto aggiuntivo. Colpisce nemici adiacenti.", // NEEDS CHECK
	},
	decorate: {
		name: "Decorazione",
		// Official flavor text: "Chi la usa agghinda il bersaglio con delle decorazioni aumentandone di molto l’Attacco e l’Attacco Speciale."
		desc: "Aumenta Attacco e Attacco Speciale del bersaglio di 2 stadi.", // NEEDS CHECK
		shortDesc: "Aumenta Att e ASp del bersaglio di 2 stadi.", // NEEDS CHECK
	},
	defendorder: {
		name: "Comandoscudo",
		// Official flavor text: "Chi la usa raduna i suoi sgherri per creare uno scudo, aumentando Difesa e Difesa Speciale."
		desc: "Aumenta Difesa e Difesa Speciale dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		shortDesc: "Aumenta Dif e DSp dell'utilizzatore di 1 stadio.", // NEEDS CHECK
	},
	defensecurl: {
		name: "Ricciolscudo",
		// Official flavor text: "Chi la usa si raggomitola per nascondere i punti deboli e aumentare la propria Difesa."
		desc: "Aumenta la Difesa dell'utilizzatore di 1 stadio. Fintanto che l'utilizzatore resta in campo, la potenza di Palla Gelo e Rotolamento dell'utilizzatore viene raddoppiata (effetto non cumulabile).", // NEEDS CHECK
		shortDesc: "Aumenta la Dif dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		gen2: {
			desc: "Aumenta la Difesa dell'utilizzatore di 1 stadio. Fintanto che l'utilizzatore resta in campo, la potenza di Rotolamento dell'utilizzatore viene raddoppiata (effetto non cumulabile). Staffetta può passare questo effetto a un alleato.", // NEEDS CHECK
		},
		gen1: {
			desc: "Aumenta la Difesa dell'utilizzatore di 1 stadio.", // NEEDS CHECK
		},
	},
	defog: {
		name: "Scacciabruma",
		// Official flavor text: "Chi la usa spazza via barriere come Riflesso e Schermoluce con un forte vento e riduce la capacità d’elusione del bersaglio."
		desc: "Riduce l'elusione del bersaglio di 1 stadio. Se questa mossa ha successo indipendentemente dal calo dell'elusione del bersaglio, gli effetti di Riflesso, Schermoluce, Velaurora, Salvaguardia, Nebbia, Punte, Fielepunte, Levitoroccia e Rete Vischiosa vengono rimossi dal campo del bersaglio, mentre Punte, Fielepunte, Levitoroccia e Rete Vischiosa vengono rimossi dal campo dell'utilizzatore. Questo effetto ignora il Sostituto del bersaglio, anche se Sostituto evita il calo dell'evasione. Se un campo è attivo e questa mossa ha successo, il campo viene rimosso.", // NEEDS CHECK
		shortDesc: "-1 elusione; rimuove tutte le trappole e campi.", // NEEDS CHECK
		gen7: {
			desc: "Riduce l'elusione del bersaglio di 1 stadio. Se questa mossa ha successo indipendentemente dal calo dell'elusione del bersaglio, gli effetti di Riflesso, Schermoluce, Velaurora, Salvaguardia, Nebbia, Punte, Fielepunte, Levitoroccia e Rete Vischiosa vengono rimossi dal campo del bersaglio, mentre Punte, Fielepunte, Levitoroccia e Rete Vischiosa vengono rimossi dal campo dell'utilizzatore. Questo effetto ignora il Sostituto del bersaglio, anche se Sostituto evita il calo dell'evasione.", // NEEDS CHECK
			shortDesc: "-1 elusione; rimuove tutte le trappole.", // NEEDS CHECK
		},
		gen6: {
			desc: "Riduce l'elusione del bersaglio di 1 stadio. Se questa mossa ha successo indipendentemente dal calo dell'elusione del bersaglio, gli effetti di Riflesso, Schermoluce, Salvaguardia, Nebbia, Punte, Fielepunte, Levitoroccia e Rete Vischiosa vengono rimossi dal campo del bersaglio, mentre Punte, Fielepunte, Levitoroccia e Rete Vischiosa vengono rimossi dal campo dell'utilizzatore. Questo effetto ignora il Sostituto del bersaglio, anche se Sostituto evita il calo dell'evasione.", // NEEDS CHECK
		},
		gen5: {
			desc: "Riduce l'elusione del bersaglio di 1 stadio. Se questa mossa ha successo indipendentemente dal calo dell'elusione del bersaglio, gli effetti di Riflesso, Schermoluce, Salvaguardia, Nebbia, Punte, Fielepunte, Levitoroccia e Rete Vischiosa vengono rimossi dal campo del bersaglio. Questo effetto ignora il Sostituto del bersaglio, anche se Sostituto evita il calo dell'evasione.", // NEEDS CHECK
			shortDesc: "-1 evasione; rimuove trappole/schermi dal bersaglio.", // NEEDS CHECK
		},
	},
	destinybond: {
		name: "Destinobbligato",
		// Official flavor text: "Se chi la usa va KO a causa di un attacco, chi ha sferrato il colpo da KO fa la stessa fine. Se usata in successione fallisce."
		desc: "Se l'attacco di un Pokémon avversario colpisce l'utilizzatore e lo manda KO prima che l'utilizzatore possa usare la sua prossima mossa, anche quell'avversario viene mandato KO, a meno che l'utilizzatore non venga mandato KO con Divinazione o Obbliderio. Fallisce se l'utilizzatore ha usato questa mossa con successo come ultima mossa, escludendo l'effetto di Sincrodanza", // NEEDS CHECK
		shortDesc: "Se mandato KO, porta con sé chi l'ha colpito.", // NEEDS CHECK
		gen6: {
			desc: "Se l'attacco di un Pokémon avversario colpisce l'utilizzatore e lo manda KO prima che l'utilizzatore possa usare la sua prossima mossa, anche quell'avversario viene mandato KO, a meno che l'utilizzatore non venga mandato KO con Divinazione o Obbliderio.", // NEEDS CHECK
		},
		gen2: {
			desc: "Se l'attacco di un Pokémon avversario colpisce l'utilizzatore e lo manda KO prima che l'utilizzatore possa usare la sua prossima mossa, anche quell'avversario viene mandato KO", // NEEDS CHECK
		},

		start: "  {POKEMON} tenta di far subire a chi lo manda KO la sua stessa sorte!",
		activate: "{POKEMON} trascina con sé il Pokémon che lo ha attaccato!",
	},
	detect: {
		name: "Individua",
		// Official flavor text: "Permette di eludere tutti gli attacchi. Se usata in successione può fallire."
		desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e triplica ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Agodifesa, Anticipo, Bodyguard, Dynabarriera, Egida Ignea, Fortino, Individua, Protezione, Resistenza, Sbarramento, Scudo Reale, Telatrappola o se è stata una delle mosse menzionate e l'avversario ha rotto la protezione. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		shortDesc: "Protegge dalle mosse per questo turno.", // NEEDS CHECK
		gen8: {
			desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e triplica ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Agodifesa, Anticipo, Bodyguard, Dynabarriera, Fortino, Individua, Protezione, Resistenza, Sbarramento, Scudo Reale o se è stata una delle mosse menzionate e l'avversario ha rotto la protezione. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		},
		gen7: {
			desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e triplica ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Agodifesa, Anticipo, Bodyguard, Fortino, Individua, Protezione, Resistenza, Scudo Reale o se è stata una delle mosse menzionate e l'avversario ha rotto la protezione. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		},
		gen6: {
			desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e triplica ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Agodifesa, Anticipo, Bodyguard, Individua, Protezione, Resistenza, Scudo Reale o se è stata una delle mosse menzionate e l'avversario ha rotto la protezione. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		},
		gen5: {
			desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e raddoppia ogni volta che la mossa viene usata. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Anticipo, Bodyguard, Individua, Protezione o Resistenza. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		},
		gen4: {
			desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno. Questa mossa ha 1/X probabilità di avere successo, dove X comincia con valore 1 e raddoppia ogni volta che la mossa viene usata fino a un massimo di 8. X ritorna a 1 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Individua, Protezione o Resistenza. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		},
		gen3: {
			desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno. Questa mossa ha X/65536 probabilità di avere successo, dove X comincia con valore 65535 e si dimezza, arrotondando per difetto, ogni volta che la mossa viene usata. Dopo il quarto uso consecutivo, X cala a 118 e continua con valori apparentemente casuali da 0 a 65535 per gli usi successivi. X ritorna a 65535 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Individua, Protezione o Resistenza. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		},
		gen2: {
			desc: "L'utilizzatore è protetto dalla maggior parte degli attacchi scagliati da altri Pokémon durante questo turno. Questa mossa ha X/255 probabilità di avere successo, dove X comincia con valore 255 e si dimezza, arrotondando per difetto, ogni volta che la mossa viene usata. X ritorna a 255 se la mossa fallisce o l'ultima mossa usata dall'utilizzatore non è stata Individua, Protezione o Resistenza. Fallisce se l'utilizzatore si muove per ultimo durante questo turno.", // NEEDS CHECK
		},
	},
	devastatingdrake: {
		name: "Dragoschianto Finale",
		shortDesc: null, // NEEDS TRANSLATION
	},
	diamondstorm: {
		name: "Diamantempesta",
		// Official flavor text: "Colpisce i nemici che ha intorno con una tempesta di diamanti. Può anche aumentare di molto la Difesa di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	dig: {
		name: "Fossa",
		// Official flavor text: "Chi la usa scava al primo turno e attacca al successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} si nasconde sottoterra!",
	},
	direclaw: {
		name: "Artigli Fatali",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	disable: {
		name: "Inibitore",
		// Official flavor text: "Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  La mossa {MOVE} di {POKEMON} è stata bloccata!",
		end: "  La mossa di {POKEMON} non è più bloccata!",
		cant: "La mossa {MOVE} di {POKEMON} è bloccata!",
	},
	disarmingvoice: {
		name: "Incantavoce",
		// Official flavor text: "Chi la usa infligge un danno spirituale ai nemici nei paraggi con una voce suadente. L’attacco andrà immancabilmente a segno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	discharge: {
		name: "Scarica",
		// Official flavor text: "Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dive: {
		name: "Sub",
		// Official flavor text: "Chi la usa si tuffa in acqua per emergere e attaccare al turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} sparisce sott’acqua!",
	},
	dizzypunch: {
		name: "Stordipugno",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	doodle: {
		name: "Ricalco",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	doomdesire: {
		name: "Obbliderio",
		// Official flavor text: "Intenso fascio di luce che colpisce il bersaglio dopo due turni dall’uso della mossa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} ipoteca il futuro con Desiderio Fatale!",
		activate: "  {TARGET} subisce Desiderio Fatale!",
	},
	doubleedge: {
		name: "Sdoppiatore",
		// Official flavor text: "Carica spietata e pericolosa che danneggia molto anche chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doublehit: {
		name: "Doppiosmash",
		// Official flavor text: "Chi la usa colpisce il bersaglio due volte di fila con la coda, una liana o simili."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doubleironbash: {
		name: "Pugni Corazzati",
		// Official flavor text: "Chi la usa attacca il bersaglio due volte ruotando su se stesso e colpendolo con le braccia. Può anche farlo tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	doublekick: {
		name: "Doppiocalcio",
		// Official flavor text: "Colpisce il bersaglio due volte con una raffica di calci inferti con entrambi i piedi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doubleshock: {
		name: "Doppiolampo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		typeChange: "  {POKEMON} ha usato tutta la sua elettricità!",
	},
	doubleslap: {
		name: "Doppiasberla",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	doubleteam: {
		name: "Doppioteam",
		// Official flavor text: "Chi la usa si muove in fretta e crea copie illusorie di se stesso che aumentano la capacità di elusione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dracometeor: {
		name: "Dragobolide",
		// Official flavor text: "Attacca con meteore che cadono dal cielo. Il contraccolpo fa calare di molto l’Attacco Speciale di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragonascent: {
		name: "Ascesa del Drago",
		// Official flavor text: "Permette di proiettarsi in aria e fiondarsi sul bersaglio attaccando ad altissima velocità. Riduce la Difesa e la Difesa Speciale di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		megaNoItem: "  L’accorata preghiera di {TRAINER} giunge {POKEMON:a}!",
	},
	dragonbreath: {
		name: "Dragospiro",
		// Official flavor text: "Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragoncheer: {
		name: "Grido del Drago",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "#focusenergy",
	},
	dragonclaw: {
		name: "Dragartigli",
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragondance: {
		name: "Dragodanza",
		// Official flavor text: "Danza mistica e vigorosa che aumenta l’Attacco e la Velocità di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragondarts: {
		name: "Dragofrecce",
		// Official flavor text: "Chi la usa attacca due volte sparando Dreepy. Quando sono presenti due bersagli, vengono colpiti entrambi una sola volta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragonenergy: {
		name: "Dragoenergia",
		// Official flavor text: "Il Pokémon attacca i nemici convertendo la propria forza vitale in energia. La potenza della mossa cala man mano che i PS diminuiscono."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragonhammer: {
		name: "Marteldrago",
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragonpulse: {
		name: "Dragopulsar",
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragonrage: {
		name: "Ira di Drago",
		shortDesc: null, // NEEDS TRANSLATION
	},
	dragonrush: {
		name: "Dragofuria",
		// Official flavor text: "Chi la usa attacca con fare minaccioso e in questo modo può anche far tentennare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	dragontail: {
		name: "Codadrago",
		// Official flavor text: "Chi la usa fa volar via il bersaglio in modo che venga sostituito. Se il bersaglio è un singolo Pokémon selvatico, la lotta finisce."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	drainingkiss: {
		name: "Assorbibacio",
		// Official flavor text: "Chi la usa assorbe energia dal bersaglio con un bacio, recuperando così PS in quantità pari a più della metà del danno inferto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	drainpunch: {
		name: "Assorbipugno",
		// Official flavor text: "Pugno che assorbe energia. Fa recuperare una quantità di PS pari alla metà del danno inferto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	dreameater: {
		name: "Mangiasogni",
		// Official flavor text: "Attacco che funziona solo su un bersaglio che dorme. Chi lo usa riceve metà dei PS persi dal Pokémon colpito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	drillpeck: {
		name: "Perforbecco",
		shortDesc: null, // NEEDS TRANSLATION
	},
	drillrun: {
		name: "Giravvita",
		// Official flavor text: "Chi la usa si scaglia sul bersaglio ruotando su se stesso come un trapano perforante. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	drumbeating: {
		name: "Tamburattacco",
		// Official flavor text: "Chi la usa percuote il proprio tamburo per controllarne le radici e attaccare il bersaglio, riducendone la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dualchop: {
		name: "Doppiocolpo",
		// Official flavor text: "Chi la usa attacca due volte il bersaglio con dei colpi estremamente forti."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dualwingbeat: {
		name: "Doppia Ala",
		// Official flavor text: "Chi la usa colpisce il bersaglio due volte di fila urtandolo con le ali."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	dynamaxcannon: {
		name: "Cannone Dynamax",
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	dynamicpunch: {
		name: "Dinamipugno",
		// Official flavor text: "Colpisce il bersaglio con un pugno davvero forte. Se va a segno, lo confonde."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	earthpower: {
		name: "Geoforza",
		// Official flavor text: "Dal terreno sotto il bersaglio si sprigiona una forza devastante. Può anche ridurne la Difesa Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	earthquake: {
		name: "Terremoto",
		// Official flavor text: "Chi la usa provoca un potente sisma che colpisce i Pokémon che ha intorno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	echoedvoice: {
		name: "Echeggiavoce",
		// Official flavor text: "Attacca il bersaglio con la propria voce echeggiante. Se usata a ripetizione da uno o più Pokémon il danno aumenta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	eerieimpulse: {
		name: "Elettromistero",
		// Official flavor text: "Il corpo di chi la usa emette onde anomale che investono il bersaglio, riducendone di molto l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	eeriespell: {
		name: "Inquietantesimo",
		// Official flavor text: "Il Pokémon attacca con i suoi potenti poteri psichici. Sottrae tre PP all’ultima mossa usata dal nemico."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "#spite",
	},
	eggbomb: {
		name: "Uovobomba",
		shortDesc: null, // NEEDS TRANSLATION
	},
	electricterrain: {
		name: "Campo Elettrico",
		// Official flavor text: "Per cinque turni il terreno entra nello stato di Campo Elettrico: i Pokémon a terra non si addormentano e la potenza delle mosse di tipo Elettro aumenta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	electrify: {
		name: "Elettrocontagio",
		// Official flavor text: "Se si contagia il bersaglio prima che usi la sua mossa, per quel turno questa sarà di tipo Elettro."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  La prossima mossa di {POKEMON} diventa di tipo Elettro a causa di Elettrocontagio!",
	},
	electroball: {
		name: "Energisfera",
		// Official flavor text: "Chi la usa attacca con una sfera d’energia elettrica. Più è rapido rispetto al bersaglio, più danni arreca."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	electrodrift: {
		name: "Fulmiscatto",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	electroshot: {
		name: "Elettroraggio",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		prepare: "{POKEMON} assorbe elettricità!",
	},
	electroweb: {
		name: "Elettrotela",
		// Official flavor text: "Chi la usa attacca i nemici intorno a sé catturandoli con una ragnatela elettrica e riducendone la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	embargo: {
		name: "Divieto",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} non può usare strumenti!",
		end: "  {POKEMON} può di nuovo usare strumenti!",
	},
	ember: {
		name: "Braciere",
		// Official flavor text: "Il bersaglio viene colpito da fiammelle che possono anche scottarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	encore: {
		name: "Ripeti",
		// Official flavor text: "Chi la usa obbliga il bersaglio a ripetere per tre turni l’ultima mossa eseguita."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è colpito da Ripeti!",
		end: "  L’effetto di Ripeti su {POKEMON} è terminato!",
	},
	endeavor: {
		name: "Rimonta",
		// Official flavor text: "Attacco che riduce i PS del bersaglio a una quantità pari ai PS di chi lo usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	endure: {
		name: "Resistenza",
		// Official flavor text: "Chi la usa resta con un PS anche se subisce un colpo da KO in quel turno. Usata in successione può fallire."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} si prepara a ricevere il colpo!",
		activate: "  {POKEMON} sopporta il colpo!",
	},
	energyball: {
		name: "Energipalla",
		// Official flavor text: "Chi la usa attinge energia dalla natura e la scaglia contro il bersaglio. Può anche ridurne la Difesa Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	entrainment: {
		name: "Saltamicizia",
		// Official flavor text: "Chi la usa saltella con un buffo ritmo, inducendo il bersaglio a imitarlo e rendendo la sua abilità identica alla propria."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	eruption: {
		name: "Eruzione",
		// Official flavor text: "Attacco impetuoso ed esplosivo la cui potenza è proporzionale ai PS di chi lo usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	esperwing: {
		name: "Ali d’Aura",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	eternabeam: {
		name: "Raggio Infinito",
		// Official flavor text: "È l’attacco più potente di Eternatus quando assume la sua forma originale. Nel turno successivo non può agire."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	expandingforce: {
		name: "Vastenergia",
		// Official flavor text: "Chi la usa attacca il bersaglio con energia psichica. Se utilizzata quando è attivo un Campo Psichico, la mossa aumenta di potenza e danneggia tutti i nemici."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	explosion: {
		name: "Esplosione",
		// Official flavor text: "Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	extrasensory: {
		name: "Extrasenso",
		// Official flavor text: "Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	extremeevoboost: {
		name: "Potenziamento Eevolutivo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	extremespeed: {
		name: "Extrarapido",
		// Official flavor text: "Chi la usa carica il bersaglio a una velocità impressionante. Questa mossa ha priorità alta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	facade: {
		name: "Facciata",
		// Official flavor text: "Mossa d’attacco che raddoppia la potenza se chi la usa è scottato, avvelenato o paralizzato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	fairylock: {
		name: "Blocco Fatato",
		// Official flavor text: "Impone un blocco al terreno di lotta che nel turno successivo impedisce a tutti i Pokémon di fuggire."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Nel prossimo turno sarà impossibile scappare!",
	},
	fairywind: {
		name: "Vento di Fata",
		shortDesc: null, // NEEDS TRANSLATION
	},
	fakeout: {
		name: "Bruciapelo",
		// Official flavor text: "Mossa ad alta priorità che fa tentennare il bersaglio. Funziona solo appena scesi in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	faketears: {
		name: "Falselacrime",
		// Official flavor text: "Chi la usa inscena un pianto teatrale per commuovere il bersaglio. Ne riduce di molto la Difesa Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	falsesurrender: {
		name: "Supplicolpo",
		shortDesc: null, // NEEDS TRANSLATION
	},
	falseswipe: {
		name: "Falsofinale",
		// Official flavor text: "Chi la usa trattiene il colpo per impedire al bersaglio di andare KO, lasciandolo con almeno un PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	featherdance: {
		name: "Danzadipiume",
		// Official flavor text: "Chi la usa circonda il bersaglio con un turbinio di piume riducendo di molto il suo Attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	feint: {
		name: "Fintoattacco",
		// Official flavor text: "Colpisce anche un bersaglio che ha usato mosse come Protezione e Individua, annullandone gli effetti."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  Fintoattacco inganna {TARGET}!",
	},
	feintattack: {
		name: "Finta",
		shortDesc: null, // NEEDS TRANSLATION
	},
	fellstinger: {
		name: "Pungiglione",
		// Official flavor text: "L’Attacco di chi la usa aumenta moltissimo se grazie alla mossa il bersaglio va KO."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	ficklebeam: {
		name: "Irregolaser",
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  {POKEMON} fa sul serio!",
	},
	fierydance: {
		name: "Voldifuoco",
		// Official flavor text: "Chi la usa viene avvolto da fiamme che scaglia contro il bersaglio, sbattendo le ali. Può anche aumentare l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	fierywrath: {
		name: "Furia Ardente",
		// Official flavor text: "Il Pokémon attacca trasformando la sua rabbia in un’aura simile a fiamme. Può anche far tentennare i nemici."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	filletaway: {
		name: "Alleggerimento",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	finalgambit: {
		name: "Azzardo",
		// Official flavor text: "Chi la usa attacca con tutta la potenza di cui dispone e va KO, ma infligge al bersaglio un danno pari ai PS che ha perso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	fireblast: {
		name: "Fuocobomba",
		// Official flavor text: "Investe il bersaglio con un’intensa fiammata che fa terra bruciata. Può anche scottarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	firefang: {
		name: "Rogodenti",
		// Official flavor text: "Chi la usa morde con denti infuocati. Può anche scottare o far tentennare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	firelash: {
		name: "Frusta di Fuoco",
		// Official flavor text: "Colpisce il bersaglio con una frusta infuocata e ne riduce la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	firepledge: {
		name: "Fiammapatto",
		// Official flavor text: "Attacca il bersaglio con una colonna di fuoco. Se usata con Erbapatto, gli effetti aumentano e il campo diventa un mare di fuoco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "#waterpledge",
		start: "  {TEAM:capitalize} è circondata dalle fiamme!",
		end: "  {TEAM:capitalize} non è più circondata dalle fiamme!",
		damage: "  {POKEMON} è ferito da un mare di fiamme!",
	},
	firepunch: {
		name: "Fuocopugno",
		// Official flavor text: "Colpisce il bersaglio con un pugno ardente che può scottarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	firespin: {
		name: "Turbofuoco",
		// Official flavor text: "Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è intrappolato in un turbine di fuoco!",
		move: "#wrap",
	},
	firstimpression: {
		name: "Schermaglia",
		// Official flavor text: "È una mossa molto potente, ma funziona solo appena scesi in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	fishiousrend: {
		name: "Branchiomorso",
		// Official flavor text: "Chi la usa morde il bersaglio con le dure branchie. Se attacca per primo, la potenza della mossa raddoppia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	fissure: {
		name: "Abisso",
		// Official flavor text: "Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flail: {
		name: "Flagello",
		// Official flavor text: "Chi la usa si dimena per attaccare. È più efficace se i suoi PS sono bassi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	flameburst: {
		name: "Pirolancio",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "  Le fiamme raggiungono anche {POKEMON}!",
	},
	flamecharge: {
		name: "Nitrocarica",
		// Official flavor text: "Chi la usa si copre di fuoco e attacca il bersaglio. Concentrandosi aumenta, inoltre, la propria Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	flamethrower: {
		name: "Lanciafiamme",
		// Official flavor text: "Il bersaglio viene colpito da intense fiammate che possono anche scottarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	flamewheel: {
		name: "Ruotafuoco",
		// Official flavor text: "Chi la usa si copre di fuoco e carica il bersaglio. Può anche scottarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	flareblitz: {
		name: "Fuococarica",
		// Official flavor text: "Chi la usa si ricopre di fuoco e carica il bersaglio, ma subisce il contraccolpo. Può anche scottare il Pokémon colpito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	flash: {
		name: "Flash",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	flashcannon: {
		name: "Cannonflash",
		// Official flavor text: "Chi la usa attacca raccogliendo e rilasciando energia luminosa. Può ridurre la Difesa Speciale del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	flatter: {
		name: "Adulazione",
		// Official flavor text: "Adula il bersaglio e lo confonde, ma ne aumenta l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	fleurcannon: {
		name: "Cannonfiore",
		// Official flavor text: "Colpisce il bersaglio con un potente raggio, ma riduce di molto l’Attacco Speciale di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	fling: {
		name: "Lancio",
		// Official flavor text: "Chi la usa lancia il suo strumento addosso al bersaglio. La forza e l’effetto dipendono dallo strumento."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "  {POKEMON} lancia {ITEM:definite:classified}!",
	},
	flipturn: {
		name: "Virata",
		// Official flavor text: "Chi usa questa mossa fa marcia indietro per farsi sostituire dopo aver sferrato l’attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		switchOut: "#uturn",
	},
	floatyfall: {
		name: "Piombaflap",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	floralhealing: {
		name: "Cura Floreale",
		// Official flavor text: "Fa recuperare metà dei PS massimi al bersaglio. È più efficace quando il terreno di lotta è nello stato di Campo Erboso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	flowershield: {
		name: "Fiordifesa",
		// Official flavor text: "Grazie a un misterioso potere, aumenta la Difesa di tutti i Pokémon di tipo Erba presenti in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	flowertrick: {
		name: "Prestigiafiore",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	fly: {
		name: "Volo",
		// Official flavor text: "Chi la usa si alza in volo per attaccare al turno seguente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} vola in alto!",
	},
	flyingpress: {
		name: "Schiacciatuffo",
		// Official flavor text: "Chi la usa si tuffa sul bersaglio dall’alto. È una mossa di tipo Lotta e Volante allo stesso tempo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	focusblast: {
		name: "Focalcolpo",
		// Official flavor text: "Chi la usa si concentra e rilascia la sua forza. Può ridurre la Difesa Speciale del Pokémon colpito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	focusenergy: {
		name: "Focalenergia",
		// Official flavor text: "Chi la usa fa un profondo respiro e si concentra per rendere più probabili i brutti colpi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} si prepara alla lotta!",
		startFromItem: "  La probabilità di sferrare brutti colpi di {POKEMON} aumenta grazie {ITEM:a:definite:classified}!",
		startFromZEffect: "  Grazie al Potere Z, {POKEMON} ha più probabilità di mandare a segno un brutto colpo!",
	},
	focuspunch: {
		name: "Centripugno",
		// Official flavor text: "Chi la usa prende la mira prima di sferrare un pugno. Fallirà se verrà colpito prima di eseguire la mossa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} si concentra al massimo!",
		cant: "{POKEMON} perde la concentrazione e non può agire!",
	},
	followme: {
		name: "Sonoqui",
		// Official flavor text: "Chi la usa attira l’attenzione su di sé, costringendo i nemici a sceglierlo sempre come bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è al centro dell’attenzione!",
		startFromZEffect: "  {POKEMON} è al centro dell’attenzione!",
	},
	forcepalm: {
		name: "Palmoforza",
		// Official flavor text: "Chi la usa attacca con un’onda d’urto che può anche paralizzare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	foresight: {
		name: "Preveggenza",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è stato identificato!",
	},
	forestscurse: {
		name: "Boscomalocchio",
		// Official flavor text: "Chi la usa invoca la maledizione del bosco sul bersaglio, che acquisisce così anche il tipo Erba."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	foulplay: {
		name: "Ripicca",
		// Official flavor text: "Chi la usa sfrutta la forza del bersaglio. Il danno inflitto è proporzionale all’Attacco del nemico."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	freezedry: {
		name: "Liofilizzazione",
		// Official flavor text: "Chi la usa raffredda istantaneamente il bersaglio e può congelarlo. Risulta superefficace contro i Pokémon di tipo Acqua."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	freezeshock: {
		name: "Elettrogelo",
		// Official flavor text: "Chi la usa lancia contro il bersaglio al turno successivo una sfera di ghiaccio ricoperta di elettricità. Può anche paralizzarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		prepare: "  {POKEMON} è avvolto da una luce fredda!",
	},
	freezingglare: {
		name: "Sguardo Gelido",
		// Official flavor text: "Il Pokémon attacca rilasciando energia psichica dagli occhi. Può congelare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	freezyfrost: {
		name: "Scricchiagelo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	frenzyplant: {
		name: "Radicalbero",
		// Official flavor text: "Un groviglio di radici colpisce il bersaglio. Chi la usa salta il turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	frostbreath: {
		name: "Alitogelido",
		// Official flavor text: "Chi la usa attacca il bersaglio con un soffio d’aria gelida. Brutto colpo assicurato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	frustration: {
		name: "Frustrazione",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	furyattack: {
		name: "Furia",
		// Official flavor text: "Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	furycutter: {
		name: "Tagliofuria",
		// Official flavor text: "Colpisce il bersaglio con falci o artigli. Se usata in successione aumenta di potenza ogni volta che va a segno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	furyswipes: {
		name: "Sfuriate",
		// Official flavor text: "Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	fusionbolt: {
		name: "Incrotuono",
		// Official flavor text: "Chi la usa lancia un fulmine enorme. Se usata in combinazione con Incrofiamma, il danno provocato dalla mossa aumenta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	fusionflare: {
		name: "Incrofiamma",
		// Official flavor text: "Chi la usa lancia una fiammata enorme. Se usata in combinazione con Incrotuono, il danno provocato dalla mossa aumenta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	futuresight: {
		name: "Divinazione",
		// Official flavor text: "Due turni dopo l’utilizzo di questa mossa, il bersaglio viene attaccato con energia psichica."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} presagisce l’attacco imminente!",
		activate: "  {TARGET} subisce Divinazione!",
	},
	gastroacid: {
		name: "Gastroacido",
		// Official flavor text: "Chi la usa lancia acidi gastrici sul bersaglio. Il fluido annulla l’abilità del Pokémon colpito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  L’abilità di {POKEMON} perde ogni efficacia!",
	},
	geargrind: {
		name: "Ingracolpo",
		// Official flavor text: "Chi la usa colpisce il bersaglio due volte di fila lanciandogli contro degli ingranaggi d’acciaio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gearup: {
		name: "Marciainpiù",
		// Official flavor text: "Dà una marcia in più agli alleati con le abilità Meno o Più aumentandone l’Attacco e l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	genesissupernova: {
		name: "Supernova delle Origini",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	geomancy: {
		name: "Geocontrollo",
		// Official flavor text: "Chi la usa assorbe energia nel primo turno per aumentare poi notevolmente l’Attacco Speciale, la Difesa Speciale e la Velocità in quello seguente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		prepare: "{POKEMON} accumula energia!",
	},
	gigadrain: {
		name: "Gigassorbimento",
		// Official flavor text: "Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	gigaimpact: {
		name: "Gigaimpatto",
		// Official flavor text: "Chi la usa carica il bersaglio usando tutta la sua forza, ma al turno successivo deve riposarsi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gigatonhammer: {
		name: "Granmartello",
		shortDesc: null, // NEEDS TRANSLATION
	},
	gigavolthavoc: {
		name: "Gigascarica Folgorante",
		shortDesc: null, // NEEDS TRANSLATION
	},
	glaciallance: {
		name: "Lancia Glaciale",
		// Official flavor text: "Il Pokémon attacca i nemici scagliando una lancia di ghiaccio accompagnata da una tormenta di neve."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	glaciate: {
		name: "Gelamondo",
		// Official flavor text: "Chi la usa attacca i nemici intorno con una folata d’aria gelida e ne riduce anche la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	glaiverush: {
		name: "Spadoncarica",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	glare: {
		name: "Sguardo Feroce",
		// Official flavor text: "Chi la usa spaventa il bersaglio con uno sguardo terrificante e ne causa la paralisi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	glitzyglow: {
		name: "Auraswoosh",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxbefuddle: {
		name: "Gigastupore",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxcannonade: {
		name: "Gigacannonata",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {PARTY:capitalize} sono travolti dalla corrente impetuosa.",
		damage: "  {POKEMON} è travolto dall’impetuosa corrente di Gigacannonata!",
	},
	gmaxcentiferno: {
		name: "Gigamillefiamme",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxchistrike: {
		name: "Gigapugnointuito",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "#focusenergy",
	},
	gmaxcuddle: {
		name: "Gigabbraccio",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxdepletion: {
		name: "Gigalogoramento",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  I PP di {TARGET} sono diminuiti!",
	},
	gmaxdrumsolo: {
		name: "Gigarullio",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxfinale: {
		name: "Gigagranfinale",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxfireball: {
		name: "Gigafiammopalla",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxfoamburst: {
		name: "Gigaschiuma",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxgoldrush: {
		name: "Gigamonete",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxgravitas: {
		name: "Gigagravitoforza",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxhydrosnipe: {
		name: "Gigasparomirato",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxmalodor: {
		name: "Gigafetore",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxmeltdown: {
		name: "Gigaliquefazione",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxoneblow: {
		name: "Gigasingolcolpo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxrapidflow: {
		name: "Gigapluricolpo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxreplenish: {
		name: "Gigarinnovamento",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxresonance: {
		name: "Gigamelodia",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsandblast: {
		name: "Gigavortisabbia",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsmite: {
		name: "Gigacastigo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsnooze: {
		name: "Gigatorpore",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsteelsurge: {
		name: "Gigaferroaculei",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  Schegge di metallo affilate sospese in aria circondano {PARTY}!",
		end: "  Non ci sono più schegge di metallo intorno a {PARTY}!",
		damage: "  Schegge di metallo affilato colpiscono {POKEMON}!",
	},
	gmaxstonesurge: {
		name: "Gigarocciagetto",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxstunshock: {
		name: "Gigatoxiscossa",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxsweetness: {
		name: "Gigambrosia",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxtartness: {
		name: "Gigattaccoacido",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxterror: {
		name: "Gigaillusione",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxvinelash: {
		name: "Gigasferzata",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {PARTY:capitalize} sono avvolti da liane sferzanti!",
		damage: "  {POKEMON} è ferito dalle violente frustate di Gigasferzata!",
	},
	gmaxvolcalith: {
		name: "Gigalapilli",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {PARTY:capitalize} sono circondati da rocce!",
		damage: "  {POKEMON} è ferito da pietre scagliate da Gigalapilli!",
	},
	gmaxvoltcrash: {
		name: "Gigapikafolgori",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gmaxwildfire: {
		name: "Gigavampa",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {PARTY:capitalize} sono avvolti dalle fiamme!",
		damage: "  {POKEMON} è avvolto dalle fiamme prodotte da Gigavampa!",
	},
	gmaxwindrage: {
		name: "Gigaciclone",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	grassknot: {
		name: "Laccioerboso",
		// Official flavor text: "Chi la usa intrappola il bersaglio con l’erba e lo fa cadere. Danneggia maggiormente i Pokémon più pesanti."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	grasspledge: {
		name: "Erbapatto",
		// Official flavor text: "Attacca il bersaglio con una colonna d’erba. Se usata con Acquapatto, gli effetti aumentano e il campo diventa una palude."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "#waterpledge",
		start: "  {TEAM:capitalize} è circondata da una palude!",
		end: "  {TEAM:capitalize} non è più circondata dalla palude!",
	},
	grasswhistle: {
		name: "Meloderba",
		shortDesc: null, // NEEDS TRANSLATION
	},
	grassyglide: {
		name: "Erboscivolata",
		// Official flavor text: "Chi la usa attacca il bersaglio scivolando sul terreno. Se utilizzata quando è attivo un Campo Erboso, ha priorità alta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	grassyterrain: {
		name: "Campo Erboso",
		// Official flavor text: "Per cinque turni il terreno entra nello stato di Campo Erboso: i Pokémon a terra recuperano PS a ogni turno e la potenza delle mosse di tipo Erba aumenta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	gravapple: {
		name: "Forza G",
		// Official flavor text: "Chi la usa fa cadere una mela sul bersaglio da una grande altezza, infliggendogli danni e riducendone la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gravity: {
		name: "Gravità",
		// Official flavor text: "Per cinque turni rende vulnerabili alle mosse di tipo Terra i Pokémon con Levitazione o di tipo Volante. Non è possibile usare mosse che fanno volare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	growl: {
		name: "Ruggito",
		// Official flavor text: "Distrae i nemici intorno con un tenero ruggito e ne riduce l’Attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	growth: {
		name: "Crescita",
		// Official flavor text: "Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	grudge: {
		name: "Rancore",
		// Official flavor text: "Se chi la usa va KO, i PP della mossa nemica che lo ha messo fuori gioco si azzerano."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  La mossa {MOVE} di {POKEMON} perde tutti i PP a causa del rancore!",
		start: "{POKEMON} avvolge l’avversario in un’aura di rancore!",
	},
	guardianofalola: {
		name: "Collera del Guardiano",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	guardsplit: {
		name: "Paridifesa",
		// Official flavor text: "Chi la usa sfrutta la sua forza psichica per sommare Difesa e Difesa Speciale a quelle del bersaglio e dividerle equamente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  {POKEMON} somma le sue capacità difensive con quelle del bersaglio e le ripartisce equamente!",
	},
	guardswap: {
		name: "Barattoscudo",
		// Official flavor text: "Chi la usa sfrutta la sua forza psichica per scambiare le modifiche a Difesa e Difesa Speciale con il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	guillotine: {
		name: "Ghigliottina",
		// Official flavor text: "Attacca il bersaglio con pericolose tenaglie. Se l’attacco va a segno, il Pokémon colpito va subito KO."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	gunkshot: {
		name: "Sporcolancio",
		// Official flavor text: "Chi la usa attacca il bersaglio con rifiuti sudici che possono anche avvelenarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	gust: {
		name: "Raffica",
		// Official flavor text: "Infligge danni al bersaglio con una folata di vento sollevata dalle ali."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	gyroball: {
		name: "Vortexpalla",
		// Official flavor text: "Chi la usa si scaglia sul bersaglio facendo ruotare vorticosamente il proprio corpo. Più lento è chi la usa, maggiore è il danno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hail: {
		name: "Grandine",
		// Official flavor text: "Chi la usa causa una grandinata che dura cinque turni. Danneggia tutti i Pokémon tranne quelli di tipo Ghiaccio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hammerarm: {
		name: "Martelpugno",
		// Official flavor text: "Infligge danni al bersaglio colpendolo con un pugno molto potente. Riduce la Velocità di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	happyhour: {
		name: "Cuccagna",
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  Una sensazione di euforia si diffonde nell’aria!",
	},
	harden: {
		name: "Rafforzatore",
		// Official flavor text: "Tutti i muscoli del corpo si tonificano per aumentare la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hardpress: {
		name: "Pressa d’Acciaio",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	haze: {
		name: "Nube",
		// Official flavor text: "Chi la usa crea una nube nera che annulla ogni modifica alle statistiche di tutti i Pokémon in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		// Only used in Gen 1
		activate: "  Eliminato ogni cambio di STATO!",
	},
	headbutt: {
		name: "Bottintesta",
		// Official flavor text: "Chi la usa si lancia diritto di testa contro il bersaglio. Può anche farlo tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	headcharge: {
		name: "Ricciolata",
		// Official flavor text: "Chi la usa carica il bersaglio con la testa in stile afro, ma subisce un po’ di danni per il contraccolpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	headlongrush: {
		name: "Scontro Frontale",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	headsmash: {
		name: "Zuccata",
		// Official flavor text: "Chi la usa attacca con tutta la potenza di cui dispone, ma subisce danni considerevoli."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	healbell: {
		name: "Rintoccasana",
		// Official flavor text: "Chi la usa produce uno scampanellio che cura i problemi di stato suoi e dei Pokémon alleati."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Si sente suonare una campanella!",
	},
	healblock: {
		name: "Anticura",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			end: "  {POKEMON} può nuovamente curarsi!",
			cant: "{POKEMON} non può usare {MOVE} a causa di Anticura!",
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} non può curarsi!",
		end: "  {POKEMON} può nuovamente curarsi!",
		cant: "{POKEMON} non può usare {MOVE} perché gli effetti curativi sono disabilitati!",
		fail: "  Ma fallisce su {POKEMON}!",
	},
	healingwish: {
		name: "Curardore",
		// Official flavor text: "Chi la usa va KO, ma il Pokémon che lo sostituisce recupera tutti i PS e guarisce dai problemi di stato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "  {POKEMON} riceve i benefici effetti di Curardore!",
	},
	healorder: {
		name: "Comandocura",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	healpulse: {
		name: "Ondasana",
		// Official flavor text: "Chi la usa lancia un’onda rilassante che fa recuperare al bersaglio metà dei suoi PS massimi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	heartstamp: {
		name: "Cuorestampo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	heartswap: {
		name: "Cuorbaratto",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	heatcrash: {
		name: "Marchiafuoco",
		// Official flavor text: "Chi la usa carica con il suo corpo rovente. Più è pesante rispetto al bersaglio, più danni causa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	heatwave: {
		name: "Ondacalda",
		// Official flavor text: "Chi la usa investe i nemici che ha intorno con una folata di vento caldo. Può anche scottarli."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	heavyslam: {
		name: "Pesobomba",
		// Official flavor text: "Chi la usa si lancia contro il bersaglio con tutto il proprio peso. Più è pesante rispetto ad esso, più danni causa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	helpinghand: {
		name: "Altruismo",
		// Official flavor text: "Mossa che aumenta la potenza dell’attacco di un alleato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {SOURCE} è pronto ad aiutare {POKEMON}!",
	},
	hex: {
		name: "Sciagura",
		// Official flavor text: "Attacco che causa un danno enorme se il bersaglio ha problemi di stato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hiddenpower: {
		name: "Introforza",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hiddenpowerbug: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerdark: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerdragon: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerelectric: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerfighting: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerfire: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerflying: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerghost: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowergrass: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerground: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerice: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerpoison: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerpsychic: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerrock: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowersteel: {
		name: null, // NEEDS TRANSLATION
	},
	hiddenpowerwater: {
		name: null, // NEEDS TRANSLATION
	},
	highhorsepower: {
		name: "Forza Equina",
		shortDesc: null, // NEEDS TRANSLATION
	},
	highjumpkick: {
		name: "Calcinvolo",
		// Official flavor text: "Chi la usa colpisce il bersaglio con una ginocchiata in volo. Se fallisce, subisce danni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "#crash",
	},
	holdback: {
		name: "Riguardo",
		// Official flavor text: "Chi la usa attacca il bersaglio, modulando il colpo in modo da lasciargli almeno un PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	holdhands: {
		name: "Mano nella Mano",
		// Official flavor text: "Il Pokémon che la usa e un alleato si prendono per mano e fanno salti di gioia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	honeclaws: {
		name: "Unghiaguzze",
		// Official flavor text: "Chi la usa affila i propri artigli aumentando Attacco e precisione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hornattack: {
		name: "Incornata",
		shortDesc: null, // NEEDS TRANSLATION
	},
	horndrill: {
		name: "Perforcorno",
		// Official flavor text: "Colpisce il bersaglio con un corno perforante come un trapano. Se il colpo va a segno, il Pokémon colpito va KO."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hornleech: {
		name: "Legnicorno",
		// Official flavor text: "Chi la usa infilza il bersaglio con le corna e assorbe una quantità di PS pari a metà del danno inferto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	howl: {
		name: "Gridodilotta",
		// Official flavor text: "Chi la usa emette un forte verso per darsi coraggio e aumentare il proprio Attacco e quello degli alleati."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hurricane: {
		name: "Tifone",
		// Official flavor text: "Chi la usa attacca il bersaglio avvolgendolo con un vento fortissimo. Può anche confonderlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	hydrocannon: {
		name: "Idrocannone",
		// Official flavor text: "Colpisce il bersaglio con un potente getto d’acqua. Chi la usa salta il turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hydropump: {
		name: "Idropompa",
		shortDesc: null, // NEEDS TRANSLATION
	},
	hydrosteam: {
		name: "Idrovapore",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hydrovortex: {
		name: "Idrovortice Abissale",
		shortDesc: null, // NEEDS TRANSLATION
	},
	hyperbeam: {
		name: "Iper Raggio",
		// Official flavor text: "Colpisce il bersaglio con un potente raggio. Chi la usa salta il turno successivo per recuperare energia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	hyperdrill: {
		name: "Ipertrapano",
		shortDesc: null, // NEEDS TRANSLATION
	},
	hyperfang: {
		name: "Iperzanna",
		// Official flavor text: "Chi la usa morde il bersaglio con i suoi incisivi affilati. Può anche farlo tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hyperspacefury: {
		name: "Urtodimensionale",
		// Official flavor text: "Permette di attaccare ripetutamente grazie ai molti arti, ignorando mosse come Protezione o Individua. Riduce la Difesa di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#shadowforce",
		fail: "#darkvoid",
	},
	hyperspacehole: {
		name: "Forodimensionale",
		// Official flavor text: "Chi la usa sfrutta un passaggio interdimensionale per comparire a fianco del bersaglio e colpirlo, eludendo mosse come Protezione e Individua."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#shadowforce",
	},
	hypervoice: {
		name: "Granvoce",
		// Official flavor text: "Chi la usa lancia un urlo straziante che danneggia i nemici intorno a sé."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	hypnosis: {
		name: "Ipnosi",
		shortDesc: null, // NEEDS TRANSLATION
	},
	iceball: {
		name: "Palla Gelo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	icebeam: {
		name: "Geloraggio",
		// Official flavor text: "Il bersaglio è colpito da un raggio di energia gelida che può anche congelarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	iceburn: {
		name: "Vampagelida",
		// Official flavor text: "Chi la usa attacca il bersaglio al turno successivo e lo avvolge in un soffio d’aria gelida. Può anche scottarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		prepare: "  {POKEMON} è avvolto da un’atmosfera gelida!",
	},
	icefang: {
		name: "Gelodenti",
		// Official flavor text: "Chi la usa morde con denti ghiacciati. Può anche congelare o far tentennare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	icehammer: {
		name: "Martelgelo",
		// Official flavor text: "Infligge danni al bersaglio colpendolo con un pugno molto potente. Riduce la Velocità di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	icepunch: {
		name: "Gelopugno",
		// Official flavor text: "Colpisce il bersaglio con un pugno di ghiaccio che può congelarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	iceshard: {
		name: "Geloscheggia",
		// Official flavor text: "Chi la usa crea dei pezzi di ghiaccio e li lancia. Questa mossa ha priorità alta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	icespinner: {
		name: "Vortighiaccio",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	iciclecrash: {
		name: "Scagliagelo",
		// Official flavor text: "Chi la usa attacca violentemente il bersaglio con grosse stalattiti di ghiaccio che possono anche farlo tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	iciclespear: {
		name: "Gelolancia",
		// Official flavor text: "Chi la usa spara ghiaccioli affilati contro il bersaglio da due a cinque volte di fila."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	icywind: {
		name: "Ventogelato",
		// Official flavor text: "Chi la usa attacca i nemici intorno con una folata di aria gelida e ne riduce anche la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	imprison: {
		name: "Esclusiva",
		// Official flavor text: "Chi la usa impedisce al nemico di usare mosse che conoscono entrambi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} ha bloccato le mosse in comune con l’avversario!",
		cant: "{POKEMON} non può usare la mossa {MOVE}: è bloccata!",
	},
	incinerate: {
		name: "Bruciatutto",
		// Official flavor text: "Attacca i nemici che ha intorno con una fiammata. Il fuoco distruggerà le bacche o alcuni tipi di strumenti che i Pokémon hanno con sé."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		removeItem: "  {ITEM:definite:capitalize} di {POKEMON} v{INFLECT:ITEM:ms=iene distrutto:fs=iene distrutta:mp=engono distrutti:fp=engono distrutte} dal fuoco!",
	},
	infernalparade: {
		name: "Corteo Spettrale",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	inferno: {
		name: "Marchiatura",
		// Official flavor text: "Il bersaglio viene avvolto da intense fiammate che causano scottature."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	infernooverdrive: {
		name: "Fiammobomba Detonante",
		shortDesc: null, // NEEDS TRANSLATION
	},
	infestation: {
		name: "Assillo",
		// Official flavor text: "Chi la usa lancia un attacco che tormenta il bersaglio per quattro o cinque turni, durante i quali gli impedisce di fuggire."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} subisce l’assillo di {SOURCE}!",
	},
	ingrain: {
		name: "Radicamento",
		// Official flavor text: "Chi la usa mette delle radici che gli fanno recuperare PS a ogni turno. Non può essere sostituito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} pianta le radici!",
		block: "  {POKEMON} è ancorato al suolo grazie alle radici!",
		heal: "  {POKEMON} assorbe sostanze nutritive con le radici!",
	},
	instruct: {
		name: "Imposizione",
		// Official flavor text: "Costringe il bersaglio a ripetere immediatamente l’ultima mossa che ha sferrato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} costringe {TARGET} a ripetere immediatamente la mossa!",
	},
	iondeluge: {
		name: "Pioggiaplasma",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  Una pioggia di elettroni si rovescia sui Pokémon!",
	},
	irondefense: {
		name: "Ferroscudo",
		// Official flavor text: "Il corpo di chi la usa si indurisce come il ferro, facendone salire di molto la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	ironhead: {
		name: "Metaltestata",
		// Official flavor text: "Chi la usa colpisce il bersaglio con la sua testa dura come l’acciaio. Può anche farlo tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	irontail: {
		name: "Codacciaio",
		// Official flavor text: "Il bersaglio viene colpito da una robusta coda d’acciaio. Può anche ridurne la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	ivycudgel: {
		name: "Clava di Liane",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	jawlock: {
		name: "Morsostretto",
		// Official flavor text: "Impedisce a chi la usa e al bersaglio di essere sostituiti finché non vanno KO. L’effetto svanisce se uno dei due lascia il campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	jetpunch: {
		name: "Pugnojet",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	judgment: {
		name: "Giudizio",
		// Official flavor text: "Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	jumpkick: {
		name: "Calciosalto",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		damage: "#crash",
	},
	junglehealing: {
		name: "Giunglacura",
		// Official flavor text: "Il Pokémon diventa tutt’uno con la giungla, ripristinando i PS e curando i problemi di stato per sé e per l’alleato in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	karatechop: {
		name: "Colpokarate",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	kinesis: {
		name: "Cinèsi",
		// Official flavor text: "Chi la usa distrae il bersaglio piegando un cucchiaio e ne riduce la precisione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	kingsshield: {
		name: "Scudo Reale",
		// Official flavor text: "Chi la usa si protegge, assumendo una posizione di difesa e riducendo l’Attacco di nemici o alleati con cui entra in contatto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	knockoff: {
		name: "Privazione",
		// Official flavor text: "Attacco che fa cadere lo strumento del bersaglio, impedendone l’uso nella lotta. La sua potenza aumenta se il Pokémon colpito ha uno strumento."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "  {SOURCE} fa cadere {ITEM:definite:classified} di {POKEMON}!",
	},
	kowtowcleave: {
		name: "Genufendente",
		shortDesc: null, // NEEDS TRANSLATION
	},
	landswrath: {
		name: "Forza Tellurica",
		// Official flavor text: "Chi la usa raccoglie energia tellurica e ne concentra il potere sui nemici che ha intorno, danneggiandoli."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	laserfocus: {
		name: "Concentrazione",
		// Official flavor text: "Chi la usa si concentra e nel turno successivo metterà sicuramente a segno un brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} si concentra!",
	},
	lashout: {
		name: "Sfogarabbia",
		// Official flavor text: "Chi la usa attacca il bersaglio con tutta la propria ira. Se ha subito riduzioni delle statistiche durante quel turno, la potenza della mossa raddoppia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lastresort: {
		name: "Ultimascelta",
		// Official flavor text: "Per usare questa mossa, bisogna prima avvalersi in lotta di tutte le altre mosse conosciute."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lastrespects: {
		name: "Omaggio ai KO",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lavaplume: {
		name: "Lavasbuffo",
		// Official flavor text: "Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	leafage: {
		name: "Fogliame",
		shortDesc: null, // NEEDS TRANSLATION
	},
	leafblade: {
		name: "Fendifoglia",
		// Official flavor text: "Colpisce il bersaglio usando una foglia affilata come una spada. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	leafstorm: {
		name: "Verdebufera",
		// Official flavor text: "Si forma una tempesta di foglie affilate. Il contraccolpo riduce di molto l’Attacco Speciale di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	leaftornado: {
		name: "Vorticerba",
		// Official flavor text: "Chi la usa avvolge e attacca il bersaglio con foglie affilate che possono anche ridurne la precisione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	leechlife: {
		name: "Sanguisuga",
		// Official flavor text: "Mossa succhiasangue. Chi la usa recupera una quantità di PS pari alla metà del danno inferto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	leechseed: {
		name: "Parassiseme",
		// Official flavor text: "Vengono piantati semi sul bersaglio. Questi sottraggono PS a ogni turno permettendo a chi la usa di curarsi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è pieno di semi!",
		end: "  {POKEMON} si è liberato da Parassiseme!",
		damage: "  Parassiseme sottrae energia {POKEMON:a}!",
	},
	leer: {
		name: "Fulmisguardo",
		// Official flavor text: "Terrorizza i nemici intorno con uno sguardo fulminante e intimidatorio, riducendone la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	letssnuggleforever: {
		name: "Dolcesacco di Botte",
		shortDesc: null, // NEEDS TRANSLATION
	},
	lick: {
		name: "Leccata",
		// Official flavor text: "Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lifedew: {
		name: "Goccia Vitale",
		// Official flavor text: "Sparge tutt’intorno dell’acqua misteriosa che fa recuperare PS a sé a agli alleati in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lightofruin: {
		name: "Luce Nefasta",
		// Official flavor text: "Concentra il potere del Fiore Eterno in un raggio di luce potentissimo con cui attacca il bersaglio. Causa danni ingenti anche a chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lightscreen: {
		name: "Schermoluce",
		// Official flavor text: "Innalza una barriera misteriosa che riduce i danni degli attacchi speciali per sé e gli alleati per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
			start: "  {POKEMON} è immune agli attacchi speciali",
		},

		start: "  La resistenza di {TEAM} agli attacchi speciali aumenta grazie a Schermoluce!",
		end: "  L’effetto di Schermoluce su {TEAM} è finito!",
	},
	lightthatburnsthesky: {
		name: "Fotodistruzione Apocalittica",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	liquidation: {
		name: "Idrobreccia",
		// Official flavor text: "Chi la usa colpisce il bersaglio con la forza dell’acqua. Può anche ridurne la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lockon: {
		name: "Localizza",
		// Official flavor text: "Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {SOURCE} prende la mira su {POKEMON}!",
	},
	lovelykiss: {
		name: "Demonbacio",
		shortDesc: null, // NEEDS TRANSLATION
	},
	lowkick: {
		name: "Colpo Basso",
		// Official flavor text: "Un calcio basso e potente che fa cadere il bersaglio. Danneggia maggiormente i Pokémon più pesanti."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	lowsweep: {
		name: "Calciobasso",
		// Official flavor text: "Chi la usa colpisce con un attacco fulmineo la parte inferiore del corpo del bersaglio, riducendone la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	luckychant: {
		name: "Fortuncanto",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  Fortuncanto protegge {TEAM} dai brutti colpi!",
		end: "  L’effetto di Fortuncanto su {TEAM} è finito!",
	},
	luminacrash: {
		name: "Fotocollisione",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lunarblessing: {
		name: "Invocaluna",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lunardance: {
		name: "Lunardanza",
		// Official flavor text: "Chi la usa va KO. Il Pokémon che lo sostituisce guarisce dai propri problemi di stato e recupera tutti i PS e i PP."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "  Una mistica luce lunare avvolge {POKEMON}!",
	},
	lunge: {
		name: "Assalto",
		// Official flavor text: "Chi la usa si lancia con tutte le sue forze sul bersaglio e ne riduce l’Attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	lusterpurge: {
		name: "Abbagliante",
		// Official flavor text: "Chi la usa scatena un’esplosione abbagliante che può anche ridurre la Difesa Speciale del Pokémon colpito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	machpunch: {
		name: "Pugnorapido",
		// Official flavor text: "Chi la usa tira un pugno a una velocità impressionante. Questa mossa ha priorità alta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	magicalleaf: {
		name: "Fogliamagica",
		shortDesc: null, // NEEDS TRANSLATION
	},
	magicaltorque: {
		name: "Turboincanto",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	magiccoat: {
		name: "Magivelo",
		// Official flavor text: "Una barriera rimanda al mittente l’effetto di mosse come Parassiseme e di mosse che influenzano lo stato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} si avvolge in un Magivelo!",
		move: "{POKEMON} respinge la mossa {MOVE} e la rimanda al mittente!",
	},
	magicpowder: {
		name: "Magipolvere",
		// Official flavor text: "Chi la usa getta addosso al bersaglio una polvere magica che lo rende di tipo Psico."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	magicroom: {
		name: "Magicozona",
		// Official flavor text: "Chi la usa crea una dimensione in cui l’effetto degli strumenti di tutti i Pokémon è annullato per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	magmastorm: {
		name: "Magmaclisma",
		// Official flavor text: "Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è intrappolato in un turbine di magma!",
	},
	magnetbomb: {
		name: "Bombagnete",
		shortDesc: null, // NEEDS TRANSLATION
	},
	magneticflux: {
		name: "Controllo Polare",
		// Official flavor text: "Tramite il controllo dei campi magnetici, aumenta la Difesa e la Difesa Speciale dei Pokémon alleati dotati delle abilità Più o Meno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	magnetrise: {
		name: "Magnetascesa",
		// Official flavor text: "Chi la usa si solleva in aria per cinque turni grazie a un campo elettromagnetico."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} si solleva in aria a causa dell’elettromagnetismo!",
		end: "  L’effetto dell’elettromagnetismo di {POKEMON} è terminato!",
	},
	magnitude: {
		name: "Magnitudo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  Magnitudo {NUMBER}!",
	},
	makeitrain: {
		name: "Corsa all’Oro",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},

		activate: "#payday",
	},
	maliciousmoonsault: {
		name: "Iperschianto delle Tenebre",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	malignantchain: {
		name: "Intossicatena",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	matblock: {
		name: "Ribaltappeto",
		// Official flavor text: "Chi la usa protegge se stesso e i propri alleati dai danni di mosse nemiche, adoperando un tappetino come scudo. Non è efficace contro mosse di stato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} si prepara a respingere gli attacchi!",
		block: "  Ribaltappeto protegge da {MOVE}!",
	},
	matchagotcha: {
		name: "Spruzzatè",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxairstream: {
		name: "Dynajet",
		// Official flavor text: "Un attacco di tipo Volante che può essere eseguito dai Pokémon dynamaxizzati. Aumenta la Velocità degli alleati."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxdarkness: {
		name: "Dynatenebre",
		// Official flavor text: "Un attacco di tipo Buio che può essere eseguito dai Pokémon dynamaxizzati. Riduce la Difesa Speciale dei nemici intorno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxflare: {
		name: "Dynafiammata",
		// Official flavor text: "Un attacco di tipo Fuoco che può essere eseguito dai Pokémon dynamaxizzati. Intensifica i raggi solari per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxflutterby: {
		name: "Dynainsetto",
		// Official flavor text: "Un attacco di tipo Coleottero che può essere eseguito dai Pokémon dynamaxizzati. Riduce l’Attacco Speciale dei nemici intorno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxgeyser: {
		name: "Dynaflusso",
		// Official flavor text: "Un attacco di tipo Acqua che può essere eseguito dai Pokémon dynamaxizzati. Provoca una forte pioggia per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxguard: {
		name: "Dynabarriera",
		// Official flavor text: "Permette di eludere tutti gli attacchi. Se usata in successione può fallire."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  {POKEMON} si protegge!",
	},
	maxhailstorm: {
		name: "Dynagelo",
		// Official flavor text: "Un attacco di tipo Ghiaccio che può essere eseguito dai Pokémon dynamaxizzati. Causa una grandinata che dura per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxknuckle: {
		name: "Dynapugno",
		// Official flavor text: "Un attacco di tipo Lotta che può essere eseguito dai Pokémon dynamaxizzati. Aumenta l’Attacco degli alleati."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxlightning: {
		name: "Dynasaetta",
		// Official flavor text: "Un attacco di tipo Elettro che può essere eseguito dai Pokémon dynamaxizzati. Per cinque turni il terreno entra nello stato di Campo Elettrico."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxmindstorm: {
		name: "Dynapsiche",
		// Official flavor text: "Un attacco di tipo Psico che può essere eseguito dai Pokémon dynamaxizzati. Per cinque turni il terreno entra nello stato di Campo Psichico."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxooze: {
		name: "Dynacorrosione",
		// Official flavor text: "Un attacco di tipo Veleno che può essere eseguito dai Pokémon dynamaxizzati. Aumenta l’Attacco Speciale degli alleati."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxovergrowth: {
		name: "Dynaflora",
		// Official flavor text: "Un attacco di tipo Erba che può essere eseguito dai Pokémon dynamaxizzati. Per cinque turni il terreno entra nello stato di Campo Erboso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxphantasm: {
		name: "Dynavuoto",
		// Official flavor text: "Un attacco di tipo Spettro che può essere eseguito dai Pokémon dynamaxizzati. Riduce la Difesa dei nemici intorno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxquake: {
		name: "Dynasisma",
		// Official flavor text: "Un attacco di tipo Terra che può essere eseguito dai Pokémon dynamaxizzati. Aumenta la Difesa Speciale degli alleati."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxrockfall: {
		name: "Dynamacigno",
		// Official flavor text: "Un attacco di tipo Roccia che può essere eseguito dai Pokémon dynamaxizzati. Causa una tempesta di sabbia per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxstarfall: {
		name: "Dynafata",
		// Official flavor text: "Un attacco di tipo Folletto che può essere eseguito dai Pokémon dynamaxizzati. Per cinque turni il terreno entra nello stato di Campo Nebbioso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxsteelspike: {
		name: "Dynametallo",
		// Official flavor text: "Un attacco di tipo Acciaio che può essere eseguito dai Pokémon dynamaxizzati. Aumenta la Difesa degli alleati."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxstrike: {
		name: "Dynattacco",
		// Official flavor text: "Un attacco di tipo Normale che può essere eseguito dai Pokémon dynamaxizzati. Riduce la Velocità dei nemici intorno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	maxwyrmwind: {
		name: "Dynadragone",
		// Official flavor text: "Un attacco di tipo Drago che può essere eseguito dai Pokémon dynamaxizzati. Riduce l’Attacco dei nemici intorno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	meanlook: {
		name: "Malosguardo",
		// Official flavor text: "Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	meditate: {
		name: "Meditazione",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mefirst: {
		name: "Precedenza",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	megadrain: {
		name: "Megassorbimento",
		// Official flavor text: "Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	megahorn: {
		name: "Megacorno",
		shortDesc: null, // NEEDS TRANSLATION
	},
	megakick: {
		name: "Megacalcio",
		shortDesc: null, // NEEDS TRANSLATION
	},
	megapunch: {
		name: "Megapugno",
		shortDesc: null, // NEEDS TRANSLATION
	},
	memento: {
		name: "Memento",
		// Official flavor text: "Chi la usa va KO. Tuttavia, riduce di molto l’Attacco e l’Attacco Speciale del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "  {POKEMON} recupera PS grazie al Potere Z!",
	},
	menacingmoonrazemaelstrom: {
		name: "Deflagrazione Lunare",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	metalburst: {
		name: "Metalscoppio",
		// Official flavor text: "Chi la usa si vendica sul nemico che l’ha appena ferito con una mossa anche più potente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	metalclaw: {
		name: "Ferrartigli",
		// Official flavor text: "Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	metalsound: {
		name: "Ferrostrido",
		// Official flavor text: "Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	meteorassault: {
		name: "Sfolgorassalto",
		// Official flavor text: "Chi la usa attacca il bersaglio brandendo un grosso gambo, ma perde l’equilibrio e nel turno successivo non può agire."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	meteorbeam: {
		name: "Raggiometeora",
		// Official flavor text: "Chi la usa accumula l’energia dello spazio nel primo turno per aumentare l’Attacco Speciale, quindi attacca nel turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		prepare: "La forza dell’universo pervade {POKEMON}!",
	},
	meteormash: {
		name: "Meteorpugno",
		// Official flavor text: "Colpisce il bersaglio con un pugno veloce come una meteora. Può far salire l’Attacco di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	metronome: {
		name: "Metronomo",
		// Official flavor text: "Chi la usa fa di no con il dito e stimola il cervello a usare a caso una delle tante mosse esistenti."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8bdsp: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7letsgo: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		move: "Grazie a Metronomo, il Pokémon può sferrare la mossa {MOVE}!",
	},
	mightycleave: {
		name: "Taglio Poderoso",
		shortDesc: null, // NEEDS TRANSLATION
	},
	milkdrink: {
		name: "Buonlatte",
		// Official flavor text: "Chi la usa recupera metà dei propri PS massimi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mimic: {
		name: "Mimica",
		// Official flavor text: "Chi la usa copia l’ultima mossa usata dal bersaglio e la conserva finché rimane in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} impara {MOVE}!",
	},
	mindblown: {
		name: "Sbalorditesta",
		// Official flavor text: "Chi la usa fa esplodere la propria testa per attaccare tutti i Pokémon che ha intorno, ma subisce danni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		damage: null, // NEEDS TRANSLATION
	},
	mindreader: {
		name: "Leggimente",
		// Official flavor text: "Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "#lockon",
	},
	minimize: {
		name: "Minimizzato",
		// Official flavor text: "Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	miracleeye: {
		name: "Miracolvista",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "#foresight",
	},
	mirrorcoat: {
		name: "Specchiovelo",
		// Official flavor text: "Mossa che replica ogni attacco speciale, arrecando il doppio del danno ricevuto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mirrormove: {
		name: "Speculmossa",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mirrorshot: {
		name: "Cristalcolpo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mist: {
		name: "Nebbia",
		// Official flavor text: "Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
			start: "  La NEBBIA avvolge {POKEMON}!",
			block: "  La NEBBIA protegge {POKEMON}.",
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			start: "  La NEBBIA avvolge {POKEMON}!",
			block: "  Ma fallisce!",
		},

		start: "  {TEAM:capitalize} è avvolta dalla nebbia!",
		end: "  La nebbia intorno a {TEAM} si è diradata!",
		block: "  {POKEMON} è protetto da un velo di nebbia!",
	},
	mistball: {
		name: "Foschisfera",
		// Official flavor text: "Una sfera di nebbia avvolge e danneggia il bersaglio. Può anche ridurne l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mistyexplosion: {
		name: "Nebbioscoppio",
		// Official flavor text: "Chi la usa attacca tutti i Pokémon che ha intorno, ma poi va KO. La potenza della mossa aumenta quando è attivo un Campo Nebbioso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mistyterrain: {
		name: "Campo Nebbioso",
		// Official flavor text: "Per cinque turni il terreno entra nello stato di Campo Nebbioso: i Pokémon a terra sono immuni ai problemi di stato e la potenza delle mosse Drago è dimezzata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	moonblast: {
		name: "Forza Lunare",
		// Official flavor text: "Chi la usa sfrutta il potere della luna per attaccare il bersaglio. Può anche ridurne l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	moongeistbeam: {
		name: "Raggio d’Ombra",
		// Official flavor text: "Chi la usa proietta sul bersaglio un misterioso raggio di luce. Questo attacco ignora l’abilità del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	moonlight: {
		name: "Lucelunare",
		// Official flavor text: "Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	morningsun: {
		name: "Mattindoro",
		// Official flavor text: "Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	mortalspin: {
		name: "Glitturbine",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mountaingale: {
		name: "Soffio d’Iceberg",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mudbomb: {
		name: "Pantanobomba",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	muddywater: {
		name: "Fanghiglia",
		// Official flavor text: "Chi la usa attacca i nemici che ha intorno con un getto di fango che può anche ridurne la precisione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mudshot: {
		name: "Colpodifango",
		// Official flavor text: "Chi la usa attacca lanciando fango sul bersaglio, riducendone anche la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mudslap: {
		name: "Fangosberla",
		// Official flavor text: "Chi la usa butta fango in faccia al bersaglio per arrecargli danni e ridurne la precisione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mudsport: {
		name: "Fangata",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	multiattack: {
		name: "Multiattacco",
		// Official flavor text: "Chi la usa si avvolge in un potente campo energetico e colpisce il bersaglio. Il tipo della mossa varia in base alla ROM installata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mysticalfire: {
		name: "Magifiamma",
		// Official flavor text: "Colpisce il bersaglio soffiandogli contro delle fiammate incredibilmente roventi, riducendone l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	mysticalpower: {
		name: "Forza Mistica",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	nastyplot: {
		name: "Congiura",
		// Official flavor text: "Chi la usa stimola il cervello pensando a cose cattive. Aumenta di molto l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	naturalgift: {
		name: "Dononaturale",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	naturepower: {
		name: "Naturforza",
		// Official flavor text: "Mossa che fa uso della forza della natura. Il suo effetto varia in base all’ambiente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		move: "Naturforza diventa {MOVE}!",
	},
	naturesmadness: {
		name: "Ira della Natura",
		// Official flavor text: "Scatena l’ira della natura sul bersaglio e ne dimezza i PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	needlearm: {
		name: "Pugnospine",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	neverendingnightmare: {
		name: "Abbraccio Spettrale",
		shortDesc: null, // NEEDS TRANSLATION
	},
	nightdaze: {
		name: "Urtoscuro",
		// Official flavor text: "Chi la usa attacca il bersaglio con un’onda d’urto oscura che può anche ridurne la precisione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	nightmare: {
		name: "Incubo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} ha un incubo!",
		damage: "  {POKEMON} è prigioniero di un incubo!",
	},
	nightshade: {
		name: "Ombra Notturna",
		// Official flavor text: "Fa apparire un orribile miraggio al bersaglio e infligge un danno pari al livello di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	nightslash: {
		name: "Nottesferza",
		// Official flavor text: "Chi la usa colpisce il bersaglio appena si presenta l’occasione. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	nobleroar: {
		name: "Urlo",
		// Official flavor text: "Chi la usa emette un urlo potente che intimidisce il bersaglio, riducendone l’Attacco e l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	noretreat: {
		name: "Spalle al Muro",
		// Official flavor text: "Chi la usa aumenta tutte le sue statistiche ma non può più fuggire o essere sostituito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  Spalle al Muro impedisce {POKEMON:a} di fuggire!",
	},
	noxioustorque: {
		name: "Turbotossina",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	nuzzle: {
		name: "Elettrococcola",
		// Official flavor text: "Chi la usa strofina le guance elettrizzate contro il bersaglio, paralizzandolo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	oblivionwing: {
		name: "Ali del Fato",
		// Official flavor text: "Chi la usa assorbe energia dal bersaglio recuperando una quantità di PS pari a più della metà del danno inferto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	obstruct: {
		name: "Sbarramento",
		// Official flavor text: "Permette di eludere tutti gli attacchi. Se usata in successione può fallire. Se un Pokémon tocca chi la usa, la sua Difesa diminuisce di molto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	oceanicoperetta: {
		name: "Sinfonia del Mare",
		shortDesc: null, // NEEDS TRANSLATION
	},
	octazooka: {
		name: "Octazooka",
		// Official flavor text: "Chi la usa spruzza inchiostro in faccia al bersaglio. Può anche ridurne la precisione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	octolock: {
		name: "Tentacolock",
		// Official flavor text: "Chi la usa immobilizza il bersaglio impedendogli di fuggire e ne diminuisce la Difesa e la Difesa Speciale a ogni turno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  Tentacolock impedisce {POKEMON:a} di fuggire!",
	},
	odorsleuth: {
		name: "Segugio",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	ominouswind: {
		name: "Funestovento",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	orderup: {
		name: "Alta Cucina",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	originpulse: {
		name: "Primopulsar",
		// Official flavor text: "Attacca i nemici intorno colpendoli con miriadi di raggi di luce blu."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	outrage: {
		name: "Oltraggio",
		// Official flavor text: "Chi la usa sfoga la sua ira e attacca il nemico per due o tre turni prima di essere lasciato in preda alla confusione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	overdrive: {
		name: "Overdrive",
		// Official flavor text: "Chi la usa suona la chitarra o il basso creando un’onda sonora potentissima con cui attacca il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	overheat: {
		name: "Vampata",
		// Official flavor text: "Chi la usa sferra un potente attacco, ma il contraccolpo riduce di molto il suo Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	painsplit: {
		name: "Malcomune",
		// Official flavor text: "Chi la usa somma i propri PS a quelli di un altro Pokémon per poi dividerli in parti uguali."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  I Pokémon si dividono i PS!",
	},
	paleowave: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	paraboliccharge: {
		name: "Caricaparabola",
		// Official flavor text: "Infligge danni a tutti i Pokémon vicini. Chi la usa recupera una quantità di PS pari alla metà del danno inferto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	partingshot: {
		name: "Monito",
		// Official flavor text: "Chi la usa lancia un monito intimidatorio al bersaglio, riducendone l’Attacco e l’Attacco Speciale, e si fa sostituire da un altro Pokémon della squadra."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		heal: "#memento",
		switchOut: "#uturn",
	},
	payback: {
		name: "Rivincita",
		// Official flavor text: "Chi la usa accumula forza, poi attacca. La potenza raddoppia se il Pokémon agisce dopo il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	payday: {
		name: "Giornopaga",
		// Official flavor text: "Colpisce il bersaglio con una gran quantità di monete recuperabili dopo la lotta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  Ci sono monete sparse ovunque!",
	},
	peck: {
		name: "Beccata",
		shortDesc: null, // NEEDS TRANSLATION
	},
	perishsong: {
		name: "Ultimocanto",
		// Official flavor text: "Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  Tutti i Pokémon che ascoltano Ultimocanto andranno KO dopo tre turni!",
		activate: "  Il conto alla rovescia di Ultimocanto per {POKEMON} scende a {NUMBER}!",
	},
	petalblizzard: {
		name: "Fiortempesta",
		// Official flavor text: "Infligge danni ai Pokémon che ha intorno attaccandoli con una tempesta di fiori."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	petaldance: {
		name: "Petalodanza",
		// Official flavor text: "Attacca il nemico cospargendolo di petali per due o tre turni, ma chi la usa rimane confuso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	phantomforce: {
		name: "Spettrotuffo",
		// Official flavor text: "Chi la usa scompare improvvisamente per attaccare poi nel turno seguente. Questa mossa neutralizza le protezioni del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "#shadowforce",
		activate: "#shadowforce",
	},
	photongeyser: {
		name: "Geyser Fotonico",
		// Official flavor text: "Attacca il bersaglio con una colonna di luce. Infligge danni in base all’Attacco o all’Attacco Speciale scegliendo il più alto tra i due."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	pikapapow: {
		name: "Pikasaetta",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	pinmissile: {
		name: "Missilspillo",
		// Official flavor text: "Il bersaglio viene colpito da due a cinque volte in rapida successione con delle spine."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	plasmafists: {
		name: "Pugni Plasma",
		// Official flavor text: "Chi la usa attacca con pugni carichi di elettricità. Trasforma le mosse di tipo Normale in mosse di tipo Elettro."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	playnice: {
		name: "Simpatia",
		// Official flavor text: "Chi la usa diventa amico del bersaglio, rabbonendolo e riducendone così l’Attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	playrough: {
		name: "Carineria",
		// Official flavor text: "Chi la usa attacca il bersaglio con delle carinerie. Può anche ridurne l’Attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	pluck: {
		name: "Spennata",
		// Official flavor text: "Chi la usa becca il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		removeItem: "#bugbite",
	},
	poisonfang: {
		name: "Velenodenti",
		// Official flavor text: "Chi la usa morde il bersaglio con denti avvelenati che possono anche iperavvelenarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisongas: {
		name: "Velenogas",
		// Official flavor text: "Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisonjab: {
		name: "Velenpuntura",
		// Official flavor text: "Il bersaglio è colpito da un tentacolo o da un arto intriso di una sostanza tossica che può anche avvelenarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	poisonpowder: {
		name: "Velenpolvere",
		// Official flavor text: "Investe il bersaglio con una nuvola di polvere tossica che avvelena."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	poisonsting: {
		name: "Velenospina",
		// Official flavor text: "Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	poisontail: {
		name: "Velenocoda",
		// Official flavor text: "Chi la usa colpisce con la coda e può avvelenare il bersaglio. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	polarflare: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	pollenpuff: {
		name: "Sferapolline",
		// Official flavor text: "Chi la usa attacca il nemico con una sfera esplosiva. Se colpisce degli alleati, fa recuperare loro dei PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	poltergeist: {
		name: "Poltergeist",
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  {ITEM:definite:capitalize} attacca{INFLECT:ITEM:s=:p=no} {POKEMON}!",
	},
	populationbomb: {
		name: "Infestazione",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	pounce: {
		name: "Balzo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	pound: {
		name: "Botta",
		shortDesc: null, // NEEDS TRANSLATION
	},
	powder: {
		name: "Pulviscoppio",
		// Official flavor text: "Il bersaglio viene coperto da un pulviscolo che esplode danneggiandolo se questi utilizza una mossa di tipo Fuoco nello stesso turno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è cosparso di polvere esplosiva!",
		activate: "  Il pulviscolo esplode per reazione alla mossa {MOVE}!",
	},
	powdersnow: {
		name: "Polneve",
		// Official flavor text: "Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	powergem: {
		name: "Gemmoforza",
		shortDesc: null, // NEEDS TRANSLATION
	},
	powersplit: {
		name: "Pariattacco",
		// Official flavor text: "Chi la usa sfrutta la sua forza psichica per sommare Attacco e Attacco Speciale a quelli del bersaglio e dividerli equamente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  {POKEMON} somma le sue capacità offensive con quelle del bersaglio e le ripartisce equamente!",
	},
	powerswap: {
		name: "Barattoforza",
		// Official flavor text: "Chi la usa sfrutta la sua forza psichica per scambiare le modifiche ad Attacco e Attacco Speciale con il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	powershift: {
		name: "Scambioforza",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} ha invertito la sua forza offensiva con la forza difensiva!",
		end: "#.start",
	},
	powertrick: {
		name: "Ingannoforza",
		// Official flavor text: "Mossa psichica che permette a chi la usa di scambiare i valori delle sue statistiche di Attacco e Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} inverte l’Attacco con la Difesa!",
		end: "#.start",
	},
	powertrip: {
		name: "Tracotanza",
		// Official flavor text: "Chi la usa attacca il bersaglio sfoggiando la propria forza. Più le sue statistiche sono state aumentate, più la mossa è potente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	poweruppunch: {
		name: "Crescipugno",
		// Official flavor text: "Rende i pugni più duri a ogni colpo inferto. Se i pugni vanno a segno, l’Attacco di chi la usa aumenta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	powerwhip: {
		name: "Vigorcolpo",
		shortDesc: null, // NEEDS TRANSLATION
	},
	precipiceblades: {
		name: "Spade Telluriche",
		// Official flavor text: "Attacca i nemici intorno trasformando la potenza della terra in lame affilate."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	present: {
		name: "Regalino",
		// Official flavor text: "Chi la usa dà un regalo bomba al bersaglio. A volte, però, può fargli recuperare PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	prismaticlaser: {
		name: "Prismalaser",
		// Official flavor text: "Chi la usa proietta dei potenti raggi di luce grazie alla potenza del suo prisma, ma non può agire nel turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	protect: {
		name: "Protezione",
		// Official flavor text: "Permette di eludere tutti gli attacchi. Se usata in successione può fallire."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} si è protetto!",
		block: "  {POKEMON} si protegge!",
	},
	psybeam: {
		name: "Psicoraggio",
		// Official flavor text: "Colpisce il bersaglio con un raggio speciale. Può anche confonderlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psyblade: {
		name: "Psicolama",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psychic: {
		name: "Psichico",
		// Official flavor text: "Il bersaglio viene colpito da una potente forza telecinetica che può anche ridurne la Difesa Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	psychicfangs: {
		name: "Psicozanna",
		// Official flavor text: "Morde il bersaglio con delle zanne generate con l’energia psichica e rompe barriere come Riflesso e Schermoluce."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psychicnoise: {
		name: "Psicorumore",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psychicterrain: {
		name: "Campo Psichico",
		// Official flavor text: "Per cinque turni il terreno entra nello stato di Campo Psichico: i Pokémon a terra non subiscono mosse ad alta priorità e le mosse di tipo Psico sono potenziate."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	psychoboost: {
		name: "Psicoslancio",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psychocut: {
		name: "Psicotaglio",
		// Official flavor text: "Chi la usa colpisce il bersaglio con lame fatte di forza psichica. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psychoshift: {
		name: "Psicotransfer",
		// Official flavor text: "Con la forza psichica e la suggestione, chi la usa può trasferire i suoi problemi di stato al Pokémon colpito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psychup: {
		name: "Psicamisù",
		// Official flavor text: "Chi la usa s’ipnotizza per copiare ogni modifica alle statistiche del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	psyshieldbash: {
		name: "Barrierassalto",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psyshock: {
		name: "Psicoshock",
		// Official flavor text: "Chi la usa attacca il bersaglio facendo materializzare misteriose onde psichiche che provocano danni fisici."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psystrike: {
		name: "Psicobotta",
		// Official flavor text: "Chi la usa attacca il bersaglio facendo materializzare misteriose onde psichiche che provocano danni fisici."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	psywave: {
		name: "Psiconda",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	pulverizingpancake: {
		name: "Adesso Faccio sul Serio",
		shortDesc: null, // NEEDS TRANSLATION
	},
	punishment: {
		name: "Punizione",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	purify: {
		name: "Purificazione",
		// Official flavor text: "Chi la usa cura i problemi di stato del bersaglio e in cambio recupera PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	pursuit: {
		name: "Inseguimento",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: null, // NEEDS TRANSLATION
	},
	pyroball: {
		name: "Palla Infuocata",
		// Official flavor text: "Chi la usa attacca con una palla creata incendiando una piccola pietra. Può anche scottare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	quash: {
		name: "Spintone",
		// Official flavor text: "Chi la usa spinge via il bersaglio, costringendolo ad agire per ultimo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  Il turno di {TARGET} slitta!",
	},
	quickattack: {
		name: "Attacco Rapido",
		// Official flavor text: "Chi la usa colpisce a una tale velocità da rendersi quasi invisibile. Questa mossa ha priorità alta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	quickguard: {
		name: "Anticipo",
		// Official flavor text: "Chi la usa protegge sé e gli alleati dalle mosse ad alta priorità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {TEAM} è protetto da Anticipo!",
		block: "  {POKEMON} è protetto da Anticipo!",
	},
	quiverdance: {
		name: "Eledanza",
		// Official flavor text: "Danza leggiadra ed elegante che aumenta l’Attacco Speciale, la Difesa Speciale e la Velocità di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rage: {
		name: "Ira",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	ragefist: {
		name: "Pugno Furibondo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	ragepowder: {
		name: "Polverabbia",
		// Official flavor text: "Chi la usa attira l’attenzione dei nemici cospargendosi di una polvere irritante e diventando bersaglio di tutti gli attacchi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "#followme",
		startFromZEffect: "#followme",
	},
	ragingbull: {
		name: "Scatenatoro",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: null, // NEEDS TRANSLATION
	},
	ragingfury: {
		name: "Ira Furente",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	raindance: {
		name: "Pioggiadanza",
		// Official flavor text: "Chi la usa provoca una forte pioggia per cinque turni, potenziando le mosse di tipo Acqua e riducendo la potenza di quelle di tipo Fuoco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	rapidspin: {
		name: "Rapigiro",
		// Official flavor text: "Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta e Parassiseme. Aumenta anche la Velocità di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	razorleaf: {
		name: "Foglielama",
		// Official flavor text: "Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	razorshell: {
		name: "Conchilama",
		// Official flavor text: "Chi la usa colpisce il bersaglio con il suo guscio affilato. Il colpo può anche ridurre la Difesa del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	razorwind: {
		name: "Ventagliente",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "  {POKEMON} genera un uragano!",
	},
	recover: {
		name: "Ripresa",
		// Official flavor text: "Mossa autocurativa. Chi la usa recupera metà dei PS massimi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	recycle: {
		name: "Riciclo",
		// Official flavor text: "Chi la usa ricicla uno strumento che ha usato nella lotta e può riutilizzarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		addItem: "  {POKEMON} ricicla {ITEM}!",
	},
	reflect: {
		name: "Riflesso",
		// Official flavor text: "Innalza una barriera misteriosa che riduce i danni degli attacchi fisici per sé e gli alleati per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
			start: "  {POKEMON} si è corazzato!",
		},

		start: "  La resistenza di {TEAM} agli attacchi fisici aumenta grazie a Riflesso!",
		end: "  L’effetto di Riflesso su {TEAM} è finito!",
	},
	reflecttype: {
		name: "Riflettipo",
		// Official flavor text: "Chi la usa cambia il proprio tipo in quello del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		typeChange: "  {POKEMON} assume il tipo di {SOURCE}!",
	},
	refresh: {
		name: "Rinfrescata",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	relicsong: {
		name: "Cantoantico",
		// Official flavor text: "Chi la usa attacca i nemici intorno a sé intonando un’antica melodia che colpisce il loro spirito. Può anche farli addormentare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rest: {
		name: "Riposo",
		// Official flavor text: "Chi la usa recupera tutti i PS e guarisce da tutti i suoi problemi di stato, ma dorme per due turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	retaliate: {
		name: "Nemesi",
		// Official flavor text: "Vendica un alleato messo KO. Se ciò è accaduto al turno precedente, il danno è maggiore."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	return: {
		name: "Ritorno",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	revelationdance: {
		name: "Mutadanza",
		// Official flavor text: "Chi la usa si lancia in una danza e attacca il nemico con tutte le sue forze. Il tipo della mossa corrisponde al tipo del Pokémon che la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	revenge: {
		name: "Vendetta",
		// Official flavor text: "Mossa d’attacco che infligge un danno doppio se si è stati colpiti dal Pokémon bersaglio nello stesso turno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	reversal: {
		name: "Contropiede",
		// Official flavor text: "Chi la usa attacca con tutte le sue forze. Più i PS sono bassi, maggiore è la potenza di questa mossa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	revivalblessing: {
		name: "Preghiera Vitale",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		heal: "  {POKEMON} torna in forze e può lottare di nuovo!",
	},
	risingvoltage: {
		name: "Elettroimpennata",
		// Official flavor text: "Chi la usa attacca con dell’elettricità che si alza dal suolo. La potenza della mossa raddoppia quando l’avversario si trova in un Campo Elettrico."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	roar: {
		name: "Boato",
		// Official flavor text: "Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	roaroftime: {
		name: "Fragortempo",
		// Official flavor text: "Chi la usa colpisce il bersaglio con una forza capace di alterare il tempo, ma deve stare fermo al turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rockblast: {
		name: "Cadutamassi",
		// Official flavor text: "Colpisce il bersaglio con dei massi pesanti lanciati in rapida successione. Il numero di massi varia da due a cinque."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	rockclimb: {
		name: "Scalaroccia",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rockpolish: {
		name: "Lucidatura",
		// Official flavor text: "Chi la usa leviga il proprio corpo per ridurne l’attrito. Aumenta di molto la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rockslide: {
		name: "Frana",
		// Official flavor text: "I nemici vengono colpiti con violenza da grandi massi che possono anche farli tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	rocksmash: {
		name: "Spaccaroccia",
		// Official flavor text: "Chi la usa colpisce il bersaglio con un pugno che può anche ridurne la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rockthrow: {
		name: "Sassata",
		shortDesc: null, // NEEDS TRANSLATION
	},
	rocktomb: {
		name: "Rocciotomba",
		// Official flavor text: "Colpisce il bersaglio con rocce. Inoltre, lo rallenta riducendone la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rockwrecker: {
		name: "Devastomasso",
		// Official flavor text: "Chi la usa attacca il bersaglio con un enorme masso, ma si deve riposare al turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	roleplay: {
		name: "Giocodiruolo",
		// Official flavor text: "Chi la usa mima in tutto il bersaglio, copiandone l’abilità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		changeAbility: "  {POKEMON} copia l’abilità {ABILITY} di {SOURCE}!",
	},
	rollingkick: {
		name: "Calciorullo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	rollout: {
		name: "Rotolamento",
		// Official flavor text: "Chi la usa colpisce il bersaglio rotolando per cinque turni, con aumento progressivo della potenza ogni volta che va a segno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	roost: {
		name: "Trespolo",
		// Official flavor text: "Chi la usa sta fermo e riposa, recuperando metà dei propri PS massimi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: null, // NEEDS TRANSLATION
	},
	rototiller: {
		name: "Aracampo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	round: {
		name: "Coro",
		// Official flavor text: "Attacca il bersaglio con una melodia. Se usata durante lo stesso turno da più Pokémon, i danni inflitti aumentano."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	ruination: {
		name: "Catastrofe",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sacredfire: {
		name: "Magifuoco",
		// Official flavor text: "Colpisce il bersaglio con un fuoco mistico di enorme intensità che può anche causargli una scottatura."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sacredsword: {
		name: "Spadasolenne",
		// Official flavor text: "Chi la usa taglia il bersaglio con una spada magica. Il danno inflitto ignora le modifiche alle statistiche del Pokémon colpito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	safeguard: {
		name: "Salvaguardia",
		// Official flavor text: "Chi la usa crea un campo protettivo che evita problemi di stato per sé e gli alleati per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Un velo mistico ricopre {TEAM}!",
		end: "  {TEAM:capitalize} non è più protetta da Salvaguardia!",
		block: "  Salvaguardia protegge {POKEMON}!",
	},
	saltcure: {
		name: "Sotto Sale",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},

		start: "  {POKEMON} è sotto sale!",
		damage: "  {POKEMON} subisce i danni della mossa Sotto Sale!",
	},
	sandattack: {
		name: "Turbosabbia",
		// Official flavor text: "Getta sabbia in faccia al bersaglio e ne riduce la precisione."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sandsearstorm: {
		name: "Tempesta Ardente",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sandstorm: {
		name: "Terrempesta",
		// Official flavor text: "Causa una tempesta di sabbia per cinque turni che danneggia tutti i tipi esclusi Terra, Roccia e Acciaio. Aumenta la Dif. Speciale dei Pokémon di tipo Roccia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sandtomb: {
		name: "Sabbiotomba",
		// Official flavor text: "Chi la usa intrappola il bersaglio in una tempesta di sabbia per quattro o cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è intrappolato da Sabbiotomba!",
	},
	sappyseed: {
		name: "Bombafrush",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	savagespinout: {
		name: "Bozzolo Fatale",
		shortDesc: null, // NEEDS TRANSLATION
	},
	scald: {
		name: "Idrovampata",
		// Official flavor text: "Chi la usa attacca il bersaglio con un getto d’acqua bollente che può anche scottarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	scaleshot: {
		name: "Squamacolpo",
		// Official flavor text: "Il Pokémon attacca lanciando delle squame da due a cinque volte di fila. Aumenta la Velocità di chi la usa, ma ne riduce la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	scaryface: {
		name: "Visotruce",
		// Official flavor text: "Chi la usa spaventa il bersaglio con una faccia terribile e ne riduce di molto la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	scorchingsands: {
		name: "Sabbiardente",
		// Official flavor text: "Chi la usa attacca il bersaglio scagliandogli addosso della sabbia incandescente. Può anche scottarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	scratch: {
		name: "Graffio",
		shortDesc: null, // NEEDS TRANSLATION
	},
	screech: {
		name: "Stridio",
		// Official flavor text: "Stridio assordante che riduce di molto la Difesa del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	searingshot: {
		name: "Sparafuoco",
		// Official flavor text: "Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	searingsunrazesmash: {
		name: "Supercollisione Solare",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	secretpower: {
		name: "Forzasegreta",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	secretsword: {
		name: "Spadamistica",
		// Official flavor text: "Chi la usa attacca il bersaglio tagliandolo con una spada mistica. La misteriosa energia sprigionata provoca danni fisici."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	seedbomb: {
		name: "Semebomba",
		shortDesc: null, // NEEDS TRANSLATION
	},
	seedflare: {
		name: "Infuriaseme",
		// Official flavor text: "Chi la usa genera un’onda d’urto dal suo corpo. Può anche ridurre di molto la Difesa Speciale del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	seismictoss: {
		name: "Movim. Sismico",
		// Official flavor text: "Colpisce il bersaglio con la forza di gravità. Infligge un danno pari al livello di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	selfdestruct: {
		name: "Autodistruzione",
		// Official flavor text: "Chi la usa esplode e infligge danni ai Pokémon che ha intorno, ma poi va KO."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	shadowball: {
		name: "Palla Ombra",
		// Official flavor text: "Lancia sul bersaglio una sfera nera. Può anche ridurne la Difesa Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	shadowbone: {
		name: "Ossotetro",
		// Official flavor text: "Chi la usa colpisce il bersaglio con un osso in cui alberga uno spirito. Può anche ridurne la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	shadowclaw: {
		name: "Ombrartigli",
		// Official flavor text: "Chi la usa attacca con artigli d’ombra che colpiscono con gran forza. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	shadowforce: {
		name: "Oscurotuffo",
		// Official flavor text: "Chi la usa sparisce e poi colpisce il bersaglio al turno successivo. Colpisce anche un Pokémon che ha usato Protezione, Individua o simili."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  La protezione di {TARGET} è stata infranta!",
		prepare: "{POKEMON} sparisce improvvisamente!",
	},
	shadowpunch: {
		name: "Pugnodombra",
		shortDesc: null, // NEEDS TRANSLATION
	},
	shadowsneak: {
		name: "Furtivombra",
		// Official flavor text: "Chi la usa estende la sua ombra e attacca il nemico alle spalle. Questa mossa ha priorità alta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	shadowstrike: {
		name: null, // NEEDS TRANSLATION: not in PokeAPI
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sharpen: {
		name: "Affilatore",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	shatteredpsyche: {
		name: "Impatto Psicocinetico",
		shortDesc: null, // NEEDS TRANSLATION
	},
	shedtail: {
		name: "Tagliacoda",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} si taglia la coda e ne fa un sostituto!",
		alreadyStarted: "#substitute",
		fail: "#substitute",
	},
	sheercold: {
		name: "Purogelo",
		// Official flavor text: "Il bersaglio esaurisce i PS in un colpo solo. Se viene usata da Pokémon che non sono di tipo Ghiaccio, difficilmente va a segno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	shellsidearm: {
		name: "Armaguscio",
		// Official flavor text: "Il Pokémon esegue un attacco fisico o speciale, in base a quale causa danni maggiori. Può anche avvelenare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	shellsmash: {
		name: "Gettaguscio",
		// Official flavor text: "Chi la usa si disfa del guscio. Difesa e Difesa Speciale calano, ma aumentano di molto Attacco, Attacco Speciale e Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	shelltrap: {
		name: "Gusciotrappola",
		// Official flavor text: "Il guscio del Pokémon diventa una trappola. Se un nemico lo colpisce con una mossa fisica, innesca un’esplosione e subisce dei danni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} ha preparato la Gusciotrappola!",
		prepare: "  {POKEMON} ha preparato la Gusciotrappola!",
		cant: "La Gusciotrappola di {POKEMON} non si è attivata!",
	},
	shelter: {
		name: "Barricata",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	shiftgear: {
		name: "Cambiomarcia",
		// Official flavor text: "Facendo ruotare gli ingranaggi, chi la usa aumenta non solo il proprio Attacco, ma anche di molto la propria Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	shockwave: {
		name: "Ondashock",
		shortDesc: null, // NEEDS TRANSLATION
	},
	shoreup: {
		name: "Sabbiaccumulo",
		// Official flavor text: "Chi la usa recupera metà dei propri PS massimi. Durante le tempeste di sabbia ne recupera di più."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	signalbeam: {
		name: "Segnoraggio",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	silktrap: {
		name: "Telatrappola",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	silverwind: {
		name: "Ventargenteo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	simplebeam: {
		name: "Ondisinvolta",
		// Official flavor text: "Chi la usa emette un misterioso raggio psichico che trasforma l’abilità del Pokémon colpito in Disinvoltura."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sing: {
		name: "Canto",
		shortDesc: null, // NEEDS TRANSLATION
	},
	sinisterarrowraid: {
		name: "Dardoassalto Spettrale",
		shortDesc: null, // NEEDS TRANSLATION
	},
	sizzlyslide: {
		name: "Fiammabam",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sketch: {
		name: "Schizzo",
		// Official flavor text: "Permette a chi la usa di imparare l’ultima mossa usata dal bersaglio. La nuova mossa appresa sostituisce Schizzo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} disegna uno schizzo della mossa {MOVE}!",
	},
	skillswap: {
		name: "Baratto",
		// Official flavor text: "Chi la usa sfrutta i suoi poteri psichici per scambiare l’abilità con il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} scambia la sua abilità con il bersaglio!",
	},
	skittersmack: {
		name: "Strisciacolpo",
		// Official flavor text: "Chi la usa attacca il bersaglio strisciandogli alle spalle e riducendo il suo Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	skullbash: {
		name: "Capocciata",
		// Official flavor text: "Chi la usa ritira la testa per aumentare la Difesa e poi attacca al turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} abbassa la testa!",
	},
	skyattack: {
		name: "Aeroattacco",
		// Official flavor text: "Attacco in due turni e probabile brutto colpo. Può anche far tentennare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} è avvolto da una luce intensa!",
	},
	skydrop: {
		name: "Cadutalibera",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "{POKEMON} trascina in aria {TARGET}!",
		end: "  {POKEMON} si libera da Cadutalibera!",
		failSelect: "{POKEMON} non può muoversi a causa di Cadutalibera!",
		failTooHeavy: "  {POKEMON} è troppo pesante e non può essere trascinato in aria!",
	},
	skyuppercut: {
		name: "Stramontante",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	slackoff: {
		name: "Pigro",
		// Official flavor text: "Chi la usa si rilassa recuperando metà dei propri PS massimi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	slam: {
		name: "Schianto",
		shortDesc: null, // NEEDS TRANSLATION
	},
	slash: {
		name: "Lacerazione",
		// Official flavor text: "Attacca il bersaglio con artigli, falci o altro. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sleeppowder: {
		name: "Sonnifero",
		shortDesc: null, // NEEDS TRANSLATION
	},
	sleeptalk: {
		name: "Sonnolalia",
		// Official flavor text: "Chi la usa sferra a caso una delle proprie mosse mentre sta dormendo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sludge: {
		name: "Fango",
		// Official flavor text: "Chi la usa lancia fango malsano sul bersaglio. Può anche avvelenarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	sludgebomb: {
		name: "Fangobomba",
		// Official flavor text: "Chi la usa lancia fango malsano sul bersaglio. Può anche avvelenarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sludgewave: {
		name: "Fangonda",
		// Official flavor text: "Lancia un’onda di fango che attacca tutti i Pokémon nelle vicinanze. Può anche avvelenarli."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	smackdown: {
		name: "Abbattimento",
		// Official flavor text: "Chi la usa lancia una pietra o un proiettile. Può colpire anche un bersaglio in volo e farlo cadere."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} si schianta al suolo!",
	},
	smartstrike: {
		name: "Sottilcorno",
		shortDesc: null, // NEEDS TRANSLATION
	},
	smellingsalts: {
		name: "Maniereforti",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	smog: {
		name: "Smog",
		// Official flavor text: "Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	smokescreen: {
		name: "Muro di Fumo",
		// Official flavor text: "Nuvola di fumo o inchiostro che riduce la precisione del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	snaptrap: {
		name: "Tagliola",
		// Official flavor text: "Chi la usa intrappola il bersaglio in una tagliola e lo attacca per quattro o cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è rimasto incastrato nella Tagliola!",
	},
	snarl: {
		name: "Urlorabbia",
		// Official flavor text: "Chi la usa si mette a urlare per un po’, riducendo l’Attacco Speciale dei nemici intorno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	snatch: {
		name: "Scippo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} aspetta la mossa del bersaglio!",
		activate: "  {POKEMON} ruba la mossa di {TARGET} con Scippo!",
	},
	snipeshot: {
		name: "Tiromirato",
		// Official flavor text: "Permette di attaccare un bersaglio ignorando gli effetti di mosse e abilità che attirano altre mosse."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	snore: {
		name: "Russare",
		// Official flavor text: "Mossa che può essere usata solo mentre si dorme. Il chiasso assordante può anche far tentennare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	snowscape: {
		name: "Vista Innevata",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	soak: {
		name: "Inondazione",
		// Official flavor text: "Chi la usa proietta un lungo getto d’acqua contro il bersaglio e lo rende un Pokémon di tipo Acqua."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	softboiled: {
		name: "Covauova",
		// Official flavor text: "Chi la usa recupera metà dei propri PS massimi."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	solarbeam: {
		name: "Solarraggio",
		// Official flavor text: "Chi la usa assorbe luce al primo turno per proiettare un raggio intenso al turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		prepare: "  {POKEMON} assorbe la luce!",
	},
	solarblade: {
		name: "Lama Solare",
		// Official flavor text: "Chi la usa assorbe la luce condensandola in una lama al primo turno per poi attaccare al turno successivo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		prepare: "#solarbeam",
	},
	sonicboom: {
		name: "Sonicboom",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	soulstealing7starstrike: {
		name: "Colpo Eptastellare Rubanima",
		shortDesc: null, // NEEDS TRANSLATION
	},
	spacialrend: {
		name: "Fendispazio",
		// Official flavor text: "Chi la usa lacera il bersaglio e lo spazio che lo circonda. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	spark: {
		name: "Scintilla",
		// Official flavor text: "Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sparklingaria: {
		name: "Canto Effimero",
		// Official flavor text: "Chi la usa si mette a cantare emettendo tanti palloncini d’acqua. I Pokémon che subiscono danni da questa mossa guariscono dalle scottature."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	sparklyswirl: {
		name: "Sbrilluccibufera",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	spectralthief: {
		name: "Ombrafurto",
		// Official flavor text: "Chi la usa ruba gli aumenti delle statistiche del bersaglio, poi si nasconde nella sua ombra e lo attacca."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		clearBoost: "  {SOURCE} ha rubato gli aumenti delle statistiche!",
	},
	speedswap: {
		name: "Velociscambio",
		// Official flavor text: "Chi la usa scambia la propria Velocità con quella del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  {POKEMON} scambia la sua Velocità con quella del bersaglio!",
	},
	spicyextract: {
		name: "Essenza Piccante",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	spiderweb: {
		name: "Ragnatela",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	spikecannon: {
		name: "Sparalance",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	spikes: {
		name: "Punte",
		// Official flavor text: "Chi la usa piazza sul terreno una trappola di punte che danneggia i nemici quando scendono in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  Ai piedi di {TEAM} c’è una trappola di punte!",
		end: "  Ai piedi di {TEAM} non c’è più la trappola di punte!",
		damage: "  {POKEMON} è colpito dalle punte!",
	},
	spikyshield: {
		name: "Agodifesa",
		// Official flavor text: "Protegge dagli attacchi, riducendo inoltre i PS dei Pokémon che entrano in contatto con chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		damage: "  {POKEMON} subisce dei danni!",
	},
	spinout: {
		name: "Slittaruote",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	spiritbreak: {
		name: "Frantumanima",
		// Official flavor text: "Chi la usa attacca il bersaglio con un tale impeto da fargli perdere la voglia di lottare e ne riduce l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	spiritshackle: {
		name: "Cucitura d’Ombra",
		// Official flavor text: "Chi la usa attacca il bersaglio e fissa la sua ombra a terra impedendogli di fuggire."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	spite: {
		name: "Dispetto",
		// Official flavor text: "Chi la usa sfoga la propria rabbia sull’ultima mossa usata dal bersaglio e le sottrae quattro PP."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  La mossa {MOVE} di {TARGET} perde {NUMBER} PP!",
	},
	spitup: {
		name: "Sfoghenergia",
		// Official flavor text: "Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	splash: {
		name: "Splash",
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  Ma non succede nulla!",
	},
	splinteredstormshards: {
		name: "Litotempesta Radiale",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	splishysplash: {
		name: "Surfasplash",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	spore: {
		name: "Spora",
		shortDesc: null, // NEEDS TRANSLATION
	},
	spotlight: {
		name: "Riflettore",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "#followme",
		startFromZEffect: "#followme",
	},
	springtidestorm: {
		name: "Tempesta Zefirea",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stealthrock: {
		name: "Levitoroccia",
		// Official flavor text: "Chi la usa piazza una trappola di rocce sospese che danneggia i nemici che entrano in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {TEAM:capitalize} è circondata da rocce aguzze sospese in aria!",
		end: "  Levitoroccia non ha più effetto su {TEAM}!",
		damage: "  Rocce aguzze colpiscono {POKEMON}!",
	},
	steameruption: {
		name: "Vaporscoppio",
		// Official flavor text: "Travolge il bersaglio con un’ondata di vapore rovente che può anche scottarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	steamroller: {
		name: "Rulloduro",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	steelbeam: {
		name: "Raggio d’Acciaio",
		// Official flavor text: "Chi la usa utilizza l’acciaio del proprio corpo per sparare un violento raggio, ma subisce danni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		damage: "#mindblown",
	},
	steelroller: {
		name: "Ferrorullo",
		// Official flavor text: "Chi la usa attacca eliminando lo stato del terreno di lotta. La mossa fallisce se nel terreno non è attivo alcuno stato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	steelwing: {
		name: "Alacciaio",
		// Official flavor text: "Colpisce il bersaglio con ali d’acciaio. Può anche aumentare la Difesa di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stickyweb: {
		name: "Rete Vischiosa",
		// Official flavor text: "Chi la usa intreccia una rete appiccicosa attorno alla squadra avversaria, diminuendo la Velocità dei Pokémon nemici che entreranno in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Una Rete Vischiosa viene stesa ai piedi di {TEAM}!",
		end: "  La Rete Vischiosa ai piedi di {TEAM} svanisce!",
		activate: "  {POKEMON} rimane impigliato nella Rete Vischiosa!",
	},
	stockpile: {
		name: "Accumulo",
		// Official flavor text: "Chi la usa accumula energia aumentando la Difesa e la Difesa Speciale. Si può utilizzare tre volte."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} ha usato Accumulo per la {NUMBER}ª volta!",
		end: "  L’effetto della mossa Accumulo di {POKEMON} è terminato!",
	},
	stokedsparksurfer: {
		name: "Elettrosurf Folgorante",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stomp: {
		name: "Pestone",
		// Official flavor text: "Colpisce il bersaglio con un grosso piede e può anche farlo tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	stompingtantrum: {
		name: "Battipiedi",
		// Official flavor text: "Chi la usa attacca battendo i piedi per la rabbia. Se la mossa usata al turno precedente non è andata a segno, la potenza raddoppia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stoneaxe: {
		name: "Rocciascure",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stoneedge: {
		name: "Pietrataglio",
		// Official flavor text: "Chi la usa colpisce il bersaglio dal basso con pietre affilate. Probabile brutto colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	storedpower: {
		name: "Veicolaforza",
		// Official flavor text: "Attacca il bersaglio con l’energia accumulata. Più sono state aumentate le statistiche, maggiore è il danno inflitto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stormthrow: {
		name: "Tempestretta",
		// Official flavor text: "Chi la usa sferra un colpo micidiale al bersaglio. Brutto colpo assicurato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	strangesteam: {
		name: "Vapore Incantato",
		// Official flavor text: "Chi la usa attacca il bersaglio con getti di vapore che possono anche confonderlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	strength: {
		name: "Forza",
		shortDesc: null, // NEEDS TRANSLATION
	},
	strengthsap: {
		name: "Assorbiforza",
		// Official flavor text: "Fa recuperare una quantità di PS pari all’Attacco del bersaglio, che vedrà diminuire questa statistica."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stringshot: {
		name: "Millebave",
		// Official flavor text: "Chi la usa produce della seta che avvolge i nemici intorno e ne riduce di molto la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	struggle: {
		name: "Scontro",
		// Official flavor text: "Mossa da usare solo in caso estremo, quando non si hanno più PP. Danneggia anche chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	strugglebug: {
		name: "Entomoblocco",
		// Official flavor text: "Colpisce i nemici intorno opponendo resistenza e riducendo il loro Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	stuffcheeks: {
		name: "Riempiguance",
		// Official flavor text: "Se chi la usa ha con sé una bacca, la mangia e la sua Difesa aumenta di molto."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	stunspore: {
		name: "Paralizzante",
		// Official flavor text: "Investe il bersaglio con una nuvola di polvere che paralizza."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	submission: {
		name: "Sottomissione",
		// Official flavor text: "Chi la usa carica il bersaglio in modo spericolato, ma danneggia anche se stesso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	substitute: {
		name: "Sostituto",
		// Official flavor text: "Chi la usa crea una copia di se stesso usando alcuni PS. La copia serve come esca per il nemico."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  Appare un sostituto di {POKEMON}!",
		alreadyStarted: "  {POKEMON} ha già un sostituto!",
		end: "  Il sostituto di {POKEMON} svanisce!",
		fail: "  È troppo debole! Non può creare un sostituto!",
		activate: "  Il sostituto viene colpito al posto di {POKEMON}!",
	},
	subzeroslammer: {
		name: "Criodistruzione Polare",
		shortDesc: null, // NEEDS TRANSLATION
	},
	suckerpunch: {
		name: "Sbigoattacco",
		// Official flavor text: "Chi la usa attacca con alta priorità, ma fallisce se il bersaglio non sta preparando un attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sunnyday: {
		name: "Giornodisole",
		// Official flavor text: "Chi la usa intensifica i raggi solari per cinque turni, potenziando le mosse di tipo Fuoco e riducendo la potenza di quelle di tipo Acqua."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sunsteelstrike: {
		name: "Astrocarica",
		// Official flavor text: "Chi la usa travolge il bersaglio con la potenza di una meteora. Questo attacco ignora l’abilità del bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	supercellslam: {
		name: "Elettrotuffo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		damage: "#crash",
	},
	superfang: {
		name: "Superzanna",
		// Official flavor text: "Chi la usa salta sul bersaglio azzannandolo con i suoi incisivi affilati e facendogli perdere metà dei PS."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	superpower: {
		name: "Troppoforte",
		// Official flavor text: "Chi la usa attacca il bersaglio con grande forza, ma il suo Attacco e la sua Difesa diminuiscono."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	supersonic: {
		name: "Supersuono",
		shortDesc: null, // NEEDS TRANSLATION
	},
	supersonicskystrike: {
		name: "Picchiata Devastante",
		shortDesc: null, // NEEDS TRANSLATION
	},
	surf: {
		name: "Surf",
		// Official flavor text: "Un’onda enorme sommerge il campo di lotta, colpendo tutti i Pokémon intorno a chi la scatena."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	surgingstrikes: {
		name: "Idroraffica",
		// Official flavor text: "Il Pokémon sferra una fluida serie di tre attacchi, massima espressione dello stile di tipo Acqua. Brutto colpo assicurato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	swagger: {
		name: "Bullo",
		// Official flavor text: "Chi la usa provoca il bersaglio e lo confonde, facendo aumentare però di molto il suo Attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	swallow: {
		name: "Introenergia",
		// Official flavor text: "Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	sweetkiss: {
		name: "Dolcebacio",
		shortDesc: null, // NEEDS TRANSLATION
	},
	sweetscent: {
		name: "Profumino",
		// Official flavor text: "Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	swift: {
		name: "Comete",
		// Official flavor text: "Chi la usa colpisce i nemici intorno con raggi a forma di stella. Questo attacco è infallibile."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	switcheroo: {
		name: "Rapidscambio",
		// Official flavor text: "Chi la usa scambia lo strumento che ha con quello del bersaglio a una velocità impressionante."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "#trick",
	},
	swordsdance: {
		name: "Danzaspada",
		// Official flavor text: "Danza frenetica che incrementa lo spirito combattivo. Chi la usa aumenta di molto il suo Attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	synchronoise: {
		name: "Sincrumore",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	synthesis: {
		name: "Sintesi",
		// Official flavor text: "Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	syrupbomb: {
		name: "Bomba Sciroppata",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} è ricoperto di sciroppo!",
	},
	tackle: {
		name: "Azione",
		shortDesc: null, // NEEDS TRANSLATION
	},
	tachyoncutter: {
		name: "Tachiontaglio",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	tailglow: {
		name: "Codadiluce",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tailslap: {
		name: "Spazzasberla",
		// Official flavor text: "Chi la usa colpisce il bersaglio con la sua coda dura da due a cinque volte di fila."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	tailwhip: {
		name: "Colpocoda",
		// Official flavor text: "Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tailwind: {
		name: "Ventoincoda",
		// Official flavor text: "Chi la usa scatena un turbine che aumenta la Velocità di tutti i Pokémon della squadra per quattro turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  Comincia a soffiare Ventoincoda su {TEAM}!",
		end: "  Ventoincoda non soffia più su {TEAM}!",
	},
	takedown: {
		name: "Riduttore",
		// Official flavor text: "Carica spericolata con tutto il corpo contro il bersaglio. Danneggia un po’ anche chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	takeheart: {
		name: "Baldimpulso",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	tarshot: {
		name: "Colpocatrame",
		// Official flavor text: "Chi la usa getta catrame appiccicoso sul bersaglio abbassandone la Velocità e rendendolo vulnerabile al tipo Fuoco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} è diventato vulnerabile al tipo Fuoco!",
	},
	taunt: {
		name: "Provocazione",
		// Official flavor text: "Provoca il bersaglio inducendolo a usare solo mosse d’attacco per tre turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è in balia di Provocazione!",
		end: "  Provocazione non ha più effetto su {POKEMON}!",
		cant: "A causa di Provocazione {POKEMON} non può usare {MOVE}!",
	},
	tearfullook: {
		name: "Occhionilucidi",
		// Official flavor text: "Chi la usa guarda il bersaglio con gli occhi pieni di lacrime e gli fa perdere lo spirito combattivo, riducendone l’Attacco e l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	teatime: {
		name: "Ora del Tè",
		// Official flavor text: "Chi la usa invita tutti i Pokémon in campo a prendere il tè. Quelli che hanno con sé una bacca la mangiano."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  È l’ora del tè e tutti mangiano la loro bacca!",
		fail: "  Ma non succede nulla!",
	},
	technoblast: {
		name: "Tecnobotto",
		// Official flavor text: "Chi la usa rilascia un colpo di luce contro il bersaglio. Il tipo varia a seconda del modulo che ha."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	tectonicrage: {
		name: "Furore della Terra",
		shortDesc: null, // NEEDS TRANSLATION
	},
	teeterdance: {
		name: "Strampadanza",
		// Official flavor text: "Chi la usa esegue una danza goffa che confonde tutti i Pokémon attorno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	telekinesis: {
		name: "Telecinesi",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è stato lanciato in aria!",
		end: "  {POKEMON} si libera dalla telecinesi!",
	},
	teleport: {
		name: "Teletrasporto",
		// Official flavor text: "Chi la usa viene sostituito se ci sono altri Pokémon in squadra. Se un Pokémon selvatico usa questa mossa, fugge dalla lotta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7letsgo: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	temperflare: {
		name: "Rabbia Bruciante",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	terablast: {
		name: "Terascoppio",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	terastarstorm: {
		name: "Teracluster",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	terrainpulse: {
		name: "Campopulsar",
		// Official flavor text: "Chi la usa attacca sfruttando l’energia del terreno di lotta. Il tipo e la potenza della mossa variano a seconda dello stato del terreno stesso."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	thief: {
		name: "Furto",
		// Official flavor text: "Chi la usa attacca il bersaglio e può rubargli lo strumento, se non ne ha già uno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	thousandarrows: {
		name: "Mille Frecce",
		// Official flavor text: "Colpisce i nemici intorno scaraventando a terra quelli che si trovano in aria."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	thousandwaves: {
		name: "Mille Onde",
		// Official flavor text: "Un’onda strisciante investe i nemici intorno impedendo loro di fuggire."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	thrash: {
		name: "Colpo",
		// Official flavor text: "Assale e attacca il nemico per due o tre turni, ma confonde chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	throatchop: {
		name: "Colpo Infernale",
		// Official flavor text: "Chi viene colpito da questa mossa prova un dolore lancinante e non può più usare mosse basate sul suono per due turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},

		cant: "Colpo Infernale impedisce {POKEMON:a} di usare la mossa!",
	},
	thunder: {
		name: "Tuono",
		// Official flavor text: "Il bersaglio è colpito da un fulmine molto violento che può anche paralizzarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	thunderbolt: {
		name: "Fulmine",
		// Official flavor text: "Il bersaglio viene colpito da una potente scarica elettrica che può anche paralizzarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	thundercage: {
		name: "Elettrogabbia",
		// Official flavor text: "Il Pokémon attacca il bersaglio imprigionandolo in una gabbia di elettricità, che sprigiona corrente per quattro o cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {SOURCE} intrappola {POKEMON}!",
	},
	thunderclap: {
		name: "Saetta",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	thunderfang: {
		name: "Fulmindenti",
		// Official flavor text: "Chi la usa morde con denti elettrificati che possono anche paralizzare o far tentennare il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	thunderouskick: {
		name: "Calcio Tonante",
		// Official flavor text: "Il Pokémon sferra calci al bersaglio dopo averlo distratto con movimenti fulminei, riducendone la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	thunderpunch: {
		name: "Tuonopugno",
		// Official flavor text: "Colpisce il bersaglio con un pugno elettrico che può paralizzarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	thundershock: {
		name: "Tuonoshock",
		// Official flavor text: "Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	thunderwave: {
		name: "Tuononda",
		// Official flavor text: "Colpisce il bersaglio con una debole scarica elettrica che lo paralizza."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	tickle: {
		name: "Solletico",
		// Official flavor text: "Chi la usa solletica il bersaglio e lo fa ridere, riducendo il suo Attacco e la sua Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	tidyup: {
		name: "Pulizie",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  Le pulizie sono terminate!",
	},
	topsyturvy: {
		name: "Sottosopra",
		// Official flavor text: "Inverte tutte le modifiche alle statistiche del Pokémon bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	torchsong: {
		name: "Canzone Ardente",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	torment: {
		name: "Attaccalite",
		// Official flavor text: "Chi la usa tormenta e fa infuriare il bersaglio, impedendogli di usare la stessa mossa due volte di seguito."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} subisce Attaccalite!",
		end: "  L’effetto di Attaccalite su {POKEMON} è terminato!",
	},
	toxic: {
		name: "Tossina",
		// Official flavor text: "Iperavvelena il bersaglio con una potente tossina. Il danno peggiora a ogni turno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	toxicspikes: {
		name: "Fielepunte",
		// Official flavor text: "Chi la usa piazza una trappola di punte che avvelenano i nemici che scendono in campo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  Ai piedi di {TEAM} c’è una trappola di punte velenose!",
		end: "  Ai piedi di {TEAM} non c’è più la trappola di punte velenose!",
	},
	toxicthread: {
		name: "Velenotela",
		// Official flavor text: "Avvelena il bersaglio avvolgendolo con filamenti tossici e ne riduce la Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
			shortDesc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
	},
	trailblaze: {
		name: "Apripista",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	transform: {
		name: "Trasformazione",
		// Official flavor text: "Chi la usa si trasforma in una copia esatta del bersaglio per sfruttarne le mosse."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},

		transform: "{POKEMON} assume le sembianze di {SPECIES}!",
	},
	triattack: {
		name: "Tripletta",
		// Official flavor text: "Colpisce il bersaglio con tre raggi di luce che possono paralizzarlo, scottarlo o congelarlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	trick: {
		name: "Raggiro",
		// Official flavor text: "Chi la usa coglie il bersaglio in contropiede e lo obbliga a cambiare il suo strumento con il proprio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		champions: {
			desc: null, // NEEDS TRANSLATION: not in PokeAPI
		},
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		activate: "  {POKEMON} scambia il suo strumento con quello del bersaglio!",
	},
	trickortreat: {
		name: "Halloween",
		// Official flavor text: "Il bersaglio viene invitato a festeggiare Halloween e aggiunge così al proprio tipo anche il tipo Spettro."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	trickroom: {
		name: "Distortozona",
		// Official flavor text: "Chi la usa crea una dimensione in cui i Pokémon più lenti agiscono per primi per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	triplearrows: {
		name: "Triplodardo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	tripleaxel: {
		name: "Triplo Axel",
		// Official flavor text: "Chi la usa sferra fino a tre calci consecutivi la cui potenza aumenta a ogni colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	tripledive: {
		name: "Triplo Tuffo",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	triplekick: {
		name: "Triplocalcio",
		// Official flavor text: "Chi la usa sferra fino a tre calci consecutivi la cui potenza aumenta a ogni colpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	tropkick: {
		name: "Tropicalcio",
		// Official flavor text: "Chi la usa colpisce il bersaglio con un potente calcio sfruttando una tecnica originaria dei paesi tropicali e ne riduce l’Attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	trumpcard: {
		name: "Asso",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	twinbeam: {
		name: "Doppioraggio",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	twineedle: {
		name: "Doppio Ago",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	twinkletackle: {
		name: "Astroimpatto Fatato",
		shortDesc: null, // NEEDS TRANSLATION
	},
	twister: {
		name: "Tornado",
		// Official flavor text: "Un potente tornado si abbatte sui nemici nei paraggi. Può anche farli tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	upperhand: {
		name: "Colpo di Mano",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	uproar: {
		name: "Baraonda",
		// Official flavor text: "Chi la usa attacca per tre turni con un frastuono che non fa dormire nessuno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} scatena una baraonda!",
		end: "  {POKEMON} si calma.",
		upkeep: "  {POKEMON} continua con la baraonda!",
		block: "  La baraonda impedisce che {POKEMON} si addormenti!",
		blockSelf: "  {POKEMON} non riesce a dormire a causa della baraonda!",
	},
	uturn: {
		name: "Retromarcia",
		// Official flavor text: "Chi usa questa mossa fa marcia indietro per farsi sostituire dopo aver sferrato l’attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},

		switchOut: "{POKEMON} torna d{TRAINER:a:definite}!",
	},
	vacuumwave: {
		name: "Vuotonda",
		// Official flavor text: "Chi la usa rotea i pugni per lanciare un’onda di vuoto assoluto verso il bersaglio. Questa mossa ha priorità alta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	vcreate: {
		name: "Generatore V",
		// Official flavor text: "Chi la usa carica emettendo fiamme ardenti dalla fronte, a costo di una riduzione di Difesa, Difesa Speciale e Velocità."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	veeveevolley: {
		name: "Eeveempatto",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	venomdrench: {
		name: "Velenotrappola",
		// Official flavor text: "Emette un liquido particolare che riduce l’Attacco, l’Attacco Speciale e la Velocità dei nemici avvelenati intorno a chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	venoshock: {
		name: "Velenoshock",
		// Official flavor text: "Lancia uno speciale liquido tossico sul bersaglio. Se questi è avvelenato, il danno provocato raddoppia."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	victorydance: {
		name: "Danzavittoria",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	vinewhip: {
		name: "Frustata",
		shortDesc: null, // NEEDS TRANSLATION
	},
	visegrip: {
		name: "Presa",
		shortDesc: null, // NEEDS TRANSLATION
	},
	vitalthrow: {
		name: "Vitaltiro",
		// Official flavor text: "Chi la usa attacca per ultimo, ma il colpo è sempre infallibile."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	voltswitch: {
		name: "Invertivolt",
		// Official flavor text: "Chi usa questa mossa si tira indietro per farsi sostituire dopo aver sferrato l’attacco."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},

		switchOut: "#uturn",
	},
	volttackle: {
		name: "Locomovolt",
		// Official flavor text: "Chi la usa si carica di elettricità e poi attacca. Può paralizzare il bersaglio. Il contraccolpo causa seri danni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wakeupslap: {
		name: "Svegliopacca",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	waterfall: {
		name: "Cascata",
		// Official flavor text: "Carica il bersaglio a grande velocità e può farlo tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	watergun: {
		name: "Pistolacqua",
		shortDesc: null, // NEEDS TRANSLATION
	},
	waterpledge: {
		name: "Acquapatto",
		// Official flavor text: "Attacca il bersaglio con una colonna d’acqua. Se usata con Fiammapatto, gli effetti aumentano e appare un arcobaleno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		activate: "  {POKEMON} attende {TARGET}...",
		start: "  Appare un arcobaleno su {TEAM}!",
		end: "  L’arcobaleno su {TEAM} scompare!",
	},
	waterpulse: {
		name: "Idropulsar",
		// Official flavor text: "Il bersaglio viene colpito da un getto d’acqua potentissimo che può anche confonderlo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	watershuriken: {
		name: "Acqualame",
		// Official flavor text: "Chi la usa attacca il bersaglio con degli shuriken di muco da due a cinque volte di fila. Questa mossa ha priorità alta."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	watersport: {
		name: "Docciascudo",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen5: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	waterspout: {
		name: "Zampillo",
		// Official flavor text: "Lancia un getto d’acqua contro il nemico che ha davanti e quelli adiacenti. La potenza è proporzionale al numero di PS di chi la usa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	wavecrash: {
		name: "Ondaschianto",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	weatherball: {
		name: "Palla Clima",
		// Official flavor text: "Mossa d’attacco il cui tipo e la cui potenza variano in base alle condizioni atmosferiche."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		move: "A causa delle condizioni atmosferiche, la mossa Carica Travolgente diventa {MOVE}!",
	},
	whirlpool: {
		name: "Mulinello",
		// Official flavor text: "Intrappola il bersaglio in un turbine d’acqua per quattro o cinque turni infliggendo danni a ogni turno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {POKEMON} è intrappolato nel mulinello!",
	},
	whirlwind: {
		name: "Turbine",
		// Official flavor text: "Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
		gen2: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	wickedblow: {
		name: "Pugnotenebra",
		// Official flavor text: "Il Pokémon sferra un singolo colpo potentissimo, massima espressione dello stile di tipo Buio. Brutto colpo assicurato."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	wickedtorque: {
		name: "Turbotenebra",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	wideguard: {
		name: "Bodyguard",
		// Official flavor text: "Chi la usa protegge sé e gli alleati da colpi ad ampio raggio per un turno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},

		start: "  {TEAM} è protetto da Bodyguard!",
		block: "  {POKEMON} è protetto da Bodyguard!",
	},
	wildboltstorm: {
		name: "Tempesta Tonante",
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	wildcharge: {
		name: "Sprizzalampo",
		// Official flavor text: "Chi la usa si carica di elettricità per poi scagliarsi sul bersaglio, ma subisce dei danni per il contraccolpo."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	willowisp: {
		name: "Fuocofatuo",
		// Official flavor text: "Fiamme sinistre e misteriose causano una scottatura al bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	wingattack: {
		name: "Attacco d’Ala",
		shortDesc: null, // NEEDS TRANSLATION
	},
	wish: {
		name: "Desiderio",
		// Official flavor text: "Quando un Pokémon la usa, al turno successivo la metà dei suoi PS massimi viene recuperata da lui stesso o dal Pokémon che lo sostituisce."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		heal: "  Il desiderio di {NICKNAME} si avvera!",
	},
	withdraw: {
		name: "Ritirata",
		// Official flavor text: "Il corpo si ritira nel suo duro guscio per aumentare la Difesa."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	wonderroom: {
		name: "Mirabilzona",
		// Official flavor text: "Chi la usa crea una dimensione in cui Difesa e Difesa Speciale di tutti i Pokémon vengono scambiate per cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	woodhammer: {
		name: "Mazzuolegno",
		// Official flavor text: "Chi la usa si lancia con tutto il corpo contro il bersaglio, ma subisce anche considerevoli danni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
	workup: {
		name: "Cuordileone",
		// Official flavor text: "Chi la usa si tira su di morale, aumentando il proprio Attacco e l’Attacco Speciale."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	worryseed: {
		name: "Affannoseme",
		// Official flavor text: "Un seme che causa ansia viene piantato sul bersaglio. Ne muta l’abilità in Insonnia e ne previene o rimuove il sonno."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen6: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	wrap: {
		name: "Avvolgibotta",
		// Official flavor text: "Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen8: {
			desc: null, // NEEDS TRANSLATION
		},
		gen7: {
			desc: null, // NEEDS TRANSLATION
		},
		gen5: {
			desc: null, // NEEDS TRANSLATION
		},
		gen4: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
		gen3: {
			desc: null, // NEEDS TRANSLATION
		},
		gen1: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},

		start: "  {SOURCE} stritola {POKEMON} con Avvolgibotta!",
		move: "{POKEMON} attacca ancora!",
	},
	wringout: {
		name: "Strizzata",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen4: {
			desc: null, // NEEDS TRANSLATION
		},
	},
	xscissor: {
		name: "Forbice X",
		shortDesc: null, // NEEDS TRANSLATION
	},
	yawn: {
		name: "Sbadiglio",
		// Official flavor text: "Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION

		start: "  {POKEMON} sta per assopirsi!",
	},
	zapcannon: {
		name: "Falcecannone",
		// Official flavor text: "Chi la usa scaglia una sfera elettrica che infligge danni e paralizza il bersaglio."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	zenheadbutt: {
		name: "Cozzata Zen",
		// Official flavor text: "Chi la usa concentra le energie psichiche nella testa e si lancia contro il bersaglio. Può anche farlo tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	zingzap: {
		name: "Elettropizzico",
		// Official flavor text: "Chi la usa colpisce il bersaglio investendolo con una potente scarica elettrica che può anche farlo tentennare."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
	},
	zippyzap: {
		name: "Sprintaboom",
		// Official flavor text: "Questa mossa non può essere usata. È consigliabile farla dimenticare al Pokémon. Tuttavia, una volta dimenticata, non potrà più essere ricordata."
		desc: null, // NEEDS TRANSLATION
		shortDesc: null, // NEEDS TRANSLATION
		gen7: {
			desc: null, // NEEDS TRANSLATION
			shortDesc: null, // NEEDS TRANSLATION
		},
	},
};
