package easyMensaServer;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.Iterator;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/easyMensa")
public class UserRequest {
	
	String numeroPersRealTime = "vuoto";
	int x = -1;
	
	public UserRequest() {
		Database dtb = new Database();
		x = dtb.getNumeroPersoneRealTime();
		this.numeroPersRealTime = x+"";
	}
	
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getCorsoText(@PathParam("corso") String corso) {

		System.out.println(x);
		
		return this.numeroPersRealTime;

	}
	
	
	
}
