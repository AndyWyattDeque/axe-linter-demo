import React from 'react'

// Copied from https://github.com/dequelabs/eslint-plugin-jsx-a11y-fixer/blob/develop/example/example.jsx

export class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list" role="article" tabindex="-1">
      {/* <div className="shopping-list" role="article" tabindex="-1"> */}
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        <form>
          <input aria-labelledby="terms" type="checked"   />
          {/* <input aria-labelledby="terms" type="checked"   /> */}
          <div id="terms">Yes, I accept the terms and conditions.</div>
          <div role="button" aria-disabled="true">
          {/* <div role="button" aria-disabled="true"> */}
            Purchase
          </div>
        </form>
      </div>
    );
  }
}