package easyMensaServer;

import java.util.Random;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/cam")
public class Cam {
	
	Random random;
	
	public Cam() {
		random = new Random();

	}
	
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getCorsoText(@PathParam("corso") String corso) {
	
		return "" + random.nextInt(30);

	}

}
