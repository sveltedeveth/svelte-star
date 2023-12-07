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
export type GiIncisorsProps = typeof __propDef.props;
export type GiIncisorsEvents = typeof __propDef.events;
export type GiIncisorsSlots = typeof __propDef.slots;
export default class GiIncisors extends SvelteComponentTyped<GiIncisorsProps, GiIncisorsEvents, GiIncisorsSlots> {
}
export {};
