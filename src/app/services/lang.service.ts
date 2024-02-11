import { Injectable } from '@angular/core';
import Exam from '../core/exam';

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
        title: string;
        subtitle: string;
        children: {
          examSelector: {
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
          title: 'MisoPhonia Exam',
          subtitle: 'Please select your preferred way to test your misophonia',
          children: {
            examSelector: {
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
          title: 'מבחן מיסופוניה',
          subtitle: 'אנא בחר את הדרך המועדפת עליך לבדוק את המיסופוניה שלך',
          children: {
            examSelector: {
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
                    navigationLink: '../exams/psycho-acoustic',
                    imageAssetSrc: 'assets/images/exams/customer-satisfaction-survey.jpeg',
                    studyPdfAssetSrc: '/assets/studies/psychoacoustic-test.pdf'
                  }),
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

  constructor() { }

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
    const url = window.location.pathname;
    const segments = url.split('/');
    const currentLang = segments[1];
    if (currentLang === lang) {
      return;
    }
    const newUrl = `/${lang}/${segments.slice(2).join('/')}`;
    window.history.pushState({}, '', newUrl);
  }
}
