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
export type GiBloodyStashProps = typeof __propDef.props;
export type GiBloodyStashEvents = typeof __propDef.events;
export type GiBloodyStashSlots = typeof __propDef.slots;
export default class GiBloodyStash extends SvelteComponentTyped<GiBloodyStashProps, GiBloodyStashEvents, GiBloodyStashSlots> {
}
export {};
