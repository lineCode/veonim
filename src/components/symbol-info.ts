import { SymbolKind } from '../vscode/types'
import * as Icon from 'hyperapp-feather'
import { h } from '../ui/uikit'

const icons = new Map([
  [ SymbolKind.File, h(Icon.File, { color: '#a5c3ff' }) ],
  [ SymbolKind.Module, h(Icon.Grid, { color: '#ff5f54' }) ],
  [ SymbolKind.Namespace, h(Icon.CloudSnow, { color: '#ffadc5' }) ],
  [ SymbolKind.Package, h(Icon.Package, { color: '#ffa4d0' }) ],
  [ SymbolKind.Class, h(Icon.Compass, { color: '#ffeb5b' }) ],
  [ SymbolKind.Method, h(Icon.Box, { color: '#bb5ef1' }) ],
  [ SymbolKind.Property, h(Icon.Disc, { color: '#54c8ff' }) ],
  [ SymbolKind.Field, h(Icon.Feather, { color: '#9866ff' }) ],
  [ SymbolKind.Constructor, h(Icon.Aperture, { color: '#c9ff56' }) ],
  [ SymbolKind.Enum, h(Icon.Award, { color: '#84ff54' }) ],
  [ SymbolKind.Interface, h(Icon.Map, { color: '#ffa354' }) ],
  [ SymbolKind.Function, h(Icon.Share2, { color: '#6da7ff' }) ],
  [ SymbolKind.Variable, h(Icon.Database, { color: '#ff70e4' }) ],
  [ SymbolKind.Constant, h(Icon.Save, { color: '#54ffe5' }) ],
  [ SymbolKind.String, h(Icon.Star, { color: '#ffdca3' }) ],
  [ SymbolKind.Number, h(Icon.Hash, { color: '#ff0c53' }) ],
  [ SymbolKind.Boolean, h(Icon.Flag, { color: '#0c2dff' }) ],
  [ SymbolKind.Array, h(Icon.Film, { color: '#0cffff' }) ],
  // TODO: we need some colors pls
  [ SymbolKind.Object, h(Icon.Copy, { color: '#ccc' }) ],
  [ SymbolKind.Key, h(Icon.Tag, { color: '#ccc' }) ],
  [ SymbolKind.Null, h(Icon.XSquare, { color: '#ccc' }) ],
  [ SymbolKind.EnumMember, h(Icon.Menu, { color: '#ccc' }) ],
  [ SymbolKind.Struct, h(Icon.Layers, { color: '#ccc' }) ],
  [ SymbolKind.Event, h(Icon.Video, { color: '#ccc' }) ],
  [ SymbolKind.Operator, h(Icon.Anchor, { color: '#ccc' }) ],
  [ SymbolKind.TypeParameter, h(Icon.Type, { color: '#ccc' }) ],
])

const symbolDescription = new Map([
  [ SymbolKind.File, 'File' ],
  [ SymbolKind.Module, 'Module' ],
  [ SymbolKind.Namespace, 'Namespace' ],
  [ SymbolKind.Package, 'Package' ],
  [ SymbolKind.Class, 'Class' ],
  [ SymbolKind.Method, 'Method' ],
  [ SymbolKind.Property, 'Property' ],
  [ SymbolKind.Field, 'Field' ],
  [ SymbolKind.Constructor, 'Constructor' ],
  [ SymbolKind.Enum, 'Enum' ],
  [ SymbolKind.Interface, 'Interface' ],
  [ SymbolKind.Function, 'Function' ],
  [ SymbolKind.Variable, 'Variable' ],
  [ SymbolKind.Constant, 'Constant' ],
  [ SymbolKind.String, 'String' ],
  [ SymbolKind.Number, 'Number' ],
  [ SymbolKind.Boolean, 'Boolean' ],
  [ SymbolKind.Array, 'Array' ],
  [ SymbolKind.Object, 'Object' ],
  [ SymbolKind.Key, 'Key' ],
  [ SymbolKind.Null, 'Null' ],
  [ SymbolKind.EnumMember, 'EnumMember' ],
  [ SymbolKind.Struct, 'Struct' ],
  [ SymbolKind.Event, 'Event' ],
  [ SymbolKind.Operator, 'Operator' ],
  [ SymbolKind.TypeParameter, 'TypeParameter' ],
])

export const getSymbolIcon = (kind: SymbolKind) => icons.get(kind) || h(Icon.Code)
export const getSymbolDescription = (kind: SymbolKind) => symbolDescription.get(kind) || ''