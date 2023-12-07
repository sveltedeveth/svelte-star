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
export type GiApothecaryProps = typeof __propDef.props;
export type GiApothecaryEvents = typeof __propDef.events;
export type GiApothecarySlots = typeof __propDef.slots;
export default class GiApothecary extends SvelteComponentTyped<GiApothecaryProps, GiApothecaryEvents, GiApothecarySlots> {
}
export {};
