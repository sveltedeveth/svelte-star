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
export type FaFemaleProps = typeof __propDef.props;
export type FaFemaleEvents = typeof __propDef.events;
export type FaFemaleSlots = typeof __propDef.slots;
export default class FaFemale extends SvelteComponentTyped<FaFemaleProps, FaFemaleEvents, FaFemaleSlots> {
}
export {};
