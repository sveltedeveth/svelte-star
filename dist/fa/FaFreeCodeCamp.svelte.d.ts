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
export type FaFreeCodeCampProps = typeof __propDef.props;
export type FaFreeCodeCampEvents = typeof __propDef.events;
export type FaFreeCodeCampSlots = typeof __propDef.slots;
export default class FaFreeCodeCamp extends SvelteComponentTyped<FaFreeCodeCampProps, FaFreeCodeCampEvents, FaFreeCodeCampSlots> {
}
export {};
