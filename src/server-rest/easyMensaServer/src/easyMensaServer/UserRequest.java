package easyMensaServer;

import java.util.Iterator;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/easyMensa")
public class UserRequest {

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getCorsoText(@PathParam("corso") String corso) {

		String print = "";

	
		return print;

	}
	
	
	
}
