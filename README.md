## Form Multi Step

### What did i learn ?

#### Make a switch in css

```css
.frequency {

      input[type="checkbox"] {
        display: none;
      }

      .frequency__toggle {
        width: 50px;
        height: 25px;
        border-radius: 25px;
        background: var(--color-neutral-light-gray);
        cursor: pointer;
        position: relative;
        transition: background 0.2s;
      }
  
      #frequency:checked ~ .frequency__toggle {
        background: red;
      }
      #frequency:checked ~ .frequency__toggle::after {
        transform: translateX(25px);
      }
      
      .frequency__toggle::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 2.5px;
        left: 2.5px;
        background-color: var(--color-primary-marine-blue);
        transition: transform 0.2s;
      }
    }
```

### Target class in css

```css
#frequency:checked ~ .frequency__toggle {
    background: var(--color-primary-light-blue);
  }
```

### Interaction to set new object element
```javascript
const handleChangeName = (e) => {
    setStep(prev => ({
      ...prev,
      name: e.target.value
    }))
  }
```