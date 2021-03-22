
      var component = require('/home/runner/work/demo-react-ecommerce/demo-react-ecommerce/ragu-react-cart/ragu-mfe/cart-count');
      var resolver = require('/home/runner/work/demo-react-ecommerce/demo-react-ecommerce/ragu-react-cart/node_modules/ragu-react-server-adapter/resolvers/hydrate-resolver');

      module.exports.default = (resolver.default || resolver)(component.default || component);
    