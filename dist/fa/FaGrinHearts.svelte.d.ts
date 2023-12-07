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
export type FaGrinHeartsProps = typeof __propDef.props;
export type FaGrinHeartsEvents = typeof __propDef.events;
export type FaGrinHeartsSlots = typeof __propDef.slots;
export default class FaGrinHearts extends SvelteComponentTyped<FaGrinHeartsProps, FaGrinHeartsEvents, FaGrinHeartsSlots> {
}
export {};
