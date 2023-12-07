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
export type GiFrontTeethProps = typeof __propDef.props;
export type GiFrontTeethEvents = typeof __propDef.events;
export type GiFrontTeethSlots = typeof __propDef.slots;
export default class GiFrontTeeth extends SvelteComponentTyped<GiFrontTeethProps, GiFrontTeethEvents, GiFrontTeethSlots> {
}
export {};
