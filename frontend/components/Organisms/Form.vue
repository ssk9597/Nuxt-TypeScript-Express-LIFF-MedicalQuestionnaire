<template>
  <div class="form-container">
    <!-- 姓名 -->
    <div class="name-wrapper margin-b-lg">
      <div class="name-wrapper-content">
        <Label class="margin-b-sm" :labelName="'姓'" />
        <FormInput :placeholder="'例：田中'" />
      </div>
      <div class="name-wrapper-content">
        <Label class="margin-b-sm" :labelName="'名'" />
        <FormInput :placeholder="'例：太郎'" />
      </div>
    </div>
    <!-- 住所 -->
    <Label class="margin-b-md" :labelName="'住所'" />
    <FormQuestion class="margin-b-sm" :question="'郵便番号（ハイフンなし）'" />
    <div class="address-wrapper margin-b-md">
      <FormInput
        class="address-wrapper-content"
        :inputmode="'numeric'"
        :placeholder="'例：8400054'"
      />
      <FormButton
        class="address-wrapper-content"
        :backgroundColor="'#2F9447'"
        :fontSize="'12px'"
        :maxWidth="'120px'"
        :buttonText="'郵便番号検索'"
        @childClick="childClickAddress"
      />
    </div>
    <FormQuestion class="margin-b-sm" :question="'都道府県・市区町村・番地'" />
    <FormInput class="margin-b-md" />
    <FormQuestion class="margin-b-sm" :question="'建物名・号室'" />
    <FormInput class="margin-b-xl" />

    <!-- 症状に関して -->
    <FormHeading class="margin-b-lg" :heading="'症状に関して'" />
    <FormQuestion class="margin-b-sm" :question="'今回はどのような症状で受診されましたか？'" />
    <FormTextarea class="margin-b-lg" />
    <FormQuestion class="margin-b-sm" :question="'現在服用中のお薬はありますか？'" />
    <FormRadioButton class="margin-b-lg" :options="['はい', 'いいえ']" :default="'いいえ'" />
    <FormQuestion
      class="margin-b-sm"
      :question="'現在治療中、もしくは過去に治療したことのある病気はありますか？'"
    />
    <FormSelectBox class="margin-b-sm" :options="diseaseGroups" />
    <FormQuestion class="margin-b-sm" :question="'その他'" />
    <FormTextarea class="margin-b-xl" />

    <!-- 生活習慣について -->
    <FormHeading class="margin-b-lg" :heading="'生活習慣について'" />
    <FormQuestion class="margin-b-sm" :question="'飲酒について'" />
    <FormRadioButton
      class="margin-b-lg"
      :options="['毎日', '時々', '飲まない']"
      :default="'時々'"
      :width="'90px'"
    />
    <FormQuestion class="margin-b-sm" :question="'タバコについて'" />
    <FormRadioButton class="margin-b-sm" :options="['吸う', '吸わない']" :default="'吸わない'" />
    <FormQuestion class="margin-b-sm" :question="'「吸う」の場合、1日何本吸うか選んでください'" />
    <FormSelectBox class="margin-b-lg" :options="numberOfCigarettes" />
    <FormQuestion class="margin-b-sm" :question="'車の運転について'" />
    <FormRadioButton class="margin-b-lg" :options="['する', 'しない']" :default="'しない'" />
    <FormQuestion class="margin-b-sm" :question="'日常生活や仕事で当てはまる項目はありますか？'" />
    <FormSelectBox class="margin-b-lg" :options="eventsOfDailyLife" />
    <FormQuestion class="margin-b-sm" :question="'妊娠中または妊娠の可能性がありますか？'" />
    <FormRadioButton class="margin-b-sm" :options="['はい', 'いいえ']" :default="'いいえ'" />
    <FormQuestion class="margin-b-sm" :question="'「はい」の場合、妊娠経過週をお選びください'" />
    <FormSelectBox class="margin-b-lg" :options="pregnancyElapsed" />
    <FormQuestion class="margin-b-sm" :question="'授乳中ですか？'" />
    <FormRadioButton class="margin-b-xxl" :options="['はい', 'いいえ']" :default="'いいえ'" />
    <FormButton class="margin-b-xxl" :buttonText="'登録'" @childClick="childClickRegister" />
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
  data() {
    return {
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
    };
  },
  methods: {
    childClickAddress() {
      this.$emit('clickAddress');
    },
    childClickRegister() {
      this.$emit('clickRegister');
    },
  },
};
</script>

<style lang="scss" scoped>
.margin-b {
  &-sm {
    margin-bottom: 10px;
  }
  &-md {
    margin-bottom: 15px;
  }
  &-lg {
    margin-bottom: 30px;
  }
  &-xl {
    margin-bottom: 45px;
  }
  &-xxl {
    margin-bottom: 60px;
  }
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
