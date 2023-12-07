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
export type GiLaurelsProps = typeof __propDef.props;
export type GiLaurelsEvents = typeof __propDef.events;
export type GiLaurelsSlots = typeof __propDef.slots;
export default class GiLaurels extends SvelteComponentTyped<GiLaurelsProps, GiLaurelsEvents, GiLaurelsSlots> {
}
export {};
