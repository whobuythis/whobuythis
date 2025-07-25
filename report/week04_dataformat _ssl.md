## 데이터 교환 포맷 및 시리얼라이징 이해

### JSON, XML, YAML 비교

#### JSON

JSON은 JavaScript Object Notation의 약자로, 데이터를 교환하고 저장하기 위한 텍스트 기반의 표준 형식 입니다. 주로 웹 애플리케이션에서 서버와 클라이언트 간에 데이터를 주고받을 때 사용됩니다. 가볍고 사람이 읽고 쓰기 쉬우며, 다양한 프로그래밍 언어에서 지원된다는 특징을 가지고 있습니다.

##### JSON의 주요 특징:

- 경량화된 데이터 형식: 텍스트 기반으로 용량이 작고, 네트워크 전송 속도가 빠릅니다.
- 가독성: 사람이 읽고 쓰기 쉬운 구조를 가지고 있습니다.
- 언어 독립성: 다양한 프로그래밍 언어에서 사용 가능합니다.
- 구조화된 데이터 표현: 객체(Object)와 배열(Array) 형태를 사용하여 복잡한 데이터를 표현할 수 있습니다.

##### JSON의 구성 요소:

- 객체(Object):
  중괄호 {} 로 묶인 {키: 값} 쌍의 집합입니다. 예를 들어, { "name": "홍길동", "age": 30 } 와 같은 형태입니다.
- 배열(Array):
  대괄호 [] 로 묶인 값들의 순서 있는 목록입니다. 예를 들어, `` 과 같은 형태입니다.

- 값(Value):
  문자열, 숫자, 불리언, 배열, 객체 또는 null 값을 가질 수 있습니다.
  > {
  > "name": "김철수",
  > "age": 25,
  > "is_student": true,
  > "courses": [
      {"title": "수학", "grade": "A"},
      {"title": "영어", "grade": "B"}
  ]
  ,
  "address": {
  "city": "서울",
  "zipcode": "12345"
  }
  }

##### JSON 관련 메서드:

- JSON.stringify(): 자바스크립트 객체를 JSON 문자열로 변환합니다.
- JSON.parse(): JSON 문자열을 자바스크립트 객체로 변환합니다.

##### JSON 사용 분야:

웹 API 데이터 전송, 웹 애플리케이션 설정 파일, 데이터베이스 저장 (JSON 데이터 유형 지원 시), 모바일 애플리케이션 데이터 교환.

#### XML

XML(eXtensible Markup Language)은 데이터를 저장하고 교환하기 위한 마크업 언어입니다. HTML과 유사하지만, 미리 정의된 태그 대신 사용자가 직접 태그를 정의하여 데이터를 구조화하고 설명할 수 있습니다.

##### 주요 특징:

- 데이터 교환:
  다양한 시스템 간에 데이터를 교환하고 공유하는 데 사용됩니다. 예를 들어, 서로 다른 형식으로 데이터를 저장하는 시스템 간에 데이터를 전송할 수 있습니다.
- 확장성:
  사용자가 필요에 따라 태그를 정의하여 확장할 수 있습니다.
- 플랫폼 독립성:
  특정 플랫폼에 종속되지 않고 다양한 환경에서 사용 가능합니다.
- 사람이 읽을 수 있는 텍스트 기반:
  XML 파일은 텍스트 형식으로 저장되므로 사람이 읽고 이해하기 쉽습니다.
- 데이터 유효성 검사:
  스키마를 사용하여 데이터의 유효성을 검사하고 오류를 방지할 수 있습니다.

##### 사용 예시:

- 웹 서비스: 웹 API를 통해 데이터를 교환하거나 웹 페이지의 콘텐츠를 구조화하는 데 사용됩니다.
- 데이터베이스: 데이터베이스에서 데이터를 저장하고 검색하는 데 사용됩니다.
- 설정 파일: 프로그램의 설정 정보를 저장하는 데 사용됩니다.
- 문서 편집: 문서의 구조를 설명하고 편집하는 데 사용됩니다.

#### YAML

