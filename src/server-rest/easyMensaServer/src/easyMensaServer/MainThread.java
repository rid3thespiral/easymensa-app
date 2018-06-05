package easyMensaServer;

import java.util.Calendar;
import java.util.Date;

import database.*;


public class MainThread {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		StatisticheTelecamere up = new StatisticheTelecamere();
		Database dtb = new Database();
		
		int numeroPersone;
		Calendar cal;
		Date d;
		while(true) {
			
			numeroPersone = Integer.parseInt(up.getNumeroPersone());
		
			cal = cal = Calendar.getInstance();
			d = cal.getTime();
			
			Orario o = new Orario(d.getHours(),d.getMinutes(),d.getSeconds());
			
			Statistiche stat = new Statistiche(numeroPersone);
			
			dtb.putStatistic("" +d.getYear(), "" + d.getMonth(), "" + d.getDay(), o, stat);
			
		}

	}

}
