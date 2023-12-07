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
export type FaPagelinesProps = typeof __propDef.props;
export type FaPagelinesEvents = typeof __propDef.events;
export type FaPagelinesSlots = typeof __propDef.slots;
export default class FaPagelines extends SvelteComponentTyped<FaPagelinesProps, FaPagelinesEvents, FaPagelinesSlots> {
}
export {};
