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
export type GiBracerProps = typeof __propDef.props;
export type GiBracerEvents = typeof __propDef.events;
export type GiBracerSlots = typeof __propDef.slots;
export default class GiBracer extends SvelteComponentTyped<GiBracerProps, GiBracerEvents, GiBracerSlots> {
}
export {};
