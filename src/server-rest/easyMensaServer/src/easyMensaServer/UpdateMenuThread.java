package easyMensaServer;

public class UpdateMenuThread implements Runnable{

	@Override
	public void run() {
		// TODO Auto-generated method stub
		
		int timeSleep = 10; //in secondi 
		
		while(true) {
			
			
			try {
				
				Thread.sleep(timeSleep*1000);
				
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}

}
