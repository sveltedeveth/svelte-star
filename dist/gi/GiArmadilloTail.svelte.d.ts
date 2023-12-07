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
export type GiArmadilloTailProps = typeof __propDef.props;
export type GiArmadilloTailEvents = typeof __propDef.events;
export type GiArmadilloTailSlots = typeof __propDef.slots;
export default class GiArmadilloTail extends SvelteComponentTyped<GiArmadilloTailProps, GiArmadilloTailEvents, GiArmadilloTailSlots> {
}
export {};
