<template>
    <div class="w-1/2 m-auto">
       <div v-if="!submitted">
            <component 
                v-bind:is="steps[currentStep].component"
                v-bind:formValue="formValue[steps[currentStep].label]"
                @formValueChange="updateFormValue"
            >
            </component>

            <div class="text-center">
                <button v-if="currentStep !== 0" @click.prevent="previous">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <button v-if="currentStep < steps.length - 1" @click.prevent="next">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
                <button 
                    v-else 
                    class="text-2xl bg-green-300 text-white p-5 rounded" 
                    v-on:click="submit">
                    Submit
                </button>
            </div>
       </div>
       <div v-else class="text-5xl font-bold text-center shadow-lg p-10">
           <span><span class="text-green-500">Thank you for submitting the form.</span>  
             <br><br>
             We will get back to you soon.   
            </span>
       </div>
        
    </div>
</template>

<script>
import Information from './Steps/Information.vue';
import About from './Steps/About.vue';
import Profile from './Steps/Profile.vue'

export default {
    name: 'MultiSteps',
    
    data() {
        return {
            submitted: false,
            currentStep: 0,
            formValue: {
                information: {
                  name: '',
                  age: '0',
                  dob: '',
                  email: ''  
                },
                about: {
                    address: '',
                    gender: ''
                },
                profile: {
                    profilePicture: '',
                    bio: ''
                }
            },
            steps: [
                {
                    component: Information,
                    label: 'information'
                },

                {
                    component: About,
                    label: 'about'
                },

                {
                    component: Profile,
                    label: 'profile'
                }
            ] 
        }
    },

    components: {
        Information,
        About,
        Profile
    },

    methods: {
       next() {
           this.currentStep += 1;
       },
       
       previous(){
           this.currentStep -= 1;
       },

       updateFormValue(payload){
           this.formValue = {
               ...this.formValue,
               [payload.label]: payload.data
           }
       },

       submit() {
           this.submitted = true;
           console.log(this.formValue)
       }
    }
}
</script>