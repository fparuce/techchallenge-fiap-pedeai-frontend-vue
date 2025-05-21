<template>
    <div class="home-view">
        <!-- Conteúdo principal será adicionado depois -->
        <main class="main-content">
            <div class="start-message" @click="startOrdering">
                <p>
                    Toque para começar!!!
                </p>
                <img class="start-logo" src="../assets/pedeai-logo-transparente.png">
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'HomeView',
    setup() {
        const router = useRouter();

        const startOrdering = () => {
            // Aqui você pode redirecionar para a página de cardápio
            // ou mostrar os produtos diretamente
            console.log('Iniciando pedido...');
        };

        return {
            startOrdering,
        };
    }
});
</script>

<style scoped>
.home-view {
    display: flex;
    flex-direction: column;
}

.start-message {
    cursor: pointer;
    background-color: #ff9800; /* Laranja */
    padding: 1rem;
    border-radius: 20px;
    font-weight: bold;
    animation: pulse 2s infinite;
    margin: 0 auto;
    text-align: center;
    max-width: 90%;
    box-sizing: border-box;
}

.start-message p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #fff; /* melhora contraste com fundo laranja */
}

.start-logo {
    width: 80%;
    max-width: 300px;
    height: auto;
    display: block;
    margin: 0 auto;
}


@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}

.main-content {
    flex-grow: 1;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

/* Responsividade */
@media (max-width: 768px) {
    .navbar-content {
        flex-direction: column;
        gap: 1rem;
    }

    .start-message {
        order: 3;
        width: 100%;
        text-align: center;
    }
}
</style>