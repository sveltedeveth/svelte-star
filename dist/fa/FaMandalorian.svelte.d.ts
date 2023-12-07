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
export type FaMandalorianProps = typeof __propDef.props;
export type FaMandalorianEvents = typeof __propDef.events;
export type FaMandalorianSlots = typeof __propDef.slots;
export default class FaMandalorian extends SvelteComponentTyped<FaMandalorianProps, FaMandalorianEvents, FaMandalorianSlots> {
}
export {};
