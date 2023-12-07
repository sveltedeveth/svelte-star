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
export type GiMolotovProps = typeof __propDef.props;
export type GiMolotovEvents = typeof __propDef.events;
export type GiMolotovSlots = typeof __propDef.slots;
export default class GiMolotov extends SvelteComponentTyped<GiMolotovProps, GiMolotovEvents, GiMolotovSlots> {
}
export {};
