package sole

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class solesimulation extends Simulation {

	val httpProtocol = http
		.baseUrl("https://solid.community")
		.inferHtmlResources()
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es-ES,es;q=0.9,en-US;q=0.8,en;q=0.7")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map(
		"Accept" -> "image/webp,image/apng,image/*,*/*;q=0.8",
		"Pragma" -> "no-cache")

	val headers_4 = Map(
		"Origin" -> "https://solid.community",
		"content-type" -> "application/json")

	val headers_6 = Map("Accept" -> "image/webp,image/apng,image/*,*/*;q=0.8")

	val headers_8 = Map("Origin" -> "https://arquisoft.github.io")

	val headers_10 = Map(
		"Access-Control-Request-Headers" -> "content-type",
		"Access-Control-Request-Method" -> "POST",
		"Origin" -> "https://arquisoft.github.io")

	val headers_11 = Map(
		"Origin" -> "https://arquisoft.github.io",
		"content-type" -> "application/json")

    val uri2 = "https://arquisoft.github.io"

	val scn = scenario("solesimulation")
		.exec(http("request_0")
			.get("/common/popup.html")
			.headers(headers_0)
			.resources(http("request_1")
			.get("/favicon.ico")
			.headers(headers_1)
			.check(status.is(403))))
		.pause(1)
		.exec(http("request_2")
			.get("/.well-known/openid-configuration")
			.resources(http("request_3")
			.get("/jwks"),
            http("request_4")
			.post("/register")
			.headers(headers_4)
			.body(RawFileBody("solesimulation_0004_request.txt")),
            http("request_5")
			.get("/authorize?scope=openid&client_id=bf6ed2267438939f73810d4596336723&response_type=id_token%20token&request=eyJhbGciOiJub25lIn0.eyJyZWRpcmVjdF91cmkiOiJodHRwczovL3NvbGlkLmNvbW11bml0eS9jb21tb24vcG9wdXAuaHRtbCIsImRpc3BsYXkiOiJwYWdlIiwibm9uY2UiOiJNOEJnUjVuMFhuMDdQeEMtNmMwN1F2bFVXY2VERmc0Wnd0VEpKQVRqa2NZIiwia2V5Ijp7ImFsZyI6IlJTMjU2IiwiZSI6IkFRQUIiLCJleHQiOnRydWUsImtleV9vcHMiOlsidmVyaWZ5Il0sImt0eSI6IlJTQSIsIm4iOiJ1c3g2VFNjOVFnSkR1Mm1wY2NOSGpSYzhUdjAwUm9kR0k4QkdCSVYwWlpKWjZUUVVDWVBSNnFHbnQ1ME4zQTRSemxkcnpyeWNaUktXYzJOcGl0ay1ZeVRjLTBaUFpuZWtwcmRTWHppQ1VybUU0akZmQTdFSHlsWXdDZ2lwelhBRWpEVnlRbU1MWHpEcWdxeE5VejliUEpFVE1RcU5XYVM2SmRNMktOaGNBLVVOZkJNY0tMWFc5Y2hFc003VmIxNVY1UTZHV1RXUGlDTUJldUlvdnNpak1zYTFpOXRKN1FVOFJnTXcwR3VUeXNuYmt2aEgyRFlyTHlNQUhhX0NlWVRoS29jWVFGamtxd3Fwa1A5NDRUTjk0YXotNzV0dm1OWUE5N2ZkYTFZQTQ0cUkxUEtIODgwWnp5WC0tX19MOU5mc3E3aVhJd0M4TmJEY3lIZ0ZTQzRxV1EifX0.&state=KgYBNrWOjXni5XZrfxAK9LXIbPbLLhMj_tisBDmroEU")
			.headers(headers_0),
            http("request_6")
			.get("/favicon.ico")
			.headers(headers_6)
			.check(status.is(403)),
            http("request_7")
			.get("/favicon.ico")
			.headers(headers_6)
			.check(status.is(403))))
		.pause(4)
		.exec(http("request_8")
			.get("/.well-known/openid-configuration")
			.headers(headers_8)
			.resources(http("request_9")
			.get("/jwks")
			.headers(headers_8),
            http("request_10")
			.options("/register")
			.headers(headers_10),
            http("request_11")
			.post("/register")
			.headers(headers_11)
			.body(RawFileBody("solesimulation_0011_request.txt")),
            http("request_12")
			.get("/authorize?scope=openid&client_id=95be1a07d71f2ec89438e9d9487ff3c3&response_type=id_token%20token&request=eyJhbGciOiJub25lIn0.eyJyZWRpcmVjdF91cmkiOiJodHRwczovL2FycXVpc29mdC5naXRodWIuaW8vc29sZV9jaGF0L2NhcmQiLCJkaXNwbGF5IjoicGFnZSIsIm5vbmNlIjoibFptR1NJLXViTHBpUXpSczhLT29FbEdhY2pRQ0FVVHJFVlZJOXBwMFhNQSIsImtleSI6eyJhbGciOiJSUzI1NiIsImUiOiJBUUFCIiwiZXh0Ijp0cnVlLCJrZXlfb3BzIjpbInZlcmlmeSJdLCJrdHkiOiJSU0EiLCJuIjoiczI1WmxKMHFIcXpheVQxY2ROVmhEYUY5V2VhM1ExRkRvUUc0N2M5YnV4d0RyR3Zrc2lDMU5Vci1nc1ZaUzdTR1ZKdUl2ZHlxbU1hejdBeUNRby1BRDd4UnZvQk50SGtDYTBMeW5MU1VNd1ZSX0FjajAyclNfTExrejJLV0llZXFhOUlfcDNzY0pCVE9aQzRMRHRVV002TXlEcVRrdjJ5SkVSMTZfT2E1cXdvMms4V0I2Ujh0Zi1sbjZVam94UGx6YXFBRXM4QWdtTHFoaWlTeWs2YUhMblg2QnF3ZXl6V3FyMWVxRF8xOS1rYlJZellwRlZUZTlVMUlVdjFqUnZfdGZxY2JyRVhmVkl1c0NvYU1iYkdfaklldjgzTmRXeEpYelhobnpzZzB0ZXVkYWVXa0VxMzRsX2RHaGR5RWVRRzk1NjBvb09mOG9wQWl0Y1pWdVljUjB3In19.&state=XuRJzZcuewhb7un7mcTUcdJVMfNgxEppZlYm4Kc5km0")
			.headers(headers_0)
			.check(status.is(404)),
            http("request_13")
			.get(uri2 + "/assets/images/profile.png")
			.headers(headers_6)
			.check(status.is(404))))
		.pause(10)
		.exec(http("request_14")
			.get(uri2 + "/sole_chat/assets/images/newFriend.svg")
			.headers(headers_6))

	setUp(scn.inject(atOnceUsers(3))).protocols(httpProtocol)
}