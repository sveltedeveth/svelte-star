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
export type FaRockrmsProps = typeof __propDef.props;
export type FaRockrmsEvents = typeof __propDef.events;
export type FaRockrmsSlots = typeof __propDef.slots;
export default class FaRockrms extends SvelteComponentTyped<FaRockrmsProps, FaRockrmsEvents, FaRockrmsSlots> {
}
export {};
