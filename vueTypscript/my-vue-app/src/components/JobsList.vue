<template>
    <div class="hob-list">
        <header>
            <div class="order"></div>
        </header>
        <transition-group name="list" tag="ul">
            <li v-for="job in orderedJobs" :key="job.id">
                <h2>{{ job.title }} in {{job.location }}</h2>
                 <div class="salary">{{ job.salary }}</div>
                 <div class="description">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Delectus distinctio recusandae, sint perferendis beatae 
                         vel veritatis porro vitae quibusdam fugit sequi provident 
                         quia error obcaecati saepe laboriosam suscipit animi id.</p>
                 </div>
            </li>
        </transition-group>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent,  PropType } from 'vue'
import Job from '../types/Job';
import OderTerm from '../types/OrderTerm';

export default defineComponent({
    props:{
        jobs:{
            required:true,
            //
            type: Array as PropType<Job[]>
        },
        order:{
            required: true,
            type : String as PropType<OderTerm>

        }
    },
    //using composition api and computed values
    setup(props){
        const orderedJobs= computed(()=>{
            return [...props.jobs].sort((a:Job,b:Job)=>{
                return a[props.order]> b[props.order] ? 1 :-1 
            })
        })
        return {orderedJobs}

    }
 
})
</script>
<style scoped>
  .job-list {
    max-width: 960px;
    margin: 40px auto;
  }
  .job-list ul {
    padding: 0;
  }
  .job-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }
  .job-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
  }
  .salary {
    display: flex;
  }
  .salary img {
    width: 30px;
  }
  .salary p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
  }
  .list-move{
    transition: all 1s;
  }
</style>