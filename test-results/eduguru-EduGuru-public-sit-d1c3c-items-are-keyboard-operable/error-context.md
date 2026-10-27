# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: eduguru.spec.js >> EduGuru public site audit >> navigation items are keyboard operable
- Location: tests\eduguru.spec.js:150:3

# Error details

```
Error: navigation items that cannot receive keyboard focus

expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 26

- Array []
+ Array [
+   Object {
+     "name": "nav-home",
+     "role": null,
+     "tabIndex": -1,
+     "tag": "DIV",
+   },
+   Object {
+     "name": "nav-menu",
+     "role": null,
+     "tabIndex": -1,
+     "tag": "DIV",
+   },
+   Object {
+     "name": "nav-courses",
+     "role": null,
+     "tabIndex": -1,
+     "tag": "DIV",
+   },
+   Object {
+     "name": "nav-profile",
+     "role": null,
+     "tabIndex": -1,
+     "tag": "DIV",
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - generic:
      - generic: No Connection
      - generic: You're Offline
      - generic: EduGuru needs internet to load your courses and lessons. Please check your connection and try again.
      - button "Try Again"
    - generic: EDUGURU
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner [ref=e4]:
        - generic [ref=e5] [cursor=pointer]:
          - img "EduGuru" [ref=e7]
          - generic [ref=e8]: EduGuru
        - generic [ref=e9]:
          - button "Refresh" [ref=e10] [cursor=pointer]
          - button "Resources" [ref=e15] [cursor=pointer]
          - button "Notifications" [ref=e18] [cursor=pointer]
      - generic:
        - generic:
          - generic: Notifications
          - generic:
            - button "Mark all read"
            - button "Clear all"
        - generic:
          - generic:
            - paragraph: No notifications yet
      - main [ref=e22]:
        - generic [ref=e23]:
          - generic [ref=e24]:
            - heading "What will you learn today?" [level=2] [ref=e25]: What will youlearn today?
            - generic [ref=e26]:
              - textbox "Search courses, teachers..." [ref=e28]
              - button "Search" [ref=e29] [cursor=pointer]
          - generic [ref=e34]:
            - button "For You" [ref=e35] [cursor=pointer]
            - button "Popular" [ref=e36] [cursor=pointer]
            - button "🔥 Fire" [ref=e37] [cursor=pointer]
            - button "🏛️ Institute" [ref=e38] [cursor=pointer]
            - button "Categories" [ref=e39] [cursor=pointer]
          - generic [ref=e45]:
            - generic [ref=e46]:
              - generic [ref=e48]:
                - img "Graphic design" [ref=e50] [cursor=pointer]
                - img "Photography" [ref=e52] [cursor=pointer]
                - img "Quran Course" [ref=e54] [cursor=pointer]
              - generic [ref=e55]:
                - generic [ref=e56] [cursor=pointer]
                - generic [ref=e57] [cursor=pointer]
                - generic [ref=e58] [cursor=pointer]
            - generic [ref=e59]:
              - generic [ref=e67] [cursor=pointer]:
                - generic [ref=e68]: Guru Tests
                - generic [ref=e69]: Mock exams & practice tests
              - generic [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: My School
                - generic [ref=e80]: Classes & schedules
          - generic [ref=e86]:
            - generic [ref=e87]:
              - generic [ref=e88]: 🎓
              - generic [ref=e89]: JOIN EDUGURU
            - generic [ref=e90]: Start learning today
            - generic [ref=e91]: Create a free account to enroll in courses, take Guru Tests, and track your progress — all in one place.
            - generic [ref=e92]:
              - button "Sign In" [ref=e93] [cursor=pointer]
              - button "Sign Up" [ref=e97] [cursor=pointer]
          - generic [ref=e101]:
            - generic [ref=e102]: Popular Courses
            - generic [ref=e103] [cursor=pointer]: See all
          - generic [ref=e104]:
            - generic [ref=e105] [cursor=pointer]:
              - generic [ref=e106]:
                - img "Complete Quran Learning Course (Tajweed Method – Easy Online Classes)" [ref=e107]
                - generic [ref=e108]: "-46%"
              - generic [ref=e109]:
                - generic [ref=e110]: Complete Quran Learning Course (Tajweed Method – Easy Online Classes)
                - generic [ref=e111]:
                  - text: Al-Kitab Academy
                  - img "Verified Institute" [ref=e114]
                - generic [ref=e118]:
                  - generic [ref=e119]: "0.0"
                  - generic [ref=e122]: "2"
                - generic [ref=e129]:
                  - text: LKR 4,800
                  - generic [ref=e130]: LKR 8,950
            - generic [ref=e131] [cursor=pointer]:
              - generic [ref=e132]:
                - img "30 Days Spoken English Course in Tamil – Speak English with Confidence" [ref=e133]
                - generic [ref=e134]: 🔥 Hot
              - generic [ref=e135]:
                - generic [ref=e136]: 30 Days Spoken English Course in Tamil – Speak English with Confidence
                - generic [ref=e137]:
                  - text: Ishaq
                  - img "Verified Institute" [ref=e141]
                - generic [ref=e145]:
                  - generic [ref=e146]: "0.0"
                  - generic [ref=e149]: "1"
                - generic [ref=e155]: FREE
            - generic [ref=e158] [cursor=pointer]:
              - generic [ref=e159]:
                - img "Professional Graphic Design Masterclass for Beginners 2026" [ref=e160]
                - generic [ref=e161]: "-30%"
                - generic: FREE PREVIEW
              - generic [ref=e162]:
                - generic [ref=e163]: Professional Graphic Design Masterclass for Beginners 2026
                - generic [ref=e164]: test t
                - generic [ref=e168]:
                  - generic [ref=e169]: "0.0"
                  - generic [ref=e172]: "1"
                - generic [ref=e179]:
                  - text: LKR 3,500
                  - generic [ref=e180]: LKR 5,000
            - generic [ref=e181] [cursor=pointer]:
              - generic [ref=e182]:
                - 'img "Unit 10: Applied Biology (GCE A/L)" [ref=e183]'
                - generic [ref=e184]: 🎁 Free
                - generic: FREE PREVIEW
              - generic [ref=e185]:
                - generic [ref=e186]: "Unit 10: Applied Biology (GCE A/L)"
                - generic [ref=e187]: Thilshan Nizam
                - generic [ref=e191]:
                  - generic [ref=e192]: "0.0"
                  - generic [ref=e195]: "0"
                - generic [ref=e201]: FREE
            - generic [ref=e204] [cursor=pointer]:
              - generic [ref=e205]:
                - img "web developement" [ref=e206]
                - generic [ref=e207]: "-11%"
              - generic [ref=e208]:
                - generic [ref=e209]: web developement
                - generic [ref=e210]: Mohamed Yousuf
                - generic [ref=e214]:
                  - generic [ref=e215]: "0.0"
                  - generic [ref=e218]: "0"
                - generic [ref=e225]:
                  - text: LKR 1,600
                  - generic [ref=e226]: LKR 1,800
            - generic [ref=e227] [cursor=pointer]:
              - generic [ref=e228]:
                - img "AI FOR GOVERNMENT OFFICERS" [ref=e229]
                - generic [ref=e230]: "-55%"
              - generic [ref=e231]:
                - generic [ref=e232]: AI FOR GOVERNMENT OFFICERS
                - generic [ref=e233]:
                  - text: NAAS CAMPUS
                  - img "Verified Institute" [ref=e237]
                - generic [ref=e241]:
                  - generic [ref=e242]: "0.0"
                  - generic [ref=e245]: "0"
                - generic [ref=e252]:
                  - text: LKR 3,400
                  - generic [ref=e253]: LKR 7,500
            - generic [ref=e254] [cursor=pointer]:
              - generic [ref=e255]:
                - img "CapCut & Digital Marketing Basics" [ref=e256]
                - generic [ref=e257]: "-44%"
              - generic [ref=e258]:
                - generic [ref=e259]: CapCut & Digital Marketing Basics
                - generic [ref=e260]: MN.Mohamed Rasath
                - generic [ref=e264]:
                  - generic [ref=e265]: "0.0"
                  - generic [ref=e268]: "0"
                - generic [ref=e275]:
                  - text: LKR 4,999
                  - generic [ref=e276]: LKR 8,999
            - generic [ref=e277] [cursor=pointer]:
              - generic [ref=e278]:
                - 'img "Complete Mobile Graphic Design Masterclass: Beginner to Professional using Canva, PixelLab & AI" [ref=e279]'
                - generic [ref=e280]: "-56%"
              - generic [ref=e281]:
                - generic [ref=e282]: "Complete Mobile Graphic Design Masterclass: Beginner to Professional using Canva, PixelLab & AI"
                - generic [ref=e283]: Fathima Sajeeha
                - generic [ref=e287]:
                  - generic [ref=e288]: "0.0"
                  - generic [ref=e291]: "0"
                - generic [ref=e298]:
                  - text: LKR 4,000
                  - generic [ref=e299]: LKR 8,999
            - generic [ref=e300] [cursor=pointer]:
              - generic [ref=e301]:
                - img "English Reading & Writing Foundation Level 1 – Grade 6 to O/L Students" [ref=e302]
                - generic [ref=e303]: "-33%"
              - generic [ref=e304]:
                - generic [ref=e305]: English Reading & Writing Foundation Level 1 – Grade 6 to O/L Students
                - generic [ref=e306]:
                  - text: NAAS CAMPUS
                  - img "Verified Institute" [ref=e310]
                - generic [ref=e314]:
                  - generic [ref=e315]: "0.0"
                  - generic [ref=e318]: "0"
                - generic [ref=e325]:
                  - text: LKR 1,500
                  - generic [ref=e326]: LKR 2,250
            - generic [ref=e327] [cursor=pointer]:
              - generic [ref=e328]:
                - img "Complete A/L" [ref=e329]
                - generic [ref=e330]: "-36%"
              - generic [ref=e331]:
                - generic [ref=e332]: Complete A/L
                - generic [ref=e333]: Fathima rumaiza
                - generic [ref=e337]:
                  - generic [ref=e338]: "0.0"
                  - generic [ref=e341]: "0"
                - generic [ref=e348]:
                  - text: LKR 3,500
                  - generic [ref=e349]: LKR 5,500
            - generic [ref=e350] [cursor=pointer]:
              - generic [ref=e351]:
                - img "Complete Professional Photography & Visual Storytelling Course 2026" [ref=e352]
                - generic [ref=e353]: "-44%"
              - generic [ref=e354]:
                - generic [ref=e355]: Complete Professional Photography & Visual Storytelling Course 2026
                - generic [ref=e356]:
                  - text: Ishaq
                  - img "Verified Institute" [ref=e360]
                - generic [ref=e364]:
                  - generic [ref=e365]: "0.0"
                  - generic [ref=e368]: "0"
                - generic [ref=e375]:
                  - text: LKR 5,000
                  - generic [ref=e376]: LKR 8,999
            - generic [ref=e377] [cursor=pointer]:
              - generic [ref=e378]:
                - img "NAATHIRA ACADEMY 🧑‍🎓 Complete G.C.E. A/L ART CLASS| Drowing and painting class| Theory class" [ref=e379]
                - generic [ref=e380]: "-30%"
              - generic [ref=e381]:
                - generic [ref=e382]: NAATHIRA ACADEMY 🧑‍🎓 Complete G.C.E. A/L ART CLASS| Drowing and painting class| Theory class
                - generic [ref=e383]: MOHAMED SULAIMAN NAATHIRA
                - generic [ref=e386]:
                  - generic [ref=e387]: "0.0"
                  - generic [ref=e390]: "0"
                - generic [ref=e397]:
                  - text: LKR 3,500
                  - generic [ref=e398]: LKR 5,000
    - navigation [ref=e400]:
      - generic [ref=e401] [cursor=pointer]: Home
      - generic [ref=e406] [cursor=pointer]: Menu
      - generic [ref=e409] [cursor=pointer]: Dashboard
      - generic [ref=e416] [cursor=pointer]: Profile
```