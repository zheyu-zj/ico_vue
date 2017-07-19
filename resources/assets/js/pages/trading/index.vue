<template>
    <div id="tradingMain">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <p class="swiper-slide" v-for="data in newMessages">{{data}}</p>
            </div>
        </div>
        <ul>
            <li>寄售货币</li>
            <li>求购货币</li>
            <li>交易管理</li>
            <li>我要寄售<i></i></li>
            <li>我要求购<i></i></li>
        </ul>
        <el-table :data="dataTable" style="width: 100%">
            <el-table-column
                    prop="id"
                    label="币名"
                    :formatter="formatter">
                <template scope="scope">
                    <img :src="scope.row.img" alt="">
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="EsAbbreviation"
                    label="姓名">
            </el-table-column>
            <el-table-column
                    prop="usable"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="freeze"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="financial"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="coinLock"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="gross"
                    label="地址">
            </el-table-column>
            <el-table-column
                    label="地址">
                <template scope="scope">
                    <img :src="scope.row.img" alt="">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="标签"
                    :filters="[{ text: '0', value: '0' }, { text: '1', value: '1' }]"
                    :filter-method="filterId"
                    filter-placement="bottom-end">
                <template scope="scope">
                    <el-tag
                            :type="scope.row.id === '0' ? 'primary' : 'success'"
                            close-transition>{{scope.row.id}}
                    </el-tag>
                </template>
            </el-table-column>
        </el-table>
        {{dataTable}}
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import {mapState} from 'vuex';

    export default{
        data(){
            return {};
        },
        created() {
            this.load();
        },
        watch: {
            '$route': 'load'
        },
        computed: mapState({
            newMessages: state => state.trade.newMessages,
            dataTable: function (state) {
                return state.trade.dataTable
            }
        }),
        updated() {
            let swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                loop: true,
                play: 2000,
                autoplay: 2000,
                speed: 1500,
                autoplayDisableOnInteraction: false,
            })
        },
        methods: {
            formatter(row, column) {
                return row.id;
            },
            filterId(value, row) {
                return row.id + '' === value;
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            load(){
                this.$store.dispatch('get_trade');
            },
        }
    }
</script>
<style lang="scss">
    @import "index";
</style>