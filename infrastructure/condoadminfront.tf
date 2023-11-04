resource "azurerm_app_service" "condoadminfront" {
  name                = var.rg_name
  location            = var.location
  resource_group_name = azurerm_resource_group.var.rg_name
  app_service_plan_id = "/subscriptions/7166cd4b-5cc4-4d2a-873e-a585cc168323/resourceGroups/NetworkWatcherRG/providers/Microsoft.Web/sites/condoadminfront"

  # Otras configuraciones
}