YAML (YAML Ain't Markup Language)은 사람이 읽기 쉽도록 설계된 데이터 직렬화 형식입니다. 주로 구성 파일 작성에 사용되며, 구조화된 데이터를 사람이 이해하기 쉽고 기계가 해석할 수 있는 방식으로 표현합니다. JSON과 유사하지만, 보다 유연하고 가독성이 좋다는 장점이 있습니다.

##### YAML의 주요 특징:

- 사람이 읽기 쉬움:
  YAML은 간결하고 명확한 구문을 사용하여 사람이 쉽게 읽고 이해할 수 있도록 설계되었습니다.
- 들여쓰기 기반 구조:
  YAML은 들여쓰기(공백 문자 사용)를 사용하여 데이터 구조를 정의합니다. 탭 문자는 사용하지 않습니다.
- 다양한 데이터 타입 지원:
  숫자, 문자열, 불리언, 목록, 딕셔너리 등 다양한 데이터 타입을 지원합니다.
- 주석 지원:
  YAML 파일에 주석을 추가하여 코드 내용을 설명할 수 있습니다.
- 확장성:
  YAML은 다양한 확장 기능을 제공하여 복잡한 데이터 구조를 표현할 수 있습니다.
- JSON과의 호환성:
  YAML은 JSON과 호환되며, JSON 파일을 YAML 형식으로 변환할 수 있습니다.

##### YAML 사용 예시:

> person:
> name: 홍길동
> age: 30
> city: 서울
> skills:
    - Python
    - YAML
    - Linux

위 예시에서 person은 딕셔너리이고, name, age, city는 문자열, skills는 목록을 나타냅니다. YAML은 이러한 구조를 들여쓰기를 통해 표현합니다.

##### YAML 활용 분야:

- 구성 파일: 애플리케이션 설정, 서버 구성 등 다양한 구성 파일을 작성하는 데 사용됩니다.
- 데이터 직렬화: 데이터를 저장하거나 전송하기 위해 사용됩니다.
- 자동화 도구: Ansible과 같은 자동화 도구에서 플레이북을 작성하는 데 사용됩니다.
- API 설계: API 명세서 작성 등에 활용됩니다.

### HTTPS, SSL 인증서 기초

#### HTTPS

Hypertext Transfer Protocol Over Secure Socket Layer의 약자로, HTTP에 보안이 강하되었다. HTTP는 암호화되지 않은 방법으로 데이터를 전송하기 때문에 서버와 클라이언트가 주고 받는 메시지를 감청하는 것이 매우 쉽다. 예를들어 로그인을 위해서 서버로 비밀번호를 전송하거나, 또는 중요한 기밀 문서를 열람하는 과정에서 악의적인 감청이나 데이터의 변조등이 일어날 수 있다는 것이다. 이를 보안한 것이 HTTPS다. HTTPS는 HTTP의 하부에 SSL과 같은 보안계층을 제공함으로써 동작한다.
![](https://velog.velcdn.com/images/whobuythis/post/90e0be0e-ec9d-4f5d-bd1c-1d7cdbc6361e/image.png)

#### SSL 디지털 인증서

클라이언트와 서버간의 통신을 공인된 제3자(CA) 업체가 보증해주는 전자화된 문서

##### SSL 인증서의 장점 및 역할

- 통신 내용이 노출, 변경되는 것을 방지
- 클라이언트가 접속하려는 서버가 신뢰 할 수 있는 서버
- SSL 통신에 사용할 공개키를 클라이언트에게 제공한다

##### SSL에서 사용하는 암호화 종류

- 암호: 텍스트를 아무나 읽지 못하도록 인코딩하는 알고리즘
- 키: 암호의 동작을 변경하는 매개변수, 키에 따라서 암호화 결과가 달라지기 때문에 키를 모르면 복호화가 불가능하다.

#### SSL 동작방법

- 공개키 암호 방식은 알고리즘 계산방식이 느린 경향이 있다.
- 따라서 SSL은 암호화된 데이터를 전송하기 위해서 공개키와 대칭키 암호화 방식을 혼합하여 사용한다.
- 안전한 의사소통 채널을 수립할 때는 공개키 암호를 사용하고, 이렇게 만들어진 안전한 채널을 통해서 임시의 무작위 대칭키를 생성 및 교환한다. 해당 대칭키는 나머지 데이터 암호화에 활용한다.
  - 실제 데이터 암호화 방식 : 대칭키
  - 상기 대칭키를 서로 공유하기 위한 암호화 방식 : 공개키

#### SSL 통신과정

- 컴퓨터와 컴퓨터가 네트워크를 통해서 통신을 할때 핸드쉐이크 -> 세션 -> 세션종료 의 과정을 거친다.
- 암호화된 HTTP 메시지를 교환하기 전에 클라이언트와 서버는 SSL 핸드쉐이크를 진행한다. -핸드쉐이크의 목적은 아래와 같다. - 프로토콜 버전번호 교환 - 양쪽이 알고 있는 pre master secret 키 생성 및 교환 - 양쪽의 신원 인증 - 채널을 암호화 하기 위한 임시 세션 키 생성
- SSL 통신과정을 간단하게 도식화 하면 아래와 같다.

![](https://velog.velcdn.com/images/whobuythis/post/0b153028-3a6f-4578-8216-845818aec95d/image.png)

### 결론: HTTPS와 SSL

HTTPS와 SSL를 같은 의미로 이해하고 있는 경우가 많다. 이것은 맞기도 틀리기도 하다. 그것은 마치 인터넷과 웹을 같은 의미로 이해하는 것과 같다. 결론적으로 말하면 웹이 인터넷 위에서 돌아가는 서비스 중의 하나인 것처럼 HTTPS도 SSL 프로토콜 위에서 돌아가는 프로토콜이다.

참고: https://wayhome25.github.io/cs/2018/03/11/ssl-https/

참고: https://opentutorials.org/course/228/4894
