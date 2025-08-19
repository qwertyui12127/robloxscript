// 获取表单和消息元素
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

// 正确的密钥
const correctKey = '123456';

// 显示消息的函数
function showMessage(message, isSuccess) {
    messageDiv.textContent = message;
    messageDiv.className = isSuccess ? 'message success' : 'message error';
}

// 处理表单提交事件
loginForm.addEventListener('submit', function(e) {
    // 阻止表单默认提交行为
    e.preventDefault();
    
    // 获取用户输入的密码
    const enteredPassword = passwordInput.value;
    
    // 验证密码
    if (enteredPassword === correctKey) {
        // 登录成功
        showMessage('登录成功！', true);
        // 这里可以添加重定向逻辑，例如：
        // window.location.href = 'success.html';
    } else {
        // 登录失败
        showMessage('密码错误，请输入正确的6位数字密钥。', false);
        // 清空输入框
        passwordInput.value = '';
        // 重新聚焦到输入框
        passwordInput.focus();
    }
});