document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const data = document.getElementById('dataInput').value;
    const response = await fetch('YOUR_API_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
    });
    const result = await response.json();
    const li = document.createElement('li');
    li.textContent = result.data;
    document.getElementById('dataList').appendChild(li);
});

async function fetchData() {
    const response = await fetch('YOUR_API_URL');
    const data = await response.json();
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.data;
        document.getElementById('dataList').appendChild(li);
    });
}

fetchData();