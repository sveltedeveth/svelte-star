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
export type GiBananaProps = typeof __propDef.props;
export type GiBananaEvents = typeof __propDef.events;
export type GiBananaSlots = typeof __propDef.slots;
export default class GiBanana extends SvelteComponentTyped<GiBananaProps, GiBananaEvents, GiBananaSlots> {
}
export {};
