package easyMensaServer;

import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class StatisticheTelecamere {
	
	String urlBaseTelecamere = "http://localhost:8080/RestServer/telecamere";

	public String getNumeroPersone() {

		URL url;
		try {
			
			url = new URL(urlBaseTelecamere);
			
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "text/plain");

			int status = conn.getResponseCode();
			System.out.println("RESPONSE CODE: " + status);
			System.out.println("CONTENT TYPE: " + conn.getContentType());

			String response = "";
			if (status >= 200 && status <= 299) {
				InputStreamReader in = new InputStreamReader(conn.getInputStream(), "UTF-8");
				int c;
				
				while ((c = in.read()) != -1)
					response+=((char) c);
			}

			conn.disconnect();
			
			return response;
			
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;

		
	}

}
