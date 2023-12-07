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
export type GiBubblingFlaskProps = typeof __propDef.props;
export type GiBubblingFlaskEvents = typeof __propDef.events;
export type GiBubblingFlaskSlots = typeof __propDef.slots;
export default class GiBubblingFlask extends SvelteComponentTyped<GiBubblingFlaskProps, GiBubblingFlaskEvents, GiBubblingFlaskSlots> {
}
export {};
