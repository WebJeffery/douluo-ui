export const getRoutes = () => {
  const routes = [];
  const context = require.context('../../packages/element-ui', true, /\.md$/);
  context.keys().forEach((key) => {
    const fileName = key.match(/.\/(\S*)\/src/)[1];
    routes.push({
      path: `/${fileName}`,
      name: fileName,
      component: () => import(`../../packages/element-ui/${fileName}/src/README.md`),
    });
  });

  return routes;
};

// export const getRoutes = () => {
//   const routes = [];
//   const context = require.context('../demo', false, /\.vue$/);
//   context.keys().forEach((key) => {
//     const fileName = key.match(/.\/(\S*)\.vue/)[1];
//     routes.push({
//       path: `/${fileName}`,
//       name: fileName,
//       component: context(key).default,
//     });
//   });

//   return routes;
// };

// export default {};
