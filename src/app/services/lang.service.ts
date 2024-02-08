import { Injectable } from '@angular/core';

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
      home: {
        title: string;
        subtitle: string;
      };
      exam: {
        title: string;
        subtitle: string;
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
        home: {
          title: 'Welcome to MisoPhonia Exam',
          subtitle: 'A new way to test your misophonia'
        },
        exam: {
          title: 'MisoPhonia Exam',
          subtitle: 'Please select your preferred way to test your misophonia'
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
        home: {
          title: 'ברוך הבא למבחן מיסופוניה',
          subtitle: 'דרך חדשה לבדוק את המיסופוניה שלך'
        },
        exam: {
          title: 'מבחן מיסופוניה',
          subtitle: 'אנא בחר את הדרך המועדפת עליך לבדוק את המיסופוניה שלך'
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

const defaultLang: Lang = 'en';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  currentLang: LangText = text[defaultLang];
  lans = Object.keys(text).map(key => ({key, value: text[key].name}));
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
