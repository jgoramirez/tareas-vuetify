<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex md6>
                <v-card class="mb-3 pa-3">
                    <v-form @submit.prevent="agregarTarea()">
                        <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Descripción de tarea" v-model="descripcion"></v-textarea>
                        <v-btn :color=color block type="submit">{{btnText}}</v-btn>
                        <v-btn class="mt-2" color="error" block v-show="editar" @click="cancelarEditar">Cancelar</v-btn>
                    </v-form>
                </v-card>
            </v-flex>
            <v-flex md6>
                <v-card class="mb-3" v-for="(item, index) in listaTareas.slice().reverse()" :key="index">
                    <v-card-title>
                        <v-chip label color="pink" text-color="white">
                            <v-icon left>mdi-label</v-icon>{{item.titulo}}
                        </v-chip>
                    </v-card-title>
                    <v-card-text>
                        {{item.descripcion}}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="warning" @click="editarTarea(index)">Modificar</v-btn>
                        <v-btn color="error" @click="id=item.id, confirmacion = true">Eliminar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <v-snackbar
            v-model="snackbar"
        >
        {{ mensaje }}
        <v-btn color="pink" text @click="snackbar = false">Cerrar</v-btn>
        </v-snackbar>

        <v-dialog
        v-model="confirmacion"
        max-width="350"
        >
            <v-card>
                <v-card-title class="headline">¿Está seguro de eliminar el registro? {{id}}</v-card-title>

                <v-card-actions>
                <div class="flex-grow-1"></div>

                <v-btn
                    color="green darken-1"
                    text
                    @click="confirmacion = false"
                    @keyup.esc="confirmacion = false"
                >
                    Cancelar
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="eliminarTarea()"
                    @keyup.enter="eliminarTarea()"
                >
                    Aceptar
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

  </v-container>
</template>

<script>
export default {
    data() {
        return {
            indice: '',
            titulo: '',
            descripcion: '',
            listaTareas: [
                {id: 1, titulo: 'Tarea #1', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi asperiores, dolor porro eius fuga culpa. Rem ut commodi quam. Veritatis nihil, ea neque eius sint quasi minus accusantium mollitia?'},
                {id: 2, titulo: 'Tarea #2', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi asperiores, dolor porro eius fuga culpa. Rem ut commodi quam. Veritatis nihil, ea neque eius sint quasi minus accusantium mollitia?'},
                {id: 3, titulo: 'Tarea #3', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi asperiores, dolor porro eius fuga culpa. Rem ut commodi quam. Veritatis nihil, ea neque eius sint quasi minus accusantium mollitia?'},
                {id: 4, titulo: 'Tarea #4', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi asperiores, dolor porro eius fuga culpa. Rem ut commodi quam. Veritatis nihil, ea neque eius sint quasi minus accusantium mollitia?'},
                {id: 5, titulo: 'Tarea #5', descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi asperiores, dolor porro eius fuga culpa. Rem ut commodi quam. Veritatis nihil, ea neque eius sint quasi minus accusantium mollitia?'},
            ],
            mensaje: '',
            snackbar: false,
            btnText: 'Agregar tarea',
            editar: false,
            color: 'success',
            confirmacion: false,
            id: ''
        }
    },
    methods: {
        agregarTarea() {

            if (this.indice === '') {
                if (this.titulo === '' || this.descripcion === null) {
                    this.snackbar = true
                    this.mensaje = 'Favor de rellenar todos los campos'
                } else {
                    this.listaTareas.push({
                        id: new Date,
                        titulo: this.titulo,
                        descripcion: this.descripcion
                    })

                    this.titulo = ''
                    this.descripcion = ''
                    this.snackbar = true
                    this.mensaje = 'Tarea agregada'
                    this.color = 'success'
                }
            } else {

                if (this.titulo === '' || this.descripcion === null) {
                    this.snackbar = true
                    this.mensaje = 'Favor de rellenar todos los campos'
                } else {
                    this.listaTareas[this.indice].titulo = this.titulo
                    this.listaTareas[this.indice].descripcion = this.descripcion
                    this.indice =''
                    this.titulo = ''
                    this.descripcion = ''
                    this.snackbar = true
                    this.mensaje = 'Tarea modificada'
                    this.color = 'success'
                }

            }

        },
        eliminarTarea() {

            this.listaTareas = this.listaTareas.filter(e => e.id != this.id)
            this.confirmacion = false
            this.snackbar = true
            this.mensaje = 'Registro eliminado'
            this.id = ''
        },
        editarTarea(index){
            this.indice = index
            this.titulo = this.listaTareas[index].titulo
            this.descripcion = this.listaTareas[index].descripcion
            this.btnText = 'Grabar cambios'
            this.editar = true
            this.color = 'warning'

        },
        cancelarEditar() {
            this.indice =''
            this.titulo = ''
            this.descripcion = ''
            this.snackbar = true
            this.mensaje = 'Modificación cancelada'
            this.editar = false
            this.color = 'success'
        }
    }
}
</script>