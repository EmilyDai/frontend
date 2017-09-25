import welcomeComponent from './../components/welcome.vue';
import projectsComponent from './../components/projects.vue';
import userprojectsComponent from './../components/userprojects.vue';
import indexComponent from './../components/index.vue';

//路由控制
let snavRouter = [
    {
        path: '/',
        component: indexComponent
    },
    {
        path: '/index',
        component: indexComponent
    },
    {
        path: '/projects',
        component: projectsComponent
    },
    {
        path: '/userprojects',
        component: userprojectsComponent
    }
];
export {snavRouter}
