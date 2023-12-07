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
export type GiDoveProps = typeof __propDef.props;
export type GiDoveEvents = typeof __propDef.events;
export type GiDoveSlots = typeof __propDef.slots;
export default class GiDove extends SvelteComponentTyped<GiDoveProps, GiDoveEvents, GiDoveSlots> {
}
export {};
