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
export type FaJoomlaProps = typeof __propDef.props;
export type FaJoomlaEvents = typeof __propDef.events;
export type FaJoomlaSlots = typeof __propDef.slots;
export default class FaJoomla extends SvelteComponentTyped<FaJoomlaProps, FaJoomlaEvents, FaJoomlaSlots> {
}
export {};
