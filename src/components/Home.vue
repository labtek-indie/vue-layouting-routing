<template>
    <v-container> 
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn large router to="/projects" class="primary">
                    Explore Projects
                </v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn large router to="/projects/newproject" class="primary">
                    Create New Projects
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
