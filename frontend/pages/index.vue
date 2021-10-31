<template>
  <div>
    <div class="mb-xxl"></div>
    <h1 class="heading mb-xxl">お薬を安全に服用いただくため<br />ご協力をお願いします</h1>
    <div class="form-container">
      <!-- 姓名 -->
      <div class="name-wrapper mb-lg">
        <div class="name-wrapper-content">
          <Label class="mb-sm" :labelName="'姓'" />
          <FormInput :placeholder="'例：田中'" :value="firstName" @input="firstName = $event" />
        </div>
        <div class="name-wrapper-content">
          <Label class="mb-sm" :labelName="'名'" />
          <FormInput :placeholder="'例：太郎'" :value="lastName" @input="lastName = $event" />
        </div>
      </div>
      <!-- 住所 -->
      <Label class="mb-md" :labelName="'住所'" />
      <FormQuestion class="mb-sm" :question="'郵便番号（ハイフンなし）'" />
      <div class="address-wrapper mb-md">
        <FormInput
          class="address-wrapper-content"
          :inputmode="'numeric'"
          :placeholder="'例：8400054'"
          :value="zipCode"
          @input="zipCode = $event"
        />
        <FormButton
          class="address-wrapper-content"
          :backgroundColor="'#2F9447'"
          :fontSize="'12px'"
          :maxWidth="'120px'"
          :buttonText="'郵便番号検索'"
          :click="clickAddress"
          @clickAddress="clickAddress"
        />
      </div>
      <FormQuestion class="mb-sm" :question="'都道府県・市区町村・番地'" />
      <FormInput class="mb-md" :value="address1" @input="address1 = $event" />
      <FormQuestion class="mb-sm" :question="'建物名・号室'" />
      <FormInput class="mb-xl" :value="address2" @input="address2 = $event" />

      <!-- 症状に関して -->
      <FormHeading class="mb-lg" :heading="'症状に関して'" />
      <FormQuestion class="mb-sm" :question="'今回はどのような症状で受診されましたか？'" />
      <FormTextarea class="mb-lg" :value="reasonVisit" @input="reasonVisit = $event" />
      <FormQuestion class="mb-sm" :question="'現在服用中のお薬はありますか？'" />
      <FormRadioButton
        class="mb-lg"
        :options="['はい', 'いいえ']"
        :default="'いいえ'"
        :value="isMedicine"
        @input="isMedicine = $event"
      />
      <FormQuestion
        class="mb-sm"
        :question="'現在治療中、もしくは過去に治療したことのある病気はありますか？'"
      />
      <FormSelectBox
        class="mb-sm"
        :options="diseaseGroups"
        :value="selectDisease"
        @input="selectDisease = $event"
      />
      <FormQuestion class="mb-sm" :question="'その他'" />
      <FormTextarea class="mb-xl" :value="otherReasons" @input="otherReasons = $event" />

      <!-- 生活習慣について -->
      <FormHeading class="mb-lg" :heading="'生活習慣について'" />
      <FormQuestion class="mb-sm" :question="'飲酒について'" />
      <FormRadioButton
        class="mb-lg"
        :options="['毎日', '時々', '飲まない']"
        :default="'時々'"
        :width="'90px'"
        :value="isAlcohol"
        @input="isAlcohol = $event"
      />
      <FormQuestion class="mb-sm" :question="'タバコについて'" />
      <FormRadioButton
        :class="[isCigarettes === '吸う' ? 'mb-sm' : 'mb-lg']"
        :options="['吸う', '吸わない']"
        :default="'吸わない'"
        :value="isCigarettes"
        @input="isCigarettes = $event"
      />
      <div v-if="isCigarettes === '吸う'">
        <FormQuestion class="mb-sm" :question="'「吸う」の場合、1日何本吸うか選んでください'" />
        <FormSelectBox
          class="mb-lg"
          :options="numberOfCigarettes"
          :value="selectCigarettes"
          @input="selectCigarettes = $event"
        />
      </div>
      <FormQuestion class="mb-sm" :question="'車の運転について'" />
      <FormRadioButton
        class="mb-lg"
        :options="['する', 'しない']"
        :default="'しない'"
        :value="isDrive"
        @input="isDrive = $event"
      />
      <FormQuestion class="mb-sm" :question="'日常生活や仕事で当てはまる項目はありますか？'" />
      <FormSelectBox
        class="mb-lg"
        :options="eventsOfDailyLife"
        :value="selectDailyLife"
        @input="selectDailyLife = $event"
      />
      <FormQuestion class="mb-sm" :question="'妊娠中または妊娠の可能性がありますか？'" />
      <FormRadioButton
        :class="[isPregnancy === 'ある' ? 'mb-sm' : 'mb-xxl']"
        :options="['ある', 'ない']"
        :default="'ない'"
        :value="isPregnancy"
        @input="isPregnancy = $event"
      />
      <div v-if="isPregnancy === 'ある'">
        <FormQuestion class="mb-sm" :question="'「ある」の場合、妊娠経過週をお選びください'" />
        <FormSelectBox
          class="mb-xxl"
          :options="pregnancyElapsed"
          :value="selectPregnancyElapsed"
          @input="selectPregnancyElapsed = $event"
        />
      </div>
      <FormButton
        class="mb-xxl"
        :buttonText="'登録'"
        :click="clickRegister"
        @clickRegister="clickRegister"
      />
    </div>
  </div>
