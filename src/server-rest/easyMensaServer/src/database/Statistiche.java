package database;

public class Statistiche {
	
	int numeroPersone;
	int tempoAttesa;
	
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
	
	

}
