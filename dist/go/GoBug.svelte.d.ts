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
export type GoBugProps = typeof __propDef.props;
export type GoBugEvents = typeof __propDef.events;
export type GoBugSlots = typeof __propDef.slots;
export default class GoBug extends SvelteComponentTyped<GoBugProps, GoBugEvents, GoBugSlots> {
}
export {};
