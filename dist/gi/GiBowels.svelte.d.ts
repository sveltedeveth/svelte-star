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
export type GiBowelsProps = typeof __propDef.props;
export type GiBowelsEvents = typeof __propDef.events;
export type GiBowelsSlots = typeof __propDef.slots;
export default class GiBowels extends SvelteComponentTyped<GiBowelsProps, GiBowelsEvents, GiBowelsSlots> {
}
export {};
