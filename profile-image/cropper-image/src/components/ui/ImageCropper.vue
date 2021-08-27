<template>
    
        <div v-show="imageSrc" class="my-2 w-64 h-64 object-fill mx-auto">
            <img :src="imageSrc" ref="img" class="block max-w-full">
        </div>

    <div class="flex justify-center content-end mt-2">
        
        <button
            v-if="!imageSrc" 
            class="btn btn-primary w-32 mx-2"
            @click.prevent="imageInput.click()"
        >
            Select Image
        </button>
        <button
            v-else
            class="btn btn-primary w-32 mx-2"
            @click="handleCropImage"    
        >
            Crop Image
        </button>
        
        <button
            class="btn btn-secondary w-32 mx-2"
            @click.prevent="fileCleared"
        >
            Clear
        </button>
        <input 
            type="file"
            ref="imageInput"
            accept=".jpg,.jpeg,.png"
            @change="fileChanged"
            :style="{ display: 'none' }"
        >
    </div>

    <div class="my-2 align-baseline text-center">
        <span>Selected File: </span>
        <span v-if="selectedFile">{{ selectedFile.name }}</span>
    </div>
</template>

<script>
import {ref, 
        defineComponent,
        watchEffect,
        onMounted,
        onUnmounted,
        watch } from 'vue';
import Cropper from 'cropperjs';

export default defineComponent({
    name: 'ImageCropper',
    events: ['imageCropped'],

    setup(_props, { emit }) {
        const imageInput = ref(null);
        const selectedFile = ref(null);
        const imageSrc = ref(null);
        const img = ref(null);
        const fileReader = new FileReader();
        let cropper = null;


        fileReader.onload = (event) => {
            imageSrc.value = event.target.result;
        };

        const handleCropImage = () => {
            cropper
                .getCroppedCanvas({
                    width: 256,
                    height: 256,
                    // imageSmoothingQuality: 'high',
                })
                .toBlob((blob) => {
                    console.log(blob);
                    emit('imageCropped', blob);
                }, 'image/jpeg');
        }

        const fileChanged = (e) => {
            const files = e.target.files || e.dataTransfer.files;
            if(files.length) {
                selectedFile.value = files[0];
            }
        };

        const fileCleared = () => {
            selectedFile.value = null;
        };

        onMounted(() => {
            cropper = new Cropper(img.value, {
                aspectRatio: 1,
                minCropBoxWidth: 256,
                minCanvasHeight: 256,
                viewMode: 3,
                dragMode: 'move',
                background: false,
                cropBoxMovable: false,
                cropBoxResizable: false,
            });
        });

        onUnmounted(() => {
            cropper.destroy();
        })


        watchEffect(() => {
            if (selectedFile.value) {
                fileReader.readAsDataURL(selectedFile.value);
            } else {
                imageSrc.value = null;
            }
        });

        watch(
            imageSrc,
            () => {
                if (imageSrc.value) {
                    cropper.replace(imageSrc.value);
                }
            },
            {
                flush: 'post', //watch runs after component updates
            }
        )

        return {
            imageInput,
            selectedFile,
            fileChanged,
            fileCleared,
            imageSrc,
            img,
            handleCropImage
        }
    }
})
</script>

<style>

.cropper-view-box,
.cropper-face {
    border-radius: 50%;
}

</style>


