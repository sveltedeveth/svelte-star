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
export type GiTriquetraProps = typeof __propDef.props;
export type GiTriquetraEvents = typeof __propDef.events;
export type GiTriquetraSlots = typeof __propDef.slots;
export default class GiTriquetra extends SvelteComponentTyped<GiTriquetraProps, GiTriquetraEvents, GiTriquetraSlots> {
}
export {};
