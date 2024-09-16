# React Redux Shopping Cart

## Overview

This project is a simple **Shopping Cart** web application built with **React** for the frontend and **Redux** for state management. Users can browse a list of products, add items to their cart, update quantities, and remove items. The cart data persists using `localStorage`, so the contents remain available even after refreshing the page.

## Features

- **Product Listing Page**: Displays a list of products fetched from a mock API or a JSON file.
- **Shopping Cart**:
  - Users can add products to their cart.
  - Users can view the cart contents.
  - Users can update item quantities or remove items from the cart.
- **State Management**: 
  - Redux manages the cart’s state with actions to add, update, and remove items.
  - Cart state is saved to `localStorage` for persistence across page reloads.

## Tech Stack

- **Frontend**: React
- **State Management**: Redux, Redux Toolkit
- **Persistence**: localStorage
