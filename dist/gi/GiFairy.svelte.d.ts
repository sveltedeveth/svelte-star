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
export type GiFairyProps = typeof __propDef.props;
export type GiFairyEvents = typeof __propDef.events;
export type GiFairySlots = typeof __propDef.slots;
export default class GiFairy extends SvelteComponentTyped<GiFairyProps, GiFairyEvents, GiFairySlots> {
}
export {};
