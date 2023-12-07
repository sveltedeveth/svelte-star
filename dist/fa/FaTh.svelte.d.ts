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
export type FaThProps = typeof __propDef.props;
export type FaThEvents = typeof __propDef.events;
export type FaThSlots = typeof __propDef.slots;
export default class FaTh extends SvelteComponentTyped<FaThProps, FaThEvents, FaThSlots> {
}
export {};
