package com.vituary.hello;

import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HelloController {
    @RequestMapping("/hello")
    public Map<String, Object> hello(@RequestParam(required = false, defaultValue = "world") String name) {
        return Map.of("name", StringUtils.capitalize(name));
    }
}
