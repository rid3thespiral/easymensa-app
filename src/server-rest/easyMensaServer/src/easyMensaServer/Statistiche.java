package easyMensaServer;

import java.io.Serializable;

public class Statistiche implements Serializable{
	
	Orario orario = null;
	
	int numeroPersone;
	int tempoAttesa;
	
	public Statistiche(int numeroPersone, Orario o) {
		this.numeroPersone = numeroPersone;
		this.tempoAttesa = this.stimaTempoAttesa(numeroPersone);
		this.orario = o;
	}
	
	public Statistiche(int numeroPersone) {
		this.numeroPersone = numeroPersone;
		this.tempoAttesa = this.stimaTempoAttesa(numeroPersone);
	}
	
	//restituisce la stima in minuti
	private int stimaTempoAttesa(int numPers) {
		int time = numPers*2;
		return time;
	}


	public int getNumeroPersone() {
		return numeroPersone;
	}


	public int getTempoAttesa() {
		return tempoAttesa;
	}
	
	public Orario getOrario() {
		return this.orario;
	}
	
	

}
