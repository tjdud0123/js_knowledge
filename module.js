// C 폴더 안 index.js ( data에서 import할 상수파일 )
import C from './C';
export default C;

// data.js ( export할 정적파일 )
import C from '@commons/C';

export default function getData() {
  return { index:'1', txt:'hi' }
}

export default function getUser() {
  return { name:'seoYng', id:1111 }
}

// app.js ( import할 파일 - js )
import { getData, getUser } from './data';

// component.vue ( import할 파일 - vue )
<script>
import { getData, getUser } from './data';
export default {
  data() {
    return {
      data: getData(),
      name: getUser().name,
      id: getUser().id
  }
</script>
