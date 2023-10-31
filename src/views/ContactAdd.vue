<template>
  <div class="page">
    <h4 class="text-center text-danger">Thêm liên hệ mới </h4>
    <ContactForm :contact="{contact}" @submit:contact="addContact"></ContactForm>
    <p class="text-success">{{ message }}</p>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      message: "",
      contact: {
        "name": "",
        "address": "",
        "phone": "",
        "email": "",
        "favorite": "",
      }
    };
  },
  methods: {
    async addContact(data) {
      try {
        await ContactService.create(data);
        this.message = "Thêm liên hệ thành công";
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.message = "";
  },
};
</script>