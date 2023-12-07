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
export type GiWhaleTailProps = typeof __propDef.props;
export type GiWhaleTailEvents = typeof __propDef.events;
export type GiWhaleTailSlots = typeof __propDef.slots;
export default class GiWhaleTail extends SvelteComponentTyped<GiWhaleTailProps, GiWhaleTailEvents, GiWhaleTailSlots> {
}
export {};
