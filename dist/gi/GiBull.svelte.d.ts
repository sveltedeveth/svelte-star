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
export type GiBullProps = typeof __propDef.props;
export type GiBullEvents = typeof __propDef.events;
export type GiBullSlots = typeof __propDef.slots;
export default class GiBull extends SvelteComponentTyped<GiBullProps, GiBullEvents, GiBullSlots> {
}
export {};
