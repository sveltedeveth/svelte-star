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
export type FaCodepenProps = typeof __propDef.props;
export type FaCodepenEvents = typeof __propDef.events;
export type FaCodepenSlots = typeof __propDef.slots;
export default class FaCodepen extends SvelteComponentTyped<FaCodepenProps, FaCodepenEvents, FaCodepenSlots> {
}
export {};
