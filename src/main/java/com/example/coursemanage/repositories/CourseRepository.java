package com.example.coursemanage.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.coursemanage.models.Course;

public interface CourseRepository extends CrudRepository<Course, Integer> {
	
}
