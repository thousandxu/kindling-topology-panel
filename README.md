## This Topology Plugin is desgin for project Kindling?
This is a topology component based on ANTV developed specifically for the Kindling project. Prometheus data is queried using modified EBPF probes, so this topology is not a generic plugin。
If you want to use [Kindling](https://github.com/Kindling-project/kindling)


After the integration plugin, configure the corresponding Prometheus data source and you will see the plugin as shown
![img](https://raw.githubusercontent.com/thousandxu/zipImage/main/topo-plugin/topo.png)

## Getting started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev
   ```

   or

   ```bash
   yarn watch
   ```

3. Build plugin in production mode

   ```bash
   yarn build
   ```

## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System
