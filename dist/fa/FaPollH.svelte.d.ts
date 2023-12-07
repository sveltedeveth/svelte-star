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
export type FaPollHProps = typeof __propDef.props;
export type FaPollHEvents = typeof __propDef.events;
export type FaPollHSlots = typeof __propDef.slots;
export default class FaPollH extends SvelteComponentTyped<FaPollHProps, FaPollHEvents, FaPollHSlots> {
}
export {};
