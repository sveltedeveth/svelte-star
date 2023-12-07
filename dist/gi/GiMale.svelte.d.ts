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
export type GiMaleProps = typeof __propDef.props;
export type GiMaleEvents = typeof __propDef.events;
export type GiMaleSlots = typeof __propDef.slots;
export default class GiMale extends SvelteComponentTyped<GiMaleProps, GiMaleEvents, GiMaleSlots> {
}
export {};
