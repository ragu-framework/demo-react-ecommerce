
      var component = require('/home/runner/work/demo-react-ecommerce/demo-react-ecommerce/ragu-react-pokemon-catalog/src/ragu-mfe/catalog');
      var resolver = require('/home/runner/work/demo-react-ecommerce/demo-react-ecommerce/ragu-react-pokemon-catalog/node_modules/ragu-react-server-adapter/resolvers/hydrate-resolver');

      module.exports.default = (resolver.default || resolver)(component.default || component);
    