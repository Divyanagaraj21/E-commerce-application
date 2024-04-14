package com.retail.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.retail.requestdto.UserRequest;
import com.retail.responsedto.UserResponse;
import com.retail.service.UserService;
import com.retail.util.ResponseStructure;

@RestController
public class UserController {
	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	public ResponseEntity<ResponseStructure<UserResponse>> userRegistration(@RequestBody UserRequest userRequest)
	{
		return userService.userRegistration(userRequest);
	}
	
}
