package easyMensaServer;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class MainThread {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		StatisticheTelecamere up = new StatisticheTelecamere();
		Database dtb = new Database();
		
		int numeroPersone;
		GregorianCalendar  cal;
		Date d;
		while(true) {

			numeroPersone = Integer.parseInt(up.getNumeroPersone());
			cal = cal = (GregorianCalendar) GregorianCalendar.getInstance();
			
			d = cal.getTime();
			
			Orario o = new Orario(d.getHours(),d.getMinutes(),d.getSeconds());
			
			Statistiche stat = new Statistiche(numeroPersone,o);
						
			dtb.putStatistic(d.getYear()+1900,d.getMonth()+1,d.getDate(),stat);
			
			dtb.stampa();
			
			try {
				Thread.sleep(10000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

}