</template>

<script>
// components
import Label from '@/components/Atoms/Label';
import FormInput from '@/components/Atoms/FormInput';
import FormQuestion from '@/components/Atoms/FormQuestion';
import FormButton from '@/components/Atoms/FormButton';
import FormHeading from '@/components/Atoms/FormHeading';
import FormTextarea from '@/components/Atoms/FormTextarea';
import FormRadioButton from '@/components/Atoms/FormRadioButton';
import FormSelectBox from '@/components/Atoms/FormSelectBox';

export default {
  components: {
    Label,
    FormInput,
    FormQuestion,
    FormButton,
    FormHeading,
    FormTextarea,
    FormRadioButton,
    FormSelectBox,
  },
  async mounted() {
    await liff.init({
      liffId: process.env.LIFF_ID,
    });
  },
  data() {
    return {
      // 選択肢
      diseaseGroups: [
        '特になし',
        '高血圧',
        '糖尿病',
        '脂質異常症',
        '緑内障',
        '肝疾患',
        '心疾患',
        '腎疾患',
        '胃疾患',
        '前立腺肥大症',
        '脳梗塞',
      ],
      numberOfCigarettes: ['-', '10本以下', '11〜20本', '21〜30本', '31本以上'],
      eventsOfDailyLife: [
        '当てはまるものはない',
        '仕事で車を運転',
        '高所での作業',
        '生活時間が不規則',
      ],
      pregnancyElapsed: [
        '-',
        '5週',
        '6週',
        '7週',
        '8週',
        '9週',
        '10週',
        '11週',
        '12週',
        '13週',
        '14週',
        '15週',
        '16週',
        '17週',
        '18週',
        '19週',
        '20週',
        '21週',
        '22週',
        '23週',
        '24週',
        '25週',
        '26週',
        '27週',
        '28週',
        '29週',
        '30週',
        '31週',
        '32週',
        '33週',
        '34週',
        '35週',
        '36週',
        '37週',
        '38週',
      ],
      // データ
      firstName: '',
      lastName: '',
      zipCode: '',
      address1: '',
      address2: '',
      reasonVisit: '',
      isMedicine: 'いいえ',
      selectDisease: '特になし',
      otherReasons: '',
      isAlcohol: '時々',
      isCigarettes: '吸わない',
      selectCigarettes: '-',
      isDrive: 'しない',
      selectDailyLife: '当てはまるものはない',
      isPregnancy: 'ない',
      selectPregnancyElapsed: '-',
    };
  },
  methods: {
    async clickAddress() {
      const url = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
      const address = await this.$axios.$get(url + this.zipCode);

      this.address1 =
        address.results[0].address1 + address.results[0].address2 + address.results[0].address3;

      alert(this.address1);
    },
    async clickRegister() {
      await liff.sendMessages([
        {
          type: 'text',
          text: `
            お問い合わせありがとうございます。\n\n
            姓：${this.firstName}\n
            名：${this.lastName}\n
            住所：${this.address1} ${this.address2}\n
            受診理由：${this.reasonVisit}\n
            服用中のお薬：${this.isMedicine}\n
            治療中の病気：${this.selectDisease}\n
            その他の病気：${this.otherReasons}\n
            飲酒：${this.isAlcohol}\n
            タバコ：${this.isAlcohol}\n
            タバコの本数：${this.selectCigarettes}\n
            運転：${this.isDrive}\n
            日々の生活：${this.selectDailyLife}\n
            妊娠：${this.isPregnancy}\n
            妊娠週：${this.selectPregnancyElapsed}
          `,
        },
      ]);
      await liff.closeWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
.mb {
  &-sm {
    margin-bottom: 8px;
  }
  &-md {
    margin-bottom: 16px;
  }
  &-lg {
    margin-bottom: 24px;
  }
  &-xl {
    margin-bottom: 40px;
  }
  &-xxl {
    margin-bottom: 64px;
  }
}
.heading {
  text-align: center;
  line-height: 36px;
  font-size: 18px;
  font-weight: bold;
}
.name {
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-content {
      max-width: 150px;
      width: calc(50% - 15px);
    }
  }
}
.address {
  &-wrapper {
    display: flex;
    justify-content: space-between;

    &-content {
      max-width: 150px;
      width: 50%;
    }
  }
}
</style>
