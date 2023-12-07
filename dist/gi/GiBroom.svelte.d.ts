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
export type GiBroomProps = typeof __propDef.props;
export type GiBroomEvents = typeof __propDef.events;
export type GiBroomSlots = typeof __propDef.slots;
export default class GiBroom extends SvelteComponentTyped<GiBroomProps, GiBroomEvents, GiBroomSlots> {
}
export {};
