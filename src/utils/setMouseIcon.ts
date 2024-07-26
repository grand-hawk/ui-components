import { Players, UserInputService } from '@rbxts/services';

export enum SystemCursors {
  Arrow = 'rbxasset://SystemCursors/Arrow',
  PointingHand = 'rbxasset://SystemCursors/PointingHand',
  OpenHand = 'rbxasset://SystemCursors/OpenHand',
  ClosedHand = 'rbxasset://SystemCursors/ClosedHand',
  IBeam = 'rbxasset://SystemCursors/IBeam',
  SizeNS = 'rbxasset://SystemCursors/SizeNS',
  SizeEW = 'rbxasset://SystemCursors/SizeEW',
  SizeNESW = 'rbxasset://SystemCursors/SizeNESW',
  SizeNWSE = 'rbxasset://SystemCursors/SizeNWSE',
  SizeAll = 'rbxasset://SystemCursors/SizeAll',
  SplitNS = 'rbxasset://SystemCursors/SplitNS',
  SplitEW = 'rbxasset://SystemCursors/SplitEW',
  Forbidden = 'rbxasset://SystemCursors/Forbidden',
  Wait = 'rbxasset://SystemCursors/Wait',
  Busy = 'rbxasset://SystemCursors/Busy',
  Cross = 'rbxasset://SystemCursors/Cross',
}

export function setMouseIcon(icon: string): boolean {
  const localPlayer = Players.FindFirstChild('LocalPlayer') as
    | Player
    | undefined;
  if (!localPlayer) return false;

  UserInputService.MouseIcon = icon;

  return true;
}
