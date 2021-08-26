<template>
    
    <div class="text-5xl font-bold mb-9 text-center">Customize your profile</div>

        <div class="shadow-lg p-10 rounded">
            <div>
                <label class="font-bold text-2xl" for="fileUploader">Upload your profile picture.</label>

                <input 
                    type="file"
                    name="fileUploader"
                    id="fileUploader"
                    class="hidden"
                    ref="fileUploader"
                    @change="uploadFile"
                />

                <div class="cursor-pointer flex justify-center items-center flex-col 
                    border-green-300 border-2 w-full h-72 mt-4 mb-4 rounded"
                    v-on:click="$refs.fileUploader.click()">
                    <img 
                        v-bind:src="formValue.profilePicture" 
                        class="rounded-full h-24 w-24"
                        v-if="formValue.profilePicture"/>
                    <svg 
                        v-else
                        xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-5xl" viewBox="0 0 20 20" 
                        fill="currentColor">
                        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 
                            1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 
                            0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                        <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                    </svg>

                    <p>Click here to upload</p>
                </div>

            </div>
            <div >
                <label class="font-bold text-2xl" for="bio">Describe yourself.</label>
                <br/>
                <textarea 
                    name="bio"
                    id="bio"
                    class="w-full text-2xl p-2 border-2 rounded border-green-300 mt-4 mb-4"
                    v-bind:value="formValue.bio"
                    @input="onChange"
                />
            </div>
        </div>
</template>

<script>
export default {
    name: 'Profile',

    props: {
        formValue: {
            profilePicture: String,
           bio: String
            
        }
    },
    
    emits: ['formValueChange'],
    
    methods: {
        uploadFile(e){
            const file = e.target.files[0];

            if (!file) {
                return
            }

            const fileReader = new FileReader();

            fileReader.onload = () => {
                this.$emit('formValueChange', {
                    label: 'profile',
                    data: {
                        ...this.formValue,
                        profilePicture: fileReader.result
                    }
                })
            }

            fileReader.readAsDataURL(file);
        },

        onChange(e) {
           this.$emit('formValueChange', {
               label: 'profile',
               data: {
                   ...this.formValue,
                   [e.target.name]: e.target.value
               }
           }) 
        }
    },
}
</script>