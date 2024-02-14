import { Injectable } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import Exam from '../core/exam';
import {
  Sounds,
  SoundsToAssetPath
} from '../core/misoquest/core';

interface LangText {
  code: string;
  name: string;
  dir: string;
  app: {
    title: string;
    menu: {
      home: string;
      exam: string;
      contact: string;
      lang: string;
    };
    pages: {
      notFound: {
        title: string;
        subtitle: string;
      };
      home: {
        title: string;
        subtitle: string;
      };
      exam: {
        children: {
          examSelector: {
            title: string;
            subtitle: string;
            selectButton: {
              label: string;
            };
            displayStudyButton: {
              label: string;
            };
            downloadPdfButton: {
              label: string;
            };
            closeDialogButton: {
              label: string;
            };
            headphonesTooltip: string;
            cameraTooltip: string;
            noAccessoriesTooltip: string;
            state: {
              exams: {
                psychoacoustic: Exam;
                selfReport: Exam;
              }
            }
          },
          exams: {
            psychoacoustic: {
              title: string;
              subtitle: string;
              steps: {
                nextButton: {
                  label: string;
                };
                userAgreement: {
                  title: string;
                  subtitle: string;
                  content: {
                    ul: string[];
                  },
                  form: {
                    controls: {
                      age: {
                        label: string;
                        placeholder: string;
                        errorMessage: string;
                      };
                      gender: {
                        label: string;
                        placeholder: string;
                        options: {
                          value: number;
                          label: string;
                        }[];
                        errorMessage: string;
                      };
                      isConfirmed: {
                        label: string;
                      };
                    };
                  };
                };
                misoquest: {
                  title: string;
                  content: {
                    nextButton: {
                      label: string;
                    };
                    sounds: {
                      adjustmentSound: {
                        id: string;
                        title: string;
                        audioSrc: string;
                      },
                      rateableSounds: {
                        id: string;
                        title: string;
                        audioSrc: string;
                      }[];
                    };
                  }
                }
              }
            };
          }
        };
      };
      contact: {
        title: string;
        subtitle: string;
        content: {
          form: {
            controls: {
              name: {
                label: string;
                placeholder: string;
              };
              email: {
                label: string;
                placeholder: string;
              };
              message: {
                label: string;
                placeholder: string;
              };
            },
            submit: {
              label: string;
              successMessage: string;
              errorMessage: string;
            },
            errorMessages: {
              invalidEmail: string;
              requiredField: string;
            }
          }
        }
      };
    },
    thanksPage: {
      title: string;
      subtitle: string;
      linkText: string;
    }
  };
}

interface LangTextObject {
  [key: string]: LangText;
}

