# Catalyst Design System

| Package | Description | Status | Docs |
| ------- | ----------- | ------ | ---- |
| `@haiilo/catalyst`           | Core web components               | [![Core: buid & test](https://github.com/haiilo/catalyst/actions/workflows/core.yml/badge.svg)](https://github.com/haiilo/catalyst/actions/workflows/core.yml) | [README](https://github.com/haiilo/catalyst/blob/main/core/README.md) |
| `@haiilo/catalyst-icons`     | Custom SVG icon set               | [![Icons: build & test](https://github.com/haiilo/catalyst/actions/workflows/icons.yml/badge.svg)](https://github.com/haiilo/catalyst/actions/workflows/icons.yml) | [README](https://github.com/haiilo/catalyst/blob/main/icons/README.md) |
| `@haiilo/catalyst-tokens`    | Style Dictionary design tokens    | [![Tokens: build & test](https://github.com/haiilo/catalyst/actions/workflows/tokens.yml/badge.svg)](https://github.com/haiilo/catalyst/actions/workflows/tokens.yml) | [README](https://github.com/haiilo/catalyst/blob/main/tokens/README.md) |
| `@haiilo/catalyst-angular`   | Angular bindings for components   |  | [README](https://github.com/haiilo/catalyst/blob/main/angular/README.md) |
| `@haiilo/catalyst-react`     | React bindings for components     |  | [README](https://github.com/haiilo/catalyst/blob/main/react/README.md) |
| `@haiilo/catalyst-vue`       | View bindings for components      |  | [README](https://github.com/haiilo/catalyst/blob/main/vue/README.md) |

### Linking with COYO for local development
For linking the local catalyst project with COYO do the following:

* ``npm install`` core and angular project
* ``npm run build`` in the core project  
* ``npm run link-lib`` in top level folder. This will create the symlinks for the libraries that can be used by yarn.
* In COYO project folder coyo-frontend/ngx run ``yarn link @haiilo/catalyst`` and ``yarn link @haiilo/catalyst-angular``
* If you change something inside the library you just need to rebuild it and it will be available in COYO (sometimes you might need to restart COYO frontend)

## Code Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/haiilo/catalyst/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=haiilo/catalyst" />
</a>

## License

The license is available within the repository in the
[LICENSE](https://github.com/haiilo/catalyst/blob/main/LICENSE) file.
