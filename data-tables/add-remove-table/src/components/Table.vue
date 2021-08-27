<template>
    <div id="vue-app">
        ID: {{ id }} <br>
        Name: {{ fullName }} <br><br>

        <table border="1px">
            <tr>
                <th>Subject Code</th>
                <th>Prelim Grade</th>
                <th>Midterm Grade</th>
                <th>Final Grade</th>
                <th>Ratings</th>
                <th>Remarks</th>
            </tr>
            <tr v-for="student in students" :key="student" v-bind:class="
                {failed : computeGrade(student) < 60}">
                <td><input type="text" v-model="student.subjectCodes"></td>
                <td><input type="number" v-model="student.prelimGrade"></td>
                <td><input type="number" v-model="student.midtermGrade"></td>
                <td><input type="number" v-model="student.finalGrade"></td>
                <td>{{ computeGrade(student) }}</td>
                <td>{{ computeGrade(student) >= 60 ? 'Passed' : 'Failed' }}</td>
            </tr>
        </table><br>
            <div style="display: inline-block">
                <button v-on:click="addRow">Add</button>
                <div style="margin-left: 780px" >
                    Average: {{ computeAverage }}
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:' Table',

    
    data() {

        return {
            id: "2021",

            fullName: "Biko Jnr",

            students: [
                {
                    subjectCodes: "CS102a",
                    prelimGrade: 95,
                    midtermGrade: 93,
                    finalGrade: 84
                },

                {
                    subjectCodes: "CS102b",
                    prelimGrade: 60,
                    midtermGrade: 70,
                    finalGrade: 70
                },

                {
                    subjectCodes: "CS102c",
                    prelimGrade: 40,
                    midtermGrade: 40,
                    finalGrade: 40
                },

            ] 
        }
    },

    methods: {
        computeGrade(students){
            let total = 0;
            total = ((students.prelimGrade * .30) +
                    (students.midtermGrade * .30) +
                    (students.finalGrade * .40));

            return total
        },

        addRow() {
            this.students.push({
                subjectCodes: '',
                prelimGrade: '',
                midtermGrade: '',
                finalGrade: ''
            })
        }
    },

    computed: {
        computeAverage(){
            let average = 0;
            for (let i = 0; i < this.students.length; i++) {
                average += this.computeGrade(this.students[i]);
            }

            return average / this.students.length;
        }
    },

    filters: {
        twoDecimal(value){
            return value.toFixed(2);   //To use it in the ratings columns
        }
    }
   
}
</script>

<style scoped>
.failed {
    background-color: red;
}
</style>