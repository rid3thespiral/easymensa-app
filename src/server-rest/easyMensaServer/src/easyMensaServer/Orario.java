package easyMensaServer;

import java.io.Serializable;

public class Orario implements Serializable{

	private int ora;
	private int minuti;
	private int secondi;
	
	public Orario(int ora, int minuti, int secondi) {
		this.ora = ora;
		this.minuti = minuti;
		this.secondi = secondi;
	}


	public int getOra() {
		return ora;
	}

	public int getMinuti() {
		return minuti;
	}

	public int getSecondi() {
		return secondi;
	}

	public boolean equals(Orario obj) {
		
		return this.getOra() == obj.getOra() &&
				this.getMinuti() == obj.getMinuti() &&
				this.getSecondi() == obj.getSecondi();
	}

	




	
}
