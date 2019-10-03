<template>
    <v-container fluid fill-height>
        <v-layout row wrap justify-center >
            <v-flex xs12 sm6 md4 lg3>
                <v-card>
                    <v-img
                        src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png"
                    ></v-img>
                <v-card-title>
                    <h3>Error 404</h3>
                </v-card-title>
                <v-card-text>
                    <p>Recurso no encontrado</p>
                </v-card-text>
                <v-card-actions>
                    <v-btn :to="{name: 'home'}" text color="info">Ir al inicio</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>