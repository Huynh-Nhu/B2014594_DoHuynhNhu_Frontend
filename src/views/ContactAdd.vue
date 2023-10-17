<template>
  <div class="page">
    <h4>Them Lien He</h4>
    <AddContactForm @submit:contact="addContact"></AddContactForm>
    <p>{{ message }}</p>
  </div>
</template>
<script>
import AddContactForm from "@/components/AddContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    AddContactForm,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async addContact(data) {
      try {
        await ContactService.create(data);
        this.message = "Them lien he thanh cong";
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
