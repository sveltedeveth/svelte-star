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
export type GiNurseFemaleProps = typeof __propDef.props;
export type GiNurseFemaleEvents = typeof __propDef.events;
export type GiNurseFemaleSlots = typeof __propDef.slots;
export default class GiNurseFemale extends SvelteComponentTyped<GiNurseFemaleProps, GiNurseFemaleEvents, GiNurseFemaleSlots> {
}
export {};
