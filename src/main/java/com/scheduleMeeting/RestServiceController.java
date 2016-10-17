package com.scheduleMeeting;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class RestServiceController {
	
	@Autowired
    private MeetingRepository repo;
	
	// CREATE
    @RequestMapping(value="/meetings/create", method = RequestMethod.POST)
    @ResponseBody
    public int createMeeting(@RequestBody Meeting meeting) {
    	Meeting output=null;
    	output = repo.save(meeting);
    	return output.getmId();
    }
    
   
}
