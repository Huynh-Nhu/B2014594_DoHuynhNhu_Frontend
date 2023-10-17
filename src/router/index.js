import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import NotFoundView from "@/views/NotFound.vue";
import ContactEditView from "@/views/ContactEdit.vue";
import ContactAddView from "@/views/ContactAdd.vue";
const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: ContactEditView,
    props: true 
  },
  {
    path: "/contacts/add",
    name: "contact.add",
    component: ContactAddView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
