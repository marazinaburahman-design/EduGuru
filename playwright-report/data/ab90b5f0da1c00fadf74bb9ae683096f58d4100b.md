# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: eduguru.spec.js >> EduGuru public site audit >> single-result course count uses singular grammar
- Location: tests\eduguru.spec.js:54:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('main')
Timeout: 5000ms
Expected pattern: /\b1 course\b/
Received string:  "·····················································
        EduGuru
        Discover & LearnSomething New···················································································································································································································
            Search······························································
             Courses······················
             Users·······················································································
            All······························································
              Categories····························
            Category
        Academic Studies················
        Business & Entrepreneurship················
        Data & Analytics················
        Design & Creative················
        Health & Fitness················
        Kids & School Learning················
        Languages················
        Lifestyle················
        Marketing & Social Media················
        Music & Audio················
        Personal Development················
        Photography & Video················
        Programming & Development················
        Science & Engineering················
        Technology & IT··············································································
              Filter·········································
              Sort By································
                Popular································································
                Newest································
              Price································
                Free only································································
                Paid only································
              Date Added································
                All time································································
                This month································································
                Last 3 months·························································································································
            All···································
            Students···································
            Educators···································
            Verified··········································
        Results for \"Complete Quran\"
        1 courses····················································
        -46%································
        Complete Quran Learning Course  (Tajweed Method – Easy Online Classes)·························································
          Al-Kitab Academy······································································································
            0.0············································································································
            2········································
            LKR 4,800LKR 8,950··································································································
    "

Call log:
  - Expect "toContainText" locator('main') with timeout 5000ms
  - waiting for locator('main')
    13 × locator resolved to <main id="page-content">…</main>
       - unexpected value "
    
    

      
      
        
        
        

        EduGuru
        Discover & LearnSomething New

        
          
            
              
            
            
            
              
                
              
            
          
          
            
              
            
            Search
          
        
      

      
      
        
          
             Courses
          
          
             Users
          
        
      

      
      
        

          
          
            
            All
          

          
          
            
              
              Categories
              
            
            Category
        Academic Studies
        
      
        Business & Entrepreneurship
        
      
        Data & Analytics
        
      
        Design & Creative
        
      
        Health & Fitness
        
      
        Kids & School Learning
        
      
        Languages
        
      
        Lifestyle
        
      
        Marketing & Social Media
        
      
        Music & Audio
        
      
        Personal Development
        
      
        Photography & Video
        
      
        Programming & Development
        
      
        Science & Engineering
        
      
        Technology & IT
        
      
          

          
          
            
              
              Filter
              
            
            
              Sort By
              
                
                Popular
                
              
              
                
                Newest
                
              
              Price
              
                
                Free only
                
              
              
                
                Paid only
                
              
              Date Added
              
                
                All time
                
              
              
                
                This month
                
              
              
                
                Last 3 months
                
              
            
          

        
      

      
      
        
          
            
            All
          
          
            
            Students
          
          
            
            Educators
          
          
            
            Verified
          
        
      

      
      
        Results for "Complete Quran"
        1 courses
      

      
      
    
      
        
        
        -46%
        
        
      
      
        Complete Quran Learning Course  (Tajweed Method – Easy Online Classes)
        
          
            
            
          
          Al-Kitab Academy
    
      
        
        
      
    
    
    
    
  
        
        
          
            
            0.0
          
          
            
              
              
              
              
            
            2
          
        
        
          
            LKR 4,800LKR 8,950
          
        
      
    

      
      

      
      
        
          
        
      
    "

```

```yaml
- main:
  - paragraph: EduGuru
  - heading "Discover & Learn Something New" [level=2]
  - img
  - textbox "Search courses, people...": Complete Quran
  - img
  - button "Search":
    - img
    - text: Search
  - button "Courses":
    - img
    - text: Courses
  - button "Users":
    - img
    - text: Users
  - button "All":
    - img
    - text: All
  - button "Categories":
    - img
    - text: Categories
    - img
  - button "Filter":
    - img
    - text: Filter
    - img
  - text: Results for "Complete Quran" 1 courses
  - img "Complete Quran Learning Course (Tajweed Method – Easy Online Classes)"
  - text: "-46% Complete Quran Learning Course (Tajweed Method – Easy Online Classes)"
  - img
  - text: Al-Kitab Academy
  - img "Verified Institute"
  - img
  - text: "0.0"
  - img
  - text: 2 LKR 4,800 LKR 8,950
```