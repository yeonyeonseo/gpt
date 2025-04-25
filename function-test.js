 function test() {
        const input = document.querySelector('input');
        const message = document.querySelector('#message');
        const value = input.value;

        console.log('사용자 입력:', value);

        const body = {
          content: value,
        };

        console.log('서버에게 보낸 데이터:', body);

        message.innerHTML = '응답을 기다리는 중...';

        fetch('/gpt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }).then((res) => {
          res.json().then((json) => {
            console.log('서버에서 온 데이터:', json);

            const msg = json.choices[0].message.content;

            console.log('지피티의 메시지:', msg);

            message.innerHTML = msg;
          });
        });
      }