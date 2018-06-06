package easyMensaServer;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Date;
import java.util.Deque;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Iterator;

public class Database {
	
	String nome = "database.txt";
	
	int numeroPersonaRealTime;
	int tempoAttesaRealTime;

	ArrayList<String> menu;
	HashMap<Integer,HashMap<Integer,HashMap<Integer,Deque<Statistiche>>>> dati;
 	
	public Database() {
		
		ObjectInputStream database = null;
		
        try {
        	
        	//Leggo da file 
			database = new ObjectInputStream(new FileInputStream(nome));
			
			this.numeroPersonaRealTime = (int) database.readInt();
			this.tempoAttesaRealTime = (int) database.readInt();
			this.dati =  (HashMap<Integer, HashMap<Integer, HashMap<Integer, Deque<Statistiche>>>>) database.readObject();
			this.menu =  (ArrayList<String>) database.readObject();
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
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
	
	private void updateDatabase() {
		
		ObjectOutputStream database_new;
		try {
			database_new = new ObjectOutputStream(new FileOutputStream(nome));
			database_new.writeInt(this.numeroPersonaRealTime);
			database_new.writeInt(this.tempoAttesaRealTime);
			database_new.writeObject(this.dati);
			database_new.writeObject(this.menu);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	public void putStatistic(int anno,int mese,int giorno,Statistiche stat) {
		
		this.numeroPersonaRealTime = stat.getNumeroPersone();
		this.tempoAttesaRealTime = stat.getTempoAttesa();
		
		if(this.dati.containsKey(anno)) {
			
			if(this.dati.get(anno).containsKey(mese)) {
				
				if(this.dati.get(anno).get(mese).containsKey(giorno)) {
					
					this.dati.get(anno).get(mese).get(giorno).push(stat);;
					
				}else {
					
					Deque<Statistiche> stack = new ArrayDeque<>();
					stack.push(stat);
					
					this.dati.get(anno).get(mese).put(giorno, stack);
					
				}
				
			}else {
				
				Deque<Statistiche> stack = new ArrayDeque<>();
				stack.push(stat);
				
				HashMap<Integer,Deque<Statistiche>> mapGiorni = new HashMap<>();
				mapGiorni.put(giorno, stack);
				
				this.dati.get(mese).put(mese, mapGiorni);
				
			}
			
		}else {
			Deque<Statistiche> stack = new ArrayDeque<>();
			stack.push(stat);
			
			HashMap<Integer,Deque<Statistiche>> mapGiorni = new HashMap<>();
			mapGiorni.put(giorno, stack);
			
			HashMap<Integer,HashMap<Integer,Deque<Statistiche>>> mapMesi = new HashMap<>();
			mapMesi.put(mese, mapGiorni);
			
			this.dati.put(anno, mapMesi);
			
		}
		
		
		this.updateDatabase();
				
	}
	

	public int getNumeroPersoneRealTime() {

		return this.numeroPersonaRealTime;
	}
	
	public Deque<Statistiche> getStatisticFromGiorno(String anno,String mese,String giorno){ 
		return this.dati.get(anno).get(mese).get(giorno);
	}
	
	public HashMap<Integer,Statistiche> getStatisticFromMese(String anno,String mese){ 
		
		HashMap<Integer,Statistiche> dati_new = new HashMap<>();
		
		//iteratore giorni
		Iterator<Integer> it = this.dati.get(anno).get(mese).keySet().iterator();
		
		while(it.hasNext()) {
			
			int nextGiorno = it.next();
			
			Iterator<Statistiche> statistiche = this.dati.get(anno).get(mese).get(nextGiorno).iterator();
			
			int stima = 0;
			int nCampioni = 0;  
			while(statistiche.hasNext()){
				nCampioni++;
				Statistiche stat = statistiche.next();
				stima+= stat.getNumeroPersone();
			}
			stima = stima/nCampioni;
			
			Statistiche stat_new = new Statistiche(stima);
			dati_new.put(nextGiorno, stat_new);
			
		}
		
		return dati_new;

	}
		
	public HashMap<Integer,Statistiche> getStatisticFromAnno(String anno){ 
		
		HashMap<Integer,Statistiche> dati_new = new HashMap<>();
		
		//iteratore giorni
		Iterator<Integer> mesi = this.dati.get(anno).keySet().iterator();
		
		while(mesi.hasNext()) {
			
			int nextMese = mesi.next();
			
			Iterator<Integer> giorni = this.dati.get(anno).get(nextMese).keySet().iterator();
			
			int stima = 0;
			int nCampioni = 0; 
			while(giorni.hasNext()) {
				
				int nextGiorno = giorni.next();
				
				Iterator<Statistiche> statistiche = this.dati.get(anno).get(nextMese).get(nextGiorno).iterator();

				while(statistiche.hasNext()){
					nCampioni++;
					Statistiche stat = statistiche.next();
					stima+= stat.getNumeroPersone();
				}
				
			}
			stima = stima/nCampioni;
			Statistiche stat_new = new Statistiche(stima);
				
			dati_new.put(nextMese, stat_new);
		}
		
		return dati_new;

	}

	public void stampa() {
		
		ObjectInputStream database;
		int n = -1;
		int t = -1;
		ArrayList<String> m = null;
		HashMap<Integer, HashMap<Integer, HashMap<Integer, Deque<Statistiche>>>> d = null;
		try {
			database = new ObjectInputStream(new FileInputStream(nome));
			n = (int) database.readInt();
			t = (int) database.readInt();
			d =  (HashMap<Integer, HashMap<Integer, HashMap<Integer, Deque<Statistiche>>>>) database.readObject();
			m =  (ArrayList<String>) database.readObject();
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Iterator<Integer> itAnno = d.keySet().iterator();
		
		System.out.println("=======================================================================================");
		
		System.out.println("numero Persone real Time = " + this.getNumeroPersoneRealTime());
		System.out.println("Tempo di attesa real Time = " + t);

		
		while(itAnno.hasNext()) {
			
			int nextAnno = itAnno.next();
			System.out.println("\nAnno = " + nextAnno);
			Iterator<Integer> itMese = d.get(nextAnno).keySet().iterator();	
			
			while(itMese.hasNext()){
				
				int nextMese = itMese.next();
				System.out.println("\n--->Mese =" + nextMese);
				Iterator<Integer> itGiorno = d.get(nextAnno).get(nextMese).keySet().iterator();
				
				while(itGiorno.hasNext()) {
					
					int nextGiorno = itGiorno.next();
					System.out.println("\n-------->Giorno = " + nextGiorno);
					Iterator<Statistiche> itStatistiche = d.get(nextAnno).get(nextMese).get(nextGiorno).iterator();
					
					while(itStatistiche.hasNext()) {
						
						Statistiche statistiche = itStatistiche.next();
						System.out.println("\n--------------->Oario = " + statistiche.getOrario().getOra()+
								":"+statistiche.getOrario().getMinuti()+
								":"+statistiche.getOrario().getSecondi() +
								"  n° persone = "+ statistiche.getNumeroPersone()+
								"  attesa = "+statistiche.getTempoAttesa());
						
						
						
					}
				}
				
			}
		}
		
		System.out.println("=======================================================================================");
		
		
	}
	
	
	
}
