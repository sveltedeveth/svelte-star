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
export type GiScrewdriverProps = typeof __propDef.props;
export type GiScrewdriverEvents = typeof __propDef.events;
export type GiScrewdriverSlots = typeof __propDef.slots;
export default class GiScrewdriver extends SvelteComponentTyped<GiScrewdriverProps, GiScrewdriverEvents, GiScrewdriverSlots> {
}
export {};
