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
export type FaScrewdriverProps = typeof __propDef.props;
export type FaScrewdriverEvents = typeof __propDef.events;
export type FaScrewdriverSlots = typeof __propDef.slots;
export default class FaScrewdriver extends SvelteComponentTyped<FaScrewdriverProps, FaScrewdriverEvents, FaScrewdriverSlots> {
}
export {};
