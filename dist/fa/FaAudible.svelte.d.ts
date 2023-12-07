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
export type FaAudibleProps = typeof __propDef.props;
export type FaAudibleEvents = typeof __propDef.events;
export type FaAudibleSlots = typeof __propDef.slots;
export default class FaAudible extends SvelteComponentTyped<FaAudibleProps, FaAudibleEvents, FaAudibleSlots> {
}
export {};
