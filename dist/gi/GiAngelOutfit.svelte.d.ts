import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiAngelOutfitProps = typeof __propDef.props;
export type GiAngelOutfitEvents = typeof __propDef.events;
export type GiAngelOutfitSlots = typeof __propDef.slots;
export default class GiAngelOutfit extends SvelteComponentTyped<GiAngelOutfitProps, GiAngelOutfitEvents, GiAngelOutfitSlots> {
}
export {};
