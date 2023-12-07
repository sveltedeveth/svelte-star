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
export type FaMortarPestleProps = typeof __propDef.props;
export type FaMortarPestleEvents = typeof __propDef.events;
export type FaMortarPestleSlots = typeof __propDef.slots;
export default class FaMortarPestle extends SvelteComponentTyped<FaMortarPestleProps, FaMortarPestleEvents, FaMortarPestleSlots> {
}
export {};
