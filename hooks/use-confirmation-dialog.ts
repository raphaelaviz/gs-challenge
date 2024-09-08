import { create } from 'zustand'

type ConfirmationState = {
	isOpen: boolean
}

type Action = {
	toggle: (isOpen: ConfirmationState['isOpen']) => void
}

export const useConfirmation = create<ConfirmationState & Action>((set) => ({
	isOpen: false,
	toggle: (isOpen) => {
		set({ isOpen })
	}
}))
