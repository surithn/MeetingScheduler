package com.scheduleMeeting;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface RoomsRepository extends CrudRepository<Rooms, Integer> {
}