const text: LangTextObject = {
  en: {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    app: {
      title: 'MisoPhonia Exam',
      menu: {
        home: 'Home',
        exam: 'Exam',
        contact: 'Contact Us',
        lang: 'Language'
      },
      pages: {
        notFound: {
          title: 'Not Found',
          subtitle: 'The page you are looking for does not exist'
        },
        home: {
          title: 'Welcome to MisoPhonia Exam',
          subtitle: 'A new way to test your misophonia'
        },
        exam: {
          children: {
            examSelector: {
              title: 'MisoPhonia Exam',
              subtitle: 'Please select your preferred way to test your misophonia',
              selectButton: {
                label: 'Select'
              },
              displayStudyButton: {
                label: 'Display Study'
              },
              downloadPdfButton: {
                label: 'Download PDF'
              },
              closeDialogButton: {
                label: 'Close'
              },
              headphonesTooltip: 'Headphones required',
              cameraTooltip: 'Camera required',
              noAccessoriesTooltip: 'No accessories required',
              state: {
                exams: {
                  psychoacoustic: new Exam({
                    name: 'Psychoacoustic Exam',
                    note: 'Suitable for quiet environments and focus on sounds',
                    accessoriesRequirements: {
                      headphones: true,
                      camera: false
                    },
                    description: 'Undertake a modern misophonia self-assessment. Rate online sounds, answer questions, and unveil your misophonia score—an efficient, 91% accurate revelation of your sensitivity to specific sounds.',
                    navigationLink: '../exams/psycho-acoustic',
                    imageAssetSrc: 'assets/images/exams/sound-waves.webp',
                    studyPdfAssetSrc: '/assets/studies/psychoacoustic-test.pdf'
                  }),
                  selfReport: new Exam({
                    name: 'Self Report Exam',
                    note: 'Select this exam if you are not able to focus on sounds',
                    accessoriesRequirements: {
                      headphones: false,
                      camera: false
                    },
                    description: 'A reliable self-assessment for misophonia symptoms, correlating strongly with key factors like anger/aggression. Outperforms other measures, efficiently identifying adults with clinically significant misophonia.',
                    navigationLink: '../exams/self-report',
                    imageAssetSrc: 'assets/images/exams/customer-satisfaction-survey.jpeg',
                    studyPdfAssetSrc: '/assets/studies/duke-self-report.pdf'
                  })
                }
              }
            },
            exams: {
              psychoacoustic: {
                title: 'Psychoacoustic Test',
                subtitle: '',
                steps: {
                  nextButton: {
                    label: 'Next'
                  },
                  userAgreement: {
                    title: 'User Agreement',
                    subtitle: 'Disclaimer:',
                    content: {
                      ul: [
                        'This test is not a substitute for professional medical advice. The results provided should not be solely relied upon for diagnosis or treatment decisions. Always consult with a qualified healthcare professional for any health concerns you may have. This test serves as a potential aid in discussion with your doctor and should not be used as a final assessment.',
                        'Anonymity for Research: Your test results will be stored anonymously for the purposes of improving the test and conducting research. Your personal information will never be associated with your test results.',
                        'Limited Liability: The test is based on a reliable study, but the accuracy and effectiveness cannot be guaranteed. We are not responsible for any decisions or actions taken based on the test results. It is your responsibility to interpret the results and discuss them with your healthcare provider.',
                        'Audio Sensitivity: This test includes audio sounds. If you have misophonia (a sensitivity to certain sounds), you acknowledge the potential for discomfort and agree to use the test at your own risk. We are not responsible for any adverse reactions or effects stemming from audio sensitivity.'
                      ]
                    },
                    form: {
                      controls: {
                        age: {
                          label: 'Age',
                          placeholder: 'Enter your age',
                          errorMessage: 'Invalid age'
                        },
                        gender: {
                          label: 'Gender',
                          placeholder: 'Select gender',
                          options: [
                            { value: 0, label: 'Female' },
                            { value: 1, label: 'Male' },
                            { value: 2, label: 'Other' }
                          ],
                          errorMessage: 'Invalid gender'
                        },
                        isConfirmed: {
                          label: 'I confirm that I have read and agree to the terms and conditions',
                        },
                      }
                    }
                  },
                  misoquest: {
                    title: 'MisoQuest',
                    content: {
                      nextButton: {
                        label: 'Next'
                      },
                      sounds: {
                        adjustmentSound: {
                          id: Sounds.ADDITIONAL.WHITE_NOISE,
                          title: 'Please Adjust the Volume to a Comfortable Level',
                          audioSrc: SoundsToAssetPath.ADDITIONAL[Sounds.ADDITIONAL.WHITE_NOISE],
                        },
                        rateableSounds: [
                          {
                            id: Sounds.TRIGGERS.BLOWING_NOSE,
                            title: 'Blowing Nose',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.BLOWING_NOSE]
                          },
                          {
                            id: Sounds.TRIGGERS.BREATH_RUNNING,
                            title: 'Breath Running',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.BREATH_RUNNING]
                          },
                          {
                            id: Sounds.TRIGGERS.CHEWING_1,
                            title: 'Chewing 1',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.CHEWING_1]
                          },
                          {
                            id: Sounds.TRIGGERS.CHEWING_2,
                            title: 'Chewing 2',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.CHEWING_2]
                          },
                          {
                            id: Sounds.TRIGGERS.COUGH,
                            title: 'Cough',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.COUGH]
                          },
                          {
                            id: Sounds.TRIGGERS.GARGLING,
                            title: 'Gargling',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.GARGLING]
                          },
                          {
                            id: Sounds.TRIGGERS.HARD_BREATHING,
                            title: 'Hard Breathing',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.HARD_BREATHING]
                          },
                          {
                            id: Sounds.TRIGGERS.KEYBOARD,
                            title: 'Keyboard',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.KEYBOARD]
                          },
                          {
                            id: Sounds.TRIGGERS.PEN_CLICKING,
                            title: 'Pen Clicking',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.PEN_CLICKING]
                          },
                          {
                            id: Sounds.TRIGGERS.SLURPING,
                            title: 'Slurping',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.SLURPING]
                          },
                          {
                            id: Sounds.TRIGGERS.SNIFFING,
                            title: 'Sniffing',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.SNIFFING]
                          },
                          {
                            id: Sounds.TRIGGERS.SNORING,
                            title: 'Snoring',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.SNORING]
                          },
                          {
                            id: Sounds.TRIGGERS.SWALLOWING,
                            title: 'Swallowing',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.SWALLOWING]
                          },
                          {
                            id: Sounds.TRIGGERS.THROAT_CLEARING,
                            title: 'Throat Clearing',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.THROAT_CLEARING]
                          },
                          {
                            id: Sounds.TRIGGERS.VOMIT,
                            title: 'Vomit',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.VOMIT]
                          },
                          {
                            id: Sounds.TRIGGERS.WHEEZING,
                            title: 'Wheezing',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.WHEEZING]
                          },
                          {
                            id: Sounds.UNPLEASENT.CLAPPING,
                            title: 'Clapping',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.CLAPPING]
                          },
                          {
                            id: Sounds.UNPLEASENT.DISTORTED_GUITAR_DISSONANCE,
                            title: 'Distorted Guitar Dissonance',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.DISTORTED_GUITAR_DISSONANCE]
                          },
                          {
                            id: Sounds.UNPLEASENT.FINGERNAILS_ON_CHALKBOARD,
                            title: 'Fingernails on Chalkboard',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.FINGERNAILS_ON_CHALKBOARD]
                          },
                          {
                            id: Sounds.UNPLEASENT.FORK_SCRATCH_PLATE,
                            title: 'Fork Scratch Plate',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.FORK_SCRATCH_PLATE]
                          },
                          {
                            id: Sounds.UNPLEASENT.KNIFE_HIT_GLASS,
                            title: 'Knife Hit Glass',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.KNIFE_HIT_GLASS]
                          },
                          {
                            id: Sounds.UNPLEASENT.SCREAM,
                            title: 'Scream',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.SCREAM]
                          },
                          {
                            id: Sounds.PLEASENT.BIRDS,
                            title: 'Birds',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.BIRDS]
                          },
                          {
                            id: Sounds.PLEASENT.FOUNTAIN,
                            title: 'Fountain',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.FOUNTAIN]
                          },
                          {
                            id: Sounds.PLEASENT.HARP,
                            title: 'Harp',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.HARP]
                          },
                          {
                            id: Sounds.PLEASENT.LAKE,
                            title: 'Lake',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.LAKE]
                          },
                          {
                            id: Sounds.PLEASENT.LAUGTH,
                            title: 'Laugh',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.LAUGTH]
                          },
                          {
                            id: Sounds.PLEASENT.UNDERWATER,
                            title: 'Underwater',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.UNDERWATER]
                          },
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        },
        contact: {
          title: 'Contact Us',
          subtitle: 'contact us for any question or issue',
          content: {
            form: {
              controls: {
                name: {
                  label: 'Name',
                  placeholder: 'Enter your name'
                },
                email: {
                  label: 'Email',
                  placeholder: 'Enter your email'
                },
                message: {
                  label: 'Message',
                  placeholder: 'Enter your message'
                }
              },
              submit: {
                label: 'Send message',
                successMessage: 'Thanks for your message!',
                errorMessage: 'Error sending message'
              },
              errorMessages: {
                invalidEmail: 'Invalid email',
                requiredField: 'Required field'
              }
            }
          }
        }
      },
      thanksPage: {
        title: 'Thanks Page',
        subtitle: 'This site couldn\'t be possible without the help of the following people:',
        linkText: 'Thanks'
      }
    }
  },
  he: {
    code: 'he',
    name: 'עברית',
    dir: 'rtl',
    app: {
      title: 'מבחן מיסופוניה',
      menu: {
        home: 'בית',
        exam: 'מבחן',
        contact: 'צור קשר',
        lang: 'שפה'
      },
      pages: {
        notFound: {
          title: 'לא נמצא',
          subtitle: 'הדף שאתה מחפש לא קיים'
        },
        home: {
          title: 'ברוך הבא למבחן מיסופוניה',
          subtitle: 'דרך חדשה לבדוק את המיסופוניה שלך'
        },
        exam: {
          children: {
            examSelector: {
              title: 'מבחן מיסופוניה',
              subtitle: 'אנא בחר את הדרך המועדפת עליך לבדוק את המיסופוניה שלך',
              selectButton: {
                label: 'בחר'
              },
              displayStudyButton: {
                label: 'הצג מחקר'
              },
              downloadPdfButton: {
                label: 'PDF הורד'
              },
              closeDialogButton: {
                label: 'סגור'
              },
              headphonesTooltip: 'נדרשות אזניות',
              cameraTooltip: 'נדרש מצלמה',
              noAccessoriesTooltip: 'אין צורך באביזרים',
              state: {
                exams: {
                  psychoacoustic: new Exam({
                    name: 'מבחן פסיכואקוסטי',
                    note: 'מתאים לסביבה שקטה ולהתמקדות ברעשים',
                    accessoriesRequirements: {
                      headphones: true,
                      camera: false
                    },
                    description: 'בצע הערכת עצמית מקוונת קצרה כדי לגלות את הרגישות שלך לצלילים ספציפיים! ענה על שאלות והקש להקלטות של צלילים שונים. המבחן מהיר, יעיל ומדויק ב-91%, ויעזור לך לחשוף את רמת המיסופוניה שלך.',
                    navigationLink: '../exams/psycho-acoustic',
                    imageAssetSrc: 'assets/images/exams/sound-waves.webp',
                    studyPdfAssetSrc: '/assets/studies/psychoacoustic-test.pdf'
                  }),
                  selfReport: new Exam({
                    name: 'מבחן דיווח עצמי',
                    note: 'בחרו במבחן זה אם אינכם יכולים להתמקד ברעשים',
                    accessoriesRequirements: {
                      headphones: false,
                      camera: false
                    },
                    description: 'בצע מבחן עצמי מהיר ומדויק לזיהוי תסמיני מיסופוניה! המבחן, שפותח על ידי אנשי מקצוע, מתאם בצורה חזקה עם גורמים חשובים כמו כעס, ומחפש באופן יעיל מבוגרים עם מיסופוניה משמעותית מבחינה קלינית. הוא עוקף מבחנים אחרים בזיהוי מדויק של התסמינים.',
                    navigationLink: '../exams/self-report',
                    imageAssetSrc: 'assets/images/exams/customer-satisfaction-survey.jpeg',
                    studyPdfAssetSrc: '/assets/studies/duke-self-report.pdf'
                  }),
                }
              }
            },
            exams: {
              psychoacoustic: {
                title: 'מבחן פסיכואקוסטי',
                subtitle: '',
                steps: {
                  nextButton: {
                    label: 'הבא'
                  },
                  userAgreement: {
                    title: 'הסכם משתמש',
                    subtitle: 'כתב ויתור:',
                    content: {
                      ul: [
                        'בדיקה זו אינה תחליף לייעוץ רפואי מקצועי. אין להסתמך על התוצאות המתקבלות בלבד לצורך אבחון או קבלת החלטות טיפוליות. יש להיוועץ תמיד עם איש מקצוע בתחום הבריאות מוסמך בכל בעיה בריאותית שיש לך. בדיקה זו משמשת כסיוע פוטנציאלי לדיון עם הרופא שלך ולא צריכה לשמש כהערכה סופית.',
                        'אנונימיות למחקר: תוצאות הבדיקה שלך יאוחסנו באופן אנונימי לצורך שיפור הבדיקה וביצוע מחקר. המידע האישי שלך לעולם לא ישויך לתוצאות הבדיקה שלך.',
                        'אחריות מוגבלת: הבדיקה מבוססת על מחקר אמין, אך דיוקה ויעילותה אינן יכולות להיות מובטחות. איננו אחראים לכל החלטה או פעולה שננקטו על סמך תוצאות הבדיקה. באחריותך לפרש את התוצאות ולדון בהן עם הרופא שלך.',
                        'רגישות לשמע: בדיקה זו כוללת סאונדים. אם יש לך מיסופוניה (רגישות מסוימת לצלילים), אתה מכיר בפוטנציאל לאי נוחות ומסכים להשתמש בבדיקה על אחריותך בלבד. איננו אחראים לכל תגובות שליליות או השפעות הנובעות מרגישות שמיעתית.'
                      ]
                    },
                    form: {
                      controls: {
                        age: {
                          label: 'גיל',
                          placeholder: 'הכנס את גילך',
                          errorMessage: 'גיל לא תקין'
                        },
                        gender: {
                          label: 'מין',
                          placeholder: 'בחר מין',
                          options: [
                            { value: 0, label: 'נקבה' },
                            { value: 1, label: 'זכר' },
                            { value: 2, label: 'אחר' }
                          ],
                          errorMessage: 'מין לא תקין'
                        },
                        isConfirmed: {
                          label: 'אני מאשר שקראתי ומסכים לתנאים'
                        },
                      }
                    }
                  },
                  misoquest: {
                    title: 'מיסוקווסט',
                    content: {
                      nextButton: {
                        label: 'הבא'
                      },
                      sounds: {
                        adjustmentSound: {
                          id: Sounds.ADDITIONAL.WHITE_NOISE,
                          title: 'אנא כוונן את העוצמה לרמת נוחות',
                          audioSrc: SoundsToAssetPath.ADDITIONAL[Sounds.ADDITIONAL.WHITE_NOISE],
                        },
                        rateableSounds: [
                          {
                            id: Sounds.TRIGGERS.BLOWING_NOSE,
                            title: 'נשיפת אף',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.BLOWING_NOSE]
                          },
                          {
                            id: Sounds.TRIGGERS.BREATH_RUNNING,
                            title: 'נשימה תוך כדי ריצה',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.BREATH_RUNNING]
                          },
                          {
                            id: Sounds.TRIGGERS.CHEWING_1,
                            title: 'לעיסה 1',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.CHEWING_1]
                          },
                          {
                            id: Sounds.TRIGGERS.CHEWING_2,
                            title: 'לעיסה 2',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.CHEWING_2]
                          },
                          {
                            id: Sounds.TRIGGERS.COUGH,
                            title: 'שיעול',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.COUGH]
                          },
                          {
                            id: Sounds.TRIGGERS.GARGLING,
                            title: 'גרגור נוזלים',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.GARGLING]
                          },
                          {
                            id: Sounds.TRIGGERS.HARD_BREATHING,
                            title: 'נשימה כבדה',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.HARD_BREATHING]
                          },
                          {
                            id: Sounds.TRIGGERS.KEYBOARD,
                            title: 'הקלדה',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.KEYBOARD]
                          },
                          {
                            id: Sounds.TRIGGERS.PEN_CLICKING,
                            title: 'לחיצת עט',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.PEN_CLICKING]
                          },
                          {
                            id: Sounds.TRIGGERS.SLURPING,
                            title: 'שתיה רועשת',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.SLURPING]
                          },
                          {
                            id: Sounds.TRIGGERS.SNIFFING,
                            title: 'רחרוח',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.SNIFFING]
                          },
                          {
                            id: Sounds.TRIGGERS.SNORING,
                            title: 'נחירה',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.SNORING]
                          },
                          {
                            id: Sounds.TRIGGERS.SWALLOWING,
                            title: 'בליעה',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.SWALLOWING]
                          },
                          {
                            id: Sounds.TRIGGERS.THROAT_CLEARING,
                            title: 'ניקוי גרון',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.THROAT_CLEARING]
                          },
                          {
                            id: Sounds.TRIGGERS.VOMIT,
                            title: 'הקאה',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.VOMIT]
                          },
                          {
                            id: Sounds.TRIGGERS.WHEEZING,
                            title: 'קושי בנשימה',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.TRIGGERS.WHEEZING]
                          },
                          {
                            id: Sounds.UNPLEASENT.CLAPPING,
                            title: 'מחיאות כפיים',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.CLAPPING]
                          },
                          {
                            id: Sounds.UNPLEASENT.DISTORTED_GUITAR_DISSONANCE,
                            title: 'צליל גיטרה חשמלית מעוות',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.DISTORTED_GUITAR_DISSONANCE]
                          },
                          {
                            id: Sounds.UNPLEASENT.FINGERNAILS_ON_CHALKBOARD,
                            title: 'ציפורניים על לוח גיר',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.FINGERNAILS_ON_CHALKBOARD]
                          },
                          {
                            id: Sounds.UNPLEASENT.FORK_SCRATCH_PLATE,
                            title: 'מזלג חורץ צלחת',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.FORK_SCRATCH_PLATE]
                          },
                          {
                            id: Sounds.UNPLEASENT.KNIFE_HIT_GLASS,
                            title: 'סכין מכה בזכוכית',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.KNIFE_HIT_GLASS]
                          },
                          {
                            id: Sounds.UNPLEASENT.SCREAM,
                            title: 'צעקה',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.UNPLEASENT.SCREAM]
                          },
                          {
                            id: Sounds.PLEASENT.BIRDS,
                            title: 'ציפורים מצייצות',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.BIRDS]
                          },
                          {
                            id: Sounds.PLEASENT.FOUNTAIN,
                            title: 'מזרקה',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.FOUNTAIN]
                          },
                          {
                            id: Sounds.PLEASENT.HARP,
                            title: 'נבל',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.HARP]
                          },
                          {
                            id: Sounds.PLEASENT.LAKE,
                            title: 'אגם',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.LAKE]
                          },
                          {
                            id: Sounds.PLEASENT.LAUGTH,
                            title: 'צחוק',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.LAUGTH]
                          },
                          {
                            id: Sounds.PLEASENT.UNDERWATER,
                            title: 'רעש תת-ימי',
                            audioSrc: SoundsToAssetPath.TRIGGERS[Sounds.PLEASENT.UNDERWATER]
                          },
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        },
        contact: {
          title: 'דף יצירת קשר',
          subtitle: 'ניתן לפנות איתנו בקשר לכל שאלה או בעיה',
          content: {
            form: {
              controls: {
                name: {
                  label: 'שם',
                  placeholder: 'הכנס את שמך'
                },
                email: {
                  label: 'אימייל',
                  placeholder: 'הכנס את כתובת האימייל שלך'
                },
                message: {
                  label: 'הודעה',
                  placeholder: 'הכנס את ההודעה שלך'
                }
              },
              submit: {
                label: 'שלח הודעה',
                successMessage: 'תודה על ההודעה!',
                errorMessage: 'שגיאה בשליחת ההודעה'
              },
              errorMessages: {
                invalidEmail: 'אימייל לא תקין',
                requiredField: 'שדה חובה'
              }
            }
          }
        }
      },
      thanksPage: {
        title: 'דף תודה',
        subtitle: 'האתר זה לא היה אפשרי בלעדי העזרה של האנשים הבאים:',
        linkText: 'תודות'
      }
    }
  }
};

type Lang = keyof LangTextObject;

export const defaultLang: Lang = 'en';

export const langs: Lang[] = Object.keys(text);

@Injectable({
  providedIn: 'root'
})
export class LangService {
  currentLang: LangText = text[defaultLang];
  lans = langs.map(key => ({ key, value: text[key].name }));
  lansByKey = {
    en: 'en',
    he: 'he'
  };

  constructor(private locationStrategy: LocationStrategy) { }

  setLang(lang: Lang): void {
    if (lang in text) {
      this.currentLang = text[lang];
      this.setUrlPathFirstSegment(lang);
      this.setDir(this.currentLang.dir);
    }
  }

  setDir(dir: string): void {
    document.getElementsByTagName('html')[0].dir = dir;
  }

  setUrlPathFirstSegment(lang: Lang): void {
    const currentUrl = window.location.pathname;
    const href = this.locationStrategy.getBaseHref() || '';
    const path = currentUrl.slice(href.length);
    const segments = path.split('/');
    const currentLang = segments[0];
    if (currentLang === lang) {
      return;
    }
    const newUrlSegments = [lang, ...segments.slice(1)];
    const newUrl = `${href}${newUrlSegments.join('/')}`;
    window.history.pushState({}, '', newUrl);
  }
}
