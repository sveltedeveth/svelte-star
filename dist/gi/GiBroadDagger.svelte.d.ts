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
export type GiBroadDaggerProps = typeof __propDef.props;
export type GiBroadDaggerEvents = typeof __propDef.events;
export type GiBroadDaggerSlots = typeof __propDef.slots;
export default class GiBroadDagger extends SvelteComponentTyped<GiBroadDaggerProps, GiBroadDaggerEvents, GiBroadDaggerSlots> {
}
export {};
