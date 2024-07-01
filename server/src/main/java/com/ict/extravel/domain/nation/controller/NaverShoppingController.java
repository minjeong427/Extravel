package com.ict.extravel.domain.nation.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
@Slf4j
public class NaverShoppingController {

    @Value("${NaverShopping.client_id}")
    private String CLIENT_ID;

    @Value("${NaverShopping.client_secret}")
    private String SECRET;

    @GetMapping("/shopping")
    public ResponseEntity<String> ShoppingEntity() {
        String Url = "https://openapi.naver.com/v1/search/shop.json";

        URI uri = UriComponentsBuilder.fromUriString(Url)
                .queryParam("query", "아프리카 여행")
                .queryParam("display" , 100)
                .queryParam("filter", "naverpay")
                .queryParam("start",1)
                .queryParam("sort","sim")
                .encode()
                .build()
                .toUri();
        log.info("build 한 uri값: {}" ,uri);
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-Naver-Client-Id", CLIENT_ID);
        headers.set("X-Naver-Client-Secret", SECRET);
        log.info("Headers요청 {}" , headers);

        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<String> ShoppingResponse = restTemplate.exchange(
                uri, HttpMethod.GET,entity,String.class);

        log.info("쇼핑API 요청 : {}" ,ShoppingResponse);
        return ShoppingResponse;



    }
}