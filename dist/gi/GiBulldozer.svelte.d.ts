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
export type GiBulldozerProps = typeof __propDef.props;
export type GiBulldozerEvents = typeof __propDef.events;
export type GiBulldozerSlots = typeof __propDef.slots;
export default class GiBulldozer extends SvelteComponentTyped<GiBulldozerProps, GiBulldozerEvents, GiBulldozerSlots> {
}
export {};
