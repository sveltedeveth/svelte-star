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
export type FaMusicProps = typeof __propDef.props;
export type FaMusicEvents = typeof __propDef.events;
export type FaMusicSlots = typeof __propDef.slots;
export default class FaMusic extends SvelteComponentTyped<FaMusicProps, FaMusicEvents, FaMusicSlots> {
}
export {};
