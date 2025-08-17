// 创建云朵背景
function createClouds(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    for (let i = 0; i < 7; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        // 随机大小
        const width = Math.random() * 150 + 100;
        const height = width * 0.6;
        cloud.style.width = `${width}px`;
        cloud.style.height = `${height}px`;
        
        // 随机位置
        cloud.style.top = `${Math.random() * 100}%`;
        cloud.style.left = `${Math.random() * 100}%`;
        
        // 随机动画时间和延迟
        const duration = Math.random() * 40 + 40;
        const delay = Math.random() * -40;
        cloud.style.animation = `moveCloud ${duration}s linear infinite ${delay}s`;
        
        container.appendChild(cloud);
    }
}

// 显示错误信息
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    
    const form = document.querySelector('.auth-card.active form');
    const existingError = form.querySelector('.error');
    
    if(existingError) {
        existingError.textContent = message;
    } else {
        form.appendChild(errorDiv);
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }
}