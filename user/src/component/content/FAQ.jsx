import React, { useState } from 'react'

const faqs = [
  {
    question: 'एमपीएसओएस क्या है?',
    answer:
      'एमपीएसओएस का मतलब मध्य प्रदेश राज्य ओपन स्कूल है, जो ओपन स्कूलिंग के माध्यम से 10वीं और 12वीं कक्षा के छात्रों के लिए लचीले शिक्षण के अवसर प्रदान करने की एक पहल है।',
  },
  {
    question: 'एमपीएसओएस में कौन दाखिला ले सकता है? ',
    answer:
      'कोई भी छात्र जो अपनी 10वीं या 12वीं की शिक्षा पूरी करना चाहता है और पात्रता मानदंडों को पूरा करता है, वह एमपीएसओएस में दाखिला ले सकता है।',
  },
  {
    question: 'एमपीएसओएस में नामांकन के क्या लाभ हैं? ',
    answer:
      'छात्र एक ही मंच पर लचीले शिक्षण विकल्प, अध्ययन सामग्री, अभ्यास परीक्षण, परीक्षा-संबंधी जानकारी और परिणाम तक पहुंच सकते हैं।',
  },
  {
    question: 'मैं MPSOS के लिए पंजीकरण कैसे करूँ? ',
    answer:
      'MPSOS की वेबसाइट पर जाएँ, आवश्यक विवरण भरें और प्रारंभिक पंजीकरण पूरा करें। अंतिम पंजीकरण के लिए, आवश्यक दस्तावेजों के साथ अपने निकटतम AISECT केंद्र पर जाएँ और नामांकन शुल्क का भुगतान करें।',
  },
  {
    question: ' पंजीकरण के लिए कौन से दस्तावेज़ आवश्यक हैं?',
    answer:
      'आपको अपने पिछले शैक्षणिक रिकॉर्ड, पहचान प्रमाण (आधार कार्ड या समकक्ष), पासपोर्ट आकार की तस्वीरें और पंजीकरण प्रक्रिया के दौरान मांगे गए अन्य दस्तावेज़ प्रदान करने होंगे।',
  },
  {
    question: 'क्या मैं AISECT केंद्र पर जाए बिना ऑनलाइन पंजीकरण कर सकता हूं?',
    answer:
      'नहीं, दस्तावेज़ जमा करने और शुल्क भुगतान सहित अंतिम पंजीकरण प्रक्रिया निकटतम AISECT केंद्र पर पूरी की जानी चाहिए।',
  },
  {
    question: 'मैं AISECT केन्द्रों की सूची कहां पा सकता हूं? ',
    answer:
      'AISECT केन्द्रों की सूची EG-MPSOS वेबसाइट पर "AISECT केन्द्र" अनुभाग के अंतर्गत उपलब्ध है।',
  },
  {
    question: 'मैं अध्ययन सामग्री कैसे प्राप्त कर सकता हूँ? ',
    answer:
      'पंजीकरण के बाद, आप ईजी-एमपीएसओएस वेबसाइट पर लॉग इन कर सकते हैं और संसाधनों को डाउनलोड करने या देखने के लिए "अध्ययन सामग्री" अनुभाग तक पहुंच सकते हैं।',
  },
  {
    question: 'क्या अध्ययन सामग्री निःशुल्क है?',
    answer:
      'हां, सभी पंजीकृत छात्रों के लिए अध्ययन सामग्री निःशुल्क उपलब्ध है।',
  },
  {
    question: 'अध्ययन सामग्री किन भाषाओं में उपलब्ध है?',
    answer:
      'अध्ययन सामग्री हिंदी में उपलब्ध कराई जाती है क्योंकि यह सभी छात्रों के लिए पढ़ने में आसान है।',
  },
  {
    question: 'प्रैक्टिस सेट क्या हैं?',
    answer:
      'प्रैक्टिस सेट ऑनलाइन मॉक टेस्ट हैं जो वेबसाइट पर उपलब्ध हैं ताकि छात्रों को परीक्षा की तैयारी में मदद मिल सके। वे वास्तविक परीक्षा प्रारूप का अनुकरण करते हैं और आपके ज्ञान का मूल्यांकन करते हैं।',
  },
  {
    question: 'मैं अभ्यास सेट कैसे कर सकता हूँ?',
    answer:
      "एमपीएसओएस वेबसाइट पर लॉग इन करें, 'अभ्यास सेट' अनुभाग पर जाएं, और अभ्यास शुरू करने के लिए अपना विषय चुनें।",
  },
  {
    question: 'क्या अभ्यास सेट समयबद्ध हैं?',
    answer:
      'हां, अभ्यास सेट वास्तविक परीक्षा स्थितियों का अनुकरण करने के लिए डिज़ाइन किए गए हैं और तदनुसार समयबद्ध हैं।',
  },
  {
    question: 'क्या मैं अभ्यास सेटों का पुनः प्रयास कर सकता हूँ?',
    answer:
      'हाँ, आप अपनी समझ और कौशल को बेहतर बनाने के लिए कई बार अभ्यास सेटों का प्रयास कर सकते हैं।',
  },
  {
    question: 'मैं अपना एडमिट कार्ड कैसे प्राप्त कर सकता हूँ?',
    answer:
      'एडमिट कार्ड MPSOS की वेबसाइट [https://www.mpsos.nic.in/] पर डाउनलोड के लिए उपलब्ध होंगे। आप अपने क्रेडेंशियल के साथ लॉग इन कर सकते हैं और परीक्षा से पहले उन्हें डाउनलोड कर सकते हैं। आप AISECT सेंटर पर भी जा सकते हैं और वहाँ से एडमिट कार्ड प्राप्त कर सकते हैं।',
  },
  {
    question: 'मैं अपना परीक्षा परिणाम कहां देख सकता हूं?',
    answer:
      "परीक्षा परिणाम MPSOS वेबसाइट [https://www.mpsos.nic.in/] पर 'परिणाम' अनुभाग के अंतर्गत प्रकाशित किए जाएंगे। आप अपने नामांकन नंबर का उपयोग करके उन्हें एक्सेस कर सकते हैं।",
  },
  {
    question: 'यदि मेरे परिणाम में कोई त्रुटि हो तो मुझे क्या करना चाहिए?',
    answer:
      'समस्या की रिपोर्ट करने के लिए दिए गए फोन नंबर या ईमेल आईडी के माध्यम से तुरंत एमपीएसओएस हेल्पडेस्क से संपर्क करें।',
  },
  {
    question: 'मैं व्हाट्सएप के साथ चैटबॉट को कैसे कॉन्फ़िगर करूं?',
    answer:
      "ईजी-एमपीएसओएस वेबसाइट पर लॉग इन करें, 'चैटबॉट एकीकरण' अनुभाग पर जाएं, और चैटबॉट को अपने व्हाट्सएप से लिंक करने के लिए निर्देशों का पालन करें।",
  },
  {
    question: 'चैटबॉट मेरी किस प्रकार मदद कर सकता है?',
    answer:
      'चैटबॉट आपको पंजीकरण संबंधी प्रश्नों, अध्ययन सामग्री, अभ्यास सेट, परीक्षा कार्यक्रम, परिणाम और सामान्य सहायता में सहायता कर सकता है।',
  },
  {
    question: 'क्या चैटबॉट 24/7 उपलब्ध है?',
    answer: 'हां, चैटबॉट छात्रों की सहायता के लिए चौबीसों घंटे उपलब्ध है।',
  },
  {
    question: 'मैं एमपीएसओएस हेल्पडेस्क से कैसे संपर्क कर सकता हूं?',
    answer:
      'आप वेबसाइट पर दिए गए टोल-फ्री नंबर या ईमेल के माध्यम से हेल्पडेस्क से संपर्क कर सकते हैं।',
  },
  {
    question: 'क्या मुझे महत्वपूर्ण अपडेट के बारे में सूचनाएं प्राप्त होंगी?',
    answer:
      'हां, पंजीकृत छात्रों को परीक्षा कार्यक्रम और परिणाम जैसे महत्वपूर्ण अपडेट के लिए ईमेल, एसएमएस और वेबसाइट के माध्यम से सूचनाएं प्राप्त होंगी।',
  },
  {
    question: 'मैं MPSOS वेबसाइट के बारे में फ़ीडबैक कैसे दे सकता हूँ?',
    answer:
      'फ़िलहाल छात्र फ़ीडबैक सबमिट करने के लिए कोई अलग इंटरफ़ेस उपलब्ध नहीं है। हालाँकि, आप टोल-फ़्री नंबर पर कॉल करके या दिए गए सहायता पते पर ईमेल भेजकर अपनी फ़ीडबैक साझा कर सकते हैं।',
  },
  {
    question:
      'यदि मुझे वेबसाइट पर तकनीकी समस्याओं का सामना करना पड़े तो मुझे क्या करना चाहिए?',
    answer:
      'किसी भी तकनीकी समस्या की सूचना हेल्पडेस्क को दें, और वे तुरंत उसका समाधान करने में आपकी सहायता करेंगे।',
  },
  {
    question: 'क्या मैं पंजीकरण के बाद अपने व्यक्तिगत विवरण अपडेट कर सकता हूं?',
    answer:
      'हां, आप AISECT केंद्रों पर जाकर अपने विवरण अपडेट कर सकते हैं, यदि आप चाहें तो केवल केंद्र ही आपकी प्रोफ़ाइल को संपादित कर पाएंगे, लेकिन सीमित समय अवधि के भीतर।',
  },
]

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-5 border-[#fd645b] border-x-4 bg-[#fd645b] pt-1 py-1">
        अक्सर पूछे जाने वाले प्रश्न
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border  rounded-lg p-4 shadow-sm">
            <button
              className="w-full  text-left font-medium text-lg flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700 border-b-2 border-[#fd645b] ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQComponent
