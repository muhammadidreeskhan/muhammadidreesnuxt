<template>
  <div>
    <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Name Field -->
        <div class="relative">
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name <span class="text-primary-500">*</span>
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="ph:user" class="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              placeholder="Muhammad Idrees"
              :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.name }"
              @blur="validateField('name')"
            />
          </div>
          <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
        </div>
        
        <!-- Email Field -->
        <div class="relative">
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address <span class="text-primary-500">*</span>
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="ph:envelope-simple" class="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
              placeholder="contactmuhammadidrees@gmail.com"
              :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.email }"
              @blur="validateField('email')"
            />
          </div>
          <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
        </div>
      </div>
      
      <!-- Subject Field -->
      <div class="relative">
        <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Subject <span class="text-primary-500">*</span>
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="ph:notepad" class="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            required
            class="w-full pl-10 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
            placeholder="Project Inquiry"
            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.subject }"
            @blur="validateField('subject')"
          />
        </div>
        <p v-if="errors.subject" class="mt-1 text-sm text-red-500">{{ errors.subject }}</p>
      </div>
      
      <!-- Message Field -->
      <div class="relative">
        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message <span class="text-primary-500">*</span>
        </label>
        <div class="relative">
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
            placeholder="Tell me about your project or inquiry..."
            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.message }"
            @blur="validateField('message')"
          ></textarea>
        </div>
        <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
        <div class="mt-1 text-xs text-gray-500 dark:text-gray-400 flex items-center">
          <Icon name="ph:info" class="mr-1 w-4 h-4" />
          <span>Your message will be sent directly to my email.</span>
        </div>
      </div>
      
      <!-- Submit Button -->
      <div>
        <button 
          type="submit" 
          class="btn-primary w-full flex justify-center items-center py-3 text-lg"
          :disabled="loading || hasErrors"
        >
          <span v-if="loading" class="mr-2">
            <Icon name="ph:spinner-gap" class="w-5 h-5 animate-spin" />
          </span>
          <Icon v-else name="ph:paper-plane-right" class="mr-2 w-5 h-5" />
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </div>
      
      <!-- Form Status -->
      <div v-if="formStatus" 
           :class="[formStatus.type === 'success' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800', 
                   'text-center p-4 rounded-lg border flex items-center justify-center']">
        <Icon :name="formStatus.type === 'success' ? 'ph:check-circle' : 'ph:x-circle'" 
              :class="formStatus.type === 'success' ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'" 
              class="w-5 h-5 mr-2" />
        <span :class="formStatus.type === 'success' ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'">
          {{ formStatus.message }}
        </span>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const loading = ref(false);
const formStatus = ref(null);

const hasErrors = computed(() => {
  return Object.values(errors).some(error => error !== '');
});

const validateField = (field) => {
  errors[field] = '';
  
  switch (field) {
    case 'name':
      if (!form.name) {
        errors.name = 'Name is required';
      } else if (form.name.length < 2) {
        errors.name = 'Name must be at least 2 characters';
      }
      break;
      
    case 'email':
      if (!form.email) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email address';
      }
      break;
      
    case 'subject':
      if (!form.subject) {
        errors.subject = 'Subject is required';
      } else if (form.subject.length < 3) {
        errors.subject = 'Subject must be at least 3 characters';
      }
      break;
      
    case 'message':
      if (!form.message) {
        errors.message = 'Message is required';
      } else if (form.message.length < 10) {
        errors.message = 'Message must be at least 10 characters';
      }
      break;
  }
};

const validateForm = () => {
  validateField('name');
  validateField('email');
  validateField('subject');
  validateField('message');
  
  return !hasErrors.value;
};

const submitForm = async () => {
  if (!validateForm()) {
    formStatus.value = {
      type: 'error',
      message: 'Please fix the errors in the form before submitting.'
    };
    return;
  }
  
  loading.value = true;
  formStatus.value = null;
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    });
    
    formStatus.value = {
      type: 'success',
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
    };
    
    // Reset form
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: 'Sorry, there was an error sending your message. Please try again or email me directly.'
    };
  } finally {
    loading.value = false;
  }
};
</script>