---
title: Exports
---

:::info Attention
Please very carefully read exports provided below.
:::

## Debug

### Get personal account

```lua
---@param identifier<string> - Identifier (citizen id)
exports.fd_banking:getPersonalAccount(identifier)
```

### Get Account by ID

```lua
---@param id<number> - Account ID
exports.fd_banking:getAccountById(id)
```

### Get Account by IBAN

```lua
---@param iban<string> - Account IBAN
exports.fd_banking:getAccountByIban(iban)
```

### Get Business account

```lua
---@param business<string> - Business
exports.fd_banking:getBusinessAccount(business)
```

### Issue invoice

```lua
---@param source<number> - Source
---@param playerId<number> - Player ID
---@param amount<number> - Amount
---@param reason<string> - Reason
---@param isSociety<boolean> - Is society
exports.fd_banking:issueInvoice(source, playerId, amount, reason, isSociety)
```

### Pay invoice

```lua
---@param source<number> - Source
---@param id<number> - Invoice ID
---@param(optional) forcePay<boolean> - Force pay
---@param(optional) status<number> - Status
exports.fd_banking:payInvoice(source, id, forcePay, status)
```

### Lookup invoice

```lua
---@param source<number> - Source
---@param invoiceId<number> - Invoice ID
exports.fd_banking:lookupInvoice(id)
```

### Cancel invoice

```lua
---@param source<number> - Source
---@param invoiceId<number> - Invoice ID
exports.fd_banking:cancelInvoice(source, invoiceId)
```

### Get account owner

```lua
---@param account<string> - Account
exports.fd_banking:getAccountOwner(account)
```

### Get member

```lua
---@param account_id<string> - Account ID
---@param identifier<string> - Identifier (Citizen ID)
exports.fd_banking:getMember(account_id, identifier)
```

### Get account members

```lua
---@param account_id<string> - Account ID
exports.fd_banking:getAccountMembers(account_id)
```

### Do transfer

```lua
---@param source<number> - Source
---@param targetAccountId<number> - Target Account ID
---@param playerId<string|nil> - Player ID
---@param amount<number> - Amount
---@param localAccountId<number|nil> - Local Account ID
---@param reason<string> - Reason
---@param transactionCallback<function|nil> - Transaction Callback
---@param forcePay<boolean|nil> - Force Pay

exports.fd_banking:doTransfer(source, targetAccountId, playerId, amount, localAccountId, reason, transactionCallback, forcePay)
```

### Open bank

```lua
-- @param dontCheckDistance<boolean> - Don't check distance
exports.fd_banking:openBank(dontCheckDistance)
```

### Open atm

```lua
-- @param dontCheckDistance<boolean> - Don't check distance
exports.fd_banking:openAtm()
```

### Open billing

```lua
exports.fd_banking:openBilling()
```

## Qb-management equivalent exports

### Get Society Account

```lua
---@param society<string> - society identifier
exports.fd_banking:GetAccount(society)
```

### Get Gang Account

```lua
---@param gang<string> - gang identifier
exports.fd_banking:GetGangAccount(gang)
```

### Add Society Money

```lua
---@param society<string> - society identifier
---@param amount<number> - amount
---@param reason<string> - reason
exports.fd_banking:AddMoney(society, amount, reason)
```

### Add Gang Money

```lua
---@param society<string> - society identifier
---@param amount<number> - amount
---@param reason<string> - reason
exports.fd_banking:AddGangMoney(society, amount, reason)
```

### Remove Society Money

```lua
---@param society<string> - society identifier
---@param amount<number> - amount
---@param reason<string> - reason
exports.fd_banking:RemoveMoney(society, amount, reason)
```

### Remove Gang Money

```lua
---@param society<string> - society identifier
---@param amount<number> - amount
---@param reason<string> - reason
exports.fd_banking:RemoveGangMoney(society, amount, reason)
```
