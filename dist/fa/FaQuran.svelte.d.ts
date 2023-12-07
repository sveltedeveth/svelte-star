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
export type FaQuranProps = typeof __propDef.props;
export type FaQuranEvents = typeof __propDef.events;
export type FaQuranSlots = typeof __propDef.slots;
export default class FaQuran extends SvelteComponentTyped<FaQuranProps, FaQuranEvents, FaQuranSlots> {
}
export {};
