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
export type GiBowenKnotProps = typeof __propDef.props;
export type GiBowenKnotEvents = typeof __propDef.events;
export type GiBowenKnotSlots = typeof __propDef.slots;
export default class GiBowenKnot extends SvelteComponentTyped<GiBowenKnotProps, GiBowenKnotEvents, GiBowenKnotSlots> {
}
export {};
