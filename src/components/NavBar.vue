<template>
    <nav class="navbar">
            <div class="navbar-content">
                <div class="logo-container">
                    <img src="../assets/pedeai-logo-transparente.png" alt="Logo da Loja" class="logo">
                </div>
                <button class="login-button" @click="goToLogin">Login</button>
            </div>
        </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'NavBar',
    setup() {
        const router = useRouter();

        const goToLogin = () => {
            router.push('/admin/login');
        };

        return {
            goToLogin,
        };
    }
})
</script>

<style scoped>
.navbar {
    background-color: #d32f2f;
    /* Vermelho - comum em fastfood */
    color: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.login-button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.login-button:hover {
    background-color: white;
    color: #d32f2f;
}

.logo-container {
    flex-grow: 1;
    text-align: center;
}

.logo {
    height: 60px;
    max-width: 100%;
}

</style>