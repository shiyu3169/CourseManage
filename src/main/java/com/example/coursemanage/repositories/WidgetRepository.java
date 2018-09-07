package com.example.coursemanage.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.coursemanage.models.Widget;

public interface WidgetRepository extends CrudRepository<Widget, Integer> {
	
}
