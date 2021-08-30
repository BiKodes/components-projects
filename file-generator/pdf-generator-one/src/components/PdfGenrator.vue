<template>
    <div id="app" >
        <v-app class="v-application">
            <v-container class="mx-auto">
                <v-row>
                    <v-col>
                       
                        <h1>{{ heading }}</h1>
                        <v-btn 
                            color="blue" 
                            class="white--text" 
                            @click.prevent="generatePDF"
                        >
                            Generate PDF
                        </v-btn>

                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <ul>
                           <li v-for="item in items" :key="item">
                               {{ item.title }} - {{ item.body }}
                            </li> 
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

export default {
    name: 'PdfGenerator',

    data() {
        return {
            heading: "Waridi PDF Generator",

            moreText: [
                "This is another few sentences of text to look at it.",
                "Just testing the paragraphs to see how they format.",
                "jsPDF likes arrays for sentences.",
                "Do paragraphs wrap properly?",
                "Yes, they do!",
                "What does it look like?",
                "Not bad at all."
            ],
            items: [
                { title: "Item 1", body: "I am item 1 body text" },
                { title: "Item 2", body: "I am item 2 body text" },
                { title: "Item 3", body: "I am item 3 body text" },
                { title: "Item 4", body: "I am item 4 body text" }
            ]
        }
    },

    methods: {
        generatePDF(){
            const columns = [
                {
                    title: "Title", datakey: "title"
                },
                {
                    title: "Body", datakey: "body"
                }
            ];

            const doc = new jsPDF({
                orientation: "portrait",
                unit: "in",
                format: "letter"
            });

            doc.setFontSize(16).text(this.heading, 0.5, 1.0);

            doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);

            
            doc.autoTable({
                columns,
                body: this.items,
                margin: { left: 0.5, top: 1.25 }
             });

            doc
                .setFont("helvetica")
                .setFontSize(12)
                .text(this.moreText, 0.5, 3.5, { align: "left", maxWidth: "7.5" });

            doc
                .setFont("items")
                .setFontSize(11)
                .setTextColor(0, 0, 255)
                .text(
                    "This is a simple footer located .5 inches from page bottom",
                    0.5,
                    doc.internal.pageSize.height - 0.5
                )

            doc.save(`${this.heading}.pdf`)
        }
    }

    
}
</script>

