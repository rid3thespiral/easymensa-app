package database;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

public class Database {

	String nome = "database.txt";
	ArrayList<String> menu;
	HashMap<String,HashMap<String,HashMap<String,HashMap<Orario,Statistiche>>>> dati;
 	
	public Database() {
		
		ObjectInputStream database = null;
		
        try {
        	
        	//Leggo da file 
			database = new ObjectInputStream(new FileInputStream(nome));
			
			this.dati =  (HashMap<String, HashMap<String, HashMap<String, HashMap<Orario, Statistiche>>>>) database.readObject();
			this.menu =  (ArrayList<String>) database.readObject();
			
			
		} catch (IOException e) {
			
			this.dati = new HashMap<>();
			this.menu = new ArrayList<String>();
						
			try {
				
				//iniziallizzo il databasei se non esiste il file
				ObjectOutputStream database_new = new ObjectOutputStream(new FileOutputStream(nome));
				
				database_new.writeObject(this.dati);
				database_new.writeObject(this.menu);

				
				System.out.println("DATABASE CREATED");
				
				database_new.close();
			
			} catch (FileNotFoundException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}

			
		} catch (ClassNotFoundException e) {
			
			this.dati = new HashMap<>();
			this.menu = new ArrayList<String>();
						
			try {
				
				//iniziallizzo il databasei se il file è vuoto
				ObjectOutputStream database_new = new ObjectOutputStream(new FileOutputStream(nome));
				
				database_new.writeObject(this.dati);
				database_new.writeObject(this.menu);

				
				System.out.println("DATABASE CREATED");
				
				database_new.close();
			
			} catch (FileNotFoundException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			
		} finally {
			try {
				if(database != null)
					database.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}

	public void putStatistic(String anno,String mese,String giorno,Orario o,Statistiche stat) {
		
		if(this.dati.containsKey(anno)) {
			
			if(this.dati.get(anno).containsKey(mese)) {
				
				if(this.dati.get(anno).get(mese).containsKey(giorno)) {
					
					this.dati.get(anno).get(mese).get(giorno).put(o, stat);
					
				}else {
					
					HashMap<Orario,Statistiche> mapOrari = new HashMap<>();
					mapOrari.put(o, stat);
					
					this.dati.get(anno).get(mese).put(giorno, mapOrari);
					
				}
				
			}else {
				
				HashMap<Orario,Statistiche> mapOrari = new HashMap<>();
				mapOrari.put(o, stat);
				
				HashMap<String,HashMap<Orario,Statistiche>> mapGiorni = new HashMap<>();
				mapGiorni.put(giorno, mapOrari);
				
				this.dati.get(mese).put(mese, mapGiorni);
				
			}
			
		}else {
			HashMap<Orario,Statistiche> mapOrari = new HashMap<>();
			mapOrari.put(o, stat);
			
			HashMap<String,HashMap<Orario,Statistiche>> mapGiorni = new HashMap<>();
			mapGiorni.put(giorno, mapOrari);
			
			HashMap<String,HashMap<String,HashMap<Orario,Statistiche>>> mapMesi = new HashMap<>();
			mapMesi.put(mese, mapGiorni);
			
			this.dati.put(anno, mapMesi);
			
		}
		
	}
	
	public Statistiche getStatisticFromData(String anno,String mese,String giorno,Orario o) {
		return this.dati.get(anno).get(mese).get(giorno).get(o);
	}
	
	public HashMap<Orario,Statistiche> getStatisticFromGiorno(String anno,String mese,String giorno){ 
		return this.dati.get(anno).get(mese).get(giorno);
	}
	
	public HashMap<String,Statistiche> getStatisticFromMese(String anno,String mese){ 
		
		HashMap<String,Statistiche> dati_new = new HashMap<>();
		
		//iteratore giorni
		Iterator<String> it = this.dati.get(anno).get(mese).keySet().iterator();
		
		while(it.hasNext()) {
			
			String nextGiorno = it.next();
			
			Iterator<Orario> orari = this.dati.get(anno).get(mese).get(nextGiorno).keySet().iterator();
			
			int stima = 0;
			int nCampioni = 0;  
			while(orari.hasNext()){
				nCampioni++;
				Orario nextOrario = orari.next();
				Statistiche stat = this.dati.get(anno).get(mese).get(nextGiorno).get(nextOrario);
				stima+= stat.numeroPersone;
			}
			stima = stima/nCampioni;
			Statistiche stat_new = new Statistiche(stima);
				
			dati_new.put(nextGiorno, stat_new);
			
		}
		
		return dati_new;

	}
		
	public HashMap<String,Statistiche> getStatisticFromAnno(String anno){ 
		
		HashMap<String,Statistiche> dati_new = new HashMap<>();
		
		//iteratore giorni
		Iterator<String> mesi = this.dati.get(anno).keySet().iterator();
		
		while(mesi.hasNext()) {
			
			String nextMese = mesi.next();
			
			Iterator<String> giorni = this.dati.get(anno).get(nextMese).keySet().iterator();
			
			int stima = 0;
			int nCampioni = 0; 
			while(giorni.hasNext()) {
				
				String nextGiorno = giorni.next();
				
				Iterator<Orario> orari = this.dati.get(anno).get(nextMese).get(nextGiorno).keySet().iterator();
				
				while(orari.hasNext()){
					nCampioni++;
					Orario nextOrario = orari.next();
					Statistiche stat = this.dati.get(anno).get(nextMese).get(nextGiorno).get(nextOrario);
					stima+= stat.numeroPersone;
				}
				
			}
			stima = stima/nCampioni;
			Statistiche stat_new = new Statistiche(stima);
				
			dati_new.put(nextMese, stat_new);
		}
		
		return dati_new;

	}

	
	
	
}
