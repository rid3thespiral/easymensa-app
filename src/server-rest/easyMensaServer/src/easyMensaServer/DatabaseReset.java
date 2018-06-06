package easyMensaServer;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;

public class DatabaseReset {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String nome = "database.txt";
		
		int numeroPersonaRealTime = -1;
		int tempoAttesaRealTime = -1;
		HashMap<Integer,HashMap<Integer,HashMap<Integer,Deque<Statistiche>>>>dati = new HashMap<>();
		ArrayList<String> menu = new ArrayList<String>();
					
		try {
			
			//iniziallizzo il databasei se non esiste il file
			ObjectOutputStream database_new = new ObjectOutputStream(new FileOutputStream(nome));
			
			database_new.writeInt(numeroPersonaRealTime);
			database_new.writeInt(tempoAttesaRealTime);
			database_new.writeObject(dati);
			database_new.writeObject(menu);

			
			System.out.println("DATABASE RESET");
			
			database_new.close();
		
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		

	}

}
