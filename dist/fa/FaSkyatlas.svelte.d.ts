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
export type FaSkyatlasProps = typeof __propDef.props;
export type FaSkyatlasEvents = typeof __propDef.events;
export type FaSkyatlasSlots = typeof __propDef.slots;
export default class FaSkyatlas extends SvelteComponentTyped<FaSkyatlasProps, FaSkyatlasEvents, FaSkyatlasSlots> {
}
export {};
