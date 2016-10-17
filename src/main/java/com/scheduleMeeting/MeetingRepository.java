package com.scheduleMeeting;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface MeetingRepository extends CrudRepository<Meeting, Integer>{
	Meeting findByMId(@Param("mId") int mId);
}
